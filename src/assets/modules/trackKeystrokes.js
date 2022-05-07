export function trackKeystrokes() {
  document.addEventListener('keydown', (event) => {
    event.preventDefault();

    let key = document.getElementById(event.code);
    key.classList.add('pressed');

    let textarea = document.getElementById('textarea');
    let selStart = textarea.selectionStart;
    let selEnd = textarea.selectionEnd;

    if (key.classList[1] === 'standard') {
      textarea.value = textarea.value.slice(0, selStart)
        + event.key
        + textarea.value.slice(selStart);
      textarea.selectionStart = selStart + 1;
      textarea.selectionEnd = selStart + 1;
    } else if (key.classList[1] === 'backspace') {
      if (selStart !== selEnd) {
        textarea.value = textarea.value.slice(0, selStart)
        + textarea.value.slice(selEnd);
        textarea.selectionStart = selStart;
        textarea.selectionEnd = selStart;
      } else {
        textarea.value = textarea.value.slice(0, selStart - 1)
        + textarea.value.slice(selEnd);
        textarea.selectionStart = selStart - 1;
        textarea.selectionEnd = selStart - 1;
      }
    } else if (key.classList[1] === 'del') {
      if (selStart !== selEnd) {
        textarea.value = textarea.value.slice(0, selStart)
        + textarea.value.slice(selEnd);
        textarea.selectionStart = selStart;
        textarea.selectionEnd = selStart;
      } else {
        textarea.value = textarea.value.slice(0, selStart)
        + textarea.value.slice(selStart + 1);
        textarea.selectionStart = selStart;
        textarea.selectionEnd = selStart;
      }
    } else if (key.classList[1] === 'enter') {
      textarea.value = textarea.value.slice(0, selStart)
        + '\n'
        + textarea.value.slice(selStart);
      textarea.selectionStart = selStart + 1;
      textarea.selectionEnd = selStart + 1;
    } else if (key.classList[1] === 'arrow-left') {
      textarea.value = textarea.value.slice(0, selStart)
        + '\u2BC7'
        + textarea.value.slice(selStart);
      textarea.selectionStart = selStart + 1;
      textarea.selectionEnd = selStart + 1;
    } else if (key.classList[1] === 'arrow-bottom') {
      textarea.value = textarea.value.slice(0, selStart)
        + '\u2BC6'
        + textarea.value.slice(selStart);
      textarea.selectionStart = selStart + 1;
      textarea.selectionEnd = selStart + 1;
    } else if (key.classList[1] === 'arrow-right') {
      textarea.value = textarea.value.slice(0, selStart)
        + '\u2BC8'
        + textarea.value.slice(selStart);
      textarea.selectionStart = selStart + 1;
      textarea.selectionEnd = selStart + 1;
    } else if (key.classList[1] === 'arrow-up') {
      textarea.value = textarea.value.slice(0, selStart)
        + '\u2BC5'
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
