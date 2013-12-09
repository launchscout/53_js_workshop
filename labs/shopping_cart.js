var Shopping = {};
Shopping.Cart = function() {
    this.items = [];
};

Shopping.Cart.prototype = {
    addItem: function(item) {
        this.items.push(item);
    },
    total: function() {
        var itemTotal = 0;
        for(var i=0; i < this.items.length; i++) {
            itemTotal += this.items[i].price;
        }
        return itemTotal;
    }
}