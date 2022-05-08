const rowOne = [
  {
    type: 'standard',
    id: 'Backquote',
    engCaseDown: '`',
    engCaseUp: '~',
    engCaps: '`',
    ruCaseDown: 'ё',
    ruCaseUp: 'Ё',
    ruCaps: 'Ё'
  },
  {
    type: 'standard',
    id: 'Digit1',
    engCaseDown: '1',
    engCaseUp: '!',
    engCaps: '1',
    ruCaseDown: '1',
    ruCaseUp: '!',
    ruCaps: '1'
  },
  {
    type: 'standard',
    id: 'Digit2',
    engCaseDown: '2',
    engCaseUp: '@',
    engCaps: '2',
    ruCaseDown: '2',
    ruCaseUp: '"',
    ruCaps: '2'
  },
  {
    type: 'standard',
    id: 'Digit3',
    engCaseDown: '3',
    engCaseUp: '#',
    engCaps: '3',
    ruCaseDown: '3',
    ruCaseUp: '№',
    ruCaps: '3'
  },
  {
    type: 'standard',
    id: 'Digit4',
    engCaseDown: '4',
    engCaseUp: '$',
    engCaps: '4',
    ruCaseDown: '4',
    ruCaseUp: ';',
    ruCaps: '4'
  },
  {
    type: 'standard',
    id: 'Digit5',
    engCaseDown: '5',
    engCaseUp: '%',
    engCaps: '5',
    ruCaseDown: '5',
    ruCaseUp: '%',
    ruCaps: '5'
  },
  {
    type: 'standard',
    id: 'Digit6',
    engCaseDown: '6',
    engCaseUp: '^',
    engCaps: '6',
    ruCaseDown: '6',
    ruCaseUp: ':',
    ruCaps: '6'
  },
  {
    type: 'standard',
    id: 'Digit7',
    engCaseDown: '7',
    engCaseUp: '&',
    engCaps: '7',
    ruCaseDown: '7',
    ruCaseUp: '?',
    ruCaps: '7'
  },
  {
    type: 'standard',
    id: 'Digit8',
    engCaseDown: '8',
    engCaseUp: '*',
    engCaps: '8',
    ruCaseDown: '8',
    ruCaseUp: '*',
    ruCaps: '8'
  },
  {
    type: 'standard',
    id: 'Digit9',
    engCaseDown: '9',
    engCaseUp: '(',
    engCaps: '9',
    ruCaseDown: '9',
    ruCaseUp: '(',
    ruCaps: '9'
  },
  {
    type: 'standard',
    id: 'Digit0',
    engCaseDown: '0',
    engCaseUp: ')',
    engCaps: '0',
    ruCaseDown: '0',
    ruCaseUp: ')',
    ruCaps: '0'
  },
  {
    type: 'standard',
    id: 'Minus',
    engCaseDown: '-',
    engCaseUp: '_',
    engCaps: '-',
    ruCaseDown: '-',
    ruCaseUp: '_',
    ruCaps: '-'
  },
  {
    type: 'standard',
    id: 'Equal',
    engCaseDown: '=',
    engCaseUp: '+',
    engCaps: '=',
    ruCaseDown: '=',
    ruCaseUp: '+',
    ruCaps: '='
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
    ruCaseDown: 'й',
    ruCaseUp: 'Й',
    ruCaps: 'Й'
  },
  {
    type: 'standard',
    id: 'KeyW',
    engCaseDown: 'w',
    engCaseUp: 'W',
    engCaps: 'W',
    ruCaseDown: 'ц',
    ruCaseUp: 'Ц',
    ruCaps: 'Ц'
  },
  {
    type: 'standard',
    id: 'KeyE',
    engCaseDown: 'e',
    engCaseUp: 'E',
    engCaps: 'E',
    ruCaseDown: 'у',
    ruCaseUp: 'У',
    ruCaps: 'У'
  },
  {
    type: 'standard',
    id: 'KeyR',
    engCaseDown: 'r',
    engCaseUp: 'R',
    engCaps: 'R',
    ruCaseDown: 'к',
    ruCaseUp: 'К',
    ruCaps: 'К'
  },
  {
    type: 'standard',
    id: 'KeyT',
    engCaseDown: 't',
    engCaseUp: 'T',
    engCaps: 'T',
    ruCaseDown: 'е',
    ruCaseUp: 'Е',
    ruCaps: 'Е'
  },
  {
    type: 'standard',
    id: 'KeyY',
    engCaseDown: 'y',
    engCaseUp: 'Y',
    engCaps: 'Y',
    ruCaseDown: 'н',
    ruCaseUp: 'Н',
    ruCaps: 'Н'
  },
  {
    type: 'standard',
    id: 'KeyU',
    engCaseDown: 'u',
    engCaseUp: 'U',
    engCaps: 'U',
    ruCaseDown: 'г',
    ruCaseUp: 'Г',
    ruCaps: 'Г'
  },
  {
    type: 'standard',
    id: 'KeyI',
    engCaseDown: 'i',
    engCaseUp: 'I',
    engCaps: 'I',
    ruCaseDown: 'ш',
    ruCaseUp: 'Ш',
    ruCaps: 'Ш'
  },
  {
    type: 'standard',
    id: 'KeyO',
    engCaseDown: 'o',
    engCaseUp: 'O',
    engCaps: 'O',
    ruCaseDown: 'щ',
    ruCaseUp: 'Щ',
    ruCaps: 'Щ'
  },
  {
    type: 'standard',
    id: 'KeyP',
    engCaseDown: 'p',
    engCaseUp: 'P',
    engCaps: 'P',
    ruCaseDown: 'з',
    ruCaseUp: 'З',
    ruCaps: 'З'
  },
  {
    type: 'standard',
    id: 'BracketLeft',
    engCaseDown: '[',
    engCaseUp: '{',
    engCaps: '[',
    ruCaseDown: 'х',
    ruCaseUp: 'Х',
    ruCaps: 'Х'
  },
  {
    type: 'standard',
    id: 'BracketRight',
    engCaseDown: ']',
    engCaseUp: '}',
    engCaps: ']',
    ruCaseDown: 'ъ',
    ruCaseUp: 'Ъ',
    ruCaps: 'Ъ'
  },
  {
    type: 'standard',
    id: 'Backslash',
    engCaseDown: '\\',
    engCaseUp: '|',
    engCaps: '\\',
    ruCaseDown: '\\',
    ruCaseUp: '/',
    ruCaps: '\\'
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
    ruCaseDown: 'ф',
    ruCaseUp: 'Ф',
    ruCaps: 'Ф'
  },
  {
    type: 'standard',
    id: 'KeyS',
    engCaseDown: 's',
    engCaseUp: 'S',
    engCaps: 'S',
    ruCaseDown: 'ы',
    ruCaseUp: 'Ы',
    ruCaps: 'Ы'
  },
  {
    type: 'standard',
    id: 'KeyD',
    engCaseDown: 'd',
    engCaseUp: 'D',
    engCaps: 'D',
    ruCaseDown: 'в',
    ruCaseUp: 'В',
    ruCaps: 'В'
  },
  {
    type: 'standard',
    id: 'KeyF',
    engCaseDown: 'f',
    engCaseUp: 'F',
    engCaps: 'F',
    ruCaseDown: 'а',
    ruCaseUp: 'А',
    ruCaps: 'А'
  },
  {
    type: 'standard',
    id: 'KeyG',
    engCaseDown: 'g',
    engCaseUp: 'G',
    engCaps: 'G',
    ruCaseDown: 'п',
    ruCaseUp: 'П',
    ruCaps: 'П'
  },
  {
    type: 'standard',
    id: 'KeyH',
    engCaseDown: 'h',
    engCaseUp: 'H',
    engCaps: 'H',
    ruCaseDown: 'р',
    ruCaseUp: 'Р',
    ruCaps: 'Р'
  },
  {
    type: 'standard',
    id: 'KeyJ',
    engCaseDown: 'j',
    engCaseUp: 'J',
    engCaps: 'J',
    ruCaseDown: 'о',
    ruCaseUp: 'О',
    ruCaps: 'О'
  },
  {
    type: 'standard',
    id: 'KeyK',
    engCaseDown: 'k',
    engCaseUp: 'K',
    engCaps: 'K',
    ruCaseDown: 'л',
    ruCaseUp: 'Л',
    ruCaps: 'Л'
  },
  {
    type: 'standard',
    id: 'KeyL',
    engCaseDown: 'l',
    engCaseUp: 'L',
    engCaps: 'L',
    ruCaseDown: 'д',
    ruCaseUp: 'Д',
    ruCaps: 'Д'
  },
  {
    type: 'standard',
    id: 'Semicolon',
    engCaseDown: ';',
    engCaseUp: ':',
    engCaps: ';',
    ruCaseDown: 'ж',
    ruCaseUp: 'Ж',
    ruCaps: 'Ж'
  },
  {
    type: 'standard',
    id: 'Quote',
    engCaseDown: '\'',
    engCaseUp: '"',
    engCaps: '\'',
    ruCaseDown: 'э',
    ruCaseUp: 'Э',
    ruCaps: 'Э'
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
    ruCaseDown: 'я',
    ruCaseUp: 'Я',
    ruCaps: 'Я'
  },
  {
    type: 'standard',
    id: 'KeyX',
    engCaseDown: 'x',
    engCaseUp: 'X',
    engCaps: 'X',
    ruCaseDown: 'ч',
    ruCaseUp: 'Ч',
    ruCaps: 'Ч'
  },
  {
    type: 'standard',
    id: 'KeyC',
    engCaseDown: 'c',
    engCaseUp: 'C',
    engCaps: 'C',
    ruCaseDown: 'с',
    ruCaseUp: 'С',
    ruCaps: 'С'
  },
  {
    type: 'standard',
    id: 'KeyV',
    engCaseDown: 'v',
    engCaseUp: 'V',
    engCaps: 'V',
    ruCaseDown: 'м',
    ruCaseUp: 'М',
    ruCaps: 'М'
  },
  {
    type: 'standard',
    id: 'KeyB',
    engCaseDown: 'b',
    engCaseUp: 'B',
    engCaps: 'B',
    ruCaseDown: 'и',
    ruCaseUp: 'И',
    ruCaps: 'И'
  },
  {
    type: 'standard',
    id: 'KeyN',
    engCaseDown: 'n',
    engCaseUp: 'N',
    engCaps: 'N',
    ruCaseDown: 'т',
    ruCaseUp: 'Т',
    ruCaps: 'T'
  },
  {
    type: 'standard',
    id: 'KeyM',
    engCaseDown: 'm',
    engCaseUp: 'M',
    engCaps: 'M',
    ruCaseDown: 'ь',
    ruCaseUp: 'Ь',
    ruCaps: 'Ь'
  },
  {
    type: 'standard',
    id: 'Comma',
    engCaseDown: ',',
    engCaseUp: '<',
    engCaps: ',',
    ruCaseDown: 'б',
    ruCaseUp: 'Б',
    ruCaps: 'Б'
  },
  {
    type: 'standard',
    id: 'Period',
    engCaseDown: '.',
    engCaseUp: '>',
    engCaps: '.',
    ruCaseDown: 'ю',
    ruCaseUp: 'Ю',
    ruCaps: 'Ю'
  },
  {
    type: 'standard',
    id: 'Slash',
    engCaseDown: '/',
    engCaseUp: '?',
    engCaps: '/',
    ruCaseDown: '.',
    ruCaseUp: ',',
    ruCaps: '.'
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
