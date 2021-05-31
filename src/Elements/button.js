import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));

// material ui button custom compoenent
const Buttons = (props) => {
    const classes = useStyles();
    return(
        <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={props.clickevt}>
          {props.text}
        </Button>
    );
}

export default Buttons;