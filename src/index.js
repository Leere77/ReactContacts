import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { list, auth } from './js/reducers'

import App from './js/components/App/App'
import './css/App.css'

const reducer = (state = {}, action) => (
    {
        list: list(state.list, action),
        auth: auth(state.auth, action)
    }
)

const store = createStore(reducer)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.querySelector('#root'))