import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const TextFieldMargins = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <TextField
        label={props.label}
        id="margin-none"
        defaultValue={props.defaultValue}
        className={classes.textField}
      />
    </div>
  );
};

TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldMargins);