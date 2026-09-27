import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext.js";

// To fetch the values from the UserContext => useContext hook will help

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // setUser => getting from UserContextProvider.jsx to add the user data
    // To send the data to Provider
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <>
            <div>
                <h2>Login</h2>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='username'/>
                <input type="text"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder='password'/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Login