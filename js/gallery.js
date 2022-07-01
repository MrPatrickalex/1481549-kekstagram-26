const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const imageElement = bigPicture.querySelector('.big-picture__img img');
const likesCountElement = bigPicture.querySelector('.likes-count');
const captionElement = bigPicture.querySelector('.social__caption');
const currentCommentsCountElement = bigPicture.querySelector(
  '.social__comment-count'
);
const allCommentsCountElement = bigPicture.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsElement = bigPicture.querySelector('.social__comments');
const closeButton = bigPicture.querySelector('#picture-cancel');

const createCommentElement = ({ avatar, name, message }) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('social__picture');
  avatarImg.src = avatar;
  avatarImg.alt = name;
  avatarImg.width = 35;
  avatarImg.height = 35;

  const textElement = document.createElement('p');
  textElement.classList.add('social__text');
  textElement.textContent = message;

  commentElement.append(avatarImg);
  commentElement.append(textElement);

  return commentElement;
};

const createGallery = ({ url, likes, comments, description }) => {
  imageElement.src = url;
  likesCountElement.textContent = likes;
  allCommentsCountElement.textContent = comments.length;
  captionElement.textContent = description;
  currentCommentsCountElement.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  commentsElement.innerHTML = '';
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentsFragment.append(commentElement);
  });
  commentsElement.append(commentsFragment);
};

const showGallery = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeGallery = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

closeButton.addEventListener('click', () => {
  closeGallery();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeGallery();
  }
});

export { createGallery, showGallery };
