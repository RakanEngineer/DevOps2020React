import React, {useState, useContext} from 'react'
import { UserContext } from '../shared/provider/UserProvider'

export const SignInView  = () => {
    const [username, setusername] = useState()
    const[authenticatedUser, setAuthenticatedUser]= useContext(UserContext)

    const login = (e) =>{
        e.preventDefault()
        setAuthenticatedUser(username)
    }
    return (
        <div>
            <h2>This is where the users wil be logging in</h2>
            <h1>{authenticatedUser}</h1>
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
