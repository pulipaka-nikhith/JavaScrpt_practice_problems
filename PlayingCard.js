function getCard(){
    const values=['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const idx= Math.floor(Math.random()*values.length);
    const val=values[idx];
    const suits=['clubs','spades','hearts','diamonds'];
    const s_idx= Math.floor(Math.random()*suits.length);
    const suit =suits[s_idx];
    return{ value: val , suit: suit};
}
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());