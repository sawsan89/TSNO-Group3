import React, { Component } from 'react';
import logo from './Logo.png';
import BasicProfilePic from './basic-pf-pic.jpg';

class HiringPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            job:'',
            age:'',
            city:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleClick(event) {
        event.preventDefault();
        alert('Thank you for hiring me');

    };

    handleSubmit(event) {
        event.preventDefault();

        alert('Thank you for your feedback');
};

    render() {
        return (
            <>
<br></br><br></br>
            <div id="HiringPage">
            <img id='basicPic' src={BasicProfilePic} alt='ProfilePic'></img>
                <h3 id='userH'>Username : Yosef-Mag</h3>
                <h4 id='userHR'>Rating 4/5</h4>
                    <div id ="info">
                    <h4>Servers Description : Software Sngineer</h4>
                    <h4>Location : Jordan,Amman</h4>
                    <h4>$/H : 9$</h4>
                    </div>
                    <button id='hireBttn' onClick={this.handleClick}>Hire ME</button>
    <br></br><br></br>
                        <form onSubmit={this.handleSubmit}>
                            <label id="rateL"> Rate this user : 
                            <input id='rateIN' type="number" min="0" max="5" step="1" defaultValue='0'></input>
<br></br><br></br>
                        Give him feedback :
<br></br><br></br>
                        <textarea id='rateIM' name="message" rows="10" cols="30"></textarea> 
<br></br><br></br>
                                <input id='feedbackBttn' type="submit" value="Send FeedBack"></input>
                            </label>
                        </form>
            </div>
            {/* <img src={logo} alt='Logo' id='smallLogo'></img> */}
            </>
        );
    }
}

export default HiringPage;