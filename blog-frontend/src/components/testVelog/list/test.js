import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fromNow } from '../../lib/common';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    // display: 'flex',
    width: '100%',
    margin: '5px 0',
    //borderBottom: '1px solid grey',
    flexWrap: 'wrap',
    position: 'relative',
    display: 'block',
    color: 'inherit',
    textDecoration: 'inherit'
  },

  cardImg: {
    width: '100%',
    marginBottom: '1rem',
    display: 'block'
  },
  contentTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  contentAuthor: {
    fontSize: '0.75rem',
    fontcolor: '#868e96',
    '& span': {
      marginRight: '0.25rem'
    }
  },
  contentDescription: {
    // lineHeight: '0.5rem',
    marginBottom: '0.5rem',
    overflowY: 'hidden'
  },
  contentMore: {
    textAlign: 'right'
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});
function FormRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item1</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item2</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item3</Paper>
      </Grid>
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired
};

class test extends Component {
  render() {
    const { classes } = this.props;
    const { post } = this.props;
    const { id, url_slug, title, body, user, released_at, thumbnail } = post;
    const to = `/@${user.username}/${url_slug}`;
    return (
      <div>
        <Grid container spacing={24} className={classes.cardGrid}>
          <Grid container item key={id} xs>
            <FormRow classes={classes} />
            <Card>
              <div>
                <CardContent className={classes.cardContent}>
                  <Hidden xsDown>
                    {thumbnail && (
                      <img
                        className={classes.cardImg}
                        src={thumbnail}
                        alt="thumbnail"
                      />
                    )}
                  </Hidden>
                  <div className={classes.contentTitle}>
                    <Typography variant="title">{title}</Typography>
                  </div>
                  {/* author & formatDate 간격 수정해야함 */}
                  <div className={classes.contentAuthor}>
                    <Typography>
                      <span>{user.username}</span>
                      <span>&middot;</span>
                      <span>{fromNow(released_at)}</span>
                    </Typography>
                  </div>
                  <div className={classes.contentDescription}>
                    <Typography variant="subtitle1" color="textSecondary">
                      {body}
                    </Typography>
                  </div>

                  <div className={classes.contentMore}>
                    <ButtonBase
                      className={classes.cardButton}
                      component={Link}
                      to={to}
                    >
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </ButtonBase>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

test.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(test);
