function randomNum() {
  return Math.floor(Math.random() * 2) + 1;
}

function sumar(num1 = 1, num2 = randomNum()) {
  // var num1 = 1;
  // var num2 = undefined;

  //   if (!num1 || !num2) return;
  //   !num1 && (num1 = 1);
  //   !num2 && (num2 = 3);
  return num1 + num2;
}

console.log(sumar(undefined, 5));
