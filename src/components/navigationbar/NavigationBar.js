import React, {useContext} from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/images/logotype.svg'
import { useHistory} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'
import {Profile} from '../profile/Profile'

export const NavigationBar = () => {
    const history = useHistory()
    const[authenticatedUser, ]= useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        if(authenticatedUser) {
            return <Profile/>
        }
        else{
            return <span className="signIn" onClick={() => history.push(RoutingPath.SignInView)}>Sign in</span>
        }        
    }

    // const displayUserIfAuthenticated2 = () => {
    //     return authenticatedUser
    //     ? <profile/>
    //     : <span onClick={() => history.push(RoutingPath.SignInView)}></span>
    // }

    return (
        <div className="navigationBarWrapper">
            <img onClick={()=> history.push(RoutingPath.HomeView)} className="logotype" src={Logotype} alt= {"Error..."}></img>            
             
            {/* <span className="signIn" onClick={() => history.push(RoutingPath.SignInView)}>Sign in:</span> */}
            {displayUserIfAuthenticated()}
        </div>
    )
}
