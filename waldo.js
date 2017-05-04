// The second argument/parameter is expected to be a function
["Alice", "Bob", "Waldo", "Winston"].forEach(function findWaldo(element, index, array) {
  if (element === "Waldo") {
    console.log("Found him at index:", index);
  }
})