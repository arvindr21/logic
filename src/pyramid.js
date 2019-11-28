/**
 * 
 * @param {*} n 
 * 
 * Print steps - n = 5
 * 
      #    
     ###   
    #####
 */

function pyramid(n, row = 0, step = '') {
    // base case
    if(row === n){
        return;
    }

    if (step.length === 2 * n - 1) {
    console.log(step);
    return pyramid(n, row + 1);
  }

    const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= step.length && midpoint + row >= step.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, step + add);
}

module.exports = pyramid;

pyramid(3)