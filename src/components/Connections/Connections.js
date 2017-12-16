import React, {Component} from 'react';
import Card from '../Card/Card';



class Connections extends Component {
	render() {
		return (
			<div className="card" style={{width: "100%"}}>
			  <div className="card-header" style={{padding: "5px 0px 0px 10px"}}>
			  	<h4>Connections</h4>
			  </div>
			<div className="card-block container" style={{height: "500px", overflow: "auto", padding: "10px"}}>
				<div className="row">
				  	{this.props.data.map((card, index) => (
				  		<Card 	
				  			key={index} 
				  			displayName={card.displayName} 
				  			image={card.image}
				  			title={card.title}
				  			modal={this.props.modal}/>))}
				</div>
			  </div>
			</div>
		)
	}
}


export default Connections;