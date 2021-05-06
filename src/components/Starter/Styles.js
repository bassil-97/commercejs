import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assets/bg.png';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    borderTop: '1px solid lightgray',
    backgroundImage: `linear-gradient( 270deg, rgba(176, 42, 42, .16) 0%,rgba(176, 42, 42, .56) 18.45%,rgba(176, 42, 42, .8) 49.67%,rgba(176, 42, 42, .56) 82.52%,rgba(176, 42, 42, .196364) 99.7%,rgba(189, 40, 40, 0) 99.71%,rgba(203, 56, 55, 0) 99.72%,rgba(203, 56, 55, .16) 99.73%),url(${bg})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  shoppingBtn: {
    backgroundImage: 'linear-gradient(45deg, #C92F58, #DD5D20)',
    color: 'white',
    padding: '16px 26px',
    borderRadius: '30px',
    webkitBoxShadow: '0 0 10px #7F8C8D',
    boxShadow: '0 0 10px #7F8C8D',
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    margin: '10px',
    padding: '4%',
    backgroundColor: '#F8F9F9',
    color: 'black',
    borderRadius: '10px',
    webkitBoxShadow: '0 0 10px #ABB2B9',
    boxShadow: '0 0 10px #ABB2B9',
    '& *': {
      textAlign: 'center',
      fontFamily: 'Raleway',
    },
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: '1.9em',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Caveat, cursive'
  },
  footer: {
    position: 'relative',
    width: '100%',
    marginTop: '6%',
    padding: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(45deg, #C92F58, #DD5D20)',
    borderTopLeftRadius: '60px',
    borderTopRightRadius: '60px',
  },
  footerText: {
    color: 'white',
    fontSize: '1.2em',
  }
}));