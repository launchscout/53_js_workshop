describe("The Prototype Chain", function () {
  describe("all objects are linked to a prototype", function () {
    describe("objects created from literals", function () {
      var mammal = {};
      var nativeObjectProtoype = Object.prototype;

      it("link to Javascript's native Object.prototype", function () {
        expect(mammal.__proto__).toEqual(/* fill in */);
      });
      it("inherit properties and methods from the Object prototype", function () {
        expect(mammal.toString()).toEqual(/* fill in */);
      });
    });
    describe("objects created using the 'new' constructor", function () {
      var Mammal = function Mammal (species) {
        this.species = species;
        this.sayHello = function () {
          // implement a function that will make line 33 and line 42 pass
        };
      };
      var human = new Mammal("human");

      it("link to the new's target function's prototype", function () {
        expect(human.__proto__).toEqual();
      });
      
      describe("inherit from the target's prototype", function (){ 
        Mammal.prototype.furry = true;
        var bear = new Mammal("bear");
        
        it("properties and methods", function () {
          expect(bear.furry).toEqual(/* fill in */);
          expect(bear.sayHello()).toEqual("Hi I'm a bear");
        });

        describe("that can be overridden", function () {
          var dolphin = new Mammal("dolphin");
          // override the value of furry on the dolphin object to make line 41 pass

          it("on the object", function () {
            expect(dolphin.furry).toEqual(false);
            expect(dolphin.sayHello()).toEqual("Hi I'm a dolphin");
          });

          it("but don't affect properties or methods of the target's prototype", function () {
            expect(Mammal.prototype.furry).toEqual(/* fill in */);
          });
        });
      });
    });
  });
});
