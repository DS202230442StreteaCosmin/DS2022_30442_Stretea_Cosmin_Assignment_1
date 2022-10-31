import { TabContext, TabPanel } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import { Box, Tab, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SerchBar/SearchBar';
import { AppRoutes } from '../../router/AppRoutes';

// import { getAppointmentsAction } from "../../stores/appointments/actions";
// import { getCarsAction } from "../../stores/car/actions";
// import { getManufacturersAction } from "../../stores/manufacturer/actions";
// import { useAppDispatch, useAppSelector } from "../../stores/store";
// import { initUserData } from "../../stores/user/actions";
// import { logout, setSearchInput } from "../../stores/user/slice";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import SearchSelect from '../../components/SearchSelect/SearchSelect';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { useAppDispatch } from '../../store/store';
import { logout } from '../../store/user/userSlice';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const CustomerDashboard = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [date, setDate] = React.useState<Dayjs | null>(null);

    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                {/* <TabContext value={currentRoute}> */}
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: 2,
                    }}
                >
                    {/* <TabList
                        onChange={handleChange}
                        aria-label='lab API tabs example'
                    >
                        <Tab label='Users' value='/admin-dashboard/users' />
                        <Tab label='Devices' value='/admin-dashboard/devices' />
                        <Tab
                            label='Mappings'
                            value='/admin-dashboard/mappings'
                        />
                    </TabList> */}
                    {/* <Box display='flex' alignItems='center'>
                        <SearchBar />
                    </Box> */}

                    <SearchSelect
                        options={[
                            { label: 'option1' },
                            { label: 'option2' },
                            { label: 'option3' },
                            { label: 'option4' },
                            { label: 'option5' },
                        ]}
                        label='Device'
                    />

                    <DatePicker
                        label='Pick a date'
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <button onClick={() => dispatch(logout())}>logout</button>
                </Box>
                {/* <TabPanel value='/admin-dashboard/users'>
                    <Users />
                </TabPanel>
                <TabPanel value='/admin-dashboard/devices'>
                    <Devices />
                </TabPanel>
                <TabPanel value='/admin-dashboard/mappings'>
                    <Mappings />
                </TabPanel> */}
                {/* </TabContext> */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: 4,
                    }}
                >
                    <BarChart
                        width={1000}
                        height={600}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='pv' fill='#8884d8' />
                    </BarChart>
                </Box>
            </Box>
        </>
    );
};

export default CustomerDashboard;
