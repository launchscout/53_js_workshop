describe("Higher Order Functions", function() {

  function greet () {
    // return a function that makes the test pass
  }
  var foo = greet() 

  it("can return functions", function() {
    expect(foo("Sam")).toEqual("Hello my name is Sam");
  });

  // define a greeting function that takes two arguments

  it("can take functions as arguments", function () {
    expect(greeting(greet(),"Sam")).toEqual("Hello my name is Sam");
  });

});
