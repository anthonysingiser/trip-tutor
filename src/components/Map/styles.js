
export const mapStyles = {
  paper: {
    padding: 10, 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    width: 100,
  },
  mapContainer: {
    height: '85vh', 
    width: '100%',
  },
  markerContainer: {
    position: 'absolute', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 1, 
    '&:hover': { zIndex: 2 },
  },
};