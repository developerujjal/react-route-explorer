import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const usersData = useLoaderData()
    return (
        <div>
            <h2>Users Data: {usersData.length}</h2>
            <h3>Kha kah Murivumi</h3>
            <p>Valo and vodro chele.</p>
            <div className="main-users">
                {
                    usersData.map(userData => <User userItem={userData} key={userData.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;