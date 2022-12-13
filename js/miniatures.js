const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

const createMimiature = (picture) => {
  const object = pictureTemplate.cloneNode(true);
  object.src = picture.url;
  object.querySelector('.picture__comments').textContent = picture.comments.length;
  object.querySelector('.picture__likes').textContent = picture.likes;
  return object;
};

const createMiniatures = (images) => {
  images.forEach((picture) => {
    picturesFragment.appendChild(createMimiature(picture));
  });
  pictures.appendChild(picturesFragment);
};

export {createMiniatures};
