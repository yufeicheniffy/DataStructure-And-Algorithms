//判断字符串是否是回文字符串
//125
let testSet=[
    "A BAD dog is god",
    " race a E-car ",
    " race a car ",
    " lol is a good doog a si loL!!!",
]

//判断字符串是否是回文字符串。
//思路：双指针，相等就移动，不相等就返回true，直到指针指向同一个字符。

function isPalindrome(string){
    let indexStart=0;
    let indexEnd=string.length-1;
    if(string.length===0) return true;
    for(;indexStart<indexEnd;indexStart++,indexEnd--){
        while(indexStart<indexEnd&&!isAlphabet(string[indexStart])){indexStart+=1;}
        while(indexStart<indexEnd&&!isAlphabet(string[indexEnd])){indexEnd-=1;}
        if(!isEqual(string[indexStart],string[indexEnd])) return false;
    }
    return true;

    function isEqual(char1,char2){
        return char1.toLowerCase()===char2.toLowerCase();
    }
    function isAlphabet(char){
        return (char>='a'&&char<="z")||(char>="A"&&char<="Z")||(char>="0"&&char<="9");
    }
}

//680
//Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
//The string will only contain lowercase characters a-z. The maximum length of the string is 50000.


function ablePalindrome(s){
    let indexS = 0;
    let indexE = s.length - 1;
    for (; indexS < indexE; indexS++, indexE--) {
        if (s[indexE] !== s[indexS]) return isPalindrome1(s,indexS+1,indexE)||isPalindrome1(s,indexS,indexE-1);
    }
    return true;

    function isPalindrome1(s,indexS,indexE) {
        for (; indexS < indexE; indexS++, indexE--) {
            if (s[indexE] !== s[indexS]) return false;
        }
        return true;
    }
}

//Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it.
//Find and return the shortest palindrome you can find by performing this transformation.
//214
// KMP-algorithm
testSet.forEach(value => console.log(value+'---isPALINDROME:'+(ablePalindrome(value))));