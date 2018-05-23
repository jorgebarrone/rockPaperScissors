const assert = require('chai').assert;
const helloWorld = require('../app').helloWorld;                  //
const sum = require('../app').sum;                  //
const ask = require('../app').ask;                  //


//aqui se comienza a definir nuestra primer prueba/test
describe('App suite', function() {
  it('helloWorld should return hello message', function() {
    assert.equal(helloWorld('happy'), 'Hello happy world of Testing!');    // assert.equal recibe 2 parms la funcion a probar y el resultado esperado
  });

  it('sum should return the result of number1 + number 2', function() {
    assert.equal(sum(3, 5), 8);
  });

  it('ask should return true if the parm is 1', function() {
    assert.equal(ask(1), true);
  });

});
