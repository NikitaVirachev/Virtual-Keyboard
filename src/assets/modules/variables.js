const rowOne = [
  {
    type: 'standard',
    id: 'Backquote',
    engCaseDown: '`',
    engCaseUp: '~',
    ruCaseDown: 'ё',
    ruCaseUp: 'Ё'
  },
  {
    type: 'standard',
    id: 'Digit1',
    engCaseDown: '1',
    engCaseUp: '!',
    ruCaseDown: '1',
    ruCaseUp: '!'
  },
  {
    type: 'standard',
    id: 'Digit2',
    engCaseDown: '2',
    engCaseUp: '@',
    ruCaseDown: '2',
    ruCaseUp: '"'
  },
  {
    type: 'standard',
    id: 'Digit3',
    engCaseDown: '3',
    engCaseUp: '#',
    ruCaseDown: '3',
    ruCaseUp: '№'
  },
  {
    type: 'standard',
    id: 'Digit4',
    engCaseDown: '4',
    engCaseUp: '$',
    ruCaseDown: '4',
    ruCaseUp: ';'
  },
  {
    type: 'standard',
    id: 'Digit5',
    engCaseDown: '5',
    engCaseUp: '%',
    ruCaseDown: '5',
    ruCaseUp: '%'
  },
  {
    type: 'standard',
    id: 'Digit6',
    engCaseDown: '6',
    engCaseUp: '^',
    ruCaseDown: '6',
    ruCaseUp: ':'
  },
  {
    type: 'standard',
    id: 'Digit7',
    engCaseDown: '7',
    engCaseUp: '&',
    ruCaseDown: '7',
    ruCaseUp: '?'
  },
  {
    type: 'standard',
    id: 'Digit8',
    engCaseDown: '8',
    engCaseUp: '*',
    ruCaseDown: '8',
    ruCaseUp: '*'
  },
  {
    type: 'standard',
    id: 'Digit9',
    engCaseDown: '9',
    engCaseUp: '(',
    ruCaseDown: '9',
    ruCaseUp: '('
  },
  {
    type: 'standard',
    id: 'Digit0',
    engCaseDown: '0',
    engCaseUp: ')',
    ruCaseDown: '0',
    ruCaseUp: ')'
  },
  {
    type: 'standard',
    id: 'Minus',
    engCaseDown: '-',
    engCaseUp: '_',
    ruCaseDown: '-',
    ruCaseUp: '_'
  },
  {
    type: 'standard',
    id: 'Equal',
    engCaseDown: '=',
    engCaseUp: '+',
    ruCaseDown: '=',
    ruCaseUp: '+'
  },
  {
    type: 'backspace',
    id: 'Backspace',
    value: 'Backspace'
  }
];

const rowTwo = [
  {
    type: 'tab',
    id: 'Tab',
    value: 'Tab'
  },
  {
    type: 'standard',
    id: 'KeyQ',
    engCaseDown: 'q',
    engCaseUp: 'Q',
    ruCaseDown: 'й',
    ruCaseUp: 'Й'
  },
  {
    type: 'standard',
    id: 'KeyW',
    engCaseDown: 'w',
    engCaseUp: 'W',
    ruCaseDown: 'ц',
    ruCaseUp: 'Ц'
  },
  {
    type: 'standard',
    id: 'KeyE',
    engCaseDown: 'e',
    engCaseUp: 'E',
    ruCaseDown: 'у',
    ruCaseUp: 'У'
  },
  {
    type: 'standard',
    id: 'KeyR',
    engCaseDown: 'r',
    engCaseUp: 'R',
    ruCaseDown: 'к',
    ruCaseUp: 'К'
  },
  {
    type: 'standard',
    id: 'KeyT',
    engCaseDown: 't',
    engCaseUp: 'T',
    ruCaseDown: 'е',
    ruCaseUp: 'Е'
  },
  {
    type: 'standard',
    id: 'KeyY',
    engCaseDown: 'y',
    engCaseUp: 'Y',
    ruCaseDown: 'н',
    ruCaseUp: 'Н'
  },
  {
    type: 'standard',
    id: 'KeyU',
    engCaseDown: 'u',
    engCaseUp: 'U',
    ruCaseDown: 'г',
    ruCaseUp: 'Г'
  },
  {
    type: 'standard',
    id: 'KeyI',
    engCaseDown: 'i',
    engCaseUp: 'I',
    ruCaseDown: 'ш',
    ruCaseUp: 'Ш'
  },
  {
    type: 'standard',
    id: 'KeyO',
    engCaseDown: 'o',
    engCaseUp: 'O',
    ruCaseDown: 'щ',
    ruCaseUp: 'Щ'
  },
  {
    type: 'standard',
    id: 'KeyP',
    engCaseDown: 'p',
    engCaseUp: 'P',
    ruCaseDown: 'з',
    ruCaseUp: 'З'
  },
  {
    type: 'standard',
    id: 'BracketLeft',
    engCaseDown: '[',
    engCaseUp: '{',
    ruCaseDown: 'х',
    ruCaseUp: 'Х'
  },
  {
    type: 'standard',
    id: 'BracketRight',
    engCaseDown: ']',
    engCaseUp: '}',
    ruCaseDown: 'ъ',
    ruCaseUp: 'Ъ'
  },
  {
    type: 'standard',
    id: 'Backslash',
    engCaseDown: '\\',
    engCaseUp: '|',
    ruCaseDown: '\\',
    ruCaseUp: '/'
  },
  {
    type: 'del',
    id: 'Delete',
    value: 'Del'
  }
];

