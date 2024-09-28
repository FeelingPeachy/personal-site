import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);
const tableName = "project-resume";


export const handler = async (event) => {
  try {
    if (event.httpMethod) {
      switch (event.httpMethod) {

        // Fetch posts
        case 'GET':
          if (event.path === "/post") {
            console.log(`API Gateway Event: GET Request ${event.path}`);

            // Fetch data from DynamoDB
            let result = await dynamo.send(
              new ScanCommand({ TableName: tableName })
            );
            const body = result.Items;

            return {
              statusCode: 200,
              body: JSON.stringify(body), // Ensure the body is serialized as a string
            };

          } else {
            return {
              statusCode: 400,
              body: JSON.stringify('Unknown HTTP Path'),
            };
          }

        // User wants to contact me
        case 'POST':
          if (event.path === "/post"){
                  
            const body = JSON.parse(event.body);

            // Construct the DynamoDB PutCommand input item where projectid is the partition key and others are attributes
            const params = {
                TableName: tableName,
                Item: {
                projectid: body.projectid, 
                title: body.title,
                content: body.content, 
                link: body.link
                },
            };

            // Write new Post to DynamoDB
            await dynamo.send(new PutCommand(params));

            return {
                statusCode: 201, // 201 Created
                body: JSON.stringify({
                message: "Item successfully created.",
                item: params.Item,
                    }),
                };
            }
          
          if (event.path === "/contact") {
       
            const body = JSON.parse(event.body);

            // TODO
            // Construct the DynamoDB PutCommand input item where projectid is the partition key and others are attributes
            const params = {
                TableName: tableName, /// NEED TO CHANGE THE TABLE FOR CONTACT TABLE
                Item: {
                contactid: body.projectid, 
                name: body.title,
                email: body.email,
                content: body.content, 
                },
            };

            // Write new Post to DynamoDB
            await dynamo.send(new PutCommand(params));

            return {
                statusCode: 201, // 201 Created
                body: JSON.stringify({
                message: "Item successfully created.",
                item: params.Item,
                    }),
                };
            }
            else {
                return {
                statusCode: 400,
                body: JSON.stringify('Unknown HTTP Path'),
                };
            }

        // Handle unknown HTTP methods
        default:
          return {
            statusCode: 400,
            body: JSON.stringify('Unknown HTTP Method'),
          };
      }

    } else {

      return {
        statusCode: 400,
        body: JSON.stringify('Missing HTTP Method'),
      };
    }
  } 
  
  catch (error) {

    // unable to perform action
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error", error: error.message }),
    };
  }
};
