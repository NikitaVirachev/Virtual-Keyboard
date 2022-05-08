export class Key {
  constructor() {
    this.keyElement = document.createElement('div');
    this.keyElement.classList.add('key');
  }

  getElement() {
    return this.keyElement;
  }

  fillElement(type, id, value, ...mutableValues) {
    this.keyElement.classList.add(type);
    this.keyElement.id = id;

    const eng = document.createElement('span');
    eng.classList.add('key__eng');

    const engCaseDown = document.createElement('span');
    engCaseDown.classList.add('caseDown');

    const engCaseUp = document.createElement('span');
    engCaseUp.classList.add('caseUp', 'hidden');

    const engCaps = document.createElement('span');
    engCaps.classList.add('capsLock', 'hidden');

    const engShiftCaps = document.createElement('span');
    engShiftCaps.classList.add('shiftCaps', 'hidden');

    const rus = document.createElement('span');
    rus.classList.add('key__rus', 'hidden');

    const rusCaseDown = document.createElement('span');
    rusCaseDown.classList.add('caseDown');

    const rusCaseUp = document.createElement('span');
    rusCaseUp.classList.add('caseUp', 'hidden');

    const ruCaps = document.createElement('span');
    ruCaps.classList.add('capsLock', 'hidden');

    const rusShiftCaps = document.createElement('span');
    rusShiftCaps.classList.add('shiftCaps', 'hidden');

    if (type === 'standard') {
      engCaseDown.innerHTML = value;
      engCaseUp.innerHTML = mutableValues[0];
      engCaps.innerHTML = mutableValues[1];
      engShiftCaps.innerHTML = mutableValues[2];

      eng.append(engCaseDown);
      eng.append(engCaseUp);
      eng.append(engCaps);
      eng.append(engShiftCaps);

      rusCaseDown.innerHTML = mutableValues[3];
      rusCaseUp.innerHTML = mutableValues[4];
      ruCaps.innerHTML = mutableValues[5];
      rusShiftCaps.innerHTML = mutableValues[6];

      rus.append(rusCaseDown);
      rus.append(rusCaseUp);
      rus.append(ruCaps);
      rus.append(rusShiftCaps);
    } else {
      engCaseDown.innerHTML = value;
      engCaseUp.innerHTML = value;
      rusCaseDown.innerHTML = value;
      rusCaseUp.innerHTML = value;

      eng.append(engCaseDown);
      eng.append(engCaseUp);
      rus.append(rusCaseDown);
      rus.append(rusCaseUp);
    }

    this.keyElement.append(eng);
    this.keyElement.append(rus);
  }
}
