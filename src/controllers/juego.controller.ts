import AWS from '../../config/db';
import type Express from 'express';

import { createClient } from 'redis';

import LCR from './lcr.controller';
import SQSInsert from './sqsInsert.controller';

/* Constantes Globales que utilizan las funciones de este archivo */
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME_USUARIO = 'InputLCR';

const client = createClient();

client.on('error', (err) => {
	console.log('Redis Client Error', err);
});

export const getAll = async (_req: Express.Request, res: Express.Response) => {
	try {
		await client.connect();

		/* Response from cache if exists */
		const response = await client.get('inputsLCR');
		if (response) {
			const dataFromRedis = JSON.parse(response);
            let contador = 0
            // We iterate over all the input data (multiple values)
            while(contador<dataFromRedis.length){
                // LCR Game
                const results = LCR(
                    parseInt(dataFromRedis[contador].players),
                    dataFromRedis[contador].rolls
                );
                // Inserting to queue SQS
		        await SQSInsert(dataFromRedis[contador].id, JSON.stringify(results));
                console.log(results);
                contador += 1 
            }
			
			await client.disconnect();
			return res.json(JSON.parse(response));
		}

		/* In another case */
		const params = {
			TableName: TABLE_NAME_USUARIO,
		};
		const usuarios = await dynamoClient.scan(params).promise();
		await client.set('inputsLCR', JSON.stringify(usuarios.Items));
		await client.disconnect();

		return res.json(usuarios.Items);
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: error,
		});
	}
};
