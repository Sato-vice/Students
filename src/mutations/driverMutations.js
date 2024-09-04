const { gql } = require("@apollo/client");

const ADD_DRIVER = gql`
    mutation addDriver($name: String!, $email: String!, $phone: String!) {
        addDriver(name: $name, email: $email, phone: $phone) {
            name
            email
            phone
        }
    }
`

const DELETE_DRIVER = gql`
    mutation deleteDriver($id: ID!) {
        deleteDriver(id: $id) {
            name
            email
            phone
        }
    }
`

export { 
    DELETE_DRIVER,
    ADD_DRIVER
}