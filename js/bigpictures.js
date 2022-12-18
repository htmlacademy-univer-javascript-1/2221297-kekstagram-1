const bigPictures = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeButton = bigPictures.querySelector('.big-picture__cancel');

const updateComments = (comments) => {
  const usersComments = document.querySelector('.social__comments');
  const commentTemplate = document.querySelector('.social__comment');
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    const commentAvatar = newComment.querySelector('.social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    const commentMessage = newComment.querySelector('.social__text');
    commentMessage.textContent = comment.message;
    fragment.appendChild(newComment);
  });

  usersComments.innerHTML = '';
  usersComments.appendChild(fragment);
};

const renderFullPicture = (picture) => {
  bigPictures.querySelector('.social__comment-count').classList.add('hidden');
  bigPictures.querySelector('.comments-loader').classList.add('hidden');

  bigPictures.querySelector('.big-picture__img img').src = picture.url;
  bigPictures.querySelector('.likes-count').textContent = picture.likes;
  bigPictures.querySelector('.comments-count').textContent = picture.comments.length;
  bigPictures.querySelector('.social__caption').textContent = picture.description;
  updateComments(picture.comments);
};

const closePicture = () => {
  body.classList.remove('modal-open');
  bigPictures.classList.add('hidden');
};

const onEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePicture();
    document.removeEventListener('keydown', onEsc);
  }
};

const onCloseButton = () => {
  closePicture();
  closeButton.removeEventListener('click', onCloseButton);
};

const openBigPicture = (element) => {
  body.classList.add('modal-open');
  bigPictures.classList.remove('hidden');

  bigPictures.querySelector('.social__comment-count').classList.add('hidden');
  bigPictures.querySelector('.comments-loader').classList.add('hidden');

  renderFullPicture(element);

  closeButton.addEventListener('click', onCloseButton);
  document.addEventListener('keydown', onEsc);
};

export {openBigPicture};
