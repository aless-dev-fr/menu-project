import { Benzene, makeCompileQuery, makeHandler } from "@benzene/http";
import { graphqlModule } from "../modules";
import { createApplication } from "graphql-modules"
import { NextApiRequest, NextApiResponse } from "next";
import { applyMiddleware } from "graphql-middleware"
import { contextFn as contextFunction } from "./context-fn";
  

export const application = createApplication({
    modules : graphqlModule
})

export const schema = applyMiddleware(
    application.createSchemaForApollo(),
    async (resolve, parent, args, context) => {
        return resolve();
    }
)
  
const GQL = new Benzene<{ req: NextApiRequest; res: NextApiResponse }>({ 
    compileQuery: makeCompileQuery(),
    schema,
    contextFn: ({ extra }) => {
        return { req: extra.req, res: extra.res, role : "admin" };
    },
})
  
export const graphqlHttpHandler = makeHandler(GQL)