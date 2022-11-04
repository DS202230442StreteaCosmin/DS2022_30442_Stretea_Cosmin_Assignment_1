import React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface SearchSelectProps {
    options: any[];
    label: string;
    isDisabled?: boolean;
    onChange?: (element: any) => void;
}

const SearchSelect = (props: SearchSelectProps) => {
    return (
        <Autocomplete
            disabled={props.isDisabled}
            disablePortal
            id='combo-box-demo'
            options={props.options}
            sx={{ width: 300 }}
            renderInput={(params) => (
                <TextField {...params} label={props.label} />
            )}
            onChange={props.onChange}
        />
    );
};

export default SearchSelect;
