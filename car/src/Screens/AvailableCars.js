import * as React from 'react';
import { Component } from 'react'
import Navbar from './../Components/Navbar'
import Sidebar from './../Components/Sidebar'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Cars } from './../Data/Cars'

import { connect } from 'react-redux';
import { getCars, deleteCar, getRequestedCars,requestCar } from '../Actions/carAction';
import { loadUser } from '../Actions/authActions';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input,
  Card, CardBody, CardTitle, CardSubtitle, CardText,
} from 'reactstrap';

class AvailableCars extends Component {

  state = {
    modal: false,
    // buttonStatus: "false"
  }
  toggle = (userId, carId) => {
    this.props.requestCar(userId,carId);
    this.setState({
      modal: !this.state.modal,
      // buttonStatus: !this.state.buttonStatus
    })
  }

  componentDidMount() {
    this.props.loadUser();
    this.props.getCars();
    this.props.getRequestedCars();

  }

  onDeleteClick = id => {
    this.props.deleteCar(id);
  }


  render() {
    const { cars } = this.props.car;

    const { token, user } = this.props.auth;

    const header = (
      <img alt="Card" src="https://primereact.org/images/usercard.png" />
    );
    const footer = (
      <div className="flex flex-wrap justify-content-end gap-2">
        <Button label="Save" icon="pi pi-check" />
        <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
      </div>
    );
    return (
      <div>
        <Navbar />
        <div className='flex '>
          <Sidebar />

          {/* Available Cars */}
          <div className='ml-12 mt-20 md:mr-8 sm:mr-8 mr-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pb-20 '>
            {cars.map((car) => (
              <div key={car._id} className=' '>
                <Card
                  style={{
                    maxWidth: 300
                  }} >
                  {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={car.img}
                    sx={{ maxHeight: 150, minWidth: 300 }}
                  /> */}
                  <img
                    alt="Sample"
                    src={car.img}
                    style={{ height: 150, maxWidth: 300 }}
                  />
                  <CardBody>
                    <CardTitle tag="h5">

                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >

                    </CardSubtitle>
                    <CardText>
                      <div> {car.model} </div>
                      <div> Driver: {car.dName} </div>
                      <div> Plate Number: {car.plateNo} </div> 
                      {/* <div> Requested by: {car["requestedBy"] } </div> */}

                    </CardText>

                    { (user.name == "admin" ) ? <Button onClick={this.onDeleteClick.bind(this, car._id)} size="small">
                      Remove Car
                    </Button>
                    : 
                    <Button disabled={car.isRequested ? true:false} onClick={this.toggle.bind(this, user._id, car._id) } size="small"> Request Car </Button>
                    }
                    

                    
                  </CardBody>

                  <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    centered
                  >
                    <ModalHeader toggle={this.toggle} > Request has been sent! </ModalHeader>
                    {/* <ModalBody>
                      
                    </ModalBody> */}
                  </Modal>


                  {/* <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                      {car.model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Driver: {car.dName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Plate Number: {car.plateNo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Status: {car.status}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"> Request Car </Button>
                  </CardActions>
                  <CardActions>
                    <Button onClick={this.onDeleteClick.bind(this, car._id)} size="small"> Remove Car </Button>
                  </CardActions> */}
                </Card>
              </div>
            )
            )}

          </div>
        </div>

      </div>
    )
  }
}

AvailableCars.propTypes = {
  getCars: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
  // requestedCars: PropTypes.func.isRequired,
  requestCar: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  car: state.car,
  auth: state.auth
  // requestCar: state.requestCar
  
})

export default connect(mapStateToProps, { getCars, deleteCar, getRequestedCars, requestCar, loadUser })(AvailableCars);