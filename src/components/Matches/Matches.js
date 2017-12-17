import React, {Component} from 'react';
import Card from '../Card/Card';



class Matches extends Component {


	render() {

		let array = this.props.data || [];

		return (
			<div className="card" style={{width: "100%", height: "70vh"}}>
			  <div className="card-header" style={{padding: "5px 0px 0px 10px"}}>
		  		<h4>Pending Matches...</h4>
			  </div>
			  <div className="card-block container" style={{height: "500px", overflow: "auto"}}>
			  	{}
			  	{array.map((card, index) => (
			  		<Card 	
			  			key={index} 
			  			displayName={card.displayName} 
			  			image={card.image}
			  			title={card.title}
			  			bio={card.bio}
			  			href={this.props.href}
			  			toggle={this.props.toggle}/>))}
			  </div>
			</div>
		)
	}
}


export default Matches;