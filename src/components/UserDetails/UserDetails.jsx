import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const detail = useLoaderData();
    return (
        <div>
            <h2>User Name: {detail.name}</h2>
            <h3>User Email: {detail.email}</h3>
        </div>
    );
};

export default UserDetails;