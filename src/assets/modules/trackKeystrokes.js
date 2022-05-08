export function trackKeystrokes() {
  document.addEventListener('keydown', (event) => {
    event.preventDefault();

    let key = document.getElementById(event.code);
    key.classList.add('pressed');

    let textarea = document.getElementById('textarea');
    let selStart = textarea.selectionStart;
    let selEnd = textarea.selectionEnd;
    let allCharacterKeys = document.querySelectorAll('.standard');

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
      allCharacterKeys.forEach(element => {
        let keyEng = element.querySelector('.key__eng');
        let keyRus = element.querySelector('.key__rus');

        if (keyEng.matches('.hidden')) {
          let ruCaps = keyRus.querySelector('.caps');
          let ruCaseDown = keyRus.querySelector('.caseDown');
          let ruCaseUp = keyRus.querySelector('.caseUp');

          if (ruCaps.matches('.hidden')) {
            ruCaseDown.classList.add('hidden');
            ruCaseUp.classList.remove('hidden');
          } else {
            ruCaseUp.classList.add('hidden');
            ruCaseDown.classList.remove('hidden');
          }
        } else {
          let engCaps = keyEng.querySelector('.caps');
          let engCaseDown = keyEng.querySelector('.caseDown');
          let engCaseUp = keyEng.querySelector('.caseUp');

          if (engCaps.matches('.hidden')) {
            engCaseDown.classList.add('hidden');
            engCaseUp.classList.remove('hidden');
          } else {
            engCaseUp.classList.add('hidden');
            engCaseDown.classList.remove('hidden');
          }
        }
      });
    }
  });

  document.addEventListener('keyup', (event) => {
    let key = document.getElementById(event.code);
    key.classList.remove('pressed');
    key.classList.add('unpressed');

    let allCharacterKeys = document.querySelectorAll('.standard');

    if ((key.classList[1] === 'shift-left') || (key.classList[1] === 'shift-right')) {
      allCharacterKeys.forEach(element => {
        let keyEng = element.querySelector('.key__eng');
        let keyRus = element.querySelector('.key__rus');

        if (keyEng.matches('.hidden')) {
          let ruCaps = keyRus.querySelector('.caps');
          let ruCaseDown = keyRus.querySelector('.caseDown');
          let ruCaseUp = keyRus.querySelector('.caseUp');

          if (ruCaps.matches('.hidden')) {
            ruCaseUp.classList.add('hidden');
            ruCaseDown.classList.remove('hidden');
          } else {
            ruCaseDown.classList.add('hidden');
            ruCaseUp.classList.remove('hidden');
          }
        } else {
          let engCaps = keyEng.querySelector('.caps');
          let engCaseDown = keyEng.querySelector('.caseDown');
          let engCaseUp = keyEng.querySelector('.caseUp');

          if (engCaps.matches('.hidden')) {
            engCaseUp.classList.add('hidden');
            engCaseDown.classList.remove('hidden');
          } else {
            engCaseDown.classList.add('hidden');
            engCaseUp.classList.remove('hidden');
          }
        }
      });
    }
  });
}
