import React from 'react';
import { fromNow, resizeImage } from '../../../lib/common';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { shouldUpdate } from 'recompose';

import 'moment/locale/ko';
import './PostCard.scss';

type Props = {
  id: string,
  thumbnail: ?string,
  username: string,
  title: string,
  body: string,
  date: string,
  urlSlug: string,
  userThumbnail: ?string,
  oneColumn?: boolean,
  commentsCount: number
};

const PostCard = ({
  thumbnail,
  username,
  title,
  body,
  date,
  urlSlug,
  userThumbnail,
  oneColumn,
  commentsCount
}: Props) => {
  const formattedDate = fromNow(date);
  const link = `/@${username}/${urlSlug}`;
  return (
    <div
      className={cx('PostCard', { 'one-column': oneColumn, empty: !thumbnail })}
    >
      {thumbnail && (
        <Link to={link} className={cx('thumbnail-wrapper')}>
          {thumbnail && (
            <img
              src={resizeImage(thumbnail, oneColumn ? 768 : 512)}
              alt={title}
            />
          )}
          <div className="white-mask" />
        </Link>
      )}
      <div className="card-content">
        <div className="content-head">
          <h3>
            <Link to={`/@${username}/${urlSlug}`}>{title}</Link>
          </h3>
          <div className="subinfo">
            <span>{formattedDate}</span>
            <span>{commentsCount}개의 댓글</span>
          </div>
        </div>
        <div className="description" style={{ WebkitBoxOrient: 'vertical' }}>
          {body}
        </div>
      </div>
    </div>
  );
};

PostCard.defaultProps = {
  oneColumn: false
};

export default shouldUpdate((props: Props, nextProps: Props) => {
  return props.id !== nextProps.id;
})(PostCard);
