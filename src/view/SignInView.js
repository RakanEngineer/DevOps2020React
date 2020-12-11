import React, {useState, useContext} from 'react'
import { UserContext } from '../shared/provider/UserProvider'
import {useHistory} from 'react-router-dom'

export const SignInView  = () => {
    const history = useHistory()
    const [username, setusername] = useState()
    const [loggedInUser,setLoggedInUser] = useState("A")
    const[, setAuthenticatedUser]= useContext(UserContext)
    // const[authenticatedUser, setAuthenticatedUser]= useContext(UserContext)

    const login = (e) =>{
        e.preventDefault()
        setAuthenticatedUser(username)
        localStorage.setItem("username",username)
        history.push('/')
    }
    return (
        <div>
            <h2>This is where the users wil be logging in</h2>
            <h1>{username}</h1>
            <h1>{loggedInUser}</h1>
            <button onClick={() => setLoggedInUser("B")}>Update</button>
            <input onChange={event=> setLoggedInUser(event.target.value)}></input> <br />

            {/* <button onClick={()=> setusername(username + "2020")}>Update</button> */}

            <form>
                <span>Username: </span>
                <input onChange={(event)=> setusername(event.target.value)}></input> <br />
                <span>Password: </span>
                <input ></input> <br />
                <br />
                <button onClick={(e) => login(e)}>Login</button>
            </form>

        </div>
    )
}
