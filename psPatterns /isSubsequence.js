// function takes in two strings and checks whether the characters in the first string form a subsequence of the characters in ther second string. 
// in other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. 

// function isSubsequence(first, second) {
//     let i = 0;
//     let j = 0;
//     if (!first) return true;
//     while (j < second.length) {
//         if (second[j] === first[i]) i++;
//         if (i === first.length) return true;
//         j++;
//     }
//     return false;
// }

isSubsequence('hello', 'hello world')

function isSubsequence(first, second) {
    if (first.length === 0) return true;
    if (second.length === 0) return false;
    if ( first[0] === second[0]) return isSubsequence(first.slice(1), second.slice(1))
    return isSubsequence(first, second.slice(1))
}