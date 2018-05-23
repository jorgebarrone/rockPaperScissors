const assert = require('chai').assert;
const calculator = require('../calculator').addTested;

describe("Calculator tests using Assert interface from Chai module: ", function() {
  describe("Check addTested Function", function() {
    it("Check the returned value using: assert.equal(value, 'value'): ", function() {
      result = calculator("text");
      assert.equal(result, "text tested");
    });
    it("Check the returned value using: assert.typeOf(value, 'value'): ", function() {
      result = calculator("text");
      assert.typeOf(result, "string");
    });
    // it("Check the returned value using: assert.lenghtOf(value, 'value'): ", function() {
    //   result = calculator("text");
    //   assert.lenghtOf(result, 11);
    // });
  });
});
