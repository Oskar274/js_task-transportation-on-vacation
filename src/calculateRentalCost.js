/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const midTermThreshold = 3;
  const midTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;
  const dailyRate = 40;
  let sum = days * dailyRate; // if sum will be constant, i won't can change it

  if (days >= longTerm) {
    sum -= longTermDiscount;
  } else if (days >= midTermThreshold) {
    sum -= midTermDiscount;
  }

  return sum;
}

module.exports = calculateRentalCost;
