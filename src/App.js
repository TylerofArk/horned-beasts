// This lab was done in collaboration with Daniel Awesome, Adriane Butler and Luis Rosales
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast';
import Data from './data.json';
import Form from 'react-bootstrap/Form';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      dataArray: Data,
      selectedBeast: {},
      selectedHornValue: "All"
    }
  }

  openBeastModal = (beast) => {
		this.setState({selectedBeast: beast});
		this.setState({show: true});
    // const selectedBeast = Data.find(beast => beast.title === name);
    // this.setState({selectedBeast, show:true});
  }

  // function for hide modal 
  closeModal = () => {
		this.setState({selectedBeast: {}});
    this.setState({show:false});
  }

	filterBeast=(e) => {
		let horns = e.target.value
		if (horns === 'all'){
			this.setState({dataArray:Data})
		} else if (horns === 'many') {
			let filteredData = Data.filter(x => x.horns > 3)
			this.setState({dataArray: filteredData})
		} else { let parsedHorns = parseInt(horns)
			let filteredData = Data.filter(x => x.horns === parsedHorns)
			this.setState({dataArray: filteredData})
		}
	}


  render() {
    return(
      <div id="app">
        <Header />
        <Form className="dropDownFilter">
            <Form.Label >Filter the gallery by number of horns</Form.Label>
            <Form.Select
              name="select"
              onChange={this.handleSelect}>
              <option value="all">All Horned Beasts</option>
              <option value="many">Beasts with more than 3 horns</option>
              <option value={2}>Beasts with 2 horns</option>
              <option value={1}>Beasts with 1 horn</option>
            </Form.Select>
          </Form>

        <Main 
          dataArray={this.state.dataArray}
          openModal={this.openBeastModal}
					filter={this.filterBeast}

        />
        <SelectedBeast
                showModal={this.state.show}
                closeModal={this.closeModal}
                selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
