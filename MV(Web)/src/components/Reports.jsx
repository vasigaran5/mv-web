// import React, { useState, useEffect } from 'react';

// export default function Reports() {
//   const [startDate, setStartDate] = useState('01-09-2026');
//   const [endDate, setEndDate] = useState('19-09-2026');

//   const [inventory, setInventory] = useState([]);
//   const [expenses, setExpenses] = useState([]);
//   const [payments, setPayments] = useState([]);

//   // Load data from localStorage on mount
//   useEffect(() => {
//     const savedInv = localStorage.getItem('savedInventory');
//     if (savedInv) setInventory(JSON.parse(savedInv));

//     const savedExp = localStorage.getItem('savedExpenses');
//     if (savedExp) setExpenses(JSON.parse(savedExp));

//     const savedPay = localStorage.getItem('savedPayments');
//     if (savedPay) setPayments(JSON.parse(savedPay));
//   }, []);

//   // Calculate metrics dynamically
//   const totalExpenses = expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
//   const totalCollected = payments
//     .filter(p => p.direction && p.direction.includes('Received'))
//     .reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

//   // Stock valuation calculation
//   const stockValuationList = inventory.map(item => {
//     const qty = Number(item.stockQty) || 0;
//     const price = Number(item.salePrice) || 0;
//     return {
//       ...item,
//       totalValue: qty * price
//     };
//   });

//   const totalStockValue = stockValuationList.reduce((sum, item) => sum + item.totalValue, 0);

//   // Mock sales / tax values for demonstration
//   const taxableValue = 299.00;
//   const cgst = 7.48;
//   const sgst = 7.48;
//   const igst = 0;
//   const totalWithTax = 313.96;
//   const grossProfit = totalWithTax - totalExpenses;

//   return (
//     <div className="max-w-7xl mx-auto space-y-6 pb-12 relative">
      
//       {/* Top Header & Date Filter */}
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
//         <div>
//           <h1 className="text-2xl font-black text-gray-900 tracking-tight">Reports</h1>
//           <p className="text-xs text-gray-500 font-medium">Financial summary, GST output tax, and stock valuation</p>
//         </div>

//         {/* Date Filter Bar */}
//         <div className="bg-[#fbfaf7] p-2 rounded-2xl border border-[#eae5dd] flex items-center space-x-2 text-xs font-bold text-gray-700 shadow-xs">
//           <span className="px-2 text-gray-400">📅</span>
//           <input 
//             type="text" 
//             value={startDate} 
//             onChange={(e) => setStartDate(e.target.value)} 
//             className="w-24 bg-white border border-[#eae5dd] p-1.5 rounded-xl text-center" 
//           />
//           <span className="text-gray-400">to</span>
//           <input 
//             type="text" 
//             value={endDate} 
//             onChange={(e) => setEndDate(e.target.value)} 
//             className="w-24 bg-white border border-[#eae5dd] p-1.5 rounded-xl text-center" 
//           />
//           <button className="px-4 py-1.5 bg-[#2c3e35] hover:bg-[#1f2c25] text-white rounded-xl shadow-xs transition cursor-pointer">
//             Apply
//           </button>
//         </div>
//       </div>

//       {/* 5 Metric Summary Cards */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
//         <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] shadow-xs">
//           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Sales</p>
//           <h3 className="text-xl font-black text-gray-900 mt-1">₹ {totalWithTax.toFixed(2)}</h3>
//         </div>
//         <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] shadow-xs">
//           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Purchases</p>
//           <h3 className="text-xl font-black text-gray-900 mt-1">₹ 0</h3>
//         </div>
//         <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] shadow-xs">
//           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Expenses</p>
//           <h3 className="text-xl font-black text-[#a65d57] mt-1">₹ {totalExpenses.toFixed(2)}</h3>
//         </div>
//         <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] shadow-xs">
//           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Collected</p>
//           <h3 className="text-xl font-black text-green-700 mt-1">₹ {totalCollected.toFixed(2)}</h3>
//         </div>
//         <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] shadow-xs col-span-2 sm:col-span-1">
//           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Gross profit</p>
//           <h3 className="text-xl font-black text-gray-900 mt-1">₹ {grossProfit.toFixed(2)}</h3>
//         </div>
//       </div>

//       {/* Lower Section: GST Summary & Stock Valuation */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
//         {/* Left: GST Summary */}
//         <div className="bg-[#fbfaf7]/90 p-6 rounded-2xl border border-[#eae5dd] space-y-6 shadow-sm">
//           <div className="flex justify-between items-center">
//             <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">GST summary (output tax)</h3>
//             <button className="px-3 py-1.5 bg-white border border-[#eae5dd] text-gray-700 hover:bg-gray-50 font-bold rounded-xl text-xs shadow-xs transition cursor-pointer">
//               Export invoices CSV
//             </button>
//           </div>

