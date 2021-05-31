import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// useStyle cusome hook for styling
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export const Textbx = (props) => {
    return (
        <TextField required id="standard-required" variant="outlined" label="Enter Budget" value={props.value} onChange={props.changeEvent} />        
        // <input type="text" name={props.name} value={props.value} onChange={props.changeEvent} />
    )
}