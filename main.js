import React from "react";
import HornedBeast from './HornedBeast.js'
import hornedBeastCow1 from './hornedBeastCow1.JPG'
import hornedBeastMoose2 from './hornedBeastMoose2.JPG'

class Main extends React.Component {

	render() {
		return (
			<main className="main">
				<HornedBeast h2title='Horned Beast - Cow' imgSrc={hornedBeastCow1} altTxt='Horned Cow' imgTitle='Horned Cow' description='A close-up shot of a cow starting straigh into the camera.'/>
				<HornedBeast h2title='Horned Beast - Moose' imgSrc={hornedBeastMoose2} altTxt='Horned Moose' imgTitle='Horned Moose' description='A close-up shot of a Moose standing in dense shrubs.'/>
			</main>
		)
	}
}

export default Main;