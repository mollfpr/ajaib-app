import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    color: 'green',
    fontSize: '0.8rem',
    fontWeight: 600
  }
}));

const Stock = () => {
  const classes = useStyles();

  return <Typography className={classes.title}>BBCA +0.11%</Typography>;
};

export default Stock;
