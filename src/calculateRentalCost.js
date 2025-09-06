/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = days * 40;
  const smallTerm = 3;
  const smallTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    sum -= longTermDiscount;
  } else if (days >= smallTerm) {
    sum -= smallTermDiscount;
  }

  return sum;
}

module.exports = calculateRentalCost;
