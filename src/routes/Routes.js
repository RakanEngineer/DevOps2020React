import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { PageNotFound } from '../view/PageNotFound'
import { SignInView } from '../view/SignInView'
import RoutingPath from './RoutingPath'

export const Routes = (props) => {
    return (       
        <Router>
            {props.children}
            <Switch>
                <Route exact path='/signin' component={SignInView}/>
                <Route component={HomeView} />
            </Switch>
        </Router>
        
    )
}
