$(document).ready(function() {
    const sentence = prompt("Please enter a sentence:");
    const sent = sentence.charAt(0).toUpperCase() + sentence.slice(-1).toUpperCase();

    function reverseStr(str) {
        return str.split().reverse().join("");
    }
    sent2 = reverseStr(sent);
    console.log(sent2);
});