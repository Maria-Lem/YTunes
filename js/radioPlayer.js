export const radioPlayerInit = () => {
  const radio = document.querySelector('.radio');
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioNavigation = document.querySelector('.radio-navigation');
  const radioHeaderBig = document.querySelector('.radio-header__big');
  const radioItem = document.querySelectorAll('.radio-item');
  const radioStop = document.querySelector('.radio-stop');

  const audio = new Audio();

  const changeIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove('play');
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-stop');
    } else {
      radio.classList.add('play');
      radioStop.classList.remove('fa-play');
      radioStop.classList.add('fa-stop');
    }
  }

  const selectItem = elem => {
    radioItem.forEach(item => item.classList.remove('select'));
    elem.classList.add('select');
  }

  audio.type = 'audio/aac';

  radioStop.disabled = true;

  radioNavigation.addEventListener('change', event => {
    const target = event.target;
    const parent = target.closest('.radio-item');
    const title = parent.querySelector('.radio-name').textContent;
    const urlImg = parent.querySelector('.radio-img').src;
    selectItem(parent);
    radioHeaderBig.textContent = title;
    radioCoverImg.src = urlImg;
    radioStop.disabled = false;
    audio.src = target.dataset.radioStation;
    audio.play();
    changeIconPlay();
  });

  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeIconPlay();
  });
}