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
  let allCharacterKeys = document.querySelectorAll('.standard');

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
  } else if (key.classList[1] === 'space') {
    textarea.value = textarea.value.slice(0, selStart)
      + ' '
      + textarea.value.slice(selStart);
    textarea.selectionStart = selStart + 1;
    textarea.selectionEnd = selStart + 1;
  } else if (key.classList[1] === 'tab') {
    textarea.value = textarea.value.slice(0, selStart)
      + '\t'
      + textarea.value.slice(selStart);
    textarea.selectionStart = selStart + 1;
    textarea.selectionEnd = selStart + 1;
  } else if ((key.classList[1] === 'shift-left') || (key.classList[1] === 'shift-right')) {
    state.setShift(true);

    if ((key.classList[1] === 'shift-left') && state.getAlt()) {
      if (sessionStorage.getItem('layout') === 'eng') {
        sessionStorage.setItem('layout', 'rus');

        allCharacterKeys.forEach(element => {
          let keyEng = element.querySelector('.key__eng');
          let keyRus = element.querySelector('.key__rus');

          keyEng.classList.add('hidden');
          keyRus.classList.remove('hidden');
        });
      } else {
        sessionStorage.setItem('layout', 'eng');

        allCharacterKeys.forEach(element => {
          let keyEng = element.querySelector('.key__eng');
          let keyRus = element.querySelector('.key__rus');

          keyRus.classList.add('hidden');
          keyEng.classList.remove('hidden');
        });
      }
    }

    allCharacterKeys.forEach(element => {
      let keyEng = element.querySelector('.key__eng');
      let keyRus = element.querySelector('.key__rus');

      if (keyEng.matches('.hidden')) {
        let ruCaps = keyRus.querySelector('.capsLock');
        let ruCaseDown = keyRus.querySelector('.caseDown');
        let ruCaseUp = keyRus.querySelector('.caseUp');
        let ruShiftCaps = keyRus.querySelector('.shiftCaps');

        if (state.getCaps()) {
          ruCaps.classList.add('hidden');
          ruShiftCaps.classList.remove('hidden');
        } else {
          ruCaseDown.classList.add('hidden');
          ruCaseUp.classList.remove('hidden');
        }
      } else {
        let engCaps = keyEng.querySelector('.capsLock');
        let engCaseDown = keyEng.querySelector('.caseDown');
        let engCaseUp = keyEng.querySelector('.caseUp');
        let engShiftCaps = keyEng.querySelector('.shiftCaps');

        if (state.getCaps()) {
          engCaps.classList.add('hidden');
          engShiftCaps.classList.remove('hidden');
        } else {
          engCaseDown.classList.add('hidden');
          engCaseUp.classList.remove('hidden');
        }
      }
    });
  }
}

export function mouseUp() {
  let key = document.getElementById(state.getCurrentKeyId());

  if (state.getCurrentKeyId() !== 'CapsLock' && state.getCurrentKeyId()) {
    key.classList.remove('pressed');
    key.classList.add('unpressed');
    state.setCurrentKeyId(null);
  }

  let allCharacterKeys = document.querySelectorAll('.standard');

  if ((key.classList[1] === 'shift-left') || (key.classList[1] === 'shift-right')) {
    state.setShift(false);

    allCharacterKeys.forEach(element => {
      let keyEng = element.querySelector('.key__eng');
      let keyRus = element.querySelector('.key__rus');

      if (keyEng.matches('.hidden')) {
        let ruCaps = keyRus.querySelector('.capsLock');
        let ruCaseDown = keyRus.querySelector('.caseDown');
        let ruCaseUp = keyRus.querySelector('.caseUp');
        let ruShiftCaps = keyRus.querySelector('.shiftCaps');

        if (state.getCaps()) {
          ruShiftCaps.classList.add('hidden');
          ruCaps.classList.remove('hidden');
        } else {
          ruCaseUp.classList.add('hidden');
          ruCaseDown.classList.remove('hidden');
        }
      } else {
        let engCaps = keyEng.querySelector('.capsLock');
        let engCaseDown = keyEng.querySelector('.caseDown');
        let engCaseUp = keyEng.querySelector('.caseUp');
        let engShiftCaps = keyEng.querySelector('.shiftCaps');

        if (state.getCaps()) {
          engShiftCaps.classList.add('hidden');
          engCaps.classList.remove('hidden');
        } else {
          engCaseUp.classList.add('hidden');
          engCaseDown.classList.remove('hidden');
        }
      }
    });
  }
}
