import React, {useRef} from 'react';
import useStore from "../store/main";

const CreatePostPage = () => {

    const imgRef = useRef();
    const titleRef = useRef();
    const allPosts = useStore((state) => state.allPosts)
    const addPost = useStore((state) => state.addPost)

    function createPost() {
        const newPost = {
            image: imgRef.current.value,
            title: titleRef.current.value,
            id: Date.now()
        }
        addPost(newPost)
    }

    return (
        <div className="d-flex f-column a-center j-center gap10">
            <input type="text" placeholder="Enter image url" ref={imgRef} />
            <input type="text" placeholder="Enter title" ref={titleRef} />
            <button onClick={createPost}>Create post</button>
        </div>
    );
};

export default CreatePostPage;