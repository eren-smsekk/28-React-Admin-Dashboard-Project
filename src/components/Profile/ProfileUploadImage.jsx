const ProfileUploadImage = () => {
    return(

            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                        <img src="/img/avatar.jpg" alt="" className="card-img-top p-1 rounded-pill shadow-sm" />
                        <div className="card-body d-grid">
                            <button className="btn btn-primary btn-lg">
                                <i className="bi bi-upload"></i> Upload Image
                            </button>
                        </div>
                    </div>
                </div>
            </div>

    );
};
export default ProfileUploadImage;