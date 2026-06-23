/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let sMap = new Map()
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    }
    console.log(sMap);

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonant = 0;

    for (let i = 0; i < s.length; i++) {

        if (vowels.includes(s[i])) {

            if (sMap.get(s[i]) > maxVowel) {
                maxVowel = sMap.get(s[i]);
            }

        } else {

            if (sMap.get(s[i]) > maxConsonant) {
                maxConsonant = sMap.get(s[i]);
            }

        }
    }

    return maxVowel + maxConsonant
};