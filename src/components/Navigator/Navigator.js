import React from 'react';
import { Link } from "react-router-dom";
import ButtonEmployeeLogin from '../ButtonEmployeeLogin/ButtonEmployeeLogin';
import ButtonEmployerLogin from '../ButtonEmployerLogin/ButtonEmployerLogin';
import ButtonLogout from '../ButtonLogout/ButtonLogout';

function Navigator() {

	return (
		<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Employ{'{err}'}</a>
		<ButtonEmployeeLogin />
		<ButtonEmployerLogin />
		<ButtonLogout />
	</nav>
	)
}


export default Navigator;