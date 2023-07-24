import React from 'react';
import  { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { headerStyles } from './styles';


const Header = () => {
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
                    {/* <Autocomplete> */}
                        <div sx={headerStyles.search}>
                            <div sx={headerStyles.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='Search...' sx={{...headerStyles.inputRoot,'& .MuiInputBase-input': headerStyles.inputInput}} />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

//classes:{{ root: classes.inputRoot, input: classes.inputInput }}

export default Header;