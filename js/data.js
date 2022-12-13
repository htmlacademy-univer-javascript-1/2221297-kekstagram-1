import {getRand} from './util.js';

const MAX_AVATARS_NUMBER = 6;
const MAX_ITEMS_NUMBER = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS_NUMBER = 3;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Виктория',
  'Кристина',
  'Роман',
  'Анлегина',
  'Андрей'
];

const DESCRIPTIONS = [
  'Ура, скоро Новый Год!!!:)',
  'Вчера ходила в кино... лучше бы не ходила',
  'Я больше не буду ходить без шапки',
  'Живите, кайфуйте, жизнь одна',
  'Не баг, а фича;)'
];

const photo = [];

const addComments = (count) => {
  const comments = [];
  for(let i = 1; i <= count; i++){
    comments.push({
      id: i,
      avatar: `img/avatar-${getRand(1, MAX_AVATARS_NUMBER)}.svg`,
      message: MESSAGES[getRand(0, MESSAGES.length - 1)],
      name: NAMES[getRand(0, NAMES.length - 1)]
    });
  }
  return comments;
};

const addPhotos = () => {
  for(let i = 1; i <= MAX_ITEMS_NUMBER; i++){
    photo.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[getRand(1, DESCRIPTIONS.length - 1)],
      likes: getRand(MIN_LIKES, MAX_LIKES),
      comments: addComments(getRand(1, MAX_COMMENTS_NUMBER))
    });
  }
};

addPhotos();

export {photo};
