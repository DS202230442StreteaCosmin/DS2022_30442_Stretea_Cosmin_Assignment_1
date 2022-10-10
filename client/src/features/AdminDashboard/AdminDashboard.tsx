import { TabContext, TabPanel } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import { Box, Tab } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SerchBar/SearchBar';
// import { getAppointmentsAction } from "../../stores/appointments/actions";
// import { getCarsAction } from "../../stores/car/actions";
// import { getManufacturersAction } from "../../stores/manufacturer/actions";
// import { useAppDispatch, useAppSelector } from "../../stores/store";
// import { initUserData } from "../../stores/user/actions";
// import { logout, setSearchInput } from "../../stores/user/slice";
import AdminAppointments from './Appointments/AdminAppointments';
import CustomerAppointments from './Appointments/AdminAppointments';
import AdminCars from './Cars/AdminCars';

const AdminDashboard = () => {
    // const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [currentRoute, setCurrentRoute] = React.useState(
        '/admin-dashboard/cars'
    );
    // const userId = useAppSelector((state) => state.user.user.id);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setCurrentRoute(newValue);
        // dispatch(setSearchInput(''));
        navigate(newValue);
    };

    React.useEffect(() => {
        navigate('/admin-dashboard/cars');
        // dispatch(getCarsAction());
        // dispatch(getAppointmentsAction());
        // dispatch(getManufacturersAction());
    }, []);

    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={currentRoute}>
                    <Box
                        sx={{
                            borderBottom: 1,
                            borderColor: 'divider',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <TabList
                            onChange={handleChange}
                            aria-label='lab API tabs example'
                        >
                            <Tab label='Cars' value='/admin-dashboard/cars' />
                            <Tab
                                label='Appointments'
                                value='/admin-dashboard/appointments'
                            />
                        </TabList>
                        <Box display='flex' alignItems='center'>
                            <SearchBar />
                        </Box>
                        <button onClick={() => {}}>logout</button>
                    </Box>
                    <TabPanel value='/admin-dashboard/cars'>
                        <AdminCars />
                    </TabPanel>
                    <TabPanel value='/admin-dashboard/appointments'>
                        <AdminAppointments />
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
};

export default AdminDashboard;
