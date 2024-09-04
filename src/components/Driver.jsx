import { useMutation } from "@apollo/client"
import { DELETE_DRIVER } from "../mutations/driverMutations"
import { GET_DRIVERS } from "../queries/driversQueries"
import { FaTrash } from "react-icons/fa"
import { GET_TASKS } from "../queries/tasksQueries"


const Driver = ({ driver }) => {
    const [deleteDriver] = useMutation(DELETE_DRIVER, {
        variables: { id: driver.id },
        refetchQueries: [
            { query: GET_DRIVERS }, 
            { query: GET_TASKS }
        ]
    })


    return (
        <tr>
            <td>{driver.name}</td>
            <td>{driver.email}</td>
            <td>{driver.phone}</td>
            <td>
                <button onClick={deleteDriver} className="btn btn-danger">
                    <FaTrash className="icon" />
                </button>
            </td>
        </tr>

    )
}

export default Driver