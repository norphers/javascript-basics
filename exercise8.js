//exercise 8
let numb1;
let numb2;
let operator;
let res;

function calculate(operator, numb1, numb2) {
  if (operator == "addition") res = numb1 + numb2;
  else if (operator == "subtraction") res = numb1 - numb2;
  else if (operator == "multiplication") res = numb1 * numb2;
  else if (operator == "division") res = numb1 / numb2;
  else
    console.log(
      "operator value nust be: addition, substraction, multiplication or division",
    );
  return console.log(res);
}

calculate("multiplication", 10, 24);