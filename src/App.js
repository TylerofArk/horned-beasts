// This lab was done in collaboration with Luis Rosales
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from "./SelectedBeast"
import React from 'react';

class App extends React.Component {

	constructor(props)
{
	super(props);
	this.state = {
		show: false,
		currentBeast: {title: "", imageUrl: "", description: ""}
	};
}

handleOpenModal = (title, imageUrl, description) =>
{
	this.setState({show: true, currentBeast: {title: title, imageUrl: imageUrl, description: description}});
};

handleCloseModal = () =>
{
	this.setState({show: false, currentBeast: this.state.currentBeast});
};

render () {
  return (
    <div className="App">
			<Header />

			<Main />
					openBeastModal={this.openBeastModal}

			<SelectedBeast />
					show={this.state.show}
          closeModal={this.closeModal}
          selectedBeast={this.state.selectedBeast}

			<Footer />
    </div>
  );
 }
}
export default App;
