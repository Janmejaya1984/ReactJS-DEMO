import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Login = () => {
    let navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const changeUserName = (e) => {
        setUserName(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const loginClicked = (e)=>{
        e.preventDefault();
        if(username!=="" && password!=="")
        {
            navigate("/landing/"+username);
        }
    }
    return (
        <>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Username:</label>
                        <input
                            style={{ width: "40%" }}
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                            name="name"
                            onChange={changeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            style={{ width: "40%" }}
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="password"
                            onChange={changePassword}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={loginClicked}>
                        Login
                    </button>
                </form>
                
            </div>
        </>
    );
};
export default Login;
