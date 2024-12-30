const shareButton = document.querySelector('.js-share-button');
const shareImg = document.querySelector('.js-share-img');
const shareBox = document.querySelector('.js-share-box');

shareButton.addEventListener('click', () => {
  shareButton.classList.toggle('card__share-button--active');
  shareImg.classList.toggle('card__share-img--active');

  shareBox.classList.toggle('isHidden');
});