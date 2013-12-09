describe("Shopping Cart", function() {
    var shoppingCart = new Shopping.Cart();
    describe("adding items", function() {
        shoppingCart.addItem({name: "Bread", price: 150});
        shoppingCart.addItem({name: "Milk", price: 250});
        it("should have 2 items", function() {
            expect(shoppingCart.items.length).toEqual(2);
        });
        it("should have the right items", function() {
            expect(shoppingCart.items[0].name).toEqual("Bread");
            expect(shoppingCart.items[1].name).toEqual("Milk");
        });
    });
    describe("total", function() {
        shoppingCart.addItem({name: "Bread", price: 150});
        shoppingCart.addItem({name: "Milk", price: 250});
        it("should have 2 items", function() {
            expect(shoppingCart.total()).toEqual(400);
        });
    });
});