import React, { Component } from 'react';
import Navbar from './../Components/Navbar'
import Sidebar from './../Components/Sidebar'
import { Grid, Paper, Avatar, TextField, Typography, Link } from '@material-ui/core'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addCar } from './../Actions/carAction'




// const paperStyle = { padding: 20, height: '60vh', width: 680, margin: "20px auto" }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const btnstyle = { margin: '8px 0' }


class CarRegister extends Component {

  state = {
    id: "",
    img: "",
    model: "",
    dName: "",
    plateNo: "",
    selectedImage: null,
    modal: false,
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,

    });
  }
  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        selectedImage: img
        // URL.createObjectURL(img)
      });
    }
  };

  onSubmit = e => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("img", this.state.selectedImage)
    formData.append("model", this.state.model)
    formData.append("dName", this.state.dName)
    formData.append("plateNo", this.state.plateNo)
    // console.log(this.state.selectedImage);
    // console.log(this.state.model);
    // console.log(this.state.plateNo);

    // console.log(formData);


    // return
    // const newCar = {
    //   img: this.state.img,
    //   model: this.state.model,
    //   dName: this.state.dName,
    //   plateNo: this.state.plateNo,
    //   status: this.state.status
    // }

    //Add item Via addCar action
    // this.props.addCar(newCar);
    this.props.addCar(formData);
    this.setState({
      id: "",
      img: "",
      model: "",
      dName: "",
      plateNo: "",
    })

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className='flex '>
          <Sidebar />

          {/* Register Form */}
          <div className='mt-20 md:ml-40 sm:ml-20 ml-10 md:mr-4 sm:mr-4 sm:mr-4 mr-4  '>
            <Grid>
              <Paper elevation={10} className ="md:paperStyle sm:paperStyle2 " >
                <Grid align='center'>
                  <p className='text-2xl font-bold '> Register New Car </p><br />
                </Grid>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <div className='md:flex  '>
                      <div>
                        <div className=''>
                          <Label for='car'> Car Model: </Label>
                          <Input
                            placeholder='Enter Model'
                            type="text"
                            name="model"
                            onChange={this.onChange} />
                        </div>
                        <div className='mt-6 '>
                          <Label for='car'> Plate No: </Label>
                          <Input
                            placeholder='Enter Plate No'
                            type="text"
                            name="plateNo"
                            onChange={this.onChange} />
                        </div>
                      </div>
                      <div>
                        <div className='ml-8 '>
                          <Label for='car'> Driver Name: </Label>
                          <Input
                            placeholder='Enter Driver Name'
                            type="text"
                            name="dName"
                            onChange={this.onChange} />
                        </div>

                        <div className="card ml-8 mt-6 ">
                          <Label for="exampleFile">File</Label>
                          <Input type="file"
                            name="img"
                            onChange={this.onImageChange} />
                        </div>
                      </div>
                    </div>
                    <Button type="submit" onClick={this.toggle} color="dark" style={{ marginTop: '2rem' }} block > ADD </Button>
                  </FormGroup>
                </Form>
              </Paper>
            </Grid>
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          centered
        >
          <ModalHeader toggle={this.toggle} > Car Added! </ModalHeader>
          {/* <ModalBody>
                      
                    </ModalBody> */}
        </Modal>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  car: state.car
});


export default connect(mapStateToProps, { addCar })(CarRegister);