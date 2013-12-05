describe("Higher Order Functions", function() {

  function greet () {
    return function (name) {
      return "Hello my name is " + name;
    } 
  }
  var foo = greet() 

  it("can return functions", function() {
    expect(foo("Sam")).toEqual("Hello my name is Sam");
  });

  function greeting (greet,name) {
    return greet(name);
  };

  it("can take functions as arguments", function () {
    expect(greeting(greet(),"Sam")).toEqual("Hello my name is Sam");
  });

});
