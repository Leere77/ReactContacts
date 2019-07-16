import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { list, auth } from './js/reducers'

import App from './js/components/App/App'
import './css/App.css'

const reducer = (state = {}, action) => ({
    list: list(state.list, action),
    auth: auth(state.auth, action)
})

const store = createStore(reducer)

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.querySelector('#root'),
)
