import React, {Component} from 'react';
import Card from '../Card/Card';



class Connections extends Component {
	render() {
		return (
			<div className="card" style={{width: "100%", height: "70vh"}}>
			  <div className="card-header" style={{padding: "5px 0px 0px 10px"}}>
			  	<h4>Connections</h4>
			  </div>
			<div className="card-block container" style={{height: "500px", overflow: "auto"}}>
			  	{this.props.data.map((card, index) => (
			  		<Card 	
			  			key={index} 
			  			displayName={card.displayName} 
			  			image={card.image}
			  			title={card.title}
			  			bio={card.bio}
			  			email={card.email}
			  			toggle={this.props.toggle}
			  			href={this.props.href}/>))}
			  </div>
			</div>
		)
	}
}


export default Connections;