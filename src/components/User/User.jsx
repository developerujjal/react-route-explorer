import './User.css'
import { Link } from "react-router-dom";

const User = ({userItem}) => {
    const {name, email,phone, id}=userItem;
    return (
        <div className="user-container">
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <Link to={`/user/${id}`}>See More Details</Link>
        </div>
    );
};

export default User;