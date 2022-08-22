import React from "react";

class Header extends React.Component {

	render() {
		return (
			<header className="header" style={{backgroundColor: '#141B3B', color: 'white', display: 'flex', justifyContent: "space-around", padding: '1.5rem'}}>
			<h1 style={{fontSize: '6rem'}}>Horned Beasts</h1>
			</header>
		)
	}	
}

export default Header;