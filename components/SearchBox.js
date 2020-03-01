import { makeStyles, Box, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #cecece'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

const SearchBox = () => {
  const classes = useStyles();
  return (
    <Box display="flex" className={classes.root}>
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Cari Artikel"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Box>
  );
};

export default SearchBox;
