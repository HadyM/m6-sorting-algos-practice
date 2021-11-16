const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = () => {
  return someNums.sort();
};

// sort numbers in descending order
const sortNumsD = () => {
  return someNums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  return someWords.sort();
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  return someWords.sort((a, b) => b.localeCompare(a));
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  return someProducts.sort((a, b) => a.name.localeCompare(b.name));
};

// sort products by price, ascending order
const sortProductPriceA = () => {
  return someProducts.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = () => {
  return someProducts.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  return someProducts.sort((a, b) => {
    if (a.price === b.price) {
      return a.name.localeCompare(b.name);
    } else {
      return a.price - b.price;
    }
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  return catArt.sort((a, b) => a.designedBy.localeCompare(b.designedBy));
};

// sort catArt by price
const catArtSortByPriceA = () => {
  return catArt
    .map((obj) =>
      String(obj.price).includes("♇♇")
        ? { ...obj, price: Number(obj.price.slice(2)) * 10 }
        : obj,
    )
    .sort((a, b) => Number(a.price) - Number(b.price))
    .map((obj) =>
      obj.price % 10 === 0 ? { ...obj, price: "♇♇" + obj.price / 10 } : obj,
    );
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.ceil(arr.length / 2);
  let left = arr.splice(0, mid);
  let right = arr;
  return merge(mySortFunction(left), mySortFunction(right));
};

const merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
};

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
