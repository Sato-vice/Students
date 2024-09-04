import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_TASK } from "../queries/tasksQueries"
import { Link } from "react-router-dom"

const TaskPage = () => {
    const { id } = useParams()

    const { loading, error, data } = useQuery(GET_TASK, {
        variables: { id }
    })

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Something went wrong.Please try again.</h2>

    return (
        <>
            {!loading && !error && (
                <div className='container border border-3 rounded border-primary p-3 mt-5'>
                    <h4>
                        Name:
                        <br />
                        <span className='fw-bolder'>{data.task.name}.</span>

                    </h4>
                    <div className="width-container">
                        <h4>
                            Description:
                            <br />
                            <span className='fw-bolder'>
                                {data.task.description}
                            </span>
                        </h4>
                    </div>
                    <div className="width-container">
                        <h4>
                            Link:
                            <br />
                            <a href={data.task.link} className='fw-bolder'>
                                {data.task.link}
                            </a>
                        </h4>
                    </div>

                    <button className='btn btn-secondary fw-bolder'>
                        <Link to="/tasks" className="text-decoration-none text-white">Go Back</Link>
                    </button>
                </div>
            )}
        </>
    )
}

export default TaskPage