//           <div className="space-y-3 text-xs">
//             <div className="flex justify-between py-2 border-b border-gray-100">
//               <span className="font-bold text-gray-500">Taxable value</span>
//               <span className="font-black text-gray-900">₹{taxableValue.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between py-2 border-b border-gray-100">
//               <span className="font-bold text-gray-500">CGST</span>
//               <span className="font-black text-gray-900">₹{cgst.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between py-2 border-b border-gray-100">
//               <span className="font-bold text-gray-500">SGST</span>
//               <span className="font-black text-gray-900">₹{sgst.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between py-2 border-b border-gray-100">
//               <span className="font-bold text-gray-500">IGST</span>
//               <span className="font-black text-gray-900">₹{igst.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between py-3 font-bold text-sm bg-white/50 px-3 rounded-xl border border-[#eae5dd]">
//               <span className="text-gray-900">Total (with tax)</span>
//               <span className="font-black text-[#2c3e35]">₹{totalWithTax.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>

//         {/* Right: Stock Valuation */}
//         <div className="bg-[#fbfaf7]/90 p-6 rounded-2xl border border-[#eae5dd] space-y-6 shadow-sm">
//           <div className="flex justify-between items-center">
//             <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Stock valuation</h3>
//             <span className="text-xs font-black text-[#2c3e35] bg-white px-3 py-1.5 rounded-xl border border-[#eae5dd]">
//               ₹ {totalStockValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
//             </span>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse text-xs">
//               <thead>
//                 <tr className="border-b border-[#eae5dd] text-gray-400 font-bold">
//                   <th className="pb-3 px-2">PRODUCT</th>
//                   <th className="pb-3 px-2 text-center">QTY</th>
//                   <th className="pb-3 px-2 text-right">VALUE</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {stockValuationList.length === 0 ? (
//                   <tr>
//                     <td colSpan="3" className="py-8 text-center text-gray-400">No inventory products found</td>
//                   </tr>
//                 ) : (
//                   stockValuationList.map((item) => {
//                     const isLow = item.stockQty <= (item.lowStockAlert || 5);
//                     return (
//                       <tr key={item.id} className="border-b border-gray-100 hover:bg-white/60 transition">
//                         <td className="py-3 px-2 font-bold text-gray-900 flex items-center space-x-2">
//                           <span>{item.name}</span>
//                           {isLow && (
//                             <span className="px-1.5 py-0.5 bg-red-50 text-[#a65d57] border border-red-200 rounded text-[9px] font-bold">
//                               low
//                             </span>
//                           )}
//                         </td>
//                         <td className="py-3 px-2 text-center text-gray-600 font-medium">
//                           {item.stockQty} {item.unit}
//                         </td>
//                         <td className="py-3 px-2 text-right font-black text-gray-900">
//                           ₹ {item.totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';

