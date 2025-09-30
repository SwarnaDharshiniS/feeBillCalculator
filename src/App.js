import React, { useState } from "react";
import calculateDiscount from "./checkDiscount"; 
import calculatePayment from "./checkPayment";   

function App() {
  const [tuitionFee, setTuitionFee] = useState("");
  const [standard, setStandard] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [lastDate, setLastDate] = useState("");

  const [dressFee, setDressFee] = useState(0);
  const [hostelFee, setHostelFee] = useState(0);
  const [activityFee, setActivityFee] = useState(0);
  const [totalFee, setTotalFee] = useState(0);

  const [discountAmount, setDiscountAmount] = useState(0);
  const [billAfterDiscount, setBillAfterDiscount] = useState(0);

  const [fineAmount, setFineAmount] = useState(0);
  const [finalBill, setFinalBill] = useState(0);

  const calculateFees = () => {
    const tFee = parseFloat(tuitionFee) || 0;
    const actFee = 0.1 * tFee;

    let dFee = 0,
      hFee = 0;

    const std = parseInt(standard) || 0;

    if (std >= 1 && std <= 3) {
      dFee = 3000;
      hFee = 5000;
    } else if (std >= 4 && std <= 6) {
      dFee = 5000;
      hFee = 8000;
    } else if (std > 0) {
      dFee = 10000;
      hFee = 10000;
    }

    const total = tFee + actFee + dFee + hFee;

    setActivityFee(actFee);
    setDressFee(dFee);
    setHostelFee(hFee);
    setTotalFee(total);

    setDiscountAmount(0);
    setBillAfterDiscount(0);
    setFineAmount(0);
    setFinalBill(0);
  };

  // Handle Discount
  const handleDiscount = () => {
    const { discountAmount, totalAfterDiscount } = calculateDiscount(totalFee);
    setDiscountAmount(parseFloat(discountAmount.toFixed(2)));
    setBillAfterDiscount(parseFloat(totalAfterDiscount.toFixed(2)));
  };

  // Handle Payment
  const handlePayment = () => {
    try {
      const totalBill = billAfterDiscount || totalFee;
      const { fineAmount, finalBill } = calculatePayment(
        totalBill,
        paymentDate,
        lastDate
      );
      setFineAmount(parseFloat(fineAmount.toFixed(2)));
      setFinalBill(parseFloat(finalBill.toFixed(2)));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Fees Bill Calculator</h1>

      <label className="block mb-2">
        Tuition Fee:
        <input
          type="number"
          value={tuitionFee}
          onChange={(e) => setTuitionFee(e.target.value)}
          className="border p-2 w-full"
        />
      </label>

      <label className="block mb-2">
        Standard of Study:
        <input
          type="number"
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
          className="border p-2 w-full"
        />
      </label>

      <label className="block mb-2">
        Last Date of Payment:
        <input
          type="date"
          value={lastDate}
          onChange={(e) => setLastDate(e.target.value)}
          className="border p-2 w-full"
        />
      </label>

      <label className="block mb-2">
        Date of Payment:
        <input
          type="date"
          value={paymentDate}
          onChange={(e) => setPaymentDate(e.target.value)}
          className="border p-2 w-full"
        />
      </label>

      <button
        onClick={calculateFees}
        className="mt-3 bg-purple-500 text-white px-4 py-2 rounded"
      >
        Calculate Fee
      </button>

      {totalFee > 0 && (
        <div className="mt-4">
          <p>Activity Fee: ₹{activityFee}</p>
          <p>Dress Fee: ₹{dressFee}</p>
          <p>Hostel Fee: ₹{hostelFee}</p>
          <p className="font-bold">Total Fee: ₹{totalFee}</p>
        </div>
      )}

      {totalFee > 0 && (
        <>
          <button
            onClick={handleDiscount}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Check Discount
          </button>

          {billAfterDiscount > 0 && (
            <div className="mt-2">
              <p>Discount Amount: ₹{discountAmount}</p>
              <p className="font-bold">
                Bill After Discount: ₹{billAfterDiscount}
              </p>
            </div>
          )}

          <button
            onClick={handlePayment}
            className="mt-3 bg-green-500 text-white px-4 py-2 rounded"
          >
            Check Payment
          </button>

          {finalBill > 0 && (
            <div className="mt-2">
              <p>Fine Amount: ₹{fineAmount}</p>
              <p className="font-bold">Final Bill Amount: ₹{finalBill}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
