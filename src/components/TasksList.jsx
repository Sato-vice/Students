import { useQuery } from "@apollo/client"
import { GET_TASKS } from "../queries/tasksQueries"
import Task from "./Task"
import AddNewTaskForm from "./AddNewTaskForm"


const TasksList = () => {

    const { loading, error, data } = useQuery(GET_TASKS)

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Something went wrong.Please try again.</h2>


    return (
        <>
            <AddNewTaskForm />
            {!loading && !error && (
                <div className="d-flex flex-column mt-5 gap-3">
                    {data.tasks.map(task => (
                        <Task key={task.id} task={task} />
                    ))}
                </div>
            )}
        </>
    )
}

export default TasksList