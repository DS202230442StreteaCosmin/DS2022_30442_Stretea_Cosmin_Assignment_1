import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Grid } from '@mui/material';
// import { useAppDispatch, useAppSelector } from '../../../stores/store';
// import CarItem from './CarItem/CarItem';
// import { deleteCar, setCurrentCar } from '../../../stores/car/slice';
// import { Car } from '../../../models/entities/Car';
// import CarModal from './CarModal/CarModal';
// import { CarDto } from '../../../models/dto/CarDto';
// import {
//     addCarAction,
//     deleteCarAction,
//     updateCarAction,
// } from '../../../stores/car/actions';
// import { setCarModal } from '../../../stores/user/slice';
// import { initialCarEntityState } from '../../../stores/car/state';

const AdminCars = () => {
    // const cars = useAppSelector((state) => state.car.cars);
    // const searchCriteria = useAppSelector((state) => state.user.searchInput);
    // const dispatch = useAppDispatch();
    // const modal = useAppSelector((state) => state.user.isCarModalOpen);

    // const deleteHandler = (id: number) => {
    //     dispatch(deleteCarAction(id));
    // };

    // const editHandler = (car: Car) => {
    //     dispatch(setCurrentCar(car));
    //     dispatch(setCarModal(true));
    // };

    // const submitHandler = (id: number, car: CarDto) => {
    //     id ? dispatch(updateCarAction(id, car)) : dispatch(addCarAction(car));
    // };

    // if (!cars.length) {
    //     return <>No data</>;
    // }

    return (
        <>
            <Box>
                <Button
                    size='large'
                    sx={{ marginBottom: 2, border: '1px solid grey' }}
                    onClick={() => {
                        // dispatch(setCurrentCar(initialCarEntityState));
                        // dispatch(setCarModal(true));
                    }}
                >
                    Add new car
                </Button>
            </Box>
            <Grid container spacing={4}>
                {/* {cars
          .filter(
            (e) =>
              e.manufacturer.name.includes(searchCriteria) ||
              e.model.includes(searchCriteria)
          )
          .map((car) => (
            <CarItem
              key={car.id}
              id={car.id}
              title={`${car.manufacturer.name} ${car.model}`}
              description={`${car.price} EUR`}
              onDelete={() => deleteHandler(car.id)}
              onEdit={() => editHandler(car)}
            />
          ))} */}
            </Grid>
            {/* <CarModal
                isOpen={modal}
                onClose={() => dispatch(setCarModal(false))}
                onSubmit={submitHandler}
            /> */}
        </>
    );
};

export default AdminCars;
