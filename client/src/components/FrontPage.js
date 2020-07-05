import  React, {Component } from 'react';
import logo from './Logo.png';

class FrontPage extends Component {
    constructor(){
        super();
        this.submitClick = this.submitClick.bind(this);
    };

    submitClick(event){
        event.preventDefault();
        alert('Searching Result');
    }; 

    render() { 
        return (
            <>
            <div className = "HomePage">
<br></br><br></br>
                <form id='search' onSubmit={this.submitClick}>
                    <label className="searchL"> Search By Name
                        <input className="searchI" type="search"></input>
                        <input className="searchBttn" type="submit" value="Search"></input>
                    </label>
<br></br><br></br>
                    <label className="searchL"> Search By Serves
                        <input className="searchI" type="search"></input>
                        <input className="searchBttn" type="submit" value="Search"></input>
                    </label>
                </form>
                <table id='serves'>
                    <thead>
                        <tr>
                            <th id='heder'>Available services</th>
                        </tr> 
                    </thead>
                    <tbody id="body">
                        <tr>
                            <td id='left'>service 1</td>
                        </tr>
                        <tr>
                            <td id='leftC'>service 2</td>
                        </tr>
                        <tr>
                            <td id='rightC'>service 3</td>
                        </tr>
                        <tr>
                            <td id='right'>service 4</td>
                        </tr>
                    </tbody>
                    </table>
                    <img src={logo} alt='Logo' id='smallLogo'></img>
            </div>
            </>
        );
    }
}

export default FrontPage;