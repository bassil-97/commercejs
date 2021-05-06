import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveIcon from '@material-ui/icons/Remove';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className={classes.cartItem}>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} variant="h5">{item.name}</Typography>
        <Typography className={classes.price} variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <IconButton onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
            <RemoveIcon />
          </IconButton>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <IconButton onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <IconButton onClick={() => handleRemoveFromCart(item.id)}>
          <DeleteForeverIcon style={{color: 'red'}} fontSize="large"/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;