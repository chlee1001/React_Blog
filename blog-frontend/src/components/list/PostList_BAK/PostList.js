import React from 'react';
import { useRequest } from '../../../lib/helpers';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

//import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from '@material-ui/core/CircularProgress';
//import InfiniteScroll from 'react-simple-infinite-scroll';

const styles = theme => ({
  card: {
    display: 'flex',
    width: '100%',

    // margin: '10px 0',
    borderBottom: '1px solid grey'
  },
  cardContent: {
    //margin: '1rem'
    // paddingTop: 0
    // width: '80%'
  },
  contentTitle: {
    // position: 'relative',
    marginBottom: '0.5rem'
  },
  contentauthor: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentDescription: {
    // lineHeight: '0.5rem',
    marginBottom: '0.5rem',
    overflowY: 'hidden'
  },
  contentMore: {
    textAlign: 'right'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    paddingTop: '50%',
    marginTop: '1rem'
  },

  progress: {
    margin: theme.spacing.unit * 2
  }
});

const formatDate = date => {
  var time = new Date(date);
  var year = time.getFullYear();
  var day = time.getDate();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var month = time.getMonth() + 1;
  var composedTime =
    day +
    '/' +
    month +
    '/' +
    year +
    '|' +
    hour +
    ':' +
    (minute < 10 ? '0' + minute : minute);
  return composedTime;
};

const PostList = props => {
  const apiKey = '3754508a940e4cb19e79bd436d56af79';
  const [response, loading, error] = useRequest(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`
  );

  if (loading) {
    return <div>로딩중..</div>;
  }

  if (error) {
    return <div>에러 발생!</div>;
  }

  /*
    컴포넌트가 가장 처음 마운트 되는 시점은, Request 가 시작되지 않았으므로
    loading 이 false 이면서 response 도 null 이기에
    response null 체킹 필요 
  */
  if (!response) return null;

  const articles = response.data.articles;
  return (
    <Grid container spacing={40} className={props.classes.cardGrid}>
      {articles.map((news, i) => {
        return (
          <Grid item key={i} xs={12} md={6}>
            <Card className={props.classes.card}>
              <div className={props.classes.cardDetails}>
                <CardContent className={props.classes.cardContent}>
                  <div className={props.classes.contentTitle}>
                    <Typography variant="title">
                      <a
                        href={news.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {news.title}
                      </a>
                    </Typography>
                  </div>
                  {/* author & formatDate 간격 수정해야함 */}
                  <div className={props.classes.contentauthor}>
                    <Typography>
                      By '{news.author ? news.author : this.props.default}'
                      {formatDate(news.publishedAt)}
                    </Typography>
                  </div>
                  <div className={props.classes.contentDescription}>
                    <Typography variant="subtitle1" color="textSecondary">
                      {news.description}
                    </Typography>
                  </div>
                  <div className={props.classes.contentMore}>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </Typography>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={props.classes.cardMedia}
                      image={news.urlToImage} // eslint-disable-line max-len
                    />
                  </Hidden>
                </CardContent>
              </div>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

PostList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostList);
