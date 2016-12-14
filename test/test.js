var genLipsumText = require("../libs/genLipsumText.js").genLipsumText;
var assert = require("assert");
describe("tibetan lipsum generator", function() {
  it("sentences check", function() {
    var test1 = genLipsumText(1).split(' ').length;
    var test5 = genLipsumText(5).split(' ').length;
    var test20 = genLipsumText(20).split(' ').length;
    var test = genLipsumText('abc').split(' ').length;
    assert.equal(test1, 1);
    assert.equal(test5, 5);
    assert.equal(test20, 20);
    assert.equal(test, 8);
  });
})