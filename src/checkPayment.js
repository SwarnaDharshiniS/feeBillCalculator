function calculatePayment(totalBill, paymentDate, lastDate) {
  const d1 = new Date(lastDate);
  const d2 = new Date(paymentDate);

  if (d2 < d1) {
    throw new Error("Date of payment should be after Last date of payment!");
  }

  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let finePercent = 0;
  if (diffDays < 30) {
    finePercent = 6;
  } else if (diffDays >= 31 && diffDays <= 60) {
    finePercent = 12;
  } else if (diffDays > 60) {
    finePercent = 21;
  }

  const fineAmount = (finePercent / 100) * totalBill;
  const finalBill = totalBill + fineAmount;

  return { fineAmount, finalBill };
}

export default calculatePayment;
