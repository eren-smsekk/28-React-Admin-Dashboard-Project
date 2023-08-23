const Footer = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="footer" className="footer">
                            <div className="py-3 my-4">
                                <div className="col-md-12">
                                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#home">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#services">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#portfolio">Portfolio</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#team">Team</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                    
                                    <div className="footer-icon text-center">
                                        <a href="index.html" className="navbar-brand d-flex justify-content-center align-items-center p-2">
                                            <i class="bi bi-motherboard-fill fs-2"></i>
                                            <p className="m-0 ps-2">Admin</p>
                                        </a>
                                    </div>

                                    <p className="text-center">© 2023 Company, Inc</p>
                                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;