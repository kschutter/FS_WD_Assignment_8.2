// Main function that first prints that it is preparing the items, then calls the serving function
function prepareFood(tableNum, items, serve) {
    console.log("preparing food for items - ►(" + tableNum + ") [" + items + "]");
    serve(tableNum, items);
}

// Is called within prepareFood in order to print when it is serving the items
function serveFood(tableNum, items) {
    console.log("serving food for items - ►(" + tableNum + ") [" + items + "]");
}
