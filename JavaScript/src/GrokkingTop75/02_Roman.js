class Solution {
    romanToInt(s) {

        let rmap = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        let total = 0;
        let n = s.length;
        for (let i = 0; i < n; i++) {
            const currentCharNum = rmap[s[i]];

            if (i < n - 1 && currentCharNum < rmap[s[i + 1]]) {
                total -= currentCharNum
            } else {
                total += currentCharNum
            }
        }


        return total;
    }
}

