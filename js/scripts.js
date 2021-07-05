//Business Logic

function roboger(userInput) {
  const numArray = [];
  numInput = parseInt(userInput);
  for (let i = 0; i <= numInput; i++) {
    numArray.push(i)
  }

  const inputArray = numArray.map(function(num) {
    return num.toString();
  });

  const exceptionArray = inputArray.map (function(userInput) {
    if (userInput.includes("3") === true) {
      return userInput = "Won't you be my neighbor?";
  });

}







//User Interface Logic
$(document).ready(function() {  
  $("userInput").submit(function(event) {
    event.preventDefault();

    const numInput = $("input#input1").val();

  })
})