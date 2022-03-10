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
  value: '2',
  left: {
    value: '4',
    left: {
      value: '8',
      left: null,
      right: null,
    },
    right: {
      value: '10',
      left: null,
      right: null,
    },
  },
  right: {
    value: '12',
    left: {
      value: '6',
      left: null,
      right: null,
    },
    right: {
      value: '14',
      left: null,
      right: null,
    },
  },
};

module.exports = {
  tree,
  numTree,
};
