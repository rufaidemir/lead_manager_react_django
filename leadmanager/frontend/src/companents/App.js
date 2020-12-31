import React, { Companents, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import Login  from './accounts/Login';
import Register  from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';

import { Provider } from 'react-redux';
import store from '../store';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Route, HashRouter as  Router ,Switch} from 'react-router-dom';


const alertOptions = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
  };

class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <AlertProvider template={AlertTemplate} {...alertOptions}>
                        <Fragment>
                            <Alerts/>
                            <Header/>
                            <Switch>
                                <PrivateRoute exact path="/" component={ Dashboard } />
                                <Route exact path="/login" component={ Login } />
                                <Route exact path="/register" component={Register} />
                            </Switch>
                        </Fragment>
                    </AlertProvider>
                </Provider>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("main"));