let memory = {};

function fibonacci(position) {

    // memoization
    if (memory[position]) return memory[position];

    // base case
    if (position <= 2) {
        memory[position] = 1;
        return 1;
    }

    // recursion case
    else {
        let sum = fibonacci(position - 1) + fibonacci(position - 2);
        memory[position] = sum;
        return sum;
    }
}

module.exports = fibonacci;


// console.time('fib'); fibonacci(400); console.timeEnd('fib'); -> to validate memoization