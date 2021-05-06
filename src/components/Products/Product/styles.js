import {makeStyles} from '@material-ui/core/styles';

export default makeStyles( (theme)=> ({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '10px',
        border: `1px solid ${theme.palette.primary.cardBorder}`,
    },
    media: {
        height: 0,
        paddingTop: '60%', // 16:9
        transition: 'all 0.7s ease',
        backgroundColor: 'white',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.2)'
        },
        
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-start',
        position: 'relative',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
    },
    price: {
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: '16px',
        borderRadius: '4px',
        backgroundImage: 'linear-gradient(to right, #53B4FE , #54B4FD)',
        position: 'absolute',
        top: '-36px',
        right: '0px',
        padding: '8px 10px',
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: '18px',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    subtitle: {
        fontFamily: 'Montserrat'
    },
    addToCart: {
        color: '#65ADFE',
        fontSize: '1.1em',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        transition: '.5s',
        '&:hover': {
            cursor: 'pointer',
            opacity: '.5',
            transitionDuration: '.5s'
        }
    },
    addIcon: {
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        padding: '4px',
        border: '1px solid lightgray',
        borderBottom: 'none',
        borderRight: 'none',
        borderTopLeftRadius: '10px',
        backgroundColor: '#85C1E9',
    },
    favorite: {
        '&:hover': {
            color: 'red',
            cursor: 'pointer'
        }
    }
}));