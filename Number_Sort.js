const a=[100,789,-2,76,0,7,10000];
a.sort();
console.log(a);
//here output is [-2, 0, 100, 10000, 7, 76, 789]
// it sorted by treatind all numbers as strings and 
//converts into binary and perform sorting
//to overcome this we give a condition in brackets
const b=a.sort((a,b)=>(a-b));
console.log(b);
//here output is [-2, 0, 7, 76, 100, 789, 10000]
//now it  is in ascendening order
//hence numbers are sorted.
// b-a for descending order
const c=a.sort((a,b)=>(b-a));
console.log(c);