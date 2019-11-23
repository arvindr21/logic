function revString1(str) {
    // Validate input
    try {
        str = str.toString();
    } catch(e){
        return new TypeError(`${str} is not a string.`);
    }
    
    // reverse the string
    let reversed = str.split('').reverse().join('');

    // return
    return reversed;

}

function revString2(str) {
    // Validate input
    try {
        str = str.toString();
    } catch(e){
        return new TypeError(`${str} is not a string.`);
    }
    
    // reverse the string
    let reversed = str.split('').reverse().join('');

    // return
    return reversed;

}

function revString3(str) {
    // Validate input
    try {
        str = str.toString();
    } catch(e){
        return new TypeError(`${str} is not a string.`);
    }
    
    // reverse the string
    let reversed = '';
    for (const char of str) {
        reversed = char + reversed;
    }

    // return
    return reversed;

}

module.exports.revString1 = revString1;
module.exports.revString2 = revString2;
module.exports.revString3 = revString3;