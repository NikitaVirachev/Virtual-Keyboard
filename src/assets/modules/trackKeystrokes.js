export function trackKeystrokes() {
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    let key = document.getElementById(event.code);
    key.classList.add('pressed');
  });

  document.addEventListener('keyup', (event) => {
    let key = document.getElementById(event.code);
    key.classList.remove('pressed');
    key.classList.add('unpressed');
  });
}
