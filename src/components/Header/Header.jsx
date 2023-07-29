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
            <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant='h5' sx={headerStyles.title}>
                    Trip Tutor
                </Typography>
                <Box style={{display:'flex', justifyContent:'space-between'}}>
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
                                sx={{color: 'inherit'}}
                                style={{
                                    padding: '8px 8px 8px 0',
                                    paddingLeft: 'calc(2em + 16px)',
                                    transition: 'width 200ms',
                                    width: '100%',
                                }}
                            />
                        </Box>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;