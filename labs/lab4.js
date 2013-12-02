describe("About var", function() {

    describe("to var", function() {
        var message = "Outer";

        function overrideMessage() {
          message = "Inner";
          return message;
        }

        it("should not change the outer message", function() {
            expect(overrideMessage()).toBe("Inner");
            expect(message).toBe("Outer");
        });

    });

    describe("or not to var", function() {
        var message = "Outer"

        function changeMessage(newMessage) {
            var message = newMessage;
        }

        changeMessage("the new message");

        it("changes the message", function() {
            expect(message).toEqual("the new message");
        });
    });

});