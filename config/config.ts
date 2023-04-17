import {config} from 'dotenv'
//Funcion propia de dotenv, para poder leer variables de entorno

config();
//process es un objeto global de node, env almacena todas las variables de mi pc    

//Credenciales importantes de DynamoDB

//export const region= process.env.AWS_DEFAULT_REGION;
export const region          =  process.env.AWS_DEFAULT_REGION || 'us-east-1';
export const accessKeyId     = process.env.AWS_ACCESS_KEY_Id || 'AKIAS3O6NLYB26J5LY5C';

export const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || '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';
// Defino el puerto local o sino el 5000 para que corra localmente 
export const PORT            = process.env.PORT ||  '5000';

