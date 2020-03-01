import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Tabs, Tab, Grid, makeStyles, Button } from '@material-ui/core';
import a11yProps from './a11yProps';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  titleContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2)
  },
  titleWrapper: {
    fontSize: '1.2rem',
    color: 'white',
    textAlign: 'center'
  },
  link: {
    color: 'white',
    width: '100%'
  },
  linkWrapper: {
    backgroundColor: theme.palette.primary.main
  }
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.titleContainer}>
        <Grid item xs={12} className={classes.titleWrapper}>
          News & Feed
        </Grid>
      </Grid>
      <Grid container className={classes.linkWrapper}>
        <Grid item xs={6}>
          <Link href="/">
            <Button className={classes.link}>Berita</Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="/community">
            <Button className={classes.link}>Komunitas</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
