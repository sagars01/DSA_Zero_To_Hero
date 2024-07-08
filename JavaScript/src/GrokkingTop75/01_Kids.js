class Solution {
    kidsWithCandies(candies, extraCandies) {

        const newValue = [];
        let maxCandyCandidate = -1;

        for (let candy of candies) {
            maxCandyCandidate = Math.max(maxCandyCandidate, candy)
        }

        for (let i = 0; i < candies.length; i++) {
            let temp = candies[i] + extraCandies;
            if (temp >= maxCandyCandidate) {
                newValue.push(true)
            } else {
                newValue.push(false)
            }
        }


        return [];
    }
}
