const menuShow = document.querySelector('#menu');
const xButton = document.querySelector('.xicon');

menuShow.addEventListener('click', () => {
  document.querySelector('.menu').classList.add('visible');
});

xButton.addEventListener('click', () => {
  document.querySelector('.menu').classList.remove('visible');
});

document.querySelectorAll('.nav-link').forEach((n) => {
  n.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('visible');
  });
});
