import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import IndexPage from './Pages/IndexPage';
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegistrationPage";
import ProfilePage from "./Pages/ProfilePage";
import UserListPage from "./Pages/UserListPage";
import CreatePostPage from "./Pages/CreatePostPage";
import AllPostsPage from "./Pages/AllPostsPage";


function App() {


    return (
      <div className="App">
          <div className="container d-flex f-column">
              <BrowserRouter>
              <div className="grow1 d-flex border j-center">
                  <Toolbar />
              </div>
              <div className="grow4 d-flex f-column border j-center">
                <Routes>
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/userlist" element={<UserListPage/>}/>
                    <Route path="/createpost" element={<CreatePostPage/>}/>
                    <Route path="/posts" element={<AllPostsPage/>}/>
                </Routes>
              </div>
              </BrowserRouter>
          </div>

      </div>
    );
}

export default App;
