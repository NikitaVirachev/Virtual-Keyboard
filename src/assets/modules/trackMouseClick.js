import { state } from './state.js';

export function mouseDown(event) {
  let key = null;

  if (event.target.matches('.key')) {
    event.target.classList.remove('unpressed');
    event.target.classList.add('pressed');
    key = event.target;
  } else if (event.target.closest('.key')) {
    event.target.closest('.key').classList.remove('unpressed');
    event.target.closest('.key').classList.add('pressed');
    key = event.target.closest('.key');
  } else {
    return;
  }

  state.setCurrentKeyId(key.id);

  let language = '';
  if (key.firstChild.matches('.hidden')) {
    language = 'rus';
  } else {
    language = 'eng';
  }

  let value = '';

  if (language === 'eng') {
    let children = key.firstChild.children;
    [...children].forEach(element => {
      if (!element.classList.contains('hidden')) {
        value = element.innerHTML;
      }
    });
  } else {
    let children = key.lastChildren.children;
    [...children].forEach(element => {
      if (!element.classList.contains('hidden')) {
        value = element.innerHTML;
      }
    });
  }

  let textarea = document.getElementById('textarea');
  let selStart = textarea.selectionStart;
  let selEnd = textarea.selectionEnd;

  if (key.classList[1] === 'standard') {
    textarea.value = textarea.value.slice(0, selStart)
      + value
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
  }
}

export function mouseUp() {
  let key = document.getElementById(state.getCurrentKeyId());

  if (state.getCurrentKeyId() !== 'CapsLock' && state.getCurrentKeyId()) {
    key.classList.remove('pressed');
    key.classList.add('unpressed');
    state.setCurrentKeyId(null);
  }
}
