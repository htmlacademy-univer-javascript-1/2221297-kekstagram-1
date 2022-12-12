import {getRand} from './util.js';
const PHOTOS_COUNT = 25;
const COUNT_COMMENTS=10;
const DESCRIPTIONS = [
  'Ура, скоро Новый Год!!!:)',
  'Вчера ходила в кино... лучше бы не ходила',
  'Я больше не буду ходить без шапки',
  'Живите, кайфуйте, жизнь одна',
  'Не баг, а фича;)'
];

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
  'Андрей',
];

const photos=[];

const addComments = (id) => ({
  id,
  avatar : `img/avatar-${getRand(1,6)}.svg`,
  message : MESSAGES[getRand(0,MESSAGES.length-1)],
  name: NAMES[getRand(0, NAMES.length-1)],
});

const postPhoto = (id) => ({
  id: id,
  url: `img/avatar-${id+1}.svg`,
  description: DESCRIPTIONS[getRand(0,DESCRIPTIONS.length-1)],
  likes: getRand(15,200),
  comments: Array.from({length : getRand(1,COUNT_COMMENTS)}).map((element,index) => addComments(index+1)),
});

const postPhotos = () => {
  for (let i=0;i<PHOTOS_COUNT;i++){
    photos.push(postPhoto(i));
  }
};

postPhotos();

export {photos};
