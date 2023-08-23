const ProfileButtonGroup = () => {
  return (
    <div className="sectionProfileButtonGroups bg-light py-3">
      <div className="container">
        <div className="row gap-2">
          <div className="col-12 col-md-4 text-center">
            <button className="btn btn-secondary">
              <i className="bi bi-arrow-left"></i> Back To Dashboard
            </button>
          </div>
          <div className="col-12 col-md-2 text-center">
            <button className="btn btn-danger">
              <i className="bi bi-lock-fill"></i> Change Password
            </button>
          </div>
          <div className="col-12 col-md-2 text-center">
            <button className="btn btn-danger">
              <i className="bi bi-trash3-fill"></i> Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileButtonGroup;
