const assert = require("assert");

const makeAddLib = require("../problems/01-addLib");

describe("makeAddLib()", function () {
  it("return a new wacky string using the three string args", function () {
    assert.strictEqual(
      makeAddLib("swim", "sparkly", "rainbow"),
      "I shall swim to the sparkly rainbow?"
    );
    assert.strictEqual(
      makeAddLib("RUN", "FANCY", "ParK"),
      "I shall RUN to the FANCY ParK?"
    );
  });
});
