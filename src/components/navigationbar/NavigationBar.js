import React from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/images/logotype.svg'
import { useHistory} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const NavigationBar = () => {
    const history = useHistory()
    return (
        <div className="navigationBarWrapper">
            <img onClick={()=> history.push(RoutingPath.HomeView)} className="logotype" src={Logotype} alt= {"Error..."}></img>            
            <span onClick={() => history.push(RoutingPath.SignInView)}>Sign in</span>
        </div>
    )
}
