import React, { useState } from 'react'
import { postLoginData } from '../ServiceLayer/api'
import {useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginFormData({ ...loginFormData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginFormData)
        }
        // console.log(postRegisterData(payload))
        postLoginData(payload).then(data => {
            const token = data.token ? "True" : "false"
            if(data && data.status == 200){
                localStorage.setItem("token", token)
                navigate("/home")
            }
        })
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email: </label>
                <input type='email' placeholder='enter email' id='email' name='email' onChange={handleChange} />
                <label>Password: </label>
                <input type='password' placeholder='enter password' id='password' name='password' onChange={handleChange} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Login
