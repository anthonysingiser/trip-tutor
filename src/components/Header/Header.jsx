import React, { useState } from 'react';
import  { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { headerStyles }  from './styles';


const Header = ({ setCoordinates }) => {

    const[autoComplete, setAutoComplete] = useState(null);

    const onLoad = (autoC) => setAutoComplete(autoC)

    const onPlaceChanged = () => {
        const lat = autoComplete.getPlace().geometry.location.lat()
        const lng = autoComplete.getPlace().geometry.location.lng()

        setCoordinates({ lat, lng })
    }

    return (
        <AppBar position='static'>
            <Toolbar sx={headerStyles.toolbar}>
                <Typography variant='h5' sx={headerStyles.title}>
                    Trip Tutor
                </Typography>
                <Box display='flex'>
                    <Typography variant='h6' sx={headerStyles.title}>
                        Find new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <Box sx={headerStyles.search}>
                            <Box sx={headerStyles.searchIcon}>
                                <SearchIcon />
                            </Box>
                            <InputBase 
                                placeholder='Search...' 
                                sx={[headerStyles.inputInput, headerStyles.inputRoot]}
                            />
                        </Box>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;