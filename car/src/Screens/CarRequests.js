import React, { useState, useEffect, Component } from 'react';
import Navbar from './../Components/Navbar'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { RequestData } from './../Data/RequestData';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import './../Css/DataTableDemo.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import Sidebar from '../Components/Sidebar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCars, deleteCar, getRequestedCars, approveCar } from '../Actions/carAction';
import { loadUser } from '../Actions/authActions';

class CarRequests extends Component {
    componentDidMount() {
        // this.props.getCars();
        this.props.getRequestedCars();
        this.props.loadUser();

    }
    toggle = id => {
        this.props.approveCar(this.props.car.requestedCars.requestedBy, id);
    }

    render() {
        const { requestedCars } = this.props.car

        const imageBodyTemplate = (requestedCars) => {
            return <img src={`${requestedCars.img}`} alt={requestedCars.image} height="300px" width="300px" className="car-image" />;
        }
        const buttonBodyTemplate = (requestedCars) => {
            return <Button disabled={requestedCars.isApproved ? true : false} onClick={this.toggle.bind(this, requestedCars._id)} size="small" className='p-button-success'> Approve </Button>;
        }
        const requestedByBodyTemplate = (requestedCars) => {
            return requestedCars.requestedBy
        }

        const header = (
            <div className="table-header">
                Requests
            </div>
        );
        const footer = `In total there are ${requestedCars ? requestedCars.length : 0} cars.`;

        const { token, user } = this.props.auth

        return (
            <div>
                <Navbar />

                <div className='flex '>
                    <Sidebar />
                    {/* Requests Table */}
                    <div className="datatable-templating-demo mt-20 md:ml-20 sm:ml-10 ml-4 w-2/3 border-1 drop-shadow-lg ">
                        <div className="card ">
                            <DataTable value={requestedCars} header={header} footer={footer} responsiveLayout="scroll">
                                <Column field="_id" header="Car Id" ></Column>
                                <Column field="img" header="Car Image" body={imageBodyTemplate}></Column>
                                <Column field="plateNo" header="plateNo"></Column>
                                <Column field="dName" header="Driver"></Column>
                                <Column field="" header="Requested By" body={requestedByBodyTemplate} ></Column>
                                {(user.name === "admin") ?
                                    <Column field="" header="Approve" body={buttonBodyTemplate}></Column>
                                    : null
                                }

                            </DataTable>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

CarRequests.propTypes = {
    getCars: PropTypes.func.isRequired,
    car: PropTypes.object.isRequired,
    approveCar: PropTypes.func.isRequired,
    // requestedCars: PropTypes.func.isRequired
    loadUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    car: state.car,
    auth: state.auth
    // requestedCar: state.car
})

export default connect(mapStateToProps, { getCars, deleteCar, getRequestedCars, approveCar, loadUser })(CarRequests);

// export default connect(mapStateToProps, { getRequestedCars })(CarRequests); 