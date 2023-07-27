import { createTheme } from "@material-ui/core";

const theme = createTheme()

export const listStyles = {
  formControl: {
    margin: theme.spacing(1), 
    minWidth: 120, 
    marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
};
