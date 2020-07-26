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
  function numberConvert(numList) {
    var wordList = "";
    numList.forEach(function(value) {
      value = String(value);
      switch (true) {
        case value.includes("32"):
          wordList = wordList.concat("Won't you be my neighbor?");
          break;
        case value.includes("21"):
          wordList = wordList.concat("Boop");
          break;
        case value.includes("13"):
          wordList = wordList.concat("Won't you be my neighbor?");
          break;
        case value.includes("3"):
          wordList = wordList.concat("Won't you be my neighbor?");
          break;
        case value.includes("2"):
          wordList = wordList.concat("Boop!");
          break;
        case value.includes("1"):
          wordList = wordList.concat("Beep!");
          break;  
        default: 
          wordList = wordList.concat(value);
        }
    });
    $('#numberWords').append(wordList);
  }
});
























