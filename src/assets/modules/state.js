export let state = {
  shift: false,
  caps: false,
  alt: false,
  currentKeyId: null,

  setShift(value) {
    this.shift = value;
  },

  setCaps() {
    this.caps = !this.caps;
  },

  setAlt() {
    this.alt = !this.alt;
  },

  setCurrentKeyId(id) {
    this.currentKeyId = id;
  },

  getShift() {
    return this.shift;
  },

  getCaps() {
    return this.caps;
  },

  getAlt() {
    return this.alt;
  },

  getCurrentKeyId() {
    return this.currentKeyId;
  }
};
