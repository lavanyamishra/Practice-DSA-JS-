/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reversedString = s.split('').reverse().join('');
    if (reversedString === s) {
        return true;
    }
    else {
        return false;
    }
    // let i =0;
    // let j= s.length-1;
    // while(i<j){
    //     if(s[i] !== s[j]){
    //         return false;
    //     }
    //     i++;
    //     j--;
    // }
    // return true;
};