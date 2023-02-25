import React from "react";


function ProfileBanner(props) {
    let {username, image} = props.user;
    return (
        <section className=" profile-banner">
            <div className="text-center">
  <figure className="banner-img">
  <img 
                
                src={image}
                alt={ username}
                />
  </figure>
                <h2>Annie</h2>
            </div>
            <div className="follow">
                <p> + Follow  &nbsp;
               {  username}</p>
            </div>
        </section>
    )
}

export default ProfileBanner