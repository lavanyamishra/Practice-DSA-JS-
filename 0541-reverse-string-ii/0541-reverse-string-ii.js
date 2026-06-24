/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
   let arr = s.split('');
    
    // Jump by 2k characters at a time
    for (let i = 0; i < arr.length; i += 2 * k) {
        let start = i;
        // The end is either i + k - 1 or the end of the array (whichever is smaller)
        let end = Math.min(i + k - 1, arr.length - 1);
        
        // Reverse the segment in-place
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    return arr.join('');
};