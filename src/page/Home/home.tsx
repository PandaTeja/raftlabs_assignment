import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    return (
        <>
        <h1 className="Heading">RaftLabs Assignment</h1>
        <p  className="Heading">by <br/>Panda Eswara Teja</p>
            <div className="homeContainer">
                <Link to={"/relation"} className="linkStyle">
                        <div className="assessmentContainer">
                            <h1>Assessment-1</h1>
                            <p>
                                Find the relation between any two
                                people.
                            </p>
                        </div>
                </Link>
                <Link to={"/knight"} className="linkStyle">
                        <div className="assessmentContainer">
                            <h1>Assessment-2</h1>
                            <p>Simulate the movement of a Chess Knight.</p>
                        </div>
                </Link>
            </div>
        </>
    );
};
export default Home;