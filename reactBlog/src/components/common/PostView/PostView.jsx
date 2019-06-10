import React from 'react';
import styled from 'styled-components';
import { fromNow } from '../../../lib/common.js';
//import TriangleSpinner from '../common/TriangleSpinner';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: '1rem',
    width: '100%',
    position: 'relative',
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PostView = ({ post }) => {
  //console.log(id);
  const classes = useStyles();
  if (!post) return <CircularProgress />;
  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.cardGrid}>
        {post.map((post) => {
          return ( // post 총 개수에 상관없이 9개만 띄우기
            post.id < 9 && <Grid item key={post.key} container  item xs={12} md={4} >
              <Card className={classes.card}>
                {!post.thumbnail && <CardMedia // thumbnail 유무 확인
                  className={classes.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />}
                <CardHeader
                  avatar={
                    <Avatar alt="Avatar" src={post.avatar} className={classes.avatar}>
                    </Avatar>
                  }
                  title={post.name}
                  subheader={post.email}//{fromNow("released_at")}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
   </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
        }


      </Grid>
    </div>
  );
};

export default PostView;

//https://reactgo.com/material-ui-react-tutorial/