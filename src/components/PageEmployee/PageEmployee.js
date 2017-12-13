import React from 'react';
import ModalSwipeEmployee from '../ModalSwipeEmployee/ModalSwipeEmployee';
import Dropdown from '../Dropdown/Dropdown';
import Matches from '../Matches/Matches';
import Connections from '../Connections/Connections';
import ProfileEmployee from '../ProfileEmployee/ProfileEmployee';




function PageEmployee() {
	return (
	<div className="container">
		<br />
		<div className='row'>
			<div className="col-md-3">
				<ProfileEmployee />
			</div>
			<div className="col-md-9">
				<Dropdown />
				<Matches />
				<Connections />
			</div>
		</div>
		<ModalSwipeEmployee />
		<br />
	</div>
	)
}




export default PageEmployee;