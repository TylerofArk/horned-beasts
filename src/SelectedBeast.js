import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  
  render() {
    return (

      <div id="beast-modal">
        <Modal
          show={this.props.show}
          onHide={this.props.closeModal}
                   
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.selectedBeast.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description} title={this.props.selectedBeast.title}/>
            <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal} variant="info">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;