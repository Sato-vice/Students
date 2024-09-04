import { gql } from "@apollo/client";

const GET_TASKS = gql`
    query getTasks{
        tasks {
            id
            name
            description
            link
        }
    }
`

const GET_TASK = gql`
    query getProject($id: ID!) {
        task(id: $id) {
            id
            name
            description
            link
        }
    }
`

export {
    GET_TASKS,
    GET_TASK
}