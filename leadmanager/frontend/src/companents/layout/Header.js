import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

export class Header extends Component {
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const guestLink = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link to='/login'>
                        Login
                            </Link>
                </li>
                <li className="nav-link">
                    <Link to='/register'>
                        Regsiter
                            </Link>
                </li>
            </ul>
        );
        const authLink = (
            <ul className="navbar-nav ml-auto">
                        <li className="nav-link">
                            <button onClick={this.props.logout } className="btn btn-primary">
                                Logout
                            </button>
                        </li>
                    </ul>
        );
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand">
                        Lead Managers
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {isAuthenticated? authLink: guestLink }
                    
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state =>({
    auth: state.auth
})


export default connect(mapStateToProps, {logout})(Header);
