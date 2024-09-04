import { gql } from "@apollo/client";

const GET_DRIVERS = gql`
    query getDrivers{
        drivers {
            id
            name
            email
            phone
        }
    }
`

export { GET_DRIVERS }