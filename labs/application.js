// Do something awesome here!
// hint: parseInt() converts a string to a number
var cart = new Shopping.Cart();
var allItems;
$(function() {
    $("button").click(function(event) {
        item = allItems[$("#item_select").val()]
        cart.addItem(item);
        $("#cart").append($("<li>" + item.name + "</li>"));
        $("#item").val("");
        $("#price").val("");
        event.preventDefault();
        $("#total").text(cart.total());
    });

    $.getJSON("items.json", function(items) {
        allItems = items;
        items.forEach(function(item, index) {
            $("#item_select").append($("<option value='" + index + "'>" + item.name + "</option>"));
        });
    });
});
