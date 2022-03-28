const groupAnagrams = require('../../src/Strings/GroupAnagrams.js');

describe('String: Group Anagrams Test Suite', () => {
  const checkTruthy = (iArray, oArray) => {
    const flatArray = oArray.flat();
    if (iArray.length !== flatArray.length) {
      return false;
    }
    flatArray.forEach((element) => {
      if (element.indexOf(iArray) < 0) {
        return false;
      }
    });

    return true;
  };

  test('should return true', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const outdata = groupAnagrams(input);
    expect(checkTruthy(input, outdata)).toEqual(true);
  });
});
