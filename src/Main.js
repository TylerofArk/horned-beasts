import React from "react";
import HornedBeast from "./HornedBeasts.js"
import data from "./data.json"
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {
	

	render() {
		return (
<div>

				{
					data.map((beast) =>
					(<div key={beast._id}>
						<HornedBeast _id = {beast._id} imageUrl={beast.image_url} title={beast.title} description={beast.description} keyword = {beast.keyword} horns = {beast.horns} />
						</div>
					))}

</div>
		)
	}
}

export default Main;