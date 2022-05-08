export let state = {
  shift: false,
  caps: false,
  alt: false,

  setShift(value) {
    this.shift = value;
  },

  setCaps() {
    this.caps = !this.caps;
  },

  setAlt() {
    this.alt = !this.alt;
  },

  getShift() {
    return this.shift;
  },

  getCaps() {
    return this.caps;
  },

  getAlt() {
    return this.alt;
  }
};
