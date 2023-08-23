import { Link } from "react-router-dom";


const Login = () => {
    return(
        <div id="loginForm" className="vh-100 d-flex justify-content-center align-items-center flex-column">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="loginImage col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-md-7 col-lg-5 col-xl-5">
                        <div class="container mb-3">
                            <div className="d-flex justify-content-center align-items-center p-2 text-decoration-none text-primary">
                                <i class="bi bi-motherboard-fill fs-1"></i>
                                <p className="m-0 ps-2 fs-1">Admin</p>
                            </div>
                        </div>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                
                            <div className="d-flex justify-content-around align-items-center my-4">
                                <div className="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" htmlFor="flexCheckChecked">Remember Me</label>
                                </div>
                                <a href="#!">Forgot password?</a>
                            </div>
                
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                            </div>
                
                            <div className="divider d-flex align-items-center justify-content-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>
                            
                            <div className="d-grid">
                                <a className="btn btn-outline-primary btn-lg btn-block" href="#!" role="button">
                                    <i className="fab fa-twitter me-2"></i>Create Login
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;