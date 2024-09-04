import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_DRIVER } from '../mutations/driverMutations'
import { GET_DRIVERS } from '../queries/driversQueries'

const AddNewDriverForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [addDriver] = useMutation(ADD_DRIVER, {
        variables: { name, email, phone },
        refetchQueries: [{ query: GET_DRIVERS }]
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name || !email || !phone) {
            return alert("Please fill all the fields")
        }

        addDriver(name, email, phone)
        setName("")
        setEmail("")
        setPhone("")
    }

    return (
        <div className="container mb-5 mt-5">
            <h2>You can add a new user by using the form below.</h2>


            <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <div class="container">
                    <a class="navbar-brand"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#formToggleDown" aria-controls="formToggleDown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="formToggleDown">

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
                                <h4>Email:</h4>
                                <input
                                    type="text"
                                    name='Email'
                                    className='form-control fw-bolder'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <label className='form-label'>
                                <h4>Phone:</h4>
                                <input
                                    type="text"
                                    name='Phone'
                                    className='form-control fw-bolder'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </label>

                            <div class="modal-footer m-3">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AddNewDriverForm