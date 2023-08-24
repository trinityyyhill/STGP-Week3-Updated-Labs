let x = 2;

let loopCounter = 0;

while (x < 10000) {

  console.log(`x: ${x}, loopCounter: ${loopCounter}`);

  x = x ** 2;

  loopCounter = loopCounter + 1;

}