import "./Css/Login.css";


function LoginSignUp() {
    const login = () => {};
    return (
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
                <div className="login-fields">
                    <input type="text" placeholder="Email address" />
                    <input type="text" placeholder="Password" />
                </div>
                <button className="login-btn" onClick={login}>
                    {" "}
                    Continue{" "}
                </button>
                <div className="create-account">
                    <p>Create an account ?</p>
                    <a href="#"> sign up</a>
                </div>
                <div className="agree-box">
                    <input type="checkbox" name=" " id="" />
                    <p>By continuing I agree on the use terms and policy</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;
