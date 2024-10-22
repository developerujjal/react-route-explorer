import { Link, useNavigate, useParams } from "react-router-dom";

const Post = ({post}) => {
    const {id, title}= post;

    const navigate = useNavigate();

    const postMain= {
        backgroundColor: "green",
        padding: "10px 15px",
        marginBottom: "15px"
    }

    const moreDetails = ()=>{
        navigate(`/showmore/${id}`)
    }

    return (
        <div style={postMain}>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <Link to={`/showmore/${id}`}><button>Show More</button></Link>
            <button onClick={moreDetails}>Details</button>
        </div>
    );
};

export default Post;