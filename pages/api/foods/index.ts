import { graphqlHttpHandler } from "@/packages/api/graphql-server/graphql-http-handler";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse)
{
    const { body, headers, method } = request

    const httpResponse = await graphqlHttpHandler({ body, headers, method: method! }, { req : request, res: response })
    
    for (const [key, value] of Object.entries(httpResponse.headers))
    {
        response.setHeader(key, value as string)
    }

    return response.status(httpResponse.status).send(httpResponse.payload)
}