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
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const PostViewerWrapper = styled.div`
  h1 {
    margin-bottom: 0;
  }
  .info {
    font-size: 0.75rem;
    color: #868e96;
    .middot {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    display: block;
  }
  .renderer-wrapper {
    margin-top: 2rem;
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: '0.875rem',
    width: 'calc((100% - 8.75rem) / 4)',
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

const PostView = ({ post, id }) => {
  //console.log(id);
  const classes = useStyles();
  if (!post) return <CircularProgress />;
  const { name, email, avatar, thumbnail } = post;
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        
        <Grid item key={id} container  direction="row" justify="center" item xs={12} spacing={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar alt="Avatar" src={avatar} className={classes.avatar}>
                </Avatar>
              }
              title={name}
              subheader={email}//{fromNow("released_at")}
            />
            {thumbnail && <CardMedia // thumbnail 유무 확인
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />}
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

      </Grid>
    </div>

    // <PostViewerWrapper>
    //   <div key={id} style={{ border: 'solid 1px #eee' }}>
    //     <img src={avatar} alt={name} width="50" height="50" />
    //     <h4>Name: {name}</h4>
    //     <h4>Email: {email}</h4>
    //   </div>
    //   {/* <h1>{name}.</h1>
    //   <div className="info">
    //     <span>{fromNow(released_at)}</span>
    //   </div>
    //   {avator && <img src={avator} alt="thumbnail" />} */}
    // </PostViewerWrapper>
  );
};

export default PostView;
