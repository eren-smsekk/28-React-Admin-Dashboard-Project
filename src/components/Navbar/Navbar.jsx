import DarkMode from "../DarkMode/DarkMode";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-expand-lg navbar-dark bg-primary py-3 fixedNavbar">
                <div className="container">
                    <Link to="/" className="navbar-brand d-flex justify-content-center align-items-center border p-2 badge">
                        <i className="bi bi-motherboard-fill fs-2"></i>
                        <p className="m-0 ps-2">Admin</p>
                    </Link>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Dashboard</Link> 
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Categories</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/product" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Users</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Orders</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto" id="dropdownOpen">
                            <li className="nav-item d-flex align-items-center justify-content-center pe-2">
                                <DarkMode />
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-target="#dropdownOpen">
                                    <i className="bi bi-person-fill text-light"></i> Welcome to Users
                                </a>
                                <div className="dropdown-menu">
                                    <Link to="/Profile" className="dropdown-item">
                                        <i className="bi bi-person-circle"></i> Profile
                                    </Link>
                                    <a href="#" className="dropdown-item">
                                        <i className="bi bi-gear"></i> Settings
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/Login" className="nav-link">
                                    <i className="bi bi-person-fill-x text-light"></i> Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;