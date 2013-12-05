describe("Closures",function () {
  var returningFunction = function () {
    var name = "charli";

    return function () {
      name = name + "e";
      return name;
    };
  };
  var changeName = returningFunction()

  it("can continue to access values defined within a function even after the function returns", function () {
    expect(changeName()).toEqual("charlie");
    expect(changeName()).toEqual("charliee");
  });

  var iterator = {
    currentStep: 1,
    step: function () {
      return this.currentStep += 1;
    }
  };

  var iteratorModule = function() {
    var currentStep = 1;
    return { 
      step: function () {
        return currentStep += 1;
      }
    };
  }();

  describe("as modules",function () {
    iterator.currentStep = 3;
    iteratorModule.currentStep = 3;
    it("protect internals better than a constructed object", function () {
      expect(iterator.step()).toEqual(4);
      expect(iterator.step()).toEqual(5);
      expect(iteratorModule.step()).toEqual(2);
      expect(iteratorModule.step()).toEqual(3);
    });
  });
});
