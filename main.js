function ticketClassPrice(service, isIncrease) {
  const firstClassInput = document.getElementById(service + "-class");
  const ticketCount = parseInt(firstClassInput.value);

  let ticketNewCount = ticketCount;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  firstClassInput.value = ticketNewCount;

  let totalTicket = 0;
  if (service == "business") {
    totalTicket = ticketNewCount * 150;
  }
  if (service == "economy") {
    totalTicket = ticketNewCount * 100;
  }
  document.getElementById(service + "-class").innerText = totalTicket;

  calculateTotal();
}

document
  .getElementById("business-increase")
  .addEventListener("click", function () {
    ticketClassPrice("business", true);
  });
document
  .getElementById("business-decrease")
  .addEventListener("click", function () {
    ticketClassPrice("business", false);
  });
document
  .getElementById("economy-increase")
  .addEventListener("click", function () {
    ticketClassPrice("economy", true);
  });
document
  .getElementById("economy-decrease")
  .addEventListener("click", function () {
    ticketClassPrice("economy", false);
  });

//   total price of ticket calculation
function calculateTotal() {
  const businessClass = document.getElementById("business-class");
  const businessCount = parseInt(businessClass.value);

  const economyCount = getInputValue("economy");

  const totalPrice = businessCount * 150 + economyCount * 100;
  document.getElementById("sub-total").innerText = "$" + totalPrice;

  const tax = Math.round(totalPrice * 0.1);
  document.getElementById("tax-amount").innerText = "$" + tax;

  const grandTotal = totalPrice + tax;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}

function getInputValue(service) {
  const ticketInput = document.getElementById(service + "-class");
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}
