import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { PageNotFound } from '../view/PageNotFound'
import { SignInView } from '../view/SignInView'
import {RecipeView} from '../view/RecipeView'

export const Routes = (props) => {
    return (       
        <Router>
            {props.children}
            <Switch>
                <Route exact path='/signin' component={SignInView}/>
                <Route exact path='/recipeview' component={RecipeView}/>
                <Route exact path='/pagenotfound' component={PageNotFound}/>
                <Route component={HomeView} />
            </Switch>
        </Router>
        
    )
}
