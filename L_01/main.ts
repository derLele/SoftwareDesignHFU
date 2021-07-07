//namespace verwenden

let userSentence: String  = prompt("Enter your sentence here:", "hier");

let sentence = userSentence;

reverseWords(sentence);
letterReverse(sentence);

function reverseWords(sentence: String): void {

        let tempReverseWord: String;
        tempReverseWord = sentence;
        let array = tempReverseWord.split(" "); //array könnte hier genauer definiert werden
        array.reverse();
        let reverse2: String = sentence;
        reverse2 = tempReverseWord.toString();

        console.log(reverse2);
}

function letterReverse(sentence: String): void { //Funktionsname beschreibt nicht direkt eine Aktivität reverseLetters wäre besser
        let tempReverseArray: String;
        tempReverseArray = sentence;
        let newArray = tempReverseArray.split(""); 
        newArray.reverse();
        let reverse3 = sentence;
        reverse3 = newArray.toString();
        console.log(reverse3);

}

// statt reverse, reverse2, reverse3 könnten eindeutigere, beschreibendere Variablennamen verwendet werden
