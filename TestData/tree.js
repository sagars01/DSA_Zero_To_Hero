const tree = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'C',
      left: null,
      right: null,
    },
    right: {
      value: 'D',
      left: null,
      right: null,
    },
  },
  right: {
    value: 'E',
    left: {
      value: 'F',
      left: null,
      right: null,
    },
    right: {
      value: 'G',
      left: null,
      right: null,
    },
  },
};

const numTree = {
  value: 2,
  left: {
    value: 4,
    left: {
      value: 8,
      left: null,
      right: null,
    },
    right: {
      value: 10,
      left: null,
      right: null,
    },
  },
  right: {
    value: 12,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 14,
      left: null,
      right: null,
    },
  },
}; // Sum : 56

const numTree2 = {
  value: 2,
  left: {
    value: 40,
    left: {
      value: 8,
      left: null,
      right: null,
    },
    right: {
      value: 10,
      left: null,
      right: null,
    },
  },
  right: {
    value: 12,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 14,
      left: null,
      right: null,
    },
  },
};

const createBinTreeStub = [8, 10, 12, 5, 3, 6];

module.exports = {
  tree,
  numTree,
  numTree2,
  createBinTreeStub,
};
