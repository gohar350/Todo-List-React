import React from "react";
import avatar from "../../assets/images/profile.jpg";

export default function Profile() {
  return (
    <>
      <div className="profile-img">
        <img src={avatar} alt="user profile image" />
      </div>
    </>
  );
}
