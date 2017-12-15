import React, {Component} from 'react';
import ModalSwipeEmployee from '../ModalSwipeEmployee/ModalSwipeEmployee';
import Matches from '../Matches/Matches';
import Connections from '../Connections/Connections';
import ProfileEmployee from '../ProfileEmployee/ProfileEmployee';
import "./PageEmployee.css"



class PageEmployee extends Component {
	state = {}

	openNav = () => {
		document.getElementById("mySidenav").style.width = "450px";
	}

	closeNav = () => {
		document.getElementById("mySidenav").style.width = "0px";
	}

	render () {
		return (
			<div>
				<div id="mySidenav" className="sidenav">
				  <a className="closebtn" onClick={() => this.closeNav()}>&times;</a>
				  <ProfileEmployee />
				</div>

				<span onClick={() => this.openNav()}>PROFILE</span>

				<div className="container" id="main" style={{height: "auto"}}>
					<div className='row'>
						<Matches />
					</div>
					<br />
					<div className="row">
						<Connections />
					</div>
					<ModalSwipeEmployee />
				</div>
			</div>
		)
	}
}




export default PageEmployee;





