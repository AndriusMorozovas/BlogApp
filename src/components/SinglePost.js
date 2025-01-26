import React from 'react';
import {Link, useNavigate, useLocation} from "react-router-dom"
import IndexPage from '../Pages/IndexPage'
import useStore from "../store/main";


const SinglePost = ({post, username, x}) => {

    const {allPosts} = useStore;

    return (
        <div className="border p20 post">
            <h3>{post.title}</h3>



            <Link to={`/posts/${post.id}`}>
                <b>{post.title}</b>
            </Link>

        </div>
    );
};

export default SinglePost;