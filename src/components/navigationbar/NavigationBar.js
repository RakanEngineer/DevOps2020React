import React from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/images/logotype.svg'

export const NavigationBar = () => {
    return (
        <div className="navigationBarWrapper">
            <img onClick={()=> alert("click")} className="logotype" src={Logotype} alt= {"Error..."}></img>            
        </div>
    )
}
