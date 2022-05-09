const rowOne = [
  {
    type: 'standard',
    id: 'Backquote',
    engCaseDown: '`',
    engCaseUp: '~',
    engCaps: '`',
    engShiftCaps: '~',
    ruCaseDown: 'ё',
    ruCaseUp: 'Ё',
    ruCaps: 'Ё',
    ruShiftCaps: 'ё'
  },
  {
    type: 'standard',
    id: 'Digit1',
    engCaseDown: '1',
    engCaseUp: '!',
    engCaps: '1',
    engShiftCaps: '!',
    ruCaseDown: '1',
    ruCaseUp: '!',
    ruCaps: '1',
    ruShiftCaps: '!'
  },
  {
    type: 'standard',
    id: 'Digit2',
    engCaseDown: '2',
    engCaseUp: '@',
    engCaps: '2',
    engShiftCaps: '@',
    ruCaseDown: '2',
    ruCaseUp: '"',
    ruCaps: '2',
    ruShiftCaps: '"'
  },
  {
    type: 'standard',
    id: 'Digit3',
    engCaseDown: '3',
    engCaseUp: '#',
    engCaps: '3',
    engShiftCaps: '#',
    ruCaseDown: '3',
    ruCaseUp: '№',
    ruCaps: '3',
    ruShiftCaps: '№'
  },
  {
    type: 'standard',
    id: 'Digit4',
    engCaseDown: '4',
    engCaseUp: '$',
    engCaps: '4',
    engShiftCaps: '$',
    ruCaseDown: '4',
    ruCaseUp: ';',
    ruCaps: '4',
    ruShiftCaps: ';'
  },
  {
    type: 'standard',
    id: 'Digit5',
    engCaseDown: '5',
    engCaseUp: '%',
    engCaps: '5',
    engShiftCaps: '%',
    ruCaseDown: '5',
    ruCaseUp: '%',
    ruCaps: '5',
    ruShiftCaps: '%'
  },
  {
    type: 'standard',
    id: 'Digit6',
    engCaseDown: '6',
    engCaseUp: '^',
    engCaps: '6',
    engShiftCaps: '^',
    ruCaseDown: '6',
    ruCaseUp: ':',
    ruCaps: '6',
    ruShiftCaps: ':'
  },
  {
    type: 'standard',
    id: 'Digit7',
    engCaseDown: '7',
    engCaseUp: '&',
    engCaps: '7',
    engShiftCaps: '&',
    ruCaseDown: '7',
    ruCaseUp: '?',
    ruCaps: '7',
    ruShiftCaps: '?'
  },
  {
    type: 'standard',
    id: 'Digit8',
    engCaseDown: '8',
    engCaseUp: '*',
    engCaps: '8',
    engShiftCaps: '*',
    ruCaseDown: '8',
    ruCaseUp: '*',
    ruCaps: '8',
    ruShiftCaps: '*'
  },
  {
    type: 'standard',
    id: 'Digit9',
    engCaseDown: '9',
    engCaseUp: '(',
    engCaps: '9',
    engShiftCaps: '(',
    ruCaseDown: '9',
    ruCaseUp: '(',
    ruCaps: '9',
    ruShiftCaps: '('
  },
  {
    type: 'standard',
    id: 'Digit0',
    engCaseDown: '0',
    engCaseUp: ')',
    engCaps: '0',
    engShiftCaps: ')',
    ruCaseDown: '0',
    ruCaseUp: ')',
    ruCaps: '0',
    ruShiftCaps: ')'
  },
  {
    type: 'standard',
    id: 'Minus',
    engCaseDown: '-',
    engCaseUp: '_',
    engCaps: '-',
    engShiftCaps: '_',
    ruCaseDown: '-',
    ruCaseUp: '_',
    ruCaps: '-',
    ruShiftCaps: '_'
  },
  {
    type: 'standard',
    id: 'Equal',
    engCaseDown: '=',
    engCaseUp: '+',
    engCaps: '=',
    engShiftCaps: '+',
    ruCaseDown: '=',
    ruCaseUp: '+',
    ruCaps: '=',
    ruShiftCaps: '+'
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
    engCaps: 'Q',
    engShiftCaps: 'q',
    ruCaseDown: 'й',
    ruCaseUp: 'Й',
    ruCaps: 'Й',
    ruShiftCaps: 'й'
  },
  {
    type: 'standard',
    id: 'KeyW',
    engCaseDown: 'w',
    engCaseUp: 'W',
    engCaps: 'W',
    engShiftCaps: 'w',
    ruCaseDown: 'ц',
    ruCaseUp: 'Ц',
    ruCaps: 'Ц',
    ruShiftCaps: 'ц'
  },
  {
    type: 'standard',
    id: 'KeyE',
    engCaseDown: 'e',
    engCaseUp: 'E',
    engCaps: 'E',
    engShiftCaps: 'e',
    ruCaseDown: 'у',
    ruCaseUp: 'У',
    ruCaps: 'У',
    ruShiftCaps: 'у'
  },
  {
    type: 'standard',
    id: 'KeyR',
    engCaseDown: 'r',
    engCaseUp: 'R',
    engCaps: 'R',
    engShiftCaps: 'r',
    ruCaseDown: 'к',
    ruCaseUp: 'К',
    ruCaps: 'К',
    ruShiftCaps: 'к'
  },
  {
    type: 'standard',
    id: 'KeyT',
    engCaseDown: 't',
    engCaseUp: 'T',
    engCaps: 'T',
    engShiftCaps: 't',
    ruCaseDown: 'е',
    ruCaseUp: 'Е',
    ruCaps: 'Е',
    ruShiftCaps: 'е'
  },
  {
    type: 'standard',
    id: 'KeyY',
    engCaseDown: 'y',
    engCaseUp: 'Y',
    engCaps: 'Y',
    engShiftCaps: 'y',
    ruCaseDown: 'н',
    ruCaseUp: 'Н',
    ruCaps: 'Н',
    ruShiftCaps: 'н'
  },
  {
    type: 'standard',
    id: 'KeyU',
    engCaseDown: 'u',
    engCaseUp: 'U',
    engCaps: 'U',
    engShiftCaps: 'u',
    ruCaseDown: 'г',
    ruCaseUp: 'Г',
    ruCaps: 'Г',
    ruShiftCaps: 'г'
  },
  {
    type: 'standard',
    id: 'KeyI',
    engCaseDown: 'i',
    engCaseUp: 'I',
    engCaps: 'I',
    engShiftCaps: 'i',
    ruCaseDown: 'ш',
    ruCaseUp: 'Ш',
    ruCaps: 'Ш',
    ruShiftCaps: 'ш'
  },
  {
    type: 'standard',
    id: 'KeyO',
    engCaseDown: 'o',
    engCaseUp: 'O',
    engCaps: 'O',
    engShiftCaps: 'o',
    ruCaseDown: 'щ',
    ruCaseUp: 'Щ',
    ruCaps: 'Щ',
    ruShiftCaps: 'щ'
  },
  {
    type: 'standard',
    id: 'KeyP',
    engCaseDown: 'p',
    engCaseUp: 'P',
    engCaps: 'P',
    engShiftCaps: 'p',
    ruCaseDown: 'з',
    ruCaseUp: 'З',
    ruCaps: 'З',
    ruShiftCaps: 'з'
  },
  {
    type: 'standard',
    id: 'BracketLeft',
    engCaseDown: '[',
    engCaseUp: '{',
    engCaps: '[',
    engShiftCaps: '{',
    ruCaseDown: 'х',
    ruCaseUp: 'Х',
    ruCaps: 'Х',
    ruShiftCaps: 'х'
  },
  {
    type: 'standard',
    id: 'BracketRight',
    engCaseDown: ']',
    engCaseUp: '}',
    engCaps: ']',
    engShiftCaps: '}',
    ruCaseDown: 'ъ',
    ruCaseUp: 'Ъ',
    ruCaps: 'Ъ',
    ruShiftCaps: 'ъ'
  },
  {
    type: 'standard',
    id: 'Backslash',
    engCaseDown: '\\',
    engCaseUp: '|',
    engCaps: '\\',
    engShiftCaps: '|',
    ruCaseDown: '\\',
    ruCaseUp: '/',
    ruCaps: '\\',
    ruShiftCaps: '/'
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
    engCaps: 'A',
    engShiftCaps: 'a',
    ruCaseDown: 'ф',
    ruCaseUp: 'Ф',
    ruCaps: 'Ф',
    ruShiftCaps: 'ф'
  },
  {
    type: 'standard',
    id: 'KeyS',
    engCaseDown: 's',
    engCaseUp: 'S',
    engCaps: 'S',
    engShiftCaps: 's',
    ruCaseDown: 'ы',
    ruCaseUp: 'Ы',
    ruCaps: 'Ы',
    ruShiftCaps: 'ы'
  },
  {
    type: 'standard',
    id: 'KeyD',
    engCaseDown: 'd',
    engCaseUp: 'D',
    engCaps: 'D',
    engShiftCaps: 'd',
    ruCaseDown: 'в',
    ruCaseUp: 'В',
    ruCaps: 'В',
    ruShiftCaps: 'в'
  },
  {
    type: 'standard',
    id: 'KeyF',
    engCaseDown: 'f',
    engCaseUp: 'F',
    engCaps: 'F',
    engShiftCaps: 'f',
    ruCaseDown: 'а',
    ruCaseUp: 'А',
    ruCaps: 'А',
    ruShiftCaps: 'а'
  },
  {
    type: 'standard',
    id: 'KeyG',
    engCaseDown: 'g',
    engCaseUp: 'G',
    engCaps: 'G',
    engShiftCaps: 'g',
    ruCaseDown: 'п',
    ruCaseUp: 'П',
    ruCaps: 'П',
    ruShiftCaps: 'п'
  },
  {
    type: 'standard',
    id: 'KeyH',
    engCaseDown: 'h',
    engCaseUp: 'H',
    engCaps: 'H',
    engShiftCaps: 'h',
    ruCaseDown: 'р',
    ruCaseUp: 'Р',
    ruCaps: 'Р',
    ruShiftCaps: 'р'
  },
  {
    type: 'standard',
    id: 'KeyJ',
    engCaseDown: 'j',
    engCaseUp: 'J',
    engCaps: 'J',
    engShiftCaps: 'j',
    ruCaseDown: 'о',
    ruCaseUp: 'О',
    ruCaps: 'О',
    ruShiftCaps: 'о'
  },
  {
    type: 'standard',
    id: 'KeyK',
    engCaseDown: 'k',
    engCaseUp: 'K',
    engCaps: 'K',
    engShiftCaps: 'k',
    ruCaseDown: 'л',
    ruCaseUp: 'Л',
    ruCaps: 'Л',
    ruShiftCaps: 'л'
  },
  {
    type: 'standard',
    id: 'KeyL',
    engCaseDown: 'l',
    engCaseUp: 'L',
    engCaps: 'L',
    engShiftCaps: 'l',
    ruCaseDown: 'д',
    ruCaseUp: 'Д',
    ruCaps: 'Д',
    ruShiftCaps: 'д'
  },
  {
    type: 'standard',
    id: 'Semicolon',
    engCaseDown: ';',
    engCaseUp: ':',
    engCaps: ';',
    engShiftCaps: ':',
    ruCaseDown: 'ж',
    ruCaseUp: 'Ж',
    ruCaps: 'Ж',
    ruShiftCaps: 'ж'
  },
  {
    type: 'standard',
    id: 'Quote',
    engCaseDown: '\'',
    engCaseUp: '"',
    engCaps: '\'',
    engShiftCaps: '"',
    ruCaseDown: 'э',
    ruCaseUp: 'Э',
    ruCaps: 'Э',
    ruShiftCaps: 'э'
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
    engCaps: 'Z',
    engShiftCaps: 'z',
    ruCaseDown: 'я',
    ruCaseUp: 'Я',
    ruCaps: 'Я',
    ruShiftCaps: 'я'
  },
  {
    type: 'standard',
    id: 'KeyX',
    engCaseDown: 'x',
    engCaseUp: 'X',
    engCaps: 'X',
    engShiftCaps: 'x',
    ruCaseDown: 'ч',
    ruCaseUp: 'Ч',
    ruCaps: 'Ч',
    ruShiftCaps: 'ч'
  },
  {
    type: 'standard',
    id: 'KeyC',
    engCaseDown: 'c',
    engCaseUp: 'C',
    engCaps: 'C',
    engShiftCaps: 'c',
    ruCaseDown: 'с',
    ruCaseUp: 'С',
    ruCaps: 'С',
    ruShiftCaps: 'с'
  },
  {
    type: 'standard',
    id: 'KeyV',
    engCaseDown: 'v',
    engCaseUp: 'V',
    engCaps: 'V',
    engShiftCaps: 'v',
    ruCaseDown: 'м',
    ruCaseUp: 'М',
    ruCaps: 'М',
    ruShiftCaps: 'м'
  },
  {
    type: 'standard',
    id: 'KeyB',
    engCaseDown: 'b',
    engCaseUp: 'B',
    engCaps: 'B',
    engShiftCaps: 'b',
    ruCaseDown: 'и',
    ruCaseUp: 'И',
    ruCaps: 'И',
    ruShiftCaps: 'и'
  },
  {
    type: 'standard',
    id: 'KeyN',
    engCaseDown: 'n',
    engCaseUp: 'N',
    engCaps: 'N',
    engShiftCaps: 'n',
    ruCaseDown: 'т',
    ruCaseUp: 'Т',
    ruCaps: 'T',
    ruShiftCaps: 'т'
  },
  {
    type: 'standard',
    id: 'KeyM',
    engCaseDown: 'm',
    engCaseUp: 'M',
    engCaps: 'M',
    engShiftCaps: 'm',
    ruCaseDown: 'ь',
    ruCaseUp: 'Ь',
    ruCaps: 'Ь',
    ruShiftCaps: 'ь'
  },
  {
    type: 'standard',
    id: 'Comma',
    engCaseDown: ',',
    engCaseUp: '<',
    engCaps: ',',
    engShiftCaps: '<',
    ruCaseDown: 'б',
    ruCaseUp: 'Б',
    ruCaps: 'Б',
    ruShiftCaps: 'б'
  },
  {
    type: 'standard',
    id: 'Period',
    engCaseDown: '.',
    engCaseUp: '>',
    engCaps: '.',
    engShiftCaps: '>',
    ruCaseDown: 'ю',
    ruCaseUp: 'Ю',
    ruCaps: 'Ю',
    ruShiftCaps: 'ю'
  },
  {
    type: 'standard',
    id: 'Slash',
    engCaseDown: '/',
    engCaseUp: '?',
    engCaps: '/',
    engShiftCaps: '?',
    ruCaseDown: '.',
    ruCaseUp: ',',
    ruCaps: '.',
    ruShiftCaps: ','
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
