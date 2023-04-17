import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
// Create an SQS service object
export default async function SQSInsert(id: string, resultGame: string) {
	const sqsClient = new SQSClient({
		region: 'us-east-1',
		credentials: {
			accessKeyId: 'AKIAS3O6NLYB7AUGZGF4',
			secretAccessKey: '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',
		},
	});
	const queueURL = 'https://sqs.us-east-1.amazonaws.com/196424326659/colas';

	try {
		const command = new SendMessageCommand({
			MessageBody: `{ "id" : ${id},
                             "result" : ${resultGame}
                            }`,
			QueueUrl: queueURL,
			MessageAttributes: {
				id: {
					DataType: 'String',
					StringValue: '15',
				},
			},
		});
		const result = await sqsClient.send(command);
		console.log(result, 'nada');
	} catch (error) {
		console.error(error);
	}
}
