import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);
const tableName = "project-resume";
const contactTableName = "Contact";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
};

export const handler = async (event) => {
  
  console.log("testing to see if working");

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
    };
  }
  
  try {
    if (event.httpMethod) {
      switch (event.httpMethod) {

        case "GET":
          if (event.path === "/post") {
            console.log(`API Gateway Event: GET Request ${event.path}`);

            // Fetch all project posts data from DynamoDB
            let result = await dynamo.send(
              new ScanCommand({ TableName: tableName })
            );
            const body = result.Items;

            return {
              statusCode: 200,
              body: JSON.stringify(body), 
              headers: corsHeaders, 
            };

          } else {
            return {
              statusCode: 400,
              body: JSON.stringify('Unknown HTTP Path'),
              headers: corsHeaders,
            };
          }

        // Create a new project post
        case "POST":
          if (event.path === "/post") {
            const body = JSON.parse(event.body);

            const params = {
              TableName: tableName,
              Item: {
                projectid: body.projectid,
                title: body.title,
                content: body.content,
                link: body.link,
              },
            };

            // Write new post to DynamoDB
            await dynamo.send(new PutCommand(params));

            return {
              statusCode: 201,
              body: JSON.stringify({
                message: "Item successfully created.",
                item: params.Item,
              }),
              headers: corsHeaders, 
            };
          }

          if (event.path == "/contact"){
            const body = JSON.parse(event.body);
            const params = {
              TableName: contactTableName,
              Item: {
                contactid: body.name,
                email: body.email,
                message: body.message
              }
            }

            await dynamo.send(new PutCommand(params))

            return {
              statusCode: 201,
              body: JSON.stringify({
                message: "Item successfully created.",
                item: params.Item,
              }),
              headers: corsHeaders, 
            };
          }   
          else {
            return {
              statusCode: 400,
              body: JSON.stringify('Unknown HTTP Path'),
              headers: corsHeaders, 
            };
          }

        // Handle unknown HTTP methods
        default:
          return {
            statusCode: 400,
            body: JSON.stringify('Unknown HTTP Method'),
            headers: corsHeaders, 
          };
      }
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify('Missing HTTP Method'),
        headers: corsHeaders, 
      };
    }
  } catch (error) {
    //  if unable to perform action
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error", error: error.message }),
      headers: corsHeaders,
    };
  }
};
