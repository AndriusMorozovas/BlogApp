import React from 'react';
import useStore from "../store/main";

const UserListPage = () => {

    const {currentUser} = useStore();

    return (
        <div>
            <h3>Registered users</h3>
            <div className="d-flex f-column">
                <div className="grow1">

                </div>
                <div className="grow1">
                    <div>{currentUser.name}</div>
                </div>
            </div>

        </div>
    );
};

export default UserListPage;