import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';

export type TGraphqlContext = {
    _shield?: Record<string, unknown>
    isApiAuthorised: boolean
    req: IncomingMessage
    res: ServerResponse
}

export async function contextFn({ req, res }: { req: NextApiRequest; res: NextApiResponse; }): Promise<TGraphqlContext> {
    // Perform any necessary logic to create the context object
    const context: TGraphqlContext = {
      isApiAuthorised: true,
      req,
      res,
      // Add other properties to the context object if needed
    };
    
    return context;
  }