let a ="nikhith";
let A=a.toUpperCase();
console.log(A);
// capitaize the first letter of each word in a sentence 
const c="the quick brown fox";
const b=c.split(" ");
const d=b.map(function(i){
    e=i[0].toUpperCase()+i.slice(1);
    return(e);
});
const f=d.join(" ");
console.log(f);