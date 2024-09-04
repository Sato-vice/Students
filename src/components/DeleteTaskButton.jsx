import { useNavigate } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import { useMutation } from "@apollo/client"
import { DELETE_TASK } from "../mutations/taskMutations"
import { GET_TASKS } from "../queries/tasksQueries"

const DeleteTaskButton = ({ taskId }) => {
    const navigate = useNavigate()

    const [deleteTask] = useMutation(DELETE_TASK, {
        variables: { id: taskId },
        onCompleted: () => navigate("/tasks"),
        refetchQueries: [{ query: GET_TASKS }]
    })

    return (
        <div className="d-flex mt-3 mb-3">
            <button onClick={deleteTask} className="btn btn-danger">
                Delete Task
            </button>
        </div>
    )
}

export default DeleteTaskButton