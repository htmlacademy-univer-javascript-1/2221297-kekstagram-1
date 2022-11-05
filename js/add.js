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

export{postPhotos};
