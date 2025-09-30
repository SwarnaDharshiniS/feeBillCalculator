function calculateDiscount(totalFee) {
  let discountPercent = 0;

  if (totalFee >= 1000 && totalFee <= 4000) {
    discountPercent = 5;
  } else if (totalFee >= 4001 && totalFee <= 6000) {
    discountPercent = 12;
  } else if (totalFee >= 6001 && totalFee <= 8000) {
    discountPercent = 17;
  } else if (totalFee >= 8001 && totalFee <= 40000) {
    discountPercent = 21;
  }

  const discountAmount = (discountPercent / 100) * totalFee;
  const totalAfterDiscount = totalFee - discountAmount;

  return { discountAmount, totalAfterDiscount };
}

export default calculateDiscount;
