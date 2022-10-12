import React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface SearchSelectProps {
    options: any[];
}

const SearchSelect = (props: SearchSelectProps) => {
    return (
        <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={props.options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label='User' />}
        />
    );
};

export default SearchSelect;
