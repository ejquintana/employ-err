import React from 'react';
import './Cards.css';


function Card(props) {	
	return (
		<a className="row displayCard" data-toggle={props.toggle} href={props.toggle ? props.href : `${props.href}${props.email}?Subject=Employerr%20App%20Connection`}>
			<div className="col-sm-4 text-center">
				<img src={props.image} alt="user" height="70px" style={{borderRadius: "100%"}}/>
			</div>
			<div className="col-sm-8" style={{lineHeight: "5px", paddingTop: "10px"}}>
		    	<p>{props.displayName}</p>
		    	<p>{props.title}</p>
		    	<p>{props.bio}</p>
			</div>
		</a>
	)
	
}


export default Card;