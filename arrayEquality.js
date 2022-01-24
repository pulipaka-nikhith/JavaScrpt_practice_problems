//create a two arrays with different names with same value
let subjects=['maths','science','chemistry'];
let subject1=['maths','science','chemistry'];
//check equality
console.log(subjects==subject1);
console.log(subjects===subject1);
//it gives false because these two arrays will be stored at different locations in memory
//in arrays equality gives true when both array share same mail
//here reference comes into picture
let subject2=subjects;
//check the equality of subjects and subjects1
console.log(subjects==subject2);
// arrays equality also search for reference NOT values