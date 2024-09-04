import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_TASK } from '../mutations/taskMutations'
import { GET_DRIVERS } from '../queries/driversQueries'
import { GET_TASKS } from '../queries/tasksQueries'


const AddNewTaskForm = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    

    const { loading, error, data } = useQuery(GET_DRIVERS)

    const [addTask] = useMutation(ADD_TASK, {
        variables: { name, description, link},
        refetchQueries: [{ query: GET_TASKS }]
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !description || !link) {
            return alert("Please fill all the fields")
        }

        addTask(name, description,)

        setName("")
        setDescription("")
        setLink("")
    }

    if (loading) return null
    if (error) return "Something went wrong"

    return (
        <>
            {!loading && !error && (
                <div className="container mb-5 mt-5">
                    <h2>You can add a new book by using the form below.</h2>


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
            )}
        </>
    )
}

export default AddNewTaskForm