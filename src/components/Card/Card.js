import React from 'react';
import './Cards.css';


function Card(props) {	
	return(
		<a className="card col-sm-6 col-md-3" data-toggle="modal" href={props.modal} style={{cursor: "pointer"}}>
		  <img className="card-img-top" src={props.image} alt="Card cap" height="350px"/>
		  <div className="card-block text-center" style={{height: "auto", padding: '10px'}}>
		    <h4 className="card-title">{props.displayName}</h4>
		    <p className="card-text">{props.title}</p>
		  </div>
		</a>
	)
	
}


export default Card;