function isPangram(str){
    let Lc=str.toLowerCase();
   for(let ch of 'abcdefghijklmnopqrstuvwxyz'){
       if(!Lc.includes(ch)){
        return false
       }
   }
   return true;
}