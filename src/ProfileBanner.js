import React from "react";
import ToggleFollowButton from "./ToggleFollowButton";
import { PROFILE_URL } from "./utils/constant";
import { withRouter } from "react-router-dom";

class ProfileBanner extends React.Component {

    state = {
        profile: {},
        error: null,
      };

      
      componentDidMount() {
      
        let {username} = this.props.match &&  this.props.match.params;//username from slug

        let {user} = this.props;//current user
   
        let token = user ? 'Token ' + user.token : '';
        fetch(PROFILE_URL + '/' + username, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        })
          .then((res) => {
            if (!res.ok) {
              return Promise.reject('Unable to fetch profile!');
            }
            return res.json();
          })
          .then((profile) => {
       
            this.setState({ profile: profile.profile })} )
          .catch((error) => this.setState({ error }));
      }

      render() {
        let {username, image} = this.state.profile;
       
        return (
            <section className=" profile-banner">
                <div className="text-center">
      <figure className="banner-img">
      <img 
                    
                    src={image}
                    alt={ username}
                    />
      </figure>
                    <h2>{username}</h2>
                </div>
                <div className="text-right pr-60">
              <ToggleFollowButton
                profile={this.state.profile}
              />
            </div>
            </section>
        )
      }
 
}

export default withRouter(ProfileBanner)