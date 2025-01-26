import React, {useRef, useState} from 'react';
import useStore from "../store/main";

const RegistrationPage = () => {


    const nameRef = useRef()
    const passRef = useRef()
    const passTwoRef = useRef()
    const {setCurrentUser} = useStore()

    const [error, setError] = useState(null)


    function auth() {
        const user = {
            name: nameRef.current.value,
            password: passRef.current.value,
            passwordTwo: passTwoRef.current.value,
        }

        if (nameRef.current.value.length < 4 ) {
            return setError("Name is too short")
        }

        if (passRef.current.value.length <= 4 ) {
            return setError("Password is too short")
        }

        if (passRef.current.value !== passTwoRef.current.value) {
            return setError("Passwords do not match")
        }
        else {
            setError("Registration successful!")
            setCurrentUser(user)
        }

    }


    return (
        <div className="d-flex j-center">
            <div className="d-flex f-column gap10 authForm">
                <h1>Register</h1>
                <input type="text" placeholder="username" ref={nameRef}/>
                <input type="password" placeholder="password one" ref={passRef}/>
                <input type="password" placeholder="password two" ref={passTwoRef}/>

                {error && <h3>{error}</h3>}

                <button onClick={auth}>Register</button>
            </div>

        </div>
    );
};

export default RegistrationPage;