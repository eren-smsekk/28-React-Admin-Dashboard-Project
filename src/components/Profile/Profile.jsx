import ProfileBreadCrumb from "./ProfileBreadCrumb";
import ProfileButtonGroup from "./ProfileButtonGroup";
import ProfileAlert from "./ProfileAlert";
import ProfileUploadImage from "./ProfileUploadImage";
import ProfileEditSettings from "./ProfileEditSettings";

const Profile = () => {
    return(
        <div>
            <ProfileBreadCrumb />
            <div id="actions" className="mb-4">
                <ProfileButtonGroup />
                <ProfileAlert />
            </div>
            <div className="profileContent">
                <div className="container">
                    <div className="row">
                        <ProfileUploadImage />
                        <ProfileEditSettings />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;