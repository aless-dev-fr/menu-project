import { MenuItemInput, count, createMenuItem, foods } from "./food.resolver";

import { mergeTypeDefs } from "@graphql-tools/merge"

import { createModule, gql } from "graphql-modules"

const typeDefs = mergeTypeDefs([
    gql`
      input MenuItemInput {
        Name: String!
        Description: String
        Country: String
        Price: Int!
      }

      type Mutation {
        createMenuItem(input : MenuItemInput!): MenuItem
      }

      type MenuItem {
        id: ID
        createdAt: String!
        updatedAt: String!
        Name: String!
        Description: String
        Country: String
        Price: Int!
      }
    
      type Query {
        foods(input: String!, limit: Int!, offset: Int!): [MenuItem]
        foodsCount(input: String!) : Int
      }
    `,
])


const resolvers = {
    Query: {
      foods : (_ : any, { input, limit, offset } : { input : string, limit : number, offset : number }) => foods(input, limit, offset),
      foodsCount : (_ : any, { input } : { input : string }) => count(input)
    },
    Mutation: {
      createMenuItem : (_ : any, { input } : { input : MenuItemInput }) => createMenuItem(input)
    }
}

export const menuModule = createModule({
    dirname: __dirname,
    id: "menu",
    resolvers,
    typeDefs
})