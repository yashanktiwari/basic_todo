var n1 = document.getElementById("n1");
var input = document.getElementById("calculatorInput");

var s1 = "";
var s2 = "";
var operatorStr = "";

var numbers = Array.from(document.getElementsByClassName("number"));

var operators = Array.from(document.getElementsByClassName("operator"));

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    console.log(number.dataset.value);

    if (operatorStr.length != 0) {
      // operator is pressed
      s2 += number.dataset.value;
      input.value = s2;
    } else {
      // operator is not pressed
      s1 += number.dataset.value;
      input.value = s1;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.dataset.value != "=") {
      operatorStr = operator.dataset.value;
      input.value = operatorStr;
    } else {
      performCalculation();
      s1 = "";
      s2 = "";
      operatorStr = "";
    }
  });
});

function performCalculation() {
  var n1 = parseFloat(s1);
  var n2 = parseFloat(s2);
  var res;

  switch (operatorStr) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      if (n2 == 0) {
        res = "NaN";
      } else {
        res = n1 / n2;
      }
      break;
  }

  input.value = res.toFixed(2);
}
