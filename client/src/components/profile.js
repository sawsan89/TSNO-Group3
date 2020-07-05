import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import logo from './Logo.png';
import BasicProfilePic from './basic-pf-pic.jpg';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
          name:'',
          email:'',
          job:'',
          age:'',
          city:''
        };
      }

      componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
          name: decoded.name,
          email: decoded.email
        })
      }

    render() {
        return (
          <>
<br></br><br></br>
              <div id='userProf'>
                <div>
                    <img id='basicPicP' src={BasicProfilePic} alt='ProfilePic'></img>
                    <h2>
                      <label id='userNameP'>Name : {this.state.name}</label>  
                    </h2>
                        <div id='pip'>      
                      <h3>personal information :</h3>
                    <li><label>email : </label>{this.state.email}</li>
                    <br></br>
                    <li><label>Job : </label>{this.state.job}</li>
                    <br></br>
                    <li><label>Age : </label>{this.state.age}</li>
                    <br></br>
                    <li><label>City : </label>{this.state.city}</li>
                    </div>
                </div>
        </div>
          <img src={logo} alt='Logo' id='smallLogo'></img>
        </>
    )
  }
}
export default Profile;


