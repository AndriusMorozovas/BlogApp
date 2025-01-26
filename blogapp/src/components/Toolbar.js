import React from 'react';
import {Link} from 'react-router-dom';

const Toolbar = () => {
    return (
        <div className="d-flex a-center j-center gap25">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/Register">Register</Link>

        </div>
    );
};

export default Toolbar;