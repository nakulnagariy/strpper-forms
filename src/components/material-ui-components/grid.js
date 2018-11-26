import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    height: 240,
    background: "#f00",
    [theme.breakpoints.up("lg")]: {
    width: 1170
    }
  }
});

class BasicCustomGrid extends React.Component {
  render() {
    const { classes } = this.props;

    return (
        <Grid
            container
            className={classes.root}
            alignItems="center"
            justify="center"
        >
        </Grid>
    );
  }
}

BasicCustomGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicCustomGrid);