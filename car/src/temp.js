import * as React from 'react';
import { Component } from 'react'
import Navbar from './../Components/Navbar'
import Sidebar from './../Components/Sidebar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Cars } from './../Data/Cars'
import { connect } from 'react-redux';
import { getCars, deleteCar } from '../Actions/carAction';
import PropTypes from 'prop-types';

class AvailableCars extends Component {

  componentDidMount() {
    this.props.getCars();
  }

  onDeleteClick = id => {
    this.props.deleteCar(id);
}


  render() {
    const { cars } = this.props.car;
    return (
      <div>
        <Navbar />
        <div className='flex '>
          <Sidebar />

          {/* Available Cars */}
          <div className='ml-12 mt-40 grid grid-cols-3 gap-4 pb-20 '>
            {cars.map((car) => (
                <div key={car._id} className='border border-red-500 drop-shadow-sm '>
                  <Card sx={{ maxWidth: 300 }} >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={car.img}
                      sx={{ maxHeight: 150, minWidth: 300 }}
                    />
                    <CardContent >
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
                      <Button onClick = {this.onDeleteClick.bind(this, car._id)} size="small"> Remove Car </Button>
                    </CardActions>
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
}

const mapStateToProps = (state) => ({
  car: state.car
})

export default connect(mapStateToProps, { getCars, deleteCar })(AvailableCars);