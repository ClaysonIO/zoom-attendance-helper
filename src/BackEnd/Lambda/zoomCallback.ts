//Add readings from the sensor
import {APIGatewayProxyCallback, APIGatewayProxyEvent} from "aws-lambda";

export function handler(
    event: APIGatewayProxyEvent,
    context: any,
    callback: APIGatewayProxyCallback
) {
    try {
        if(event.httpMethod === 'GET'){

            console.log(event?.queryStringParameters?.code);
            //Convert code to token

            //Create cookie with token
                    callback(null, {
                        statusCode: 200,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ msg: "Success!" }) // Could be a custom message or object i.e. JSON.stringify(err)
                    })
        } else {
            throw new Error("Not a valid request")
        }
    } catch (err) {
        console.log(err) // output to netlify function log

        callback(null, {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
        })
    }
}