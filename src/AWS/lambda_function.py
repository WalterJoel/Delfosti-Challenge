import json
import boto3
import uuid


def lambda_handler(event, context):
    # TODO implement
    client_dynamo = boto3.resource('dynamodb')
    table = client_dynamo.Table('OutputCLR')
    value = json.loads(event['Records'][0]['body']) 
    value2= value.get('id')
    resultGame = value.get('result')
    print(type(value))
    print(value2)
    item={
        'id':str(value2),
        'result':str(resultGame)
    }
    try:
        response = table.put_item(Item=item)
        return 'Done'
    except:
        raise
    
    
