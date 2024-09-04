import { useQuery } from "@apollo/client"
import { GET_DRIVERS } from "../queries/driversQueries"
import Driver from "./Driver"
import AddNewDriverForm from "./AddNewDriverForm"

const DriversList = () => {

    const { loading, error, data } = useQuery(GET_DRIVERS)

    if (loading) return <h1>Loading...</h1>
    if (error) return <h2>Something went wrong!</h2>

    return (
        <>
            {!loading && !error && (
                <>
                    <AddNewDriverForm />

                    <table className="table table-hover mt-3 ">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.drivers.map(driver => (
                                <Driver key={driver.id} driver={driver} />
                            ))}
                        </tbody>
                    </table>
                    
                </>


            )}
        </>
    )
}

export default DriversList