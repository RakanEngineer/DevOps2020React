import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { PageNotFound } from '../view/PageNotFound'

export const Routes = () => {
    return (       
        <Router>
            <switch>
                <Route exact path='/home' component={HomeView} />
                <Route component={PageNotFound} />
            </switch>
        </Router>
    )
}
