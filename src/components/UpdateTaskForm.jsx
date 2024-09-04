import { useMutation } from "@apollo/client"
import { UPDATE_TASK } from "../mutations/taskMutations"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { GET_TASK } from "../queries/tasksQueries"

const UpdateTaskForm = ({ task }) => {
    const [name, setName] = useState(task.name)
    const [description, setDescription] = useState(task.description)
    const [link, setLink] = useState(task.link)

    const [updateTask] = useMutation(UPDATE_TASK, {
        variables: { id: task.id, name, description, link },
        refetchQueries: [{ query: GET_TASK, variables: { id: task.id } }]
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !description) {
            return alert("Please fill all the fields")
        }

        updateTask(name, description, link)
    }


    return (

        <div className="container mb-5 mt-5">
            <h2>You can update the current task by using the form below.</h2>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <div className="container">
                    <a className="navbar-brand">
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#formToggleDown" aria-controls="formToggleDown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="formToggleDown">

                        <form onSubmit={handleSubmit} className='form d-flex flex-column justify-content-evenly col text-white'>
                            <label className='form-label'>
                                <h4>Name:</h4>
                                <input
                                    type="text"
                                    name='Name'
                                    className='form-control bg-white  fw-bolder'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label className='form-label'>
                                <h4>Description:</h4>
                                <textarea
                                    type="text"
                                    name='desc'
                                    className='form-control fw-bolder'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </label>
                            <label className='form-label'>
                                <h4>Link:</h4>
                                <textarea
                                    type="text"
                                    name='desc'
                                    className='form-control fw-bolder'
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                />
                            </label>

                            <div className="modal-footer m-3">
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UpdateTaskForm