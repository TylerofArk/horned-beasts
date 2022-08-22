import React from "react";
import HornedBeast from "./HornedBeasts.js"
import data from "./data.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';

class Main extends React.Component {
	

	render() {
		return (
			<main style={{backgroundColor: '#164773'}}>
        <Container>
          <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>

				{
					data.map((beast) =>
					(<div key={beast._id}>
						<HornedBeast _id = {beast._id} imageUrl={beast.image_url} 
						title={beast.title} 
						description={beast.description} keyword = {beast.keyword} 
						horns = {beast.horns} 
						handleOpen={() =>this.props.openModal(beast)}/>
						</div>
					))}
					
					</Row>
        </Container>
      </main>

		)
	}
}

export default Main;