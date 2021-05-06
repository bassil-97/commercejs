import React, {useState} from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ProductPreview from './productPreview';
import Skeleton from '@material-ui/lab/Skeleton';

import useStyles from './styles';

export default function Product({isLoaded , product, onAddToCart }) {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const skeleton = (
        <div>
          <Skeleton variant="text" />
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton variant="rect" width={210} height={118} />
        </div>
    );

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        { isLoaded ? 
        <Card className={classes.root} elevation={0}>
            <CardMedia 
                className={classes.media} 
                image={product.media.source}
                title={product.name}
            />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" className={classes.title}>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" className={classes.price}>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography className={classes.subtitle} dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <div className={classes.addIcon}>
                   <IconButton aria-label="Add to Cart" onClick={ ()=> onAddToCart(product.id, 1)}>
                        <AddShoppingCart style={{color: 'white'}}/>
                    </IconButton>
                </div>
                <IconButton className={classes.favorite} aria-label="Add to Favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Add to Favorites" onClick={handleClickOpen}>
                    <HelpOutlineIcon />
                </IconButton>
            </CardActions>
            <ProductPreview open={open} close={handleClose} item={product} />
        </Card>
        :  skeleton}
    </div>
    )
}
