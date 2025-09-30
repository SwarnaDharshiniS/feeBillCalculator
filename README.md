# Fees Bill Calculator

A ReactJS application to calculate a student's total fees, discounts and late-payment fines.

## Features
- Enter **Tuition Fee**, **Standard of Study**, **Last Date of Payment** and **Date of Payment**.
- Click **Calculate Fee** to compute:
  - Activity Fee (10% of Tuition Fee)
  - Dress Fee (based on Standard)
  - Hostel Fee (based on Standard)
  - Total Fee
- Click **Check Discount** to see:
  - Discount Amount (5–21% depending on Total Fee)
  - Bill After Discount
- Click **Check Payment** to see:
  - Fine Amount (6–21% depending on delay in days)
  - Final Bill Amount

All monetary values are shown rounded to **2 decimal places**.

## File Structure
```
/src
  ├── App.js              # Main React component
  ├── checkDiscount.js    # Contains discount calculation logic
  ├── checkPayment.js     # Contains fine calculation logic
  └── index.js
```

## Setup & Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/fees-bill-calculator.git
   cd fees-bill-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Logic Details

### Discount Calculation (in `checkDiscount.js`)
| Total Fee Range (₹) | Discount % |
|--------------------:|-----------:|
| 1000 – 4000         | 5%          |
| 4001 – 6000         | 12%         |
| 6001 – 8000         | 17%         |
| 8001 – 40000        | 21%         |

### Fine Calculation (in `checkPayment.js`)
- **Delay < 30 days** → 6% fine  
- **Delay 31–60 days** → 12% fine  
- **Delay > 60 days** → 21% fine  

Final Bill = Total Bill (after discount) + Fine Amount.

## Usage Flow
1. Enter **Tuition Fee**, **Standard**, **Last Date of Payment**, **Date of Payment**.
2. Click **Calculate Fee** → shows Activity, Dress, Hostel, Total Fee.
3. Click **Check Discount** → shows Discount Amount & Bill After Discount.
4. Click **Check Payment** → shows Fine Amount & Final Bill Amount.

