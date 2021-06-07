import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./ProfileItem.scss";

type Props = ProfileDataProps;

const ProfileItem: React.FC<Props> = ({ profileData }) => {
  const user = useContext(AuthContext);
  // const {photoURL} = user;
  const {
    firstname,
    lastname,
    email,
    mobileno,
    addresslineone,
    addresslinetwo,
    city,
    country,
    postcode,
  } = profileData;

  return (
    <>
      {user?.email === profileData.email && (
        <div className="profile-container">
          <div>
            <div>
              {/* <img src={user.photoURL} alt="" /> */}
              <h3>
                <span>Name: </span>
                {firstname} {lastname}
              </h3>
              <h5>
                <span>Email: </span>
                {email}
              </h5>
              <h5>
                <span>Mobile: </span>
                {mobileno}
              </h5>
              <h5>
                <span>Address: </span>
                {addresslineone},{addresslinetwo}, {city}, {country}-{postcode}
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileItem;
