export function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export function openNav (navBtn, sidenav) {
  sidenav.style.width = '100%';
  navBtn.classList.remove('btn-open');
  navBtn.classList.add('btn-close');
}

export function closeNav (navBtn, sidenav) {
  sidenav.style.width = '0px';
  navBtn.classList.remove('btn-close');
  navBtn.classList.add('btn-open');
}
