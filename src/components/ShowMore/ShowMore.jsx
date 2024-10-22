import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ShowMore = () => {
    const postDetails = useLoaderData();
    const {title, body}= postDetails;

    const navigate = useNavigate();
    const {postID} = useParams();
    console.log(postID)

    const previousBtn = ()=>{
        navigate(-1)
    }
    return (
        <div>

            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={previousBtn}>Previous</button>
        </div>
    );
};

export default ShowMore;