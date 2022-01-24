const a="nikhith";
let b=a.split("");
b.unshift(0);
const vowel="aeiou";
let count=b.reduce((a,b)=>{
    if(vowel.includes(b))
    {
        return(a+=1);
    }
    return(a);

});
console.log(count);