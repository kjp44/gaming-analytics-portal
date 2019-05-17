import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                    <Link className="navbar-brand text-light" to="/">Gaming Analytics</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/">Products<span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;