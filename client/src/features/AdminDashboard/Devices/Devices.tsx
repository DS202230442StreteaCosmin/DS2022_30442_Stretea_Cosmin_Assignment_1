import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Grid } from '@mui/material';
import SearchSelect from '../../../components/SearchSelect/SearchSelect';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeviceModal from './DeviceModal/DeviceModal';
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

const Devices = () => {
    // const cars = useAppSelector((state) => state.car.cars);
    const cars = [
        {
            id: 1,
            description: 'desc1',
            address: 'obs. ap3, floor 2',
            maxHourlyConsumption: 23,
        },
        {
            id: 2,
            description: 'desc2',
            address: 'obs. ap2, floor 2',
            maxHourlyConsumption: 54,
        },
        {
            id: 3,
            description: 'desc3',
            address: 'obs. ap2, floor 2',
            maxHourlyConsumption: 72,
        },
        {
            id: 4,
            description: 'desc4',
            address: 'obs. ap4, floor 2',
            maxHourlyConsumption: 12,
        },
        {
            id: 5,
            description: 'desc5',
            address: 'obs. ap55, floor 2',
            maxHourlyConsumption: 52,
        },
        {
            id: 6,
            description: 'desc6',
            address: 'obs. ap1, floor 2',
            maxHourlyConsumption: 35,
        },
        {
            id: 7,
            description: 'desc7',
            address: 'obs. ap2, floor 2',
            maxHourlyConsumption: 71,
        },
        {
            id: 8,
            description: 'desc8',
            address: 'obs. ap35, floor 2',
            maxHourlyConsumption: 12,
        },
    ];
    // const searchCriteria = useAppSelector((state) => state.user.searchInput);
    // const dispatch = useAppDispatch();
    // const modal = useAppSelector((state) => state.user.isCarModalOpen);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

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
                {/* <SearchSelect options={top100Films} /> */}
                <Button
                    size='large'
                    sx={{ marginBottom: 2, border: '1px solid grey' }}
                    // onClick={() => {
                    // dispatch(setCurrentCar(initialCarEntityState));
                    // dispatch(setCarModal(true));
                    // }}
                    onClick={() => setIsModalOpen(true)}
                >
                    Add new device
                </Button>
            </Box>
            {/* <Grid container spacing={4}>
                {cars
                      .filter(
                        (e) =>
                          e.manufacturer.name.includes(searchCriteria) ||
                          e.model.includes(searchCriteria)
                      )
                    .map((car) => (
                        <CarItem
                            key={car.id}
                            id={car.id}
                            title={car.email}
                            description={car.name}
                            onDelete={() => {}}
                            onEdit={() => {}}
                        />
                    ))}
            </Grid> */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align='right'>Descritpion</TableCell>
                            <TableCell align='right'>Address</TableCell>
                            <TableCell align='right'>
                                Max Hourly Consumption
                            </TableCell>
                            <TableCell align='right'>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cars.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component='th' scope='row'>
                                    {row.id}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.description}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.address}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.maxHourlyConsumption}
                                </TableCell>
                                <TableCell align='right'>
                                    <>
                                        <IconButton aria-label='delete'>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label='delete'>
                                            <DeleteIcon />
                                        </IconButton>
                                    </>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeviceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={() => {}}
            />
        </>
    );
};

export default Devices;
