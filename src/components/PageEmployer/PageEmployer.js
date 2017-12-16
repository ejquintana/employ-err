import React, {Component} from 'react';
import ModalSwipeEmployer from '../ModalSwipeEmployer/ModalSwipeEmployer';
import Dropdown from '../Dropdown/Dropdown';
import Matches from '../Matches/Matches';
import Connections from '../Connections/Connections';
import ProfileEmployer from '../ProfileEmployer/ProfileEmployer';
import Navigator from '../Navigator/Navigator';
import Footer from '../Footer/Footer';
import "./PageEmployer.css"



class PageEmployer extends Component {
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
				<Navigator />
				<div id="mySidenav" className="sidenav">
				  <a className="closebtn" onClick={() => this.closeNav()}>&times;</a>
				  <ProfileEmployer />
				</div>

				<span onClick={() => this.openNav()}>PROFILE</span>

				<div className="container" id="main" style={{height: "auto"}}>
					<div className="row">
						<Dropdown />
					</div>
					<div className='row'>
						<Matches />
					</div>
					<br />
					<div className="row">
						<Connections />
					</div>
					<ModalSwipeEmployer />
				</div>
				<Footer />
			</div>
		)
	}
}




export default PageEmployer;