const {
  serialize,
  deserialize,
} = require('../../src/Trees/SerializeDeserialize');

describe('(DE) Serialize Test Suite', () => {
  test('should return a valid tree', () => {
    const treeStub = '1,2,null,null,3,null,null'.split(',');
    const treeMock = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };
    const generatedTree = deserialize(treeStub);
    expect(generatedTree).toEqual(treeMock);
  });

  test('deserialize should return empty tree', () => {
    const deserializedTree = deserialize([]);
    expect(deserializedTree).toBe(null);
  });

  test('should return a valid node list', () => {
    const treeStub = '1,2,null,null,3,null,null'.split(',');
    const treeMock = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };
    const generatedTree = serialize(treeMock);
    expect(generatedTree).toEqual(treeStub);
  });

  test('serialize should return empty array', () => {
    const serializedTree = serialize(null);
    expect(serializedTree).toEqual([]);
  });
});
