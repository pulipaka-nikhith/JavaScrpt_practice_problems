function average(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return (sum / (numbers.length));
}
console.log(average([0, 50]));
console.log(average([75, 76, 80, 95, 100]));