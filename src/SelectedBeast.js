import React from 'react';
import {Button, Modal} from "react-bootstrap";

class SelectedBeast extends React.Component

{
	render() {
		return(
			<Modal show={this.props.show} onHide={this.props.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.beast.title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<img src={this.props.beast.imageURL} alt={this.props.beast.desciption} className="img-fluid"/>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="primary" onClick={this.props.handleClose}></Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

export default SelectedBeast;