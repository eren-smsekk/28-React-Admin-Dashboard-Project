import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const ProfileEditSettings = () => {
  return (
        <div className="col-md-9">
            <h2 className="h2 my-3">Edit Profile</h2>
            <form className="was-validated">
                <div className="form-floating mb-3">
                    <input type="text" name="profileName" id="profileName" className="form-control" placeholder="Profile Name" required/>
                    <label className="form-check-label" htmlFor="profileName">Name</label>
                    <div className="invalid-feedback">
                        Please Enter Your Name.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" name="profileMail" id="profileMail" className="form-control" placeholder="Profile Mail" required />
                    <label className="form-check-label" htmlFor="profileMail">Email Address</label>
                    <div className="invalid-feedback">Please Enter Your Email Address.</div>
                </div>
            </form>
            <div className="mb-3">
                <label className="form-check-label" htmlFor="profileAbout"> Profile About </label>
                <div className="card">
                    <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                    />
                </div>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary">Save Changes</button>
            </div>
        </div>
    );
};

export default ProfileEditSettings;
