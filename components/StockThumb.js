import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flex: '0 0 auto',
    backgroundColor: '#57acff',
    width: 200,
    marginRight: 10,
    padding: 10,
    borderRadius: 5
  },
  title: {
    fontWeight: 500,
    color: 'white',
    height: 50
  },
  subTitle: {
    margin: '10px 0 0 0',
    fontSize: '0.7rem',
    fontWeight: 500,
    color: 'white'
  },
  smallText: {
    fontSize: '0.7rem',
    color: '#cecece'
  }
}));

const StockThumb = ({ title }) => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.root}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.subTitle}>Return +12.45%</Typography>
      </Box>
      <Typography className={classes.smallText}>
        199 orang berinventasi disini
      </Typography>
    </Box>
  );
};

export default StockThumb;
