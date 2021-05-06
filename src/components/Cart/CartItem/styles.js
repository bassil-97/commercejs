import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cartItem: {
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(2),
  },
  media: {
    height: 300,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  price: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    borderRadius: '4px',
    backgroundImage: 'linear-gradient(to right, #53B4FE , #54B4FD)',
    position: 'absolute',
    top: '-20px',
    right: '4px',
    padding: '8px 10px',
},
title: {
    fontFamily: 'Montserrat',
    fontSize: '1.4em',
    fontWeight: 'bold',
    textTransform: 'uppercase'
},
subtitle: {
    fontFamily: 'Montserrat'
}
}));