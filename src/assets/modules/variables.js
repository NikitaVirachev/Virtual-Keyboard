const rowOne = [
  {
    type: 'standard',
    engCaseDown: '`',
    engCaseUp: '~',
    ruCaseDown: 'ё',
    ruCaseUp: 'Ё'
  },
  {
    type: 'standard',
    engCaseDown: '1',
    engCaseUp: '!',
    ruCaseDown: '1',
    ruCaseUp: '!'
  },
  {
    type: 'standard',
    engCaseDown: '2',
    engCaseUp: '@',
    ruCaseDown: '2',
    ruCaseUp: '"'
  },
  {
    type: 'standard',
    engCaseDown: '3',
    engCaseUp: '#',
    ruCaseDown: '3',
    ruCaseUp: '№'
  },
  {
    type: 'standard',
    engCaseDown: '4',
    engCaseUp: '$',
    ruCaseDown: '4',
    ruCaseUp: ';'
  },
  {
    type: 'standard',
    engCaseDown: '5',
    engCaseUp: '%',
    ruCaseDown: '5',
    ruCaseUp: '%'
  },
  {
    type: 'standard',
    engCaseDown: '6',
    engCaseUp: '^',
    ruCaseDown: '6',
    ruCaseUp: ':'
  },
  {
    type: 'standard',
    engCaseDown: '7',
    engCaseUp: '&',
    ruCaseDown: '7',
    ruCaseUp: '?'
  },
  {
    type: 'standard',
    engCaseDown: '8',
    engCaseUp: '*',
    ruCaseDown: '8',
    ruCaseUp: '*'
  },
  {
    type: 'standard',
    engCaseDown: '9',
    engCaseUp: '(',
    ruCaseDown: '9',
    ruCaseUp: '('
  },
  {
    type: 'standard',
    engCaseDown: '0',
    engCaseUp: ')',
    ruCaseDown: '0',
    ruCaseUp: ')'
  },
  {
    type: 'standard',
    engCaseDown: '-',
    engCaseUp: '_',
    ruCaseDown: '-',
    ruCaseUp: '_'
  },
  {
    type: 'standard',
    engCaseDown: '=',
    engCaseUp: '+',
    ruCaseDown: '=',
    ruCaseUp: '+'
  },
  {
    type: 'backspace',
    value: 'Backspace'
  }
];

const rowTwo = [
  {
    type: 'tab',
    value: 'Tab'
  },
  {
    type: 'standard',
    engCaseDown: 'q',
    engCaseUp: 'Q',
    ruCaseDown: 'й',
    ruCaseUp: 'Й'
  },
  {
    type: 'standard',
    engCaseDown: 'w',
    engCaseUp: 'W',
    ruCaseDown: 'ц',
    ruCaseUp: 'Ц'
  },
  {
    type: 'standard',
    engCaseDown: 'e',
    engCaseUp: 'E',
    ruCaseDown: 'у',
    ruCaseUp: 'У'
  },
  {
    type: 'standard',
    engCaseDown: 'r',
    engCaseUp: 'R',
    ruCaseDown: 'к',
    ruCaseUp: 'К'
  },
  {
    type: 'standard',
    engCaseDown: 't',
    engCaseUp: 'T',
    ruCaseDown: 'е',
    ruCaseUp: 'Е'
  },
  {
    type: 'standard',
    engCaseDown: 'y',
    engCaseUp: 'Y',
    ruCaseDown: 'н',
    ruCaseUp: 'Н'
  },
  {
    type: 'standard',
    engCaseDown: 'u',
    engCaseUp: 'U',
    ruCaseDown: 'г',
    ruCaseUp: 'Г'
  },
  {
    type: 'standard',
    engCaseDown: 'i',
    engCaseUp: 'I',
    ruCaseDown: 'ш',
    ruCaseUp: 'Ш'
  },
  {
    type: 'standard',
    engCaseDown: 'o',
    engCaseUp: 'O',
    ruCaseDown: 'щ',
    ruCaseUp: 'Щ'
  },
  {
    type: 'standard',
    engCaseDown: 'p',
    engCaseUp: 'P',
    ruCaseDown: 'з',
    ruCaseUp: 'З'
  },
  {
    type: 'standard',
    engCaseDown: '[',
    engCaseUp: '{',
    ruCaseDown: 'х',
    ruCaseUp: 'Х'
  },
  {
    type: 'standard',
    engCaseDown: ']',
    engCaseUp: '}',
    ruCaseDown: 'ъ',
    ruCaseUp: 'Ъ'
  },
  {
    type: 'standard',
    engCaseDown: '\\',
    engCaseUp: '|',
    ruCaseDown: '\\',
    ruCaseUp: '/'
  },
  {
    type: 'del',
    value: 'Del'
  }
];

