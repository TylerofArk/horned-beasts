// This lab was done in collaboration with Daniel Awesome, Adriane Butler and Jose Gonzalez
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './SelectedBeast';
import Data from './data.json';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      dataArray: Data,
      filteredHorns: Data,
      selectedBeast: {},
      selectedHornValue: "All"
    }
  }

  openBeastModal = (name) => {
    const selectedBeast = Data.find(beast => beast.title === name);
    this.setState({selectedBeast, show:true});
  }

  // function for hide modal 
  closeModal = () => {
    this.setState({show:false});
  }

  render() {
    return(
      <div id="app">
        <Header />


        <Main 
          dataArray={this.state.dataArray}
          openBeastModal={this.openBeastModal}

        />
        <SelectedBeast
                show={this.state.show}
                closeModal={this.closeModal}
                selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
