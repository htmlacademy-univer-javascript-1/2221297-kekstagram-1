const template = document.querySelector('#picture').content;
const documentFragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');

const createMiniatures = (photos) => {
  photos.forEach((image) => {
    const object = template.cloneNode(true);
    object.querySelector('.picture__img').src = image.url;
    object.querySelector('.picture__likes').textContent = image.likes;
    object.querySelector('.picture__comments').textContent = image.comments.length;
    documentFragment.append(object);
  });
  pictures.append(documentFragment);
};

export {createMiniatures};



