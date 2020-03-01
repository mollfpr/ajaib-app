import { makeStyles, Box, Typography } from '@material-ui/core';
import clsx from 'clsx';
import StockThumb from './StockThumb';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  title: {
    fontWeight: 700,
    fontSize: '1rem',
    color: 'dodgerblue'
  },
  scrolled: {
    margin: '10px 0',
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  }
}));

const Recomendation = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.title}>
          Rekomendasi Reksa Dana Hari Ini
        </Typography>
      </Box>
      <Box className={clsx(classes.scrolled, 'scrolling-wrapper')}>
        <StockThumb title="CIMB-Principal Dana Saham Syariah"></StockThumb>
        <StockThumb title="RHB Dana Saham"></StockThumb>
        <StockThumb title="Trimega Obligation"></StockThumb>
      </Box>
    </Box>
  );
};

export default Recomendation;
