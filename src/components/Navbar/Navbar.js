import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';
import logo from '../../assets/commerce.png';

export default function Navbar({ totalItems, mode, handleTheme }) {

    const classes = useStyles();
    const location = useLocation(); 

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname == '/products' && (
                    <div >
                        <IconButton className="mr-2" component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> ) }
                    {mode ? <IconButton className={classes.btn} onClick={handleTheme}><WbSunnyIcon style={{color: 'yellow'}} /></IconButton> : <IconButton className={classes.btn} onClick={handleTheme}><Brightness3Icon style={{color: '#212F3D'}} /></IconButton>}
                </Toolbar>
            </AppBar>  
        </>
    )
}
