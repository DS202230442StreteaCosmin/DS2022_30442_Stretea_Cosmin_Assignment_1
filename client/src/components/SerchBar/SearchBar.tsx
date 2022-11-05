import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchBar = () => {
    return (
        <>
            <TextField
                id='search-bar'
                className='text'
                // value={searchValue}
                // onChange={(e) => disptach(setSearchInput(e.target.value))}
                variant='standard'
                placeholder='Search...'
                size='small'
            />
        </>
    );
};

export default SearchBar;
