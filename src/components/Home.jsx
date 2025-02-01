import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import _default from "eslint-plugin-react-refresh";

const HomePage =()=> {
     const{isAuthenticated,login} =useContext(AuthContext);
     const navigate =useNavigate();

     const handleLogin =() => {
        login("JohnDoe");
        navigate("/quiz");
     }

     return(
        <div>
            <h1>Welcome to the Quiz App</h1>
            {isAuthenticated ? (
                <button onClick={handleLogin}>Login</button>
            ) : (
                <p>You are already logged in! <a href="/quiz">Go to Quiz</a></p>
                
            )}
        </div>
     )
}
export default HomePage;