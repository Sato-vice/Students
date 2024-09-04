import { gql } from "@apollo/client";

const ADD_TASK = gql`
    mutation addTask($name: String!, $description: String!, $link: String!) {
        addTask(
            name: $name,
            description: $description,
            link: $link
        ) {
            id
            name 
            description
            link 
        }
    }
`

const UPDATE_TASK = gql`
    mutation updateTask(
        $id: ID!,
        $name: String!,
        $description: String!,
        $link: String!
    ) {
        updateTask(
            id: $id,
            name: $name,
            description: $description,
            link: $link
        ) {
            id
            name
            description
            link
        }
    }
`

const DELETE_TASK = gql`
    mutation deleteTask($id: ID!) {
        deleteTask(id: $id) {
            id
        }
    }
`

export {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK
}