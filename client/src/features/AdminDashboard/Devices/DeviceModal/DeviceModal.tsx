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

const DeviceModal = (props: Props) => {
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
                flexFlow: 'column wrap',
                justifyContent: 'center',
                alignContent: 'center',
            }}
            open={props.isOpen}
            onClose={handleClose}
        >
            <Box
                sx={{
                    maxWidth: '50%',
                    bgcolor: 'background.paper',
                    borderRadius: 2 / 1,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    sx={{ marginBottom: 2, width: '45vw' }}
                    variant='h3'
                    component='h2'
                >
                    User
                </Typography>

                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='Description'
                    variant='outlined'
                    // value={currentCarDto.model}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         model: e.target.value,
                    //     })
                    // }
                />
                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='Address'
                    variant='outlined'
                    // value={currentCarDto.model}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         model: e.target.value,
                    //     })
                    // }
                />
                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='Max hourly consumption'
                    variant='outlined'
                    // value={currentCarDto.model}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentCarDto({
                    //         ...currentCarDto,
                    //         model: e.target.value,
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

export default DeviceModal;
