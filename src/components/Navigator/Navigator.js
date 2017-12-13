import React from 'react';
import ButtonEmployeeLogin from '../ButtonEmployeeLogin/ButtonEmployeeLogin';
import ButtonEmployerLogin from '../ButtonEmployerLogin/ButtonEmployerLogin';
import ButtonLogout from '../ButtonLogout/ButtonLogout';


function Navigator() {
	return (
	<nav className="navbar">
		<h4>Navbar shiz goes here...</h4>
		<ButtonEmployeeLogin />
		<ButtonEmployerLogin />
		<ButtonLogout />
	</nav>
	)
}


export default Navigator;