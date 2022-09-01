// accepts a number and ads up all the numbers from 0 to the arg

function recursiveRange(num) {
    if (num === 1) return 1;
    return num + recursiveRange(num - 1)
}