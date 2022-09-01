// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

areThereDuplicates('a', 'b', 'c', 'd', 'd')

// frequency counter

// function areThereDuplicates() {
//     let collection = {};
//     for (let val in arguments) {
//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     console.log(collection)
//     for (let key in collection) {
//         if (collection[key] > 1) return true
//         console.log(collection[key])
//     }
//     return false;
// }

// multiple pointers method

// function areThereDuplicates(...args) {
//     console.log(args)
//     args.sort((a, b) => a > b);
//     console.log(args)
//     let start = 0;
//     let next = 1;
//     while (next < args.length) {
//         if (args[start] === args[next]) {
//             return true
//         }
//         start++
//         next++
//     }
//     return false
// }

// one liner option

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length
}