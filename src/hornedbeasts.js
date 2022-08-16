import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

	constructor(props)
		{
			super(props);
			this.state = {clicked: 0};
		}

		addVote = () => {
			this.setState({clicked: this.state.clicked + 1});
		}

	render() {
		return (
			<Card className="horned-beast">
				<Card.Img onClick={this.addVote} variant="top" src={this.props.imageUrl} alt={this.props.description}
				          title={this.props.title}/>
				<Card.Body>
					<Card.Title>{this.props.title} ❤️{this.state.clicked}</Card.Title>
					<Card.Text>{this.props.description}</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

export default HornedBeast;