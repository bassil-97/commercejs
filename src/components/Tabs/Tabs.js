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
  }
}));

export default function SimpleTabs({products, categories, onAddToCart}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <div className={classes.toolbar} />
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.tab}>
        {categories.map(category => {
            return(
                <Tab key={category.id} label={category.name} {...a11yProps(category.id)} />
            )
        })}
        </Tabs>
      </AppBar>
        {categories.map((category, index) => {
            return(
                <div >
                    <TabPanel value={value} index={index}>
                        <Container>
                            <Typography className={classes.categoryTitle} variant="h4" component="h4" gutterBottom>{category.name}</Typography>
                            <Grid className={classes.category} container spacing={4}>
                                {category.productsData.map((product) => (
                                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                        <Product product={product} onAddToCart={onAddToCart} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Container> 
                    </TabPanel>
                </div>
            )
        })}
    </div>
  );
}
