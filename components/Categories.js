import { useState } from 'react';
import { AppBar, Tabs, Tab, makeStyles } from '@material-ui/core';
import a11yProps from './a11yProps';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    border: '1px solid #cecece'
  },
  tab: {
    padding: '0 7px',
    margin: '0 8px',
    minHeight: 'unset',
    border: '1px solid',
    minWidth: 'unset',
    height: 'fit-content',
    borderRadius: '5px',
    textTransform: 'capitalize',
    fontSize: '0.8rem',
    color: '#909090'
  },
  tabSelected: {
    borderColor: theme.palette.primary.main,
    borderWidth: 2,
    color: theme.palette.primary.main
  },
  tabs: {
    height: '100%',
    alignItems: 'center'
  }
}));

const Categories = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      classes={{
        colorTransparent: classes.root
      }}
    >
      <Tabs
        aria-label="simple tabs example"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        classes={{ flexContainer: classes.tabs }}
      >
        <Tab
          label="Populer"
          {...a11yProps(0)}
          classes={{
            root: classes.tab,
            selected: classes.tabSelected
          }}
        />
        <Tab
          label="Reksa Dana"
          {...a11yProps(1)}
          classes={{
            root: classes.tab,
            selected: classes.tabSelected
          }}
        />
        <Tab
          label="Belajar"
          {...a11yProps(2)}
          classes={{
            root: classes.tab,
            selected: classes.tabSelected
          }}
        />
        <Tab
          label="Investor"
          {...a11yProps(3)}
          classes={{
            root: classes.tab,
            selected: classes.tabSelected
          }}
        />
        <Tab
          label="BUMN"
          {...a11yProps(4)}
          classes={{
            root: classes.tab,
            selected: classes.tabSelected
          }}
        />
      </Tabs>
    </AppBar>
  );
};

export default Categories;
