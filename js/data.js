import { getRand } from './util.js';
import {MAX_COUNT_PHOTOS, MESSAGE,DESCRIPTION, NAMES, COUNT_COMMENTS, CountAvatar, CountLike} from './const.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRand(CountAvatar.MIN,CountAvatar.MAX)}.svg`,
  message: MESSAGE[getRand(0, MESSAGE.length - 1)],
  name: NAMES[getRand(0, NAMES.length - 1)],
});

const createUserData = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTION[getRand(0, DESCRIPTION.length - 1)],
  likes: getRand(CountLike.MIN, CountLike.MAX),
  comments: Array.from({length:getRand(1, COUNT_COMMENTS)}).map((_,index) => createComment(index + 1))
});

const getPhotos = () => Array.from({length: MAX_COUNT_PHOTOS}).map((_, index) => createUserData(index + 1));

export {getPhotos};