const rowThree = [
  {
    type: 'caps',
    value: 'CapsLock'
  },
  {
    type: 'standard',
    engCaseDown: 'a',
    engCaseUp: 'A',
    ruCaseDown: 'ф',
    ruCaseUp: 'Ф'
  },
  {
    type: 'standard',
    engCaseDown: 's',
    engCaseUp: 'S',
    ruCaseDown: 'ы',
    ruCaseUp: 'Ы'
  },
  {
    type: 'standard',
    engCaseDown: 'd',
    engCaseUp: 'D',
    ruCaseDown: 'в',
    ruCaseUp: 'В'
  },
  {
    type: 'standard',
    engCaseDown: 'f',
    engCaseUp: 'F',
    ruCaseDown: 'а',
    ruCaseUp: 'А'
  },
  {
    type: 'standard',
    engCaseDown: 'g',
    engCaseUp: 'G',
    ruCaseDown: 'п',
    ruCaseUp: 'П'
  },
  {
    type: 'standard',
    engCaseDown: 'h',
    engCaseUp: 'H',
    ruCaseDown: 'р',
    ruCaseUp: 'Р'
  },
  {
    type: 'standard',
    engCaseDown: 'j',
    engCaseUp: 'J',
    ruCaseDown: 'о',
    ruCaseUp: 'О'
  },
  {
    type: 'standard',
    engCaseDown: 'k',
    engCaseUp: 'K',
    ruCaseDown: 'л',
    ruCaseUp: 'Л'
  },
  {
    type: 'standard',
    engCaseDown: 'l',
    engCaseUp: 'L',
    ruCaseDown: 'д',
    ruCaseUp: 'Д'
  },
  {
    type: 'standard',
    engCaseDown: ';',
    engCaseUp: ':',
    ruCaseDown: 'ж',
    ruCaseUp: 'Ж'
  },
  {
    type: 'standard',
    engCaseDown: '\'',
    engCaseUp: '"',
    ruCaseDown: 'э',
    ruCaseUp: 'Э'
  },
  {
    type: 'enter',
    value: 'Enter'
  }
];

const rowFour = [
  {
    type: 'shift-left',
    value: 'Shift'
  },
  {
    type: 'standard',
    engCaseDown: 'z',
    engCaseUp: 'Z',
    ruCaseDown: 'я',
    ruCaseUp: 'Я'
  },
  {
    type: 'standard',
    engCaseDown: 'x',
    engCaseUp: 'X',
    ruCaseDown: 'ч',
    ruCaseUp: 'Ч'
  },
  {
    type: 'standard',
    engCaseDown: 'c',
    engCaseUp: 'C',
    ruCaseDown: 'с',
    ruCaseUp: 'С'
  },
  {
    type: 'standard',
    engCaseDown: 'v',
    engCaseUp: 'V',
    ruCaseDown: 'м',
    ruCaseUp: 'М'
  },
  {
    type: 'standard',
    engCaseDown: 'b',
    engCaseUp: 'B',
    ruCaseDown: 'и',
    ruCaseUp: 'И'
  },
  {
    type: 'standard',
    engCaseDown: 'n',
    engCaseUp: 'N',
    ruCaseDown: 'т',
    ruCaseUp: 'Т'
  },
  {
    type: 'standard',
    engCaseDown: 'm',
    engCaseUp: 'M',
    ruCaseDown: 'ь',
    ruCaseUp: 'Ь'
  },
  {
    type: 'standard',
    engCaseDown: ',',
    engCaseUp: '<',
    ruCaseDown: 'б',
    ruCaseUp: 'Б'
  },
  {
    type: 'standard',
    engCaseDown: '.',
    engCaseUp: '>',
    ruCaseDown: 'ю',
    ruCaseUp: 'Ю'
  },
  {
    type: 'standard',
    engCaseDown: '/',
    engCaseUp: '?',
    ruCaseDown: '.',
    ruCaseUp: ','
  },
  {
    type: 'arrow-up',
    value: '&#9650;'
  },
  {
    type: 'shift-right',
    value: 'Shift'
  }
];

const rowFive = [
  {
    type: 'ctrl-left',
    value: 'Ctrl'
  },
  {
    type: 'win',
    value: 'Win'
  },
  {
    type: 'alt-left',
    value: 'Alt'
  },
  {
    type: 'space',
    value: ''
  },
  {
    type: 'alt-right',
    value: 'Alt'
  },
  {
    type: 'arrow-left',
    value: '&#9668;'
  },
  {
    type: 'arrow-bottom',
    value: '&#9660;'
  },
  {
    type: 'arrow-right',
    value: '&#9658;'
  },
  {
    type: 'ctrl-right',
    value: 'Ctrl'
  }
];

export {
  rowOne, rowTwo, rowThree, rowFour, rowFive
};
