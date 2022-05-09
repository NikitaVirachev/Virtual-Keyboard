import { Key } from './key.js';

export class Row {
  constructor() {
    this.rowElement = document.createElement('div');
    this.rowElement.classList.add('virtual-keyboard__row');
  }

  getElement() {
    return this.rowElement;
  }

  fillElement(keysArr) {
    keysArr.forEach(element => {
      let keyElement = new Key();

      if (element.type === 'standard') {
        keyElement.fillElement(
          element.type,
          element.id,
          element.engCaseDown,
          element.engCaseUp,
          element.engCaps,
          element.engShiftCaps,
          element.ruCaseDown,
          element.ruCaseUp,
          element.ruCaps,
          element.ruShiftCaps
        );
      } else {
        keyElement.fillElement(element.type, element.id, element.value);
      }

      this.rowElement.append(keyElement.getElement());
    });
  }
}
