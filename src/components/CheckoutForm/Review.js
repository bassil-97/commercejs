import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';

import useStyles from './styles';

const Review = ({ checkoutToken }) => {

  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h6" gutterBottom>Order summary</Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ padding: '10px 0' }} key={product.name}>
            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
            <Typography className={classes.price} variant="body2">{product.line_total.formatted_with_symbol}</Typography>
          </ListItem>
        ))}
        
        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary="Total" />
          <Typography className={classes.title} variant="subtitle1" style={{ fontWeight: 700, color: '#3F51B5' }}>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
} 

export default Review;