import React from 'react';
import GoogleMapReact from 'google-map-react';
import { mapStyles } from './styles';
import { Paper, Typography, useMediaQuery, Box } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@mui/material';


const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {

    const isDesktop = useMediaQuery('(min-width: 600px)');

    return (
        <Box sx={mapStyles.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin = {[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e)
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i) => (
                    <Box 
                        sx={mapStyles.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlined color='primary' fontSize='large' />
                            ) : (
                                <Paper elevation={3} sx={mapStyles.paper} >
                                    <Typography variant='subtitle2' gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img
                                        className={{cursor: 'pointer'}}
                                        src={place.photo ? place.photo.images.small.url : 'https://cdn-icons-png.flaticon.com/128/2688/2688884.png'}
                                    />
                                    <Rating size='small' value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </Box>
                ))}
            </GoogleMapReact>
        </Box>
    )
}

export default Map;