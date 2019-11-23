function revInt(x) {
    // Validate input
    const y = parseInt(x);
    if(isNaN(y)) return new TypeError(`${x} is not an integer.`);
    
    // capture the sign
    const sign = Math.sign(y);
    
    // reverse the int
    let reversed = y.toString().split('').reverse().join('');

    // multiply the sign with revInt
    reversed = parseInt(reversed) * sign;

    // return
    return reversed;

}

module.exports = revInt;