import React from 'react';



function Card(props) {	
	return(
		<div className="card col-sm-6 col-md-3" style={{cursor: "pointer"}}>
		  <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/a/ae/RonSwanson.jpg" alt="Card cap" width="80px"/>
		  <div className="card-block text-center" style={{height: "auto", padding: '10px'}}>
		    <h4 className="card-title">{props.displayName}</h4>
		    <p className="card-text">{props.title}</p>
		  </div>
		</div>
	)
	
}


export default Card;