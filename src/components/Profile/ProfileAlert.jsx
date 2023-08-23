const ProfileAlert = () => {
    return(
        <div className="container my-3">
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <i className="bi bi-check"></i> Your information has been registered.
                <button className="btn-close" data-bs-dismiss="alert"></button>
            </div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <i className="bi bi-x"></i> Check your information.
                <button className="btn-close" data-bs-dismiss="alert"></button>
            </div>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <i className="bi bi-question"></i> An unknown error has occurred. Try again.
                <button className="btn-close" data-bs-dismiss="alert"></button>
            </div>
        </div>
    );
};

export default ProfileAlert;