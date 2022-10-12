import {
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    Typography,
    Box,
} from '@mui/material';
import React from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    // onSubmit: (id: number, car: CarDto) => void;
    onSubmit: (id: number, car: object) => void;
};

const MappingModal = (props: Props) => {
    return (
        <Modal
            style={{
                display: 'flex',
                flexFlow: 'column wrap',
                justifyContent: 'center',
                alignContent: 'center',
            }}
            open={props.isOpen}
            onClose={props.onClose}
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
                    Device
                </Typography>
                <FormControl fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>
                    <InputLabel id='demo-simple-select-label'>
                        Device
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        // defaultValue={currentCarDto.manufacturerId}
                        // value={currentCarDto.manufacturerId}
                        label='Device'
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
                        <MenuItem value={'1'}>{1}</MenuItem>
                        <MenuItem value={'2'}>{2}</MenuItem>
                        <MenuItem value={'3'}>{3}</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Modal>
    );
};

export default MappingModal;
