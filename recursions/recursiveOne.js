// counting down from the given number

function countDown(num) {
    // none of this code will run until the number runs out making it the base case 
  if (num <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(num);
  num--;
  countDown(nums);
}

// iterative version

// function countDown(num) {
//     for (let i = num; i > 0; i--) {
//         console.log(i)
//     }
//     console.log("All Done!")
// }