import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebookF,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
//import '../../lib/icons.js';

const styles = theme => ({
  root: {
    display: 'block',
    width: 'auto'
  },
  container: {
    margin: '0 auto'
    // flex: 1
    //  marginTop: 'auto'
  },
  iconsWrapper: {
    justifyContent: 'center',
    margin: '0 auto'
  },
  icons: {
    display: 'flex'
  },
  icon: {
    width: 40,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    //backgroundColor: theme.palette.warning.main,
    '&:hover': {
      //   backgroundColor: theme.palette.warning.dark
    }
  },
  test: {
    marginTop: 'auto'
  }
});

const Footer = ({ classes }) => (
  <Typography component="footer" className={classes.root}>
    <div className={classes.test}>
      <Grid container spacing={40} style={{ marginTop: 'auto' }}>
        <Grid item className={classes.container}>
          <Grid container className={classes.iconsWrapper} spacing={16}>
            <Grid item className={classes.icons}>
              <a href="https://material-ui.com/" className={classes.icon}>
                <FontAwesomeIcon icon={faFacebookF} size="1x" />
              </a>
              <a href="https://material-ui.com/" className={classes.icon}>
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
              <a href="https://twitter.com/MaterialUI" className={classes.icon}>
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </a>
            </Grid>
          </Grid>
          <Grid item>© 2019 ChaeHyeon</Grid>
        </Grid>
      </Grid>
    </div>
  </Typography>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
