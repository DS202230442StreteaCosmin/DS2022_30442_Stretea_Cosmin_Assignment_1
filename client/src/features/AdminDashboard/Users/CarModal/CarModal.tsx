import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material';
import Alert from '@mui/material/Alert';
import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { useAppDispatch, useAppSelector } from '../../../../stores/store';
// import { setCurrentCar } from '../../../../stores/car/slice';
// import { Manufacturer } from '../../../../models/entities/Manufacturer';
// import { BodyType } from '../../../../models/enums/BodyType';
// import { CarDto } from '../../../../models/dto/CarDto';
// import { FuelType } from '../../../../models/enums/FuelType';
// import { Car } from '../../../../models/entities/Car';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    // onSubmit: (id: number, car: CarDto) => void;
    onSubmit: (id: number, car: object) => void;
};

// const initialStateCarDto: CarDto = {
//     model: '',
//     manufacturerId: 0,
//     body: BodyType.Sedan,
//     mileage: 0,
//     seats: 0,
//     weight: 0,
//     vin: '',
//     hp: 0,
//     yearOfManufacture: 0,
//     price: 0,
//     fuelType: FuelType.Electric,
// };

const CarModal = (props: Props) => {
    // const [currentCarDto, setCurrentCarDto] =
    // React.useState<CarDto>(initialStateCarDto);

    // const reduxCurrentCar = useAppSelector((state) => state.car.currentCar);
    // const manufacturers = useAppSelector(
    //     (state) => state.manufacturer.manufacturers
    // );
    const [carId, setCarId] = React.useState(0);
    const [error, setError] = React.useState(false);
    // const dispatch = useAppDispatch();

    // Object.entries(BodyType)
    // console.log(
    //   "🚀 ~ file: CarModal.tsx ~ line 56 ~ CarModal ~ Object.entries(BodyType)",
    //   Object.entries(BodyType)
    // );

    // React.useEffect(() => {
    //     if (reduxCurrentCar.id) {
    //         setCarId(reduxCurrentCar.id);
    //         setCurrentCarDto({
    //             model: reduxCurrentCar.model,
    //             manufacturerId: reduxCurrentCar.manufacturer.id,
    //             body: reduxCurrentCar.body,
    //             mileage: reduxCurrentCar.mileage,
    //             seats: reduxCurrentCar.seats,
    //             weight: reduxCurrentCar.weight,
    //             vin: reduxCurrentCar.vin,
    //             hp: reduxCurrentCar.hp,
    //             yearOfManufacture: reduxCurrentCar.yearOfManufacture,
    //             price: reduxCurrentCar.price,
    //             fuelType: reduxCurrentCar.fuelType,
    //         });
    //     } else {
    //         setCarId(0);
    //         setCurrentCarDto(initialStateCarDto);
    //     }
    // }, [reduxCurrentCar]);

    const handleSubmitAction = () => {
        checkInputErrors();
        clearInputs();
        // props.onSubmit(carId, currentCarDto);
        props.onClose();
    };

    const clearInputs = () => {
        // setCurrentCarDto(initialStateCarDto);
        // dispatch(setCurrentCar({} as Car));
        setError(false);
    };

    const checkInputErrors = () => {
        // if (
        //     !currentCarDto.hp ||
        //     !currentCarDto.model ||
        //     !currentCarDto.vin ||
        //     !currentCarDto.weight ||
        //     !currentCarDto.yearOfManufacture
        // ) {
        //     setError(true);
        //     return;
        // }
        setError(false);
    };

    const handleClose = () => {
        // setError(false);
        props.onClose();
    };

    return (
        <Modal
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
            open={props.isOpen}
            onClose={handleClose}
        >
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 2 / 1,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'scroll',
                }}
            >
                <Typography
                    sx={{ marginBottom: 2, width: '45vw' }}
                    variant='h3'
                    component='h2'
                >
                    Car
                </Typography>

                {/* <DateTimePicker
          disablePast
          ampm={false}
          label="Date&Time picker"
          value={date}
          onChange={setDate}
          renderInput={(params) => <TextField {...params} />}
        /> */}

                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='Model'
                    variant='outlined'
                    // value={currentCarDto.model}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         model: e.target.value,
                    //     })
                    // }
                />
                {/* <TextField
          sx={{ marginBottom: 2 }}
          label="Message"
          multiline
          rows={5}
          variant="outlined"
          value={message}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(event.target.value)
          }
        /> */}
                <FormControl fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>
                    <InputLabel id='demo-simple-select-label'>
                        Manufacturer
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        // defaultValue={currentCarDto.manufacturerId}
                        // value={currentCarDto.manufacturerId}
                        // label='Manufacturer'
                        // onChange={(e) => {
                        //     setCurrentCarDto({
                        //         ...currentCarDto,
                        //         manufacturerId: +e.target.value,
                        //     });
                        // }}
                    >
                        {/* {manufacturers.map((e) => (
                            <MenuItem value={e.id}>{e.name}</MenuItem>
                        ))} */}
                    </Select>
                </FormControl>
                <FormControl
                    fullWidth
                    sx={{
                        marginTop: 2,
                        marginBottom: 2,
                    }}
                >
                    <InputLabel id='demo-simple-select-label'>Body</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        // defaultValue={currentCarDto.body}
                        // value={currentCarDto.body}
                        // label='Body'
                        // onChange={(e) => {
                        //     setCurrentCarDto({
                        //         ...currentCarDto,
                        //         body: +e.target.value,
                        //     });
                        // }}
                    >
                        {/* {Object.entries(BodyType)
                            .slice(Object.entries(BodyType).length / 2)
                            .map(([key, value]) => (
                                <MenuItem value={value} key={key}>
                                    {key}
                                </MenuItem>
                            ))} */}
                    </Select>
                </FormControl>
                <FormControl
                    fullWidth
                    sx={{
                        marginTop: 2,
                        marginBottom: 2,
                    }}
                >
                    <InputLabel id='demo-simple-select-label'>
                        Fuel Type
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        // value={currentCarDto.fuelType}
                        // defaultValue={currentCarDto.fuelType}
                        // label='Fuel type'
                        // onChange={(e) => {
                        //     setCurrentCarDto({
                        //         ...currentCarDto,
                        //         fuelType: +e.target.value,
                        //     });
                        // }}
                    >
                        {/* {Object.entries(FuelType)
              .slice(Object.entries(FuelType).length / 2)
              .map(([key, value]) => (
                <MenuItem value={value} key={key}>
                  {key}
                </MenuItem>
              ))} */}
                    </Select>
                </FormControl>
                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='Mileage'
                    variant='outlined'
                    // value={currentCarDto.mileage}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         mileage: +e.target.value,
                    //     })
                    // }
                />
                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='Seats'
                    variant='outlined'
                    // value={currentCarDto.seats}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         seats: +e.target.value,
                    //     })
                    // }
                />
                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='Weight'
                    variant='outlined'
                    // value={currentCarDto.weight}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         weight: +e.target.value,
                    //     })
                    // }
                />
                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='HP'
                    variant='outlined'
                    // value={currentCarDto.hp}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         hp: +e.target.value,
                    //     })
                    // }
                />
                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='Year of manufacture'
                    variant='outlined'
                    // value={currentCarDto.yearOfManufacture}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         yearOfManufacture: +e.target.value,
                    //     })
                    // }
                />
                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='Price'
                    variant='outlined'
                    // value={currentCarDto.price}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         price: +e.target.value,
                    //     })
                    // }
                />
                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='VIN'
                    variant='outlined'
                    // value={currentCarDto.vin}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         vin: e.target.value,
                    //     })
                    // }
                />
                {error && (
                    <Alert severity='error'>
                        Invalid input data. Please check it again!
                    </Alert>
                )}
                <Button
                    sx={{ marginTop: 2, textTransform: 'none' }}
                    variant='contained'
                    color='primary'
                    onClick={handleSubmitAction}
                >
                    Submit
                </Button>
            </Box>
        </Modal>
    );
};

export default CarModal;
