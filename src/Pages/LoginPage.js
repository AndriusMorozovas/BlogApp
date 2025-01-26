import React, {useRef, useState} from 'react';
import useStore from "../store/main";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const nameRef = useRef()
    const passRef = useRef()
    const {currentUser} = useStore();
    const nav = useNavigate();

    const [error, setError] = useState(null);

    function auth() {
        const user = {
            name: nameRef.current.value,
            password: passRef.current.value
        }
        if (currentUser.name !== user.name) {
            return setError("User does not exist")
        }
        if (currentUser.password !== user.password) {
            return setError("Incorrect password")
        }
        else {
            setError("Login successful!")
            nav("/profile")
        }
    }


    return (
        <div className="d-flex j-center">
            <div className="d-flex f-column gap10 authForm">
                <h1>Login</h1>
                <input type="text" placeholder="username" ref={nameRef}/>
                <input type="password" placeholder="password" ref={passRef}/>

                {error && <h3>{error}</h3>}

                <button onClick={auth}>Login</button>
            </div>

        </div>
    );
};

export default LoginPage;