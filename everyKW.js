const even=function(x)
{
    return(x%2===0);
}
const evenNumbers=[2,4,6,9,10,0];
console.log(evenNumbers.every(even));
const Numbers=[2,4,6,10,0];
console.log(Numbers.every(even));