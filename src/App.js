import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import UserPostsPage from "./Pages/UserPostsPage";
import IndexPage from "./Pages/IndexPage";
import SinglePostPage from "./Pages/SinglePostPage";
import UploadPage from "./Pages/UploadPage";
import UpdatePage from "./Pages/UpdatePage";


function App() {

    const [secret, setSecret] = useState(null);
    const [username, setUsername] = useState(null)

    function setLogin(secretKey, username) {
        setSecret(secretKey)
        setUsername(username)
    }

    return (
      <div className="App">
        <div className="container d-flex f-column">


            <BrowserRouter>
                <div className="grow1 toolbar">
                    <Toolbar/>
                </div>
                <div className="grow4 d-flex">
                    <div className="grow4">
                        <Routes>
                            <Route path="/login" element={<LoginPage setLogin={setLogin} />}/>
                            <Route path="/register" element={<RegisterPage/>}/>



                            <Route path="/userPosts/:username" element={<UserPostsPage secret={secret} username={username}/>}/>
                            <Route path="/singlePost/:username/:id" element={<SinglePostPage secret={secret} username={username}/>}/>
                            <Route path="/upload" element={<UploadPage secret={secret}/>}/>
                            <Route path="/update" element={<UpdatePage secret={secret} username={username}/>}/>

                            <Route path="/" element={<IndexPage secret={secret} username={username}/>}/>
                        </Routes>
                    </div>
                </div>

                <div className="grow1 footer">
                    <Footer/>
                </div>
            </BrowserRouter>

        </div>
      </div>
    );
}

export default App;
