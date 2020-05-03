"use strict";
let userSentence = prompt("Enter your sentence here:", "hier");
let sentence = userSentence;
reverseWords(sentence);
letterReverse(sentence);
function reverseWords(sentence) {
    let tempReverseWord;
    tempReverseWord = sentence;
    let array = tempReverseWord.split(" ");
    array.reverse();
    let reverse2 = sentence;
    reverse2 = tempReverseWord.toString();
    console.log(reverse2);
}
function letterReverse(sentence) {
    let tempReverseArray;
    tempReverseArray = sentence;
    let newArray = tempReverseArray.split("");
    newArray.reverse();
    let reverse3 = sentence;
    reverse3 = newArray.toString();
    console.log(reverse3);
}
//# sourceMappingURL=main.js.map