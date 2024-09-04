import { Link } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { DELETE_TASK } from "../mutations/taskMutations"
import { GET_TASKS } from "../queries/tasksQueries"
import { GET_TASK } from "../queries/tasksQueries"


const Task = ({ task }) => {
    const navigate = useNavigate()

    const [deleteTask] = useMutation(DELETE_TASK, {
        variables: { id: task.id },
        onCompleted: () => navigate("/tasks"),
        refetchQueries: [{ query: GET_TASKS }]
    })

  

    return (
        <div className='container border border-3 rounded border-primary p-3 mb-3'>
            <h4>
                Name:
                <br />
                <span className='fw-bolder'>{task.name}.</span>

            </h4>
            <h4>
                Description:
                <br />
                <span className='fw-bolder'>
                    {task.description.substr(0, 20)}...
                </span>

            </h4>
            
            <button className='btn btn-secondary fw-bolder'>
                <Link to={`/task/${task.id}`} className="text-decoration-none text-white">View</Link>
            </button>
            <button onClick={deleteTask} className="btn btn-danger">
                    <FaTrash className="icon" />
                </button>
        </div>
    )
}

export default Task