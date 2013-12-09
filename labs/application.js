// Do something awesome here!
// hint: parseInt() converts a string to a number
var cart = new Shopping.Cart();
$(function() {
    $("button").click(function(event) {
        var item = {
            name: $("#item").val(),
            price: parseInt($("#price").val())
        };
        cart.addItem(item);
        $("#cart").append($("<li>" + item.name + "</li>"));
        $("#item").val("");
        $("#price").val("");
        event.preventDefault();
        $("#total").text(cart.total());
    });
});