export default function Reports() {
  const [startDate, setStartDate] = useState('01-09-2026');
  const [endDate, setEndDate] = useState('19-09-2026');

  const [inventory, setInventory] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [payments, setPayments] = useState([]);
  const [applied, setApplied] = useState(false);

  // Load data from localStorage on mount (with fallback mock data if empty)
  useEffect(() => {
    const savedInv = localStorage.getItem('savedInventory');
    if (savedInv) {
      setInventory(JSON.parse(savedInv));
    } else {
      const defaultInv = [
        { id: 1, name: 'A4 Paper Ream', sku: 'A4-01', unit: 'REAM', stockQty: 34, salePrice: '220', lowStockAlert: 5 },
        { id: 2, name: 'Aavin Milk 1L', sku: 'MILK-02', unit: 'PCS', stockQty: 120, salePrice: '44', lowStockAlert: 10 },
        { id: 3, name: 'Basmati Rice 5kg', sku: 'RICE-03', unit: 'BAG', stockQty: 60, salePrice: '380', lowStockAlert: 5 }
      ];
      setInventory(defaultInv);
      localStorage.setItem('savedInventory', JSON.stringify(defaultInv));
    }

    const savedExp = localStorage.getItem('savedExpenses');
    if (savedExp) setExpenses(JSON.parse(savedExp));

    const savedPay = localStorage.getItem('savedPayments');
    if (savedPay) setPayments(JSON.parse(savedPay));
  }, []);

  // Handle Apply button click
  const handleApply = () => {
    setApplied(true);
    setTimeout(() => setApplied(false), 2000); // Visual feedback
  };

  // Calculate metrics dynamically
  const totalExpenses = expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
  const totalCollected = payments
    .filter(p => p.direction && p.direction.includes('Received'))
    .reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

  // Stock valuation calculation
  const stockValuationList = inventory.map(item => {
    const qty = Number(item.stockQty) || 0;
    const price = Number(item.salePrice) || 0;
    return {
      ...item,
      totalValue: qty * price
    };
  });

  const totalStockValue = stockValuationList.reduce((sum, item) => sum + item.totalValue, 0);

  const taxableValue = 299.00;
  const cgst = 7.48;
  const sgst = 7.48;
  const igst = 0;
  const totalWithTax = 313.96;
  const grossProfit = totalWithTax - totalExpenses;

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 relative">
      
      {/* Top Header & Date Filter */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Reports</h1>
          <p className="text-xs text-gray-500 font-medium">Financial summary, GST output tax, and stock valuation</p>
        </div>

        {/* Date Filter Bar */}
        <div className="bg-[#fbfaf7] p-2 rounded-2xl border border-[#eae5dd] flex items-center space-x-2 text-xs font-bold text-gray-700 shadow-xs relative">
          <span className="px-2 text-gray-400">📅</span>
          <input 
            type="text" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            className="w-24 bg-white border border-[#eae5dd] p-1.5 rounded-xl text-center" 
          />
          <span className="text-gray-400">to</span>
          <input 
            type="text" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
            className="w-24 bg-white border border-[#eae5dd] p-1.5 rounded-xl text-center" 
          />
          <button 
            onClick={handleApply}
            className="px-4 py-1.5 bg-[#2c3e35] hover:bg-[#1f2c25] text-white rounded-xl shadow-xs transition cursor-pointer"
          >
            {applied ? 'Applied!' : 'Apply'}
          </button>
        </div>
      </div>

      {/* 5 Metric Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] shadow-xs">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Sales</p>
          <h3 className="text-xl font-black text-gray-900 mt-1">₹ {totalWithTax.toFixed(2)}</h3>
        </div>
        <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] shadow-xs">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Purchases</p>
          <h3 className="text-xl font-black text-gray-900 mt-1">₹ 0</h3>
        </div>
        <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] shadow-xs">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Expenses</p>
          <h3 className="text-xl font-black text-[#a65d57] mt-1">₹ {totalExpenses.toFixed(2)}</h3>
        </div>
        <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] shadow-xs">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Collected</p>
          <h3 className="text-xl font-black text-green-700 mt-1">₹ {totalCollected.toFixed(2)}</h3>
        </div>
        <div className="bg-[#fbfaf7]/90 p-4 rounded-2xl border border-[#eae5dd] shadow-xs col-span-2 sm:col-span-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Gross profit</p>
          <h3 className="text-xl font-black text-gray-900 mt-1">₹ {grossProfit.toFixed(2)}</h3>
        </div>
      </div>

      {/* Lower Section: GST Summary & Stock Valuation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: GST Summary */}
        <div className="bg-[#fbfaf7]/90 p-6 rounded-2xl border border-[#eae5dd] space-y-6 shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">GST summary (output tax)</h3>
            <button className="px-3 py-1.5 bg-white border border-[#eae5dd] text-gray-700 hover:bg-gray-50 font-bold rounded-xl text-xs shadow-xs transition cursor-pointer">
              Export invoices CSV
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-bold text-gray-500">Taxable value</span>
              <span className="font-black text-gray-900">₹{taxableValue.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-bold text-gray-500">CGST</span>
              <span className="font-black text-gray-900">₹{cgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-bold text-gray-500">SGST</span>
              <span className="font-black text-gray-900">₹{sgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-bold text-gray-500">IGST</span>
              <span className="font-black text-gray-900">₹{igst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-3 font-bold text-sm bg-white/50 px-3 rounded-xl border border-[#eae5dd]">
              <span className="text-gray-900">Total (with tax)</span>
              <span className="font-black text-[#2c3e35]">₹{totalWithTax.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Right: Stock Valuation */}
        <div className="bg-[#fbfaf7]/90 p-6 rounded-2xl border border-[#eae5dd] space-y-6 shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Stock valuation</h3>
            <span className="text-xs font-black text-[#2c3e35] bg-white px-3 py-1.5 rounded-xl border border-[#eae5dd]">
              ₹ {totalStockValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#eae5dd] text-gray-400 font-bold">
                  <th className="pb-3 px-2">PRODUCT</th>
                  <th className="pb-3 px-2 text-center">QTY</th>
                  <th className="pb-3 px-2 text-right">VALUE</th>
                </tr>
              </thead>
              <tbody>
                {stockValuationList.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="py-8 text-center text-gray-400">No inventory products found</td>
                  </tr>
                ) : (
                  stockValuationList.map((item) => {
                    const isLow = item.stockQty <= (item.lowStockAlert || 5);
                    return (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-white/60 transition">
                        <td className="py-3 px-2 font-bold text-gray-900 flex items-center space-x-2">
                          <span>{item.name}</span>
                          {isLow && (
                            <span className="px-1.5 py-0.5 bg-red-50 text-[#a65d57] border border-red-200 rounded text-[9px] font-bold">
                              low
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-2 text-center text-gray-600 font-medium">
                          {item.stockQty} {item.unit}
                        </td>
                        <td className="py-3 px-2 text-right font-black text-gray-900">
                          ₹ {item.totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}