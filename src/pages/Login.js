import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/Auth/actions';

function Login() {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    function handleInputChange(event) {
        setData({...data, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(data);

        dispatch(login({username: data.username, password: data.password}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input type="text" name="username" placeholder="username" value={data.username} onChange={handleInputChange} />
            <br />
            <input type="password" name="password" placeholder="password" value={data.password} onChange={handleInputChange} />

            <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login
