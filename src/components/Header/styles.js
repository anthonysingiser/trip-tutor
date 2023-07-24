
export const headerStyles = {
  title: {
    display: 'none',
  },
  '@media (min-width: 600px)': {
    title: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginRight: '0',
    marginLeft: '0',
    width: '100%',
  },
  searchHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  searchIcon: {
    padding: '0 16px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '8px 8px 8px 0',
    paddingLeft: 'calc(1em + 32px)',
    width: '100%',
  },
  '@media (min-width: 960px)': {
    search: {
      marginLeft: '24px',
      width: 'auto',
    },
    inputInput: {
      width: '20ch',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};