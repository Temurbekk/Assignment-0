function productOfAnyAmountOfNumbers(...args) {
  let product = 1;
  args.forEach((num) => {
    product *= num;
  });
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
