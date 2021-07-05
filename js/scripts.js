//Business Logic

function roboger(userInput) {
  let numArray = [];
  numInput = parseInt(userInput);
  for (let i = 0; i <= numInput; i++) {
    numArray.push(i)
  }
  const inputArray = numArray.map(function(num) {
    return num.toString();
  });
  
  const exceptionArray = inputArray.map (function(userInputtedNum) {
    if (userInputtedNum.includes("3") === true) {
      return userInputtedNum = "Won't you be my neighbor?";
  } else if (userInputtedNum.includes("2") === true) {
      return userInputtedNum = "Boop!";
  } else if (userInputtedNum.includes("1") === true) {
      return userInputtedNum = "Beep!";
  } else {
      return userInputtedNum;
    }
  });
      const combineOutputs = exceptionArray.concat(" , ");
      return combineOutputs;

};

//User Interface Logic
$(document).ready(function() {  
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    const numInput = $("input#input1").val();
    $("#output").show();
    $("#output").text(roboger(numInput))
  });
});