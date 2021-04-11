//Add readings from the sensor
import {APIGatewayProxyCallback, APIGatewayProxyEvent} from "aws-lambda";
import axios from "axios";

export function handler(
    event: APIGatewayProxyEvent,
    context: any,
    callback: APIGatewayProxyCallback
) {
    try {
        if(event.httpMethod === 'GET'){
            const clientID = process.env.ZOOM_CLIENT_ID;
            const clientSecret = process.env.ZOOM_CLIENT_SECRET;
            const code = event?.queryStringParameters?.code;
            console.log(event?.queryStringParameters?.code);
            const redirectUri = `http%3A%2F%2Flocalhost%3A3000%2Fcallback`

            const btoa = (input: string)=>{
                return Buffer.from(input, 'binary').toString('base64')
            }
            //Convert code to token

            axios.post(`https://zoom.us/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`,
                {},
                {headers: {Authorization: `Basic ${btoa(`${clientID}:${clientSecret}`)}`}})
                .then(response=>{
                    console.log(response.data)
                    callback(null, {
                        statusCode: 200,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': "*"
                        },
                        body: JSON.stringify(response.data)
                    })
                })
                .catch(err=>{
                    console.log(err)
                    callback(null,{
                        statusCode: 500,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': "*"
                        },
                        body: JSON.stringify({error: err.message})
                })
                })

            //Create cookie with token

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