export let state = {
  shift: false,
  caps: false,

  setShift(value) {
    this.shift = value;
  },

  setCaps() {
    this.caps = !this.caps;
  },

  getShift() {
    return this.shift;
  },

  getCaps() {
    return this.caps;
  }
};
