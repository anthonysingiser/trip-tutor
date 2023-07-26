import React, { useState, useEffect, createRef } from 'react';
import { Box, CircularProgress, Grid, Typography, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { listStyles } from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, childClicked, isLoading }) => {

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [elRefs, setElRefs] = useState([]);

    console.log({ childClicked });
    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
        
        setElRefs(refs);
    }, [places])

    return (
        <Box sx={listStyles.container}>
            <Typography variant='h4'>Places near you!</Typography>
            {isLoading ? (
                <Box sx={listStyles.loading}>
                    <CircularProgress size='5rem' />
                </Box>
            ) : (
            <>
            <FormControl sx={listStyles.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={listStyles.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} sx={listStyles.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails 
                            place={place}
                            selected={Number(childClicked) === i}
                            refProp={elRefs[i]} 
                        />
                    </Grid>
                ))}
            </Grid>
            </>
            )}
        </Box>
    )  
}

export default List;