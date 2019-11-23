function revInt(x) {
    // Validate input
    x = parseInt(x);
    if(isNaN(x)) return new Error(`${x} is not an integer.`);
    
    // capture the sign
    const sign = Math.sign(x);
    
    // reverse the int
    let reversed = x.toString().split('').reverse().join('');

    // multiply the sign with revInt
    reversed = parseInt(reversed) * sign;

    // return
    return reversed;

}

// Test
revInt(123);
revInt(-123);
