let addFirst = document.getElementById("add-first");
let deleteFirst = document.getElementById("delete-first");
let firstIncreast = document.getElementById("firstIncreas");
let firstprice = document.getElementById("firstprice");
let subTotal = document.getElementById("subTotal");
let firstCount = 1;
let firstpriceAcount = 15;
let secondPriceAcount = 100;
let subTotalCount = firstpriceAcount + secondPriceAcount;
firstprice.innerHTML = "💲" + firstpriceAcount + ".00";
firstIncreast.innerHTML = firstCount;

const handleIncrement = () => {
  firstCount++;
  // console.log(firstpriceAcount * firstCount);
  if (firstCount <= 0) {
    firstCount = 1;
    subTotalCount = firstpriceAcount + secondPriceAcount;
    firstIncreast.innerHTML = firstCount;
    subTotal.innerHTML = "💲" + subTotalCount + ".00";
  }

  subTotalCount = firstpriceAcount + secondPriceAcount;
  // console.log(subTotalCount);
  firstIncreast.innerHTML = firstCount;
  firstpriceAcount.innerHTML = "💲" + 150 + ".00";
  subTotal.innerHTML = "💲" + subTotalCount + ".00";
};
const handleDecrement = () => {
  firstCount--;
  if (firstCount <= 0) {
    firstCount = 1;
    return (firstIncreast.innerHTML = firstCount);
  } else {
    firstIncreast.innerHTML = firstCount;
  }
};
subTotal.innerHTML = "💲" + subTotalCount + ".00";

addFirst.addEventListener("click", handleIncrement);
deleteFirst.addEventListener("click", handleDecrement);
