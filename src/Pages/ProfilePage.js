import React, {useRef} from 'react';
import useStore from "../store/main";

const ProfilePage = () => {

    const imgRef = useRef();
    const {currentUser} = useStore();

    function changeImage(){
        imgRef.current.src = imgRef.current.value;
    }



    return (
        <div className="d-flex">
            <div className="grow1 d-flex f-column a-center j-center gap10">
                <img src="https://th.bing.com/th/id/OIP.ULdaKJ-nJlOAZqR5lToUWgHaHa?rs=1&pid=ImgDetMain" alt="" ref={imgRef}/>
                <input type="text" placeholder="Change profile picture"/>
                <button onClick={changeImage}>Save</button>
            </div>
            <div className="grow1">
                <h1>{currentUser.name}</h1>
            </div>
        </div>
    );
};

export default ProfilePage;