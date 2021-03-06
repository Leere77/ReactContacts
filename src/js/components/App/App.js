import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import List from '../List/List'
import ListItemPage from '../List/ListItemPage'
import SecWrapper from '../SecWrapper'

const EnterSection = () => {
    return (
        <div className="enterSection">
            <h2>Hi there!</h2>
            <Link to="list">[go to contact list]</Link>
        </div>
    )
}

const App = () => {
    return (
        <div className="mainContainer">
            <Switch>
                <Route path="/list/:id" component={SecWrapper(ListItemPage)} />
                <Route exact path="/list" component={SecWrapper(List)} />
                <Route component={EnterSection} />
            </Switch>
        </div>
    )
}

export default App
