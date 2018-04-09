import './main.css'


import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { browserHistory, Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import reducers from 'reducers'

import Layout from 'containers/layout'
import Watches from 'containers/watches'
import Watch from 'containers/watch'
import Cart from 'containers/cart'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Watches} />
                <Route path='categories/:id' component={Watches} />
            </Route>
            <Route path='watches/:id' component={Watch} />
            <Route path='/cart' component={Cart} />            
        </Router>
    </Provider>,
    document.getElementById("root")
)