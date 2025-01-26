import React from 'react';
import useStore from "../store/main";

const AllPostsPage = () => {

    const {allPosts} = useStore();
    const removePost = useStore((state) => state.removePost)

    function deletePost(index) {
        removePost(index)
    }

    return (
        <div className="d-flex f-wrap gap10">
            {allPosts.map((post, index) =>
                <div key={index} className="border">
                    <img src={post.image} alt=""/>
                    <div>{post.title}</div>
                    <button onClick={() => deletePost(index)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default AllPostsPage;