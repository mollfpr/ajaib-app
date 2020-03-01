import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import Stock from './Stock';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: '1px solid #cecece'
  },
  img: {
    width: '100%',
    height: 175,
    objectFit: 'cover',
    borderRadius: 5
  },
  sideImg: {
    width: '100%',
    // height: 175,
    objectFit: 'cover',
    borderRadius: 5
  },
  title: {
    fontWeight: 700
  },
  smallText: {
    fontSize: '0.7rem',
    fontWeight: 500,
    color: '#cecece'
  },
  stockContainer: {
    padding: '10px 0'
  }
}));

const News = ({ sideImg }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {!sideImg && (
        <img
          src="/marco-oriolesi-wqLGlhjr6Og-unsplash.jpg"
          alt=""
          className={classes.img}
        />
      )}
      <Grid container>
        <Grid item xs={sideImg ? 9 : 12}>
          <Typography className={classes.title}>
            Wow! Reksa Dana Saham Tidak Berisiko Jangka Panjang
          </Typography>
          <Typography className={classes.smallText}>BBC &bull; 6h</Typography>
        </Grid>
        {sideImg && (
          <Grid item xs={3}>
            <img
              src="/marco-oriolesi-wqLGlhjr6Og-unsplash.jpg"
              alt=""
              className={classes.sideImg}
            />
          </Grid>
        )}
      </Grid>
      <Grid container className={classes.stockContainer}>
        <Grid item xs={6}>
          <Stock></Stock>
        </Grid>
        <Grid item xs={6}>
          <Stock></Stock>
        </Grid>
      </Grid>
    </Box>
  );
};

News.defaultProps = {
  sideImg: false
};

export default News;
