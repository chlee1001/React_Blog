import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* Core */
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

/* Icon */
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

/* Etc */
import { makeStyles } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  card: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },

  avatar: {
    backgroundColor: red[500]
  },
  paper: {
    position: 'absolute',
    width: theme.spacing * 50,
    // backgroundColor: theme.palette,
    //boxShadow: theme.shadows[5],
    // padding: theme.spacing * 4,
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '1rem',
    borderRadius: 3
  },
  modalTitle: {},
  modalContent: {},
  modalFooter: {},
  btnMore: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
  btnExit: {}
}));

export function Profile() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            L
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="LeeChaeHyeon"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export function ProfileModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <ListItem button onClick={handleOpen}>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <div className={classes.modalTitle}>
            <Typography variant="h6" id="modal-title">
              About
            </Typography>
          </div>
          <div className={classes.modalContent}>
            <Typography variant="subtitle1" id="simple-modal-description">
              <p>이름: 이채현 </p>
              <p>내용내용 ~~~~~~ blah blah blah</p>
            </Typography>
          </div>
          <div className={classes.modalFooter}>
            <Button className={classes.btnExit} onClick={handleClose}>
              닫기
            </Button>
            <Button className={classes.btnMore} component={Link} to="/about">
              자세히
              {/* AboutPage에서 About을 눌렀을 때는 페이지 새로고침하게 만들기 */}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
