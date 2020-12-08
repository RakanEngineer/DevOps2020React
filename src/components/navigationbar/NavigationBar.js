import React, {useContext} from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/images/logotype.svg'
import { useHistory} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'


export const NavigationBar = () => {
    const history = useHistory()
    const[authenticatedUser, setAuthenticatedUser]= useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        if(authenticatedUser){
            return <div>
                <img src={'https://thispersondoesnotexist.com/image'} alt={'Error'} style={{width: 35}}></img>
                <span >{authenticatedUser}</span>
                </div>
        }
        else{
            return <span onClick={() => history.push(RoutingPath.SignInView)}></span>
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
            <span className="signIn" onClick={() => history.push(RoutingPath.SignInView)}>Sign in : </span>
            
            {displayUserIfAuthenticated()}
        </div>
    )
}
