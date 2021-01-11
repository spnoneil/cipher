$(document).ready(function() {
    const sentence = prompt("Please enter a sentence:");
    const sent = sentence.charAt(0).toUpperCase() + sentence.slice(-1).toUpperCase();

    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    let countWords = function(sentence) {
        return sentence.split('').length;
    }

    let sent2 = reverseString(sent);
    let sent4 = Math.floor(countWords(sentence) / 2);
    let sent5 = sentence.charAt(sent4) + sentence + sent2;
    let sent6 = reverseString(sent5);

    $(function() {
        $(document).on('click', '#repeatpic', function() {
            $("#repeat").text(sentence).toggle();
            $("#jumble").hide();
        });
        $(document).on('click', '#jumblepic', function() {
            $("#jumble").text(sent6).toggle();
            $("#repeat").hide();
        });
    });
});