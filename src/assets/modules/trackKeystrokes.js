export function trackKeystrokes() {
  document.addEventListener('keydown', (event) => {
    event.preventDefault();

    let key = document.getElementById(event.code);
    key.classList.add('pressed');

    let textarea = document.getElementById('textarea');

    if (key.classList[1] === 'standard') {
      textarea.value += event.key;
    } else if (key.classList[1] === 'backspace') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (key.classList[1] === 'del') {
      let selStart = textarea.selectionStart;
      textarea.value = textarea.value.slice(0, selStart)
        + textarea.value.slice(selStart + 1);
      textarea.selectionStart = selStart;
      textarea.selectionEnd = selStart;
    }
  });

  document.addEventListener('keyup', (event) => {
    let key = document.getElementById(event.code);
    key.classList.remove('pressed');
    key.classList.add('unpressed');
  });
}
