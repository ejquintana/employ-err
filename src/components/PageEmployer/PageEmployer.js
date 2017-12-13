import React from 'react';
import ModalSwipeEmployer from '../ModalSwipeEmployer/ModalSwipeEmployer';
import Dropdown from '../Dropdown/Dropdown';
import Matches from '../Matches/Matches';
import Connections from '../Connections/Connections';
import ProfileEmployer from '../ProfileEmployer/ProfileEmployer';




function PageEmployer() {
	return (
	<div className="container">
		<br />
		<div className='row'>
			<div className="col-md-3">
				<ProfileEmployer />
			</div>
			<div className="col-md-9">
				<Dropdown />
				<Matches />
				<Connections />
			</div>
		</div>
		<ModalSwipeEmployer />
		<br />
	</div>
	)
}




export default PageEmployer;