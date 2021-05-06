import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
  container: {
    marginBottom: '3%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    borderBottom: '1px solid #566573',
    padding: theme.spacing(2),
    '& > *': {
      margin: '4px'
    },
  },
  root: {
    flexGrow: 1,
  },
  category: {
    '&:last-child': {
      marginBottom: '3%',
    }
  },
  categoryTitle: {
    fontFamily: 'Raleway'
  },
  categoryOptions: {
    width: '10%',
    [theme.breakpoints.down("md")]: {
      width: '100%'
    }
  },
}));