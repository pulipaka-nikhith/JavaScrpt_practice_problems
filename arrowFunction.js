const sqr= function(x)
{
    console.log(arguments.callee.name);
    return(x*x);
}
const sqr1=(x)=>{
    return(x*x);
}
console.log(sqr(2));
console.log(sqr(4));
const sqrs=(x)=>{
    console.log(x*x);

}
const a =[1,2,3,4,5,6,7,8]
a.forEach(sqr);