describe("Let's make an object", function() {
    var thing = {
        name: "Thing 1",
        description: "A good thing."
    };
    var keys = [];
    var values = [];
    it("keys should be the keys", function() {
        expect(keys).toEqual(["name", "description"]);
    });
    it("values should be the values", function() {
        expect(values).toEqual(["Thing 1", "A good thing."]);
    });
});