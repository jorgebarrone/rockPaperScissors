const assert = require('chai').assert;
const ppt = require('../piedra_papel_tijera');                  //

//aqui se comienza a definir nuestra primer prueba/test
describe('Piedra_Papel_Tijera suite', function() {
  describe('Piedra_Papel_Tijera.selUser suite', function() {
    it('Piedra_Papel_Tijera.selUser should return El valor solo puede ser numerico when User inputs non numeric value', function() {
      assert.equal(ppt.selUser('a'), 'El valor solo puede ser numerico');
    });
    // it('Piedra_Papel_Tijera.selUser should return a Number', function() {
    //   assert.typeOf(ppt.selUser(), "number");
    // });
  });
  describe('Piedra_Papel_Tijera.selRandom suite', function() {
    it('Piedra_Papel_Tijera.selRandom should return User Selection between 1-3', function() {
      assert.isBelow(ppt.selRandom(), 4);
    });
    it('Piedra_Papel_Tijera.selRandom should return a Number', function() {
      assert.typeOf(ppt.selRandom(), "number");
    });
  });
  describe('Piedra_Papel_Tijera.defineResult suite', function() {
    it('Piedra_Papel_Tijera.selRandom should return Empate when User and Random are the same values(1, 1)', function() {
      assert.equal(ppt.defineResult(1, 1), 'Empate');
    });
    it('Piedra_Papel_Tijera.selRandom should return Empate when User and Random are the same values(2, 2)', function() {
      assert.equal(ppt.defineResult(2, 2), 'Empate');
    });
    it('Piedra_Papel_Tijera.selRandom should return Empate when User and Random are the same values(3, 3)', function() {
      assert.equal(ppt.defineResult(3, 3), 'Empate');
    });
    it('Piedra_Papel_Tijera.selRandom should return Gana el ordenador. when User and Random are (1, 2)', function() {
      assert.equal(ppt.defineResult(1, 2), 'Gana el ordenador.');
    });
    it('Piedra_Papel_Tijera.selRandom should return Gana el ordenador. when User and Random are (2, 3)', function() {
      assert.equal(ppt.defineResult(2, 3), 'Gana el ordenador.');
    });
    it('Piedra_Papel_Tijera.selRandom should return Gana el ordenador. when User and Random are (3, 1)', function() {
      assert.equal(ppt.defineResult(3, 1), 'Gana el ordenador.');
    });
    it('Piedra_Papel_Tijera.selRandom should return Gana el Usuario. when User and Random are (1, 3)', function() {
      assert.equal(ppt.defineResult(1, 3), 'Gana el Usuario.');
    });
    it('Piedra_Papel_Tijera.selRandom should return Gana el Usuario. when User and Random are (2, 1)', function() {
      assert.equal(ppt.defineResult(2, 1), 'Gana el Usuario.');
    });
    it('Piedra_Papel_Tijera.selRandom should return Gana el Usuario. when User and Random are (3, 2)', function() {
      assert.equal(ppt.defineResult(3, 2), 'Gana el Usuario.');
    });

  });


});
