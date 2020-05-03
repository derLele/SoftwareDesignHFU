let userSentence: String  = prompt("Enter your sentence here:", "hier");

let sentence = userSentence;

reverseWords(sentence);
letterReverse(sentence);

function reverseWords(sentence: String): void {

        let tempReverseWord: String;
        tempReverseWord = sentence;
        let array = tempReverseWord.split(" ");
        array.reverse();
        let reverse2: String = sentence;
        reverse2 = tempReverseWord.toString();

        console.log(reverse2);
}

function letterReverse(sentence: String): void {
        let tempReverseArray: String;
        tempReverseArray = sentence;
        let newArray = tempReverseArray.split("");
        newArray.reverse();
        let reverse3 = sentence;
        reverse3 = newArray.toString();
        console.log(reverse3);

}