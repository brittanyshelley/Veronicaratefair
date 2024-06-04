
// import React, { useState } from 'react';

// const MortgageAffordabilityCalculator = () => {
//   const [homePrice, setHomePrice] = useState('');
//   const [downPayment, setDownPayment] = useState('');
//   const [interestRate, setInterestRate] = useState('');
//   const [loanTerm, setLoanTerm] = useState('');

//   const calculateMortgage = () => {
//     const principal = parseFloat(homePrice) - parseFloat(downPayment);
//     const monthlyInterest = parseFloat(interestRate) / 100 / 12;
//     const numberOfPayments = parseInt(loanTerm, 10) * 12;

//     // Basic validation to prevent calculation errors
//     if (isNaN(principal) || isNaN(monthlyInterest) || isNaN(numberOfPayments) || monthlyInterest === 0 || numberOfPayments === 0) {
//       return "Invalid input";
//     }

//     const monthlyPayment = principal * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
//     return monthlyPayment.toFixed(2);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="form-control">
//         <label className="label">
//           <span className="label-text">Home Price ($)</span>
//         </label>
//         <input type="text" placeholder="Home Price" className="input input-bordered"
//           value={homePrice} onChange={(e) => setHomePrice(e.target.value)} />
//       </div>

//       <div className="form-control">
//         <label className="label">
//           <span className="label-text">Down Payment ($)</span>
//         </label>
//         <input type="number" placeholder="Down Payment" className="input input-bordered"
//           value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
//       </div>

//       <div className="form-control">
//         <label className="label">
//           <span className="label-text">Interest Rate (%)</span>
//         </label>
//         <input type="text" step="0.01" placeholder="Interest Rate" className="input input-bordered"
//           value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
//       </div>

//       <div className="form-control">
//         <label className="label">
//           <span className="label-text">Loan Term (years)</span>
//         </label>
//         <input type="text" placeholder="Loan Term" className="input input-bordered"
//           value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
//       </div>

//       <div className="form-control mt-4">
//         <button className="btn btn-primary" onClick={() => alert(`Monthly Payment: $${calculateMortgage()}`)}>
//           Calculate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MortgageAffordabilityCalculator;


// import React, { useState } from 'react';

// const MortgageAffordabilityCalculator = () => {
//   const [homePrice, setHomePrice] = useState('');
//   const [downPayment, setDownPayment] = useState('');
//   const [interestRate, setInterestRate] = useState('');
//   const [loanTerm, setLoanTerm] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [monthlyPayment, setMonthlyPayment] = useState(null);

//   const calculateMortgage = () => {
//     const principal = parseFloat(homePrice) - parseFloat(downPayment);
//     const monthlyInterest = parseFloat(interestRate) / 100 / 12;
//     const numberOfPayments = parseInt(loanTerm, 10) * 12;

//     if (isNaN(principal) || isNaN(monthlyInterest) || isNaN(numberOfPayments) || principal <= 0 || monthlyInterest <= 0 || numberOfPayments <= 0) {
//       setErrorMessage('Please provide valid input for all fields.');
//       return;
//     }

//     setErrorMessage('');
//     const payment = principal * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
//     setMonthlyPayment(payment.toFixed(2));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="max-w-lg mx-auto bg-base-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Mortgage Affordability Calculator</h2>

//         <div className="form-control mb-4">
//           <label className="label">
//             <span className="label-text">Home Price ($)</span>
//           </label>
//           <input type="text" placeholder="Home Price" className="input input-bordered"
//             value={homePrice} onChange={(e) => setHomePrice(e.target.value)} />
//         </div>

//         <div className="form-control mb-4">
//           <label className="label">
//             <span className="label-text">Down Payment ($)</span>
//           </label>
//           <input type="number" placeholder="Down Payment" className="input input-bordered"
//             value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
//         </div>

//         <div className="form-control mb-4">
//           <label className="label">
//             <span className="label-text">Interest Rate (%)</span>
//           </label>
//           <input type="text" step="0.01" placeholder="Interest Rate" className="input input-bordered"
//             value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
//         </div>

//         <div className="form-control mb-4">
//           <label className="label">
//             <span className="label-text">Loan Term (years)</span>
//           </label>
//           <input type="text" placeholder="Loan Term" className="input input-bordered"
//             value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
//         </div>

//         {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

//         <div className="form-control">
//           <button className="btn btn-primary" onClick={calculateMortgage}>
//             Calculate
//           </button>
//         </div>

//         {monthlyPayment && (
//           <div className="mt-6 text-center">
//             <h3 className="text-xl font-semibold">Estimated Monthly Payment</h3>
//             <p className="text-2xl mt-2">${monthlyPayment}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MortgageAffordabilityCalculator;



import React, { useState } from 'react';

const MortgageAffordabilityCalculator = () => {
  const [homePrice, setHomePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const principal = parseFloat(homePrice) - parseFloat(downPayment);
    const monthlyInterest = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseInt(loanTerm, 10) * 12;

    if (isNaN(principal) || isNaN(monthlyInterest) || isNaN(numberOfPayments) || principal <= 0 || monthlyInterest <= 0 || numberOfPayments <= 0) {
      setErrorMessage('Please provide valid input for all fields.');
      return;
    }

    setErrorMessage('');
    const payment = principal * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-900 p-10 flex justify-center items-center min-h-screen">
      <div className="max-w-lg w-full bg-white/40 backdrop-blur-lg p-6 rounded-lg shadow-xl text-black">
        <h2 className="text-2xl font-bold text-center mb-6">Mortgage Affordability Calculator</h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Home Price ($)</span>
          </label>
          <input
            type="text"
            placeholder="Home Price"
            className="input input-bordered"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Down Payment ($)</span>
          </label>
          <input
            type="number"
            placeholder="Down Payment"
            className="input input-bordered"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Interest Rate (%)</span>
          </label>
          <input
            type="text"
            step="0.01"
            placeholder="Interest Rate"
            className="input input-bordered"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Loan Term (years)</span>
          </label>
          <input
            type="text"
            placeholder="Loan Term"
            className="input input-bordered"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>

        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

        <div className="form-control">
          <button className="btn btn-primary" onClick={calculateMortgage}>
            Calculate
          </button>
        </div>

        {monthlyPayment && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold">Estimated Monthly Payment</h3>
            <p className="text-2xl mt-2">${monthlyPayment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageAffordabilityCalculator;


