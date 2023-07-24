import React from 'react';
import GoogleMapReact from 'google-map-react';
import { mapStyles } from './styles';
import { Paper, Typography, useMediaQuery, Box } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@mui/material';



const Map = () => {
    const coordinates = { lat: 0, lng: 0};
    const isMobile = useMediaQuery('(min-width: 600px');

    return (
        <Box sx={mapStyles.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyD_eKvBbrQQ6u5AwuWm7mUhOT-ZXX022r0'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin = {[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >
             
            </GoogleMapReact>
        </Box>
    )
}

export default Map;