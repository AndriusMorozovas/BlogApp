import React, {useRef, useState} from 'react';

const UpdatePage = ({secret}) => {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const imageRef = useRef()


    const [error, setError] = useState(null)

    function update() {
        const post = {
            image: imageRef.current.value,
            description: descriptionRef.current.value,
            title: titleRef.current.value,
            secretKey: secret,
            id: post.id
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        }

        fetch("http://167.99.138.67:1111/updatepost", options)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.success) {
                    setError(null)

                } else {
                    setError(response.message)
                }
            })
    }

    return (
        <div className="d-flex j-center">
            <div className="d-flex f-column gap10 authForm">
                <h1>Update Post</h1>
                <input type="text" placeholder="image" ref={imageRef}/>
                <input type="text" placeholder="title" ref={titleRef}/>
                <input type="text" placeholder="description" ref={descriptionRef}/>

                {error && <h3>{error}</h3>}

                <button onClick={update}>Update</button>
            </div>

        </div>
    );
};

export default UpdatePage;