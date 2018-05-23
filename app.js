
function helloWorld(state) {
  return `Hello ${state} world of Testing!`;
}

function sum(n1, n2) {
  let result = n1 + n2;
  return result;
}

function ask(p1) {
  if (p1 == 1) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = {
  helloWorld, sum, ask
}
