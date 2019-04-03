import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Header';
import Footer from '../Footer';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    const { children } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>
          <CssBaseline />
          {/* Header */}
          <Header />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {/* Content */}
            {children}
            {/* Footer */}
            <Footer />
          </main>
        </div>
      </Fragment>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
