const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type ReactTable {
        col1: String
        col2: String
        col3: Int
        id: ID!
    }

    type Table {
        name: String
        surname: String
        age: Int
        time: String
    }
    
    type User {
        id: ID
        username: String
        age: Int
        posts: [Post]
    }
    
    type Post {
        id: ID
        title: String
        content: String
    }
    
    input UserInput {
        id: ID
        username: String!
        age: Int!
        posts: [PostInput]
    }
    
    input TableRowInput {
        col1: String!
        col2: String!
        col3: Int!
        id: ID!
    }
        
    input PostInput {
        id: ID
        title: String!
        content: String!
    }
    
    type Query {
        getAllUsers: [User]
        getTable: [Table]
        getUser(id: ID): User
        getReactTable: [ReactTable]
        getReactTableFiltering(search: String): [ReactTable]
        
    }
    
    input UpdatedData {
        id: ID!
        col1: String
        col2: String
        col3: Int
    }
    
    type Mutation {
        createUser(input: UserInput): User
        createRowInTable(input: TableRowInput): ReactTable
        deleteRowInTable(input: ID): ReactTable
        updateRowInTable(input: UpdatedData): ReactTable
    }
`);

module.exports = schema;
