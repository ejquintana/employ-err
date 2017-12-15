import React from 'react';
// import { Link } from "react-router-dom";
import ButtonEmployeeLogin from '../ButtonEmployeeLogin/ButtonEmployeeLogin';
import ButtonEmployerLogin from '../ButtonEmployerLogin/ButtonEmployerLogin';
import ButtonLogout from '../ButtonLogout/ButtonLogout';
import "./Navigator.css";

function Navigator() {

	return (
		<nav className="navbar navbar navbar-dark bg-dark">
	  		<a className="navbar-brand" href="/">Employ{'{err}'}</a>
	  		<div className="justify-content-end">
				<ButtonEmployeeLogin />
				<ButtonEmployerLogin />
				<ButtonLogout />
			</div>
		</nav>
	)
}


export default Navigator;