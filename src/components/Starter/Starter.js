import React from 'react';
import useStyles from './Styles';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Container, Grid, Button, Typography, Divider } from '@material-ui/core';
import Contact from '../Contact/Contact';

export default function Starter() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <div className={classes.content}>
                <div className="row w-100 h-75">
                    <div className="col-lg d-flex align-items-center justify-content-center flex-column">
                        <h2 className="display-4 text-capitalize text-center" data-aos="fade-right">
                            welcome to commerc.js store
                        </h2>
                        <lord-icon
                            data-aos="zoom-in"
                            src="https://cdn.lordicon.com//dnoiydox.json"
                            trigger="loop"
                            colors="primary:#e8308c,secondary:#08a88a"
                            style={{width: "100px", height: "100px"}}>
                        </lord-icon>
                        <Button className={classes.shoppingBtn} component={Link} to="/products" endIcon={<ShoppingCartIcon />}>Start Shopping!</Button>
                        
                    </div>
                    <div className="col-lg d-flex justify-content-center" data-aos="zoom-in">
                        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_57TxAX.json"  background="transparent"  speed="1"  style={{width: "500px", height: "500px"}}  loop  autoplay></lottie-player>
                    </div>
                </div>
            </div>
            <Container maxWidth="xl" className={classes.container}>
                <Grid container justify="center">
                    <Grid className={classes.gridItem} item xs={12} sm={6} md={3} lg={3} data-aos="zoom-in">
                        <img className="mb-4" src="https://img.icons8.com/plasticine/45/000000/loyalty.png"/>
                        <Typography variant="h4" gutterBottom className={classes.itemTitle}>
                            Building a better you
                        </Typography>
                        <Typography variant="caption">
                            anyone can beat you but no one can beat your outfit as long as you wearing form Commerce store
                        </Typography>
                    </Grid>
                    <Grid className={classes.gridItem} item xs={12} sm={6} md={3} lg={3} data-aos="zoom-in">
                        <img className="mb-4" src="https://img.icons8.com/cotton/45/000000/clothes--v2.png"/>
                        <Typography variant="h4" gutterBottom className={classes.itemTitle}>
                            Dresses to be noticed
                        </Typography>
                        <Typography variant="caption">
                            fashion is part of the daily air and it changes all the time, with all the events
                        </Typography>
                    </Grid>
                    <Grid className={classes.gridItem} item xs={12} sm={6} md={3} lg={3} data-aos="zoom-in">
                        <img className="mb-4" src="https://img.icons8.com/cotton/45/000000/online-order.png"/>   
                        <Typography variant="h4" gutterBottom className={classes.itemTitle}>
                            stay home and shop online
                        </Typography>
                        <Typography variant="caption">
                            you're to pretty to have to look for a parking spot
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <div className={classes.footer}>
                <Typography className={classes.footerText} variant="overline">
                    Developed by Bassil Alqadi
                </Typography>
                <FavoriteIcon style={{color: '#E5E7E9'}} fontSize="large" />
                <Divider className="w-100 my-4 " />
                <Contact />
            </div>
        </div>
    )
}
