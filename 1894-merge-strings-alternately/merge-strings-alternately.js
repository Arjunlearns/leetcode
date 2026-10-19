/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";          // empty string to build our answer
    let i = 0, j = 0;        // i tracks position in word1, j in word2

    // Phase 1: alternate while BOTH strings still have characters
    while (i < word1.length && j < word2.length) {
        result += word1[i];   // grab next char from word1
        i++;                  // move word1's pointer forward
        result += word2[j];   // grab next char from word2
        j++;                  // move word2's pointer forward
    }

    // Phase 2: one string is done, append whatever is left
    result += word1.substring(i);  // if word1 had leftovers
    result += word2.substring(j);  // if word2 had leftovers

    return result;
};   

    
