import React from 'react';
import Slider from "react-slick";
import {Typography, Container, Button, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import './cart.css';

export default function Cart({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {

    const classes = useStyles();


    const EmptyCart = () => (
        <div className={classes.emptyCart}>
            <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_oqpbtola.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
            <Typography variant="h6" className={classes.emptyTitle}>Your cart is empty</Typography>
            <Button variant="outlined" component={Link} to="/products">start adding some!</Button>
        </div>       
        
    );

    const FilledCart = () => (
        <>
            <Grid container justify="center" spacing={3}>
                {cart.line_items.map( (item)=> (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4" className={classes.subtotal}> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={onEmptyCart} startIcon={<RemoveShoppingCartIcon />}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="outlined" endIcon={<ArrowForwardIosIcon />}>Checkout</Button>
                </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading ...';

    return (
        <Container className={classes.container}>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart <ShoppingCartIcon /></Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}
