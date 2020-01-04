const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }

  input UserInput {
    id: ID!
  }

  input NewUserInput {
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    user: User!
  }

  input PetInput {
    id: ID!
    name: String
    type: String
  }

  input NewPetInput {
    name: String!
    type: String!
    user: ID!
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput!): Pet
    user(input: UserInput!): User
  }

  type Mutation {
    pet(input: NewPetInput!): Pet!
    user(input: NewUserInput!): User!
  }
`;

module.exports = typeDefs;
