import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import { RatingStar } from "rating-star";
import { ColorPalette } from 'material-ui-color';
import Divider from '@material-ui/core/Divider';

import Tilt from 'react-tilt';

import './product.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  itemName: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold'
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: '600'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  favorite: {
    '&:hover': {
        color: 'red',
        cursor: 'pointer'
    }
  },
  colorPicker: {
    fontWeight: 'bold'
  },
  addToCartWrapper: {
    marginTop: '3%'
  },
  addtoCart: {
    backgroundColor: '#141414',
    color: 'white',
    borderRadius: '0px',
    padding: '15px 20px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '.9em',
    transition: '.5s',
    border: '1px solid #141414',
    '&:hover': {
      color: '#141414',
      backgroundColor: 'white',
      border: '1px solid #141414',
      transitionDuration: '.5s'
    }
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, close, item }) {
  const classes = useStyles();

  const [rating, setRating] = React.useState(30);
  const [color, setColor] = useState("#fff");

  const palette = {
    sandyBrown: '#F0AB5E',
    slateGray: '#68778E',
    cyan: 'cyan',
    lime: 'lime',
    gray: 'gray',
    orange: 'orange',
    purple: 'purple',
  };

  const onRatingChange = (score) => {
    setRating(score);
  };
 
  const handleChange = (value) => {
    setColor(value);
  }

  return (
    <div>
      <Dialog fullScreen open={open} onClose={close} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={close} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Commerce.js
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className="product-container">
              <Tilt className="Tilt" options={{ max : 25 }}>
                <div className="Tilt-inner">
                  <div className="product-box">
                    <h2 className="product-name">{item.name}</h2>
                    <a href="#" className="buy">Buy Now</a>
                    <div className="circle" style={{background: color}}></div>
                    <img className="product-img" src={item.media.source} /> 
                  </div>
                </div>
              </Tilt>
            </div>
          </Grid>
          <Grid container justify="start" alignItems="start" item xs={12} sm={6}>
            <div className="product-information">
              <div className={classes.header}>
                <Typography className={classes.itemName} variant="h4" component="h3">{item.name}</Typography>
                <RatingStar
                  clickable
                  maxScore={100}
                  rating={rating}
                  onRatingChange={onRatingChange} 
                />
              </div>
              <Typography gutterBottom dangerouslySetInnerHTML={{ __html: item.description}} variant="body2" color="textSecondary" />
              <Typography gutterBottom className={classes.price} variant="h5" component="h5">{item.price.formatted_with_symbol}</Typography>
              <Divider className="mb-2" />
              <Typography gutterBottom className={classes.colorPicker} variant="button">Color</Typography>
              <ColorPalette palette={palette} value={color} onSelect={handleChange}/>
              <div className={classes.addToCartWrapper}>
                <Button className={classes.addtoCart}>Add to Basket</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
