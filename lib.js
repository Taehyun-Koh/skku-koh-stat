function sum(numbers) {
    return numbers.reduce((prev,curr) => prev + curr,0);
}

function avg(numbers){
    return sum(numbers) / numbers.length;
}

function max(numbers){
    let m = numbers[0];
    for (let i = 1; i<numbers.length; i++) if (m < numbers[i]) m = numbers[i];
    return m;
    // return numbers.reduce((max, curr) => (max > curr ? max : curr));
}


module.exports = {
    sum,
    max,
    avg
};