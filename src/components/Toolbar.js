import React from 'react';
import {Link} from 'react-router-dom';
import useStore from '../store/main';

const Toolbar = () => {



    return (
        <div className="d-flex j-between a-center gap25">
            <div className="d-flex gap25">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>

                <Link to="/profile">Profile</Link>
                <Link to="/userlist">User list</Link>
                <Link to="/createpost">Create post</Link>
                <Link to="/posts">All posts</Link>
            </div>
            <div>
                <Link to="/login">Logout</Link>
            </div>
        </div>
    );
};

export default Toolbar;