import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            <h1>OOPS........!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && (
                    <div>
                        <p>Are you Mad! Do not type any unusal URL.</p>
                        <span>Go to the Home Page!</span>
                        <Link to="/"><button>Home</button></Link>
                    </div>
                )
            }
        </div>
    );
};

export default ErrorPage;