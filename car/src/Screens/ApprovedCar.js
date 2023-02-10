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
import { getCars, deleteCar, getRequestedCars, getApprovedCar } from '../Actions/carAction';
import { loadUser } from '../Actions/authActions';

class ApprovedCar extends Component {
    componentDidMount() {
        // this.props.getCars();
        this.props.getApprovedCar();
        this.props.loadUser();
    
      }

    render() {
        const { approvedCar } = this.props.car

        const imageBodyTemplate = (approvedCar) => {
            return <img src={`${approvedCar.img}`} alt={approvedCar.image} height="300px" width="300px" className="car-image" />;
        }

        const header = (
            <div className="table-header">
                Approval Form
            </div>
        );
        // const footer = `In total there are ${approvedCar ? approvedCar.length : 0} cars.`;


        return (
            <div>
                <Navbar />

                <div className='flex '>
                    <Sidebar />
                    {/* Requests Table */}
                    <div className="datatable-templating-demo mt-20 md:ml-20 sm:ml-10 ml-4 w-2/3 border-1 drop-shadow-lg ">
                        <div className="card ">
                            <DataTable value={approvedCar} header={header}  responsiveLayout="scroll">
                                <Column field="_id" header="Car Id" ></Column>
                                <Column field="img" header="Car Image" body={imageBodyTemplate}></Column>
                                <Column field="plateNo" header="plateNo"></Column>
                                <Column field="dName" header="Driver"></Column>
                                <Column field="isApproved" header="Approval"></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

ApprovedCar.propTypes = {
    getCars: PropTypes.func.isRequired,
    car: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired,
    // requestedCars: PropTypes.func.isRequired
  }
  
  const mapStateToProps = (state) => ({
    car: state.car,
    // requestedCar: state.car
  })
  
  export default connect(mapStateToProps, { getCars, deleteCar, getRequestedCars, getApprovedCar, loadUser })(ApprovedCar);

// export default connect(mapStateToProps, { getRequestedCars })(CarRequests); 