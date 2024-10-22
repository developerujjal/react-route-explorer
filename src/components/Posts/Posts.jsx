import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {

    const allPosts = useLoaderData()

    return (
        <div>
            <h2>All Posts: {allPosts.length} </h2>
            <div className="post-container">
                {
                    allPosts.map((post)=> <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;