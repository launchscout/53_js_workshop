describe("equals and threequals", function() {
    var truthTable = [
        5 == 5,
        5 == 6,
        5 === 5,
        5 == "5",
        5 === "5",
        null == undefined,
        null === undefined,
        0 == '',
        '' == 0,
        0 === '',
        '' === 0,
    ];

    it("should make a big difference which you choose", function() {
        expect(truthTable[0]).toBeTruthy();
        expect(truthTable[1]).toBeFalsy();
        // you fill in the rest!
    });
});
