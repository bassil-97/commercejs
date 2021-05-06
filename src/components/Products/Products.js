import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

import Product from '../Products/Product/Product';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: theme.mixins.toolbar,
  categoryTitle: {
    fontFamily: 'Raleway'
  },
  tab: {
    '&:focus': {
          outline: 'none'
    }
  },
  appBar: {
    marginBottom: '3%'
  }
}));

export default function SimpleTabs({isLoaded, products, categories, onAddToCart}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const skeleton = (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    </div>
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <div className={classes.toolbar} />
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.tab} >
        {categories.map(category => {
            return(
                <Tab key={category.id} label={category.name} {...a11yProps(category.id)} />
            )
        })}
        </Tabs>
      </AppBar>
          { categories.map((category, index) => {
              return(
                  <div>
                      <TabPanel value={value} index={index}>
                          <Container>
                              <Grid className={classes.category} container spacing={4}>
                                  {category.productsData.map((product) => (
                                      <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} data-aos="zoom-in">
                                          <Product isLoaded={isLoaded} product={product} onAddToCart={onAddToCart} />
                                      </Grid>
                                  ))}
                              </Grid>
                          </Container> 
                      </TabPanel>
                  </div>
              )
          }) }
    </div>
  );
}
