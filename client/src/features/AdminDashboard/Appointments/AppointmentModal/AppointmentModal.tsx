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
// import { useDispatch, useSelector } from "react-redux";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { useAppDispatch, useAppSelector } from "../../../../stores/store";
// import { setCurrentCar } from "../../../../stores/car/slice";
// import { Manufacturer } from "../../../../models/entities/Manufacturer";
// import { BodyType } from "../../../../models/enums/BodyType";
// import { CarDto } from "../../../../models/dto/CarDto";
// import { FuelType } from "../../../../models/enums/FuelType";
// import { Car } from "../../../../models/entities/Car";
// import { AppointmentDto } from "../../../../models/dto/AppointmentDto";
// import { setCurrentAppointment } from "../../../../stores/appointments/slice";
// import { Appointment } from "../../../../models/entities/Appointment";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (id: number, app: object) => void;
};

const initialStateAppDto = {
    carId: 0,
    userId: 0,
    phoneNumber: '',
    date: new Date().toISOString(),
    message: '',
};

const AppointmentModal = (props: Props) => {
    // const [currentAppDto, setCurrentAppDto] =
    //     React.useState(initialStateAppDto);

    // const reduxCurrentAppointment = useAppSelector(
    //     (state) => state.appointment.currentAppointment
    // );
    // const manufacturers = useAppSelector(
    //   (state) => state.manufacturer.manufacturers
    // );
    const [appId, setAppId] = React.useState(0);
    const [error, setError] = React.useState(false);
    // const dispatch = useAppDispatch();

    // Object.entries(BodyType)
    // console.log(
    //   "🚀 ~ file: CarModal.tsx ~ line 56 ~ CarModal ~ Object.entries(BodyType)",
    //   Object.entries(BodyType)
    // );

    // React.useEffect(() => {
    // if (reduxCurrentAppointment.id) {
    //     setAppId(reduxCurrentAppointment.id);
    //     setCurrentAppDto({
    //         carId: reduxCurrentAppointment.car.id,
    //         userId: reduxCurrentAppointment.user.id,
    //         phoneNumber: reduxCurrentAppointment.phoneNumber,
    //         date: reduxCurrentAppointment.date,
    //         message: reduxCurrentAppointment.message,
    //     });
    // } else {
    //     setAppId(0);
    //     setCurrentAppDto(initialStateAppDto);
    // }
    // }, [reduxCurrentAppointment]);

    const handleSubmitAction = () => {
        checkInputErrors();
        clearInputs();
        // props.onSubmit(appId, currentAppDto);
        props.onClose();
    };

    const clearInputs = () => {
        // setCurrentAppDto(initialStateAppDto);
        // dispatch(setCurrentAppointment({} as Appointment));
        setError(false);
    };

    const checkInputErrors = () => {
        // if (
        //     !currentAppDto.message ||
        //     !currentAppDto.phoneNumber ||
        //     !currentAppDto.date ||
        //     !currentAppDto.carId ||
        //     !currentAppDto.userId
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
                    Appointment
                </Typography>

                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='User Id'
                    variant='outlined'
                    // value={currentAppDto.userId}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentAppDto({
                    //         ...currentAppDto,
                    //         userId: +e.target.value,
                    //     })
                    // }
                />
                <TextField
                    sx={{ marginBottom: 4, marginTop: 2 }}
                    label='Car Id'
                    variant='outlined'
                    // value={currentAppDto.carId}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentAppDto({
                    //         ...currentAppDto,
                    //         carId: +e.target.value,
                    //     })
                    // }
                />

                {/* <DateTimePicker
                    disablePast
                    ampm={false}
                    label='Date&Time picker'
                    value={new Date(currentAppDto.date)}
                    onChange={(e) =>
                        setCurrentAppDto({
                            ...currentAppDto,
                            date: e?.toISOString() ?? new Date().toISOString(),
                        })
                    }
                    renderInput={(params) => <TextField {...params} />}
                /> */}

                <TextField
                    sx={{ marginBottom: 2, marginTop: 4 }}
                    label='Phone'
                    variant='outlined'
                    // value={currentAppDto.phoneNumber}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentAppDto({
                    //         ...currentAppDto,
                    //         phoneNumber: e.target.value,
                    //     })
                    // }
                />

                <TextField
                    sx={{ marginBottom: 2, marginTop: 2 }}
                    label='Message'
                    variant='outlined'
                    multiline
                    rows={4}
                    // value={currentAppDto.message}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     setCurrentAppDto({
                    //         ...currentAppDto,
                    //         message: e.target.value,
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
                {/* <FormControl fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>
          <InputLabel id="demo-simple-select-label">Manufacturer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={currentCarDto.manufacturerId}
            value={currentCarDto.manufacturerId}
            label="Manufacturer"
            onChange={(e) => {
              setCurrentCarDto({
                ...currentCarDto,
                manufacturerId: +e.target.value,
              });
            }}
          >
            {manufacturers.map((e) => (
              <MenuItem value={e.id}>{e.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <InputLabel id="demo-simple-select-label">Body</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={currentCarDto.body}
            value={currentCarDto.body}
            label="Body"
            onChange={(e) => {
              setCurrentCarDto({ ...currentCarDto, body: +e.target.value });
            }}
          >
            {Object.entries(BodyType)
              .slice(Object.entries(BodyType).length / 2)
              .map(([key, value]) => (
                <MenuItem value={value} key={key}>
                  {key}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <InputLabel id="demo-simple-select-label">Fuel Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentCarDto.fuelType}
            defaultValue={currentCarDto.fuelType}
            label="Fuel type"
            onChange={(e) => {
              setCurrentCarDto({ ...currentCarDto, fuelType: +e.target.value });
            }}
          >
            {Object.entries(FuelType)
              .slice(Object.entries(FuelType).length / 2)
              .map(([key, value]) => (
                <MenuItem value={value} key={key}>
                  {key}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <TextField
          sx={{ marginBottom: 2, marginTop: 2 }}
          label="Mileage"
          variant="outlined"
          value={currentCarDto.mileage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentCarDto({ ...currentCarDto, mileage: +e.target.value })
          }
        />
        <TextField
          sx={{ marginBottom: 2, marginTop: 2 }}
          label="Seats"
          variant="outlined"
          value={currentCarDto.seats}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentCarDto({ ...currentCarDto, seats: +e.target.value })
          }
        />
        <TextField
          sx={{ marginBottom: 2, marginTop: 2 }}
          label="Weight"
          variant="outlined"
          value={currentCarDto.weight}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentCarDto({ ...currentCarDto, weight: +e.target.value })
          }
        />
        <TextField
          sx={{ marginBottom: 2, marginTop: 2 }}
          label="HP"
          variant="outlined"
          value={currentCarDto.hp}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentCarDto({ ...currentCarDto, hp: +e.target.value })
          }
        />
        <TextField
          sx={{ marginBottom: 2, marginTop: 2 }}
          label="Year of manufacture"
          variant="outlined"
          value={currentCarDto.yearOfManufacture}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentCarDto({
              ...currentCarDto,
              yearOfManufacture: +e.target.value,
            })
          }
        />
        <TextField
          sx={{ marginBottom: 2, marginTop: 2 }}
          label="Price"
          variant="outlined"
          value={currentCarDto.price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentCarDto({
              ...currentCarDto,
              price: +e.target.value,
            })
          }
        />
        <TextField
          sx={{ marginBottom: 2, marginTop: 2 }}
          label="VIN"
          variant="outlined"
          value={currentCarDto.vin}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentCarDto({
              ...currentCarDto,
              vin: e.target.value,
            })
          }
        /> */}
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

export default AppointmentModal;
