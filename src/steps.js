/**
 * 
 * @param {*} n 
 * 
 * Print steps - n = 5
 * 
 *  #    
    ##   
    ###  
    #### 
    #####
 */

function steps1(n) {
    const baseStr = ' '.repeat(n);
    const hashStr = '#'.repeat(n);

    for (let index = 0; index < n; index++) {
       let str = hashStr.substr(0, index+1) + baseStr.substr(index+1, n);
       console.log(str); 
    }
}

function steps2(n, row = 0, stair = ''){
    if(n === row) {
        return;
    }

    if(stair.length === n){
        console.log(stair);
        return steps2(n, row + 1);
    }

    const add = stair.length > row ? ' ' : '#';
    return steps2(n, row, stair + add);

}

module.exports = steps1;
module.exports = steps2;
