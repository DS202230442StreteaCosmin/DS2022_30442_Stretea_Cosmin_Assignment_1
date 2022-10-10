import React from 'react';

import { Box, Button, CardActionArea, Grid } from '@mui/material';
// import { useAppDispatch, useAppSelector } from '../../../stores/store';
// import { deleteCar, setCurrentCar } from '../../../stores/car/slice';

// import { setAppModal, setCarModal } from '../../../stores/user/slice';
// import { initialCarEntityState } from '../../../stores/car/state';
// import { Appointment } from '../../../models/entities/Appointment';
// import AppointmentCard from './AppointmentCard/AppointmentCard';
// import {
//     addAppointmentAction,
//     deleteAppointmentAction,
//     updateAppointmentAction,
// } from '../../../stores/appointments/actions';
// import { setCurrentAppointment } from '../../../stores/appointments/slice';
// import { AppointmentDto } from '../../../models/dto/AppointmentDto';
// import AppointmentModal from './AppointmentModal/AppointmentModal';
// import { appointmentEntityInitialState } from '../../../stores/appointments/state';

const AdminAppointments = () => {
    // const appointments = useAppSelector(
    //     (state) => state.appointment.appointments
    // );
    // const searchCriteria = useAppSelector((state) => state.user.searchInput);
    // const dispatch = useAppDispatch();
    // const modal = useAppSelector((state) => state.user.isAppModalOpen);

    const deleteHandler = (id: number) => {
        // dispatch(deleteAppointmentAction(id));
    };

    const editHandler = (app: object) => {
        // dispatch(setCurrentAppointment(app));
        // dispatch(setAppModal(true));
    };

    const submitHandler = (id: number, app: object) => {
        // id
        //     ? dispatch(updateAppointmentAction(id, app))
        //     : dispatch(addAppointmentAction(app));
    };

    // const getIsFiltered = (element: Appointment | undefined) => {
    //     if (!element) {
    //         return false;
    //     }

    //     return (
    //         element.car.manufacturer.name.includes(searchCriteria) ||
    //         element.car.model.includes(searchCriteria) ||
    //         element.date.includes(searchCriteria)
    //     );
    // };

    // if (!appointments.length) {
    //     return <>No data</>;
    // }

    return (
        <>
            <Box>
                <Button
                    size='large'
                    sx={{ marginBottom: 2, border: '1px solid grey' }}
                    onClick={() => {
                        // dispatch(
                        //     setCurrentAppointment(appointmentEntityInitialState)
                        // );
                        // dispatch(setAppModal(true));
                    }}
                >
                    Add new appointment
                </Button>
            </Box>
            <Grid container spacing={4}>
                {/* {appointments
          .filter((e) => getIsFiltered(e))
          .map((e) => (
            <AppointmentCard
              key={e.id}
              id={e.id}
              title={`${e.car.manufacturer.name} ${e.car.model}`}
              description={new Date(e.date).toLocaleString()}
              onDelete={() => deleteHandler(e.id)}
              onEdit={() => editHandler(e)}
            />
          ))} */}
            </Grid>
            {/* <AppointmentModal
                isOpen={modal}
                onClose={() => dispatch(setAppModal(false))}
                onSubmit={submitHandler}
            /> */}
        </>
    );
};

export default AdminAppointments;
