// Do something awesome here!
// hint: parseInt() converts a string to a number
var cart = new Shopping.Cart();
$(function() {
    $("button").click(function(event) {
        // get item somehow
        cart.addItem(item);
        event.preventDefault();
        $("#total").text(cart.total());
    });
});