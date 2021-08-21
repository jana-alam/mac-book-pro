// get the total cost elements
const totalCostElement = document.getElementById("total-cost");
const grandTotalCostElement = document.getElementById("grand-total-cost");
//   get promo code elements
const promoCodeDiv = document.getElementById("promo-code");
const promoFail = document.getElementById("promo-code-fail");
const promoSuccess = document.getElementById("promo-code-success");

// function to update individual cost
function updateCost(item, cost) {
  document.getElementById(item + "-cost").innerText = cost;
}
// function to get the costs
function getCosts(id) {
  const cost = parseFloat(document.getElementById(id).innerText);
  return cost;
}
// function to update the total cost
function updateTotalCost() {
  const baseCost = 1299;
  const memoryCost = getCosts("memory-cost");
  const storageCost = getCosts("storage-cost");
  const deliveryCost = getCosts("delivery-cost");
  // calculate total cost
  const totalCost = baseCost + memoryCost + storageCost + deliveryCost;
  // update total cost
  totalCostElement.innerText = totalCost;
  grandTotalCostElement.innerText = totalCost;
  //   reset the promo code divs
  promoCodeDiv.classList.remove("d-none");
  promoSuccess.classList.add("d-none");
  promoFail.classList.add("d-none");
}

// Memory Configuration cost event

document
  .getElementById("min-memory-button")
  .addEventListener("click", function () {
    // update cost for 8gb memory
    updateCost("memory", 0);
    // update total cost
    updateTotalCost();
  });
document
  .getElementById("max-memory-button")
  .addEventListener("click", function () {
    // update cost for 16gb memory
    updateCost("memory", 180);
    // update total cost
    updateTotalCost();
  });

// Storage configuration cost events

document
  .getElementById("min-storage-button")
  .addEventListener("click", function () {
    // update cost for 256gb storage
    updateCost("storage", 0);
    // update total cost
    updateTotalCost();
  });
document
  .getElementById("medium-storage-button")
  .addEventListener("click", function () {
    // update cost for 512gb storage
    updateCost("storage", 100);
    // update total cost
    updateTotalCost();
  });
document
  .getElementById("max-storage-button")
  .addEventListener("click", function () {
    // update cost for 1TB storage
    updateCost("storage", 180);
    // update total cost
    updateTotalCost();
  });

// Delivery types cost events

document
  .getElementById("free-delivery-button")
  .addEventListener("click", function () {
    // update cost for free shipping
    updateCost("delivery", 0);
    // update total cost
    updateTotalCost();
  });
document
  .getElementById("express-delivery-button")
  .addEventListener("click", function () {
    // update cost for free shipping
    updateCost("delivery", 20);
    // update total cost
    updateTotalCost();
  });

// Promo Code discounted Event
document
  .getElementById("promo-code-button")
  .addEventListener("click", function () {
    // get the promo code input text
    const promoCodeInput = document.getElementById("promo-code-input");
    const promoCode = promoCodeInput.value.toLowerCase();
    // check the promo code exists
    if (promoCode === "stevekaku") {
      const totalPrice = parseFloat(totalCostElement.innerText);
      const discountedPrice = (totalPrice / 100) * 20; //20% discount
      const grandTotalPrice = totalPrice - discountedPrice;
      //   update grand total price in promo code
      grandTotalCostElement.innerText = grandTotalPrice;
      //   clear the promo input
      promoCodeInput.value = "";
      //   show/hide promo code divs
      promoCodeDiv.classList.add("d-none");
      promoSuccess.classList.remove("d-none");
      promoFail.classList.add("d-none");
    } else {
      // show promo code fail message
      promoFail.classList.remove("d-none");
    }
  });
