window.addEventListener('load', () => {

  const keys = Array.from(document.getElementsByClassName('key'));
  const audio = Array.from(document.getElementsByTagName('audio'));
  
  document.addEventListener('keydown', e => {

    const keyCode = String(e.keyCode);
    const key = keys.find(key => key.dataset.key === keyCode);

    if (key) {
      const sound = audio.find(sound => sound.dataset.key === keyCode);
      key.classList.add("playing");
      sound.play();
    }
  });
  document.addEventListener('keyup', e => {
    const keyCode = String(e.keyCode);
    const key = keys.find(key => key.dataset.key === keyCode);

    if (key) {
      key.classList.remove('playing');
    }
  });
});
