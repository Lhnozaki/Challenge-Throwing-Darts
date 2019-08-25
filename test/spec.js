// write tests here
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const scoreCalculator = require("../index");

describe("scoreCalculator", function() {
  it("Should be a function", function() {
    expect(scoreCalculator).to.be.a("function");
  });

  it("Should return a -1 if passing in an empty array", function() {
    let score1 = [];
    expect(scoreCalculator(score1)).to.equal(-1);
  });

  it("Should return a number value", function() {
    let score1 = [1, 5, 11];
    expect(scoreCalculator(score1)).to.be.a("number");
  });

  it("Should add 100 points to the final score if all scores are 10", function() {
    let score1 = [1, 2, 1, 4, 4, 2];
    expect(scoreCalculator(score1)).to.equal(160);
  });
});
