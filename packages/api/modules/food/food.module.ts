import { deleteFood, foods } from "./food.resolver";

import { mergeTypeDefs } from "@graphql-tools/merge"

import { createModule, gql } from "graphql-modules"

const typeDefs = mergeTypeDefs([
    gql`
      type Mutation {
        deleteFood(id: ID!): MenuItem!
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
        foods: [MenuItem]
      }
    `,
])


const resolvers = {
    Query: {
      foods
    },
    Mutation: {
      deleteFood
    }
}

export const menuModule = createModule({
    dirname: __dirname,
    id: "menu",
    resolvers,
    typeDefs
})