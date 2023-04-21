// You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data.
// Create an array containing the names of all items in the inventory.
// Create a separate array with the corresponding stock quantities of each item.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.

let items = ["oranges","bananas","cabbages","apples","pawpaw"];
let stockQuantities = [10,23,40,20,35];
function addItem(item,quantity) {
    items.push(item);
    stockQuantities.push(quantity);
//    return [items,stockQuantities]
}
// let item = "mangoes";
// let quantity = 22;
// console.log(addItem("mangoes",22));

function updatedStock(item,quantity) {
    let index = items.indexOf(item);
    if (index !== -1) {
        quantity[index] = quantity
    }
    return quantity
 
}
console.log(updatedStock("pawpaw", 50));



function totalItems() {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total ++
    
        
    }
    return total
}
totalItems();
console.log(totalItems());


function lowestQuantity() {
    let lowQuantity = 0;
    for (let i = 0; i < stockQuantities.length; i++) {
        if (stockQuantities[i] < stockQuantities[lowQuantity]) {
            lowQuantity = i;

        }
        
    }
    return items[lowQuantity];
}

let lowest = lowestQuantity()
console.log("Items with the lowest quantity", lowest);

