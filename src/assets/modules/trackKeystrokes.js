export function trackKeystrokes() {
  document.addEventListener('keydown', (event) => {
    event.preventDefault();

    let key = document.getElementById(event.code);
    key.classList.add('pressed');

    let textarea = document.getElementById('textarea');
    let selStart = textarea.selectionStart;

    if (key.classList[1] === 'standard') {
      textarea.value += event.key;
    } else if (key.classList[1] === 'backspace') {
      textarea.value = textarea.value.slice(0, selStart - 1)
        + textarea.value.slice(selStart);
      textarea.selectionStart = selStart - 1;
      textarea.selectionEnd = selStart - 1;
    } else if (key.classList[1] === 'del') {
      textarea.value = textarea.value.slice(0, selStart)
        + textarea.value.slice(selStart + 1);
      textarea.selectionStart = selStart;
      textarea.selectionEnd = selStart;
    } else if (key.classList[1] === 'enter') {
      textarea.value = textarea.value.slice(0, selStart)
        + '\n'
        + textarea.value.slice(selStart);
      textarea.selectionStart = selStart + 1;
      textarea.selectionEnd = selStart + 1;
    }
  });

  document.addEventListener('keyup', (event) => {
    let key = document.getElementById(event.code);
    key.classList.remove('pressed');
    key.classList.add('unpressed');
  });
}
