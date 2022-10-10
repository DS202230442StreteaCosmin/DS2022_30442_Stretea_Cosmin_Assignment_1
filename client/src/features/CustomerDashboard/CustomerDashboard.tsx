import { TabContext, TabPanel } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import { Box, Tab } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SerchBar/SearchBar';

const CustomerDashboard = () => {
    // const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [currentRoute, setCurrentRoute] = React.useState('/dashboard/cars');
    // const userId = useAppSelector((state) => state.user.user.id);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setCurrentRoute(newValue);
        // dispatch(setSearchInput(''));
        navigate(newValue);
    };

    React.useEffect(() => {
        navigate('/dashboard/cars');
        // dispatch(getCarsAction());
        // dispatch(initUserData(userId));
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
                            <Tab label='Cars' value='/dashboard/cars' />
                            <Tab
                                label='Appointments'
                                value='/dashboard/appointments'
                            />
                            <Tab
                                label='Favorites'
                                value='/dashboard/favorites'
                            />
                        </TabList>
                        <Box display='flex' alignItems='center'>
                            <SearchBar />
                        </Box>
                        <button onClick={() => {}}>logout</button>
                    </Box>
                    <TabPanel value='/dashboard/cars'>
                        {/* <CarsNavigator /> */}
                    </TabPanel>
                    <TabPanel value='/dashboard/appointments'>
                        {/* <CustomerAppointments /> */}
                    </TabPanel>
                    <TabPanel value='/dashboard/favorites'>
                        {/* <FavoritesNavigator /> */}
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
};

export default CustomerDashboard;
