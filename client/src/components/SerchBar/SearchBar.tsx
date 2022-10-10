import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
// import { useAppDispatch, useAppSelector } from "../../stores/store";
// import { setSearchInput } from "../../stores/user/slice";

const SearchBar = () => {
    // const disptach = useAppDispatch();
    // const searchValue = useAppSelector((state) => state.user.searchInput);
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
