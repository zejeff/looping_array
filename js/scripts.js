$(document).ready(function() {
// input to collect user data  
$('#inputButton').click('submit', function(event) {
    event.preventDefault();
    document.getElementById("numberWords").innerHTML = "";
    var numberList = numberArray();
    numberConvert(numberList);
  });  
  //loop to parse data into an array
  function numberArray() {
    var userNumber = $('#input1').val();
    let numberList = [];
    for (let index = 0; index <= userNumber; index += 1) {
      numberList.push(index);
    }
    return numberList;
  }
  //loop to prase array into new array == #'s into words
  function numberConvert(list_1) {
    var wordList = "";
    list_1.forEach(function(value) {
      switch (value) {
        case 1:
          wordList = wordList.concat("Beep!");
          break;
        case 2:
          wordList = wordList.concat("Boop!");
          break;
        case 3:
          wordList = wordList.concat("Won't you be my neighbor?");
          break; 
        default: 
          wordList = wordList.concat(value);
      }
    });
    $('#numberWords').append(wordList);
  }
});
























