const MAX_COUNT_PHOTOS = 25;

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Ура, скоро Новый Год!!!:)',
  'Вчера ходила в кино... лучше бы не ходила',
  'Я больше не буду ходить без шапки',
  'Живите, кайфуйте, жизнь одна',
  'Не баг, а фича;)'
];

const NAMES = [
  'Виктория',
  'Кристина',
  'Роман',
  'Анлегина',
  'Андрей',
];

const CountLike = {
  MIN: 15,
  MAX: 200,
};

const getRand = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length;
checkStringLength();

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRand(1, 6)}.svg`,
  message: MESSAGE[getRand(0, MESSAGE.length - 1)],
  name: NAMES[getRand(0, NAMES.length - 1)],
});

const createUserData = (id) => ({
  id,
  url: `photos/${getRand(1, MAX_COUNT_PHOTOS)}.jpg`,
  description: DESCRIPTION[getRand(0, DESCRIPTION.length - 1)],
  likes: getRand(CountLike.MIN, CountLike.MAX),
  comments: createComment(id),
});

const createPhotoDescription = Array.from({length: 25}).map((element, index) => element = createUserData(index + 1));
createPhotoDescription();
