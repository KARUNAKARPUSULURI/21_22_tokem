import React, { useState } from 'react'
import { postRegisterData } from '../ServiceLayer/api'

const Register = () => {

    const [registerFormData, setRegisterFormData] = useState({
        email: "",
        password: "",
        username: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setRegisterFormData({ ...registerFormData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerFormData)
        }
        // console.log(postRegisterData(payload))
        postRegisterData(payload).then(data => console.log(data))
    }
    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email: </label>
                <input type='email' placeholder='enter email' id='email' name='email' onChange={handleChange} />
                <label>Password: </label>
                <input type='password' placeholder='enter password' id='password' name='password' onChange={handleChange} />
                <label>UserName: </label>
                <input type='text' placeholder='enter username' id='username' name='username' onChange={handleChange} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
