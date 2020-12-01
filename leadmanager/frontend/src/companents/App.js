import React, { Companents, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <Dashboard />
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("main"));