const rowThree = [
  {
    type: 'caps',
    id: 'CapsLock',
    value: 'CapsLock'
  },
  {
    type: 'standard',
    id: 'KeyA',
    engCaseDown: 'a',
    engCaseUp: 'A',
    ruCaseDown: 'ф',
    ruCaseUp: 'Ф'
  },
  {
    type: 'standard',
    id: 'KeyS',
    engCaseDown: 's',
    engCaseUp: 'S',
    ruCaseDown: 'ы',
    ruCaseUp: 'Ы'
  },
  {
    type: 'standard',
    id: 'KeyD',
    engCaseDown: 'd',
    engCaseUp: 'D',
    ruCaseDown: 'в',
    ruCaseUp: 'В'
  },
  {
    type: 'standard',
    id: 'KeyF',
    engCaseDown: 'f',
    engCaseUp: 'F',
    ruCaseDown: 'а',
    ruCaseUp: 'А'
  },
  {
    type: 'standard',
    id: 'KeyG',
    engCaseDown: 'g',
    engCaseUp: 'G',
    ruCaseDown: 'п',
    ruCaseUp: 'П'
  },
  {
    type: 'standard',
    id: 'KeyH',
    engCaseDown: 'h',
    engCaseUp: 'H',
    ruCaseDown: 'р',
    ruCaseUp: 'Р'
  },
  {
    type: 'standard',
    id: 'KeyJ',
    engCaseDown: 'j',
    engCaseUp: 'J',
    ruCaseDown: 'о',
    ruCaseUp: 'О'
  },
  {
    type: 'standard',
    id: 'KeyK',
    engCaseDown: 'k',
    engCaseUp: 'K',
    ruCaseDown: 'л',
    ruCaseUp: 'Л'
  },
  {
    type: 'standard',
    id: 'KeyL',
    engCaseDown: 'l',
    engCaseUp: 'L',
    ruCaseDown: 'д',
    ruCaseUp: 'Д'
  },
  {
    type: 'standard',
    id: 'Semicolon',
    engCaseDown: ';',
    engCaseUp: ':',
    ruCaseDown: 'ж',
    ruCaseUp: 'Ж'
  },
  {
    type: 'standard',
    id: 'Quote',
    engCaseDown: '\'',
    engCaseUp: '"',
    ruCaseDown: 'э',
    ruCaseUp: 'Э'
  },
  {
    type: 'enter',
    id: 'Enter',
    value: 'Enter'
  }
];

const rowFour = [
  {
    type: 'shift-left',
    id: 'ShiftLeft',
    value: 'Shift'
  },
  {
    type: 'standard',
    id: 'KeyZ',
    engCaseDown: 'z',
    engCaseUp: 'Z',
    ruCaseDown: 'я',
    ruCaseUp: 'Я'
  },
  {
    type: 'standard',
    id: 'KeyX',
    engCaseDown: 'x',
    engCaseUp: 'X',
    ruCaseDown: 'ч',
    ruCaseUp: 'Ч'
  },
  {
    type: 'standard',
    id: 'KeyC',
    engCaseDown: 'c',
    engCaseUp: 'C',
    ruCaseDown: 'с',
    ruCaseUp: 'С'
  },
  {
    type: 'standard',
    id: 'KeyV',
    engCaseDown: 'v',
    engCaseUp: 'V',
    ruCaseDown: 'м',
    ruCaseUp: 'М'
  },
  {
    type: 'standard',
    id: 'KeyB',
    engCaseDown: 'b',
    engCaseUp: 'B',
    ruCaseDown: 'и',
    ruCaseUp: 'И'
  },
  {
    type: 'standard',
    id: 'KeyN',
    engCaseDown: 'n',
    engCaseUp: 'N',
    ruCaseDown: 'т',
    ruCaseUp: 'Т'
  },
  {
    type: 'standard',
    id: 'KeyM',
    engCaseDown: 'm',
    engCaseUp: 'M',
    ruCaseDown: 'ь',
    ruCaseUp: 'Ь'
  },
  {
    type: 'standard',
    id: 'Comma',
    engCaseDown: ',',
    engCaseUp: '<',
    ruCaseDown: 'б',
    ruCaseUp: 'Б'
  },
  {
    type: 'standard',
    id: 'Period',
    engCaseDown: '.',
    engCaseUp: '>',
    ruCaseDown: 'ю',
    ruCaseUp: 'Ю'
  },
  {
    type: 'standard',
    id: 'Slash',
    engCaseDown: '/',
    engCaseUp: '?',
    ruCaseDown: '.',
    ruCaseUp: ','
  },
  {
    type: 'arrow-up',
    id: 'ArrowUp',
    value: '&#9650;'
  },
  {
    type: 'shift-right',
    id: 'ShiftRight',
    value: 'Shift'
  }
];

const rowFive = [
  {
    type: 'ctrl-left',
    id: 'ControlLeft',
    value: 'Ctrl'
  },
  {
    type: 'win',
    id: 'MetaLeft',
    value: 'Win'
  },
  {
    type: 'alt-left',
    id: 'AltLeft',
    value: 'Alt'
  },
  {
    type: 'space',
    id: 'Space',
    value: ''
  },
  {
    type: 'alt-right',
    id: 'AltRight',
    value: 'Alt'
  },
  {
    type: 'arrow-left',
    id: 'ArrowLeft',
    value: '&#9668;'
  },
  {
    type: 'arrow-bottom',
    id: 'ArrowDown',
    value: '&#9660;'
  },
  {
    type: 'arrow-right',
    id: 'ArrowRight',
    value: '&#9658;'
  },
  {
    type: 'ctrl-right',
    id: 'ControlRight',
    value: 'Ctrl'
  }
];

export {
  rowOne, rowTwo, rowThree, rowFour, rowFive
};
