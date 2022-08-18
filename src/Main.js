import React from "react";
import HornedBeast from "./HornedBeasts.js"
import data from "./data.json"

class Main extends React.Component {
	

	render() {
		return (
<>
				{
					data.map((value) =>
					(
						<HornedBeast _id = {value._id} imageUrl={value.image_url} title={value.title} description={value.description} keyword = {value.keyword} horns = {value.horns} />
					))}
			</>
		)
	}
}

export default Main;