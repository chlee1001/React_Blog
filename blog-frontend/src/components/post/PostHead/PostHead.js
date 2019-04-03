// @flow
import React from 'react';
import type { Categories } from '../../../store/modules/post';
import { Link } from 'react-router-dom';
//import defaultThumbnail from 'static/images/default_thumbnail.png';
import { fromNow, resizeImage } from '../../../lib/common';
//import LockIcon from 'react-icons/lib/md/lock';
import PostActionButtons from '../PostActionButtons';
import './PostHead.scss';

type Props = {
  id: string,
  title: string,
  categories: Categories,
  user: {
    username: string,
    id: string,
    thumbnail: ?string,
    short_bio: ?string
  },
  ownPost: boolean,

  date: string,
  logged: boolean,
  url: string,
  isPrivate: boolean,
  informCopy: () => void
};

const PostHead = ({
  id,
  title,
  date,
  categories,
  user,
  likes,
  liked,
  ownPost,
  onToggleLike,
  onAskRemove,
  logged,
  isPrivate,
  url,
  informCopy
}: Props) => {
  return (
    <div className="PostHead">
      <h1>{title}</h1>
      <div className="date-and-likes">
        <div className="date">{fromNow(date)}</div>
        <div className="placeholder" />
      </div>
      <div className="separator" />
      {ownPost && <PostActionButtons id={id} onAskRemove={onAskRemove} />}
    </div>
  );
};

PostHead.Placeholder = () => (
  <div className="PostHead placeholder">
    <div className="gray-block _title" />
    <div className="date-and-likes">
      <div className="date">
        <div className="gray-block _date" />
      </div>
      <div className="placeholder" />
    </div>
    <div className="separator" />
  </div>
);
export default PostHead;
