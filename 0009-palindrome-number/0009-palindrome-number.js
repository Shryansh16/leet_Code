/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let reverse = 0;
let original = x;
if(x<0){
    return false;
}

while(x!==0){
    let last_digit=x%10;
    reverse = reverse*10+last_digit;
    x=Math.floor(x/10);
}
if(original===reverse){
    return true;
}else{
    return false;
}
    
}




