import React from 'react';
import Card from '../Card/Card';


function Matches() {
	return (
		<div className="card" style={{width: "100%"}}>
		  <div className="card-header" style={{padding: "5px 0px 0px 10px"}}>
	  		<h4>Pending Matches...</h4>
		  </div>
		  <div className="card-block container" style={{height: "500px", overflow: "auto", padding: "10px"}}>
		  	<div className="row">
			  	<Card displayName="Ron Swanson" title="Full Stack Web Ninja"/>
			  	<Card displayName="Ron Swanson" title="Full Stack Web Ninja"/>
			  	<Card displayName="Ron Swanson" title="Full Stack Web Ninja"/>
			  	<Card displayName="Ron Swanson" title="Full Stack Web Ninja"/>
			</div>
		  </div>
		</div>
	)
}


export default Matches;