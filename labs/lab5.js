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
        expect(truthTable[2]).toBeTruthy();
        expect(truthTable[3]).toBeTruthy();
        expect(truthTable[4]).toBeFalsy();
        expect(truthTable[5]).toBeTruthy();
        expect(truthTable[6]).toBeFalsy();
        expect(truthTable[7]).toBeTruthy();
        expect(truthTable[8]).toBeTruthy();
        expect(truthTable[9]).toBeFalsy();
        expect(truthTable[10]).toBeFalsy();
    });
});
