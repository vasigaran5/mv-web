// import React from 'react';

// export default function Dashboard({ setCurrentTab }) {
//   const metrics = [
//     { title: 'Sales today', value: '₹ 0' },
//     { title: 'Sales this month', value: '₹ 0' },
//     { title: 'Receivables', value: '₹ 0' },
//     { title: 'Payables', value: '₹ 0' },
//     { title: 'Expenses (month)', value: '₹ 0' },
//     { title: 'Low stock items', value: '2', alert: true },
//   ];

//   return (
//     <div className="space-y-6 max-w-7xl mx-auto pb-12">
//       {/* Top Header & Button */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <h2 className="text-2xl font-black text-gray-900 tracking-tight m-0">Dashboard</h2>
//         <button 
//           onClick={() => setCurrentTab('invoice')}
//           className="bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2"
//         >
//           <span>+ New invoice</span>
//         </button>
//       </div>

//       {/* 6 Metric Cards Responsive Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
//         {metrics.map((m, idx) => (
//           <div key={idx} className="bg-[#fbfaf7]/90 backdrop-blur-sm p-5 rounded-2xl border border-[#eae5dd] shadow-xs flex flex-col justify-between">
//             <p className="text-[11px] font-bold text-gray-500">{m.title}</p>
//             <div className="my-3">
//               <h3 className={`text-xl font-black ${m.alert ? 'text-[#a65d57]' : 'text-gray-900'}`}>{m.value}</h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Middle Row Responsive Boxes */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-[#fbfaf7]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#eae5dd] shadow-xs space-y-4 h-56 flex flex-col justify-between">
//           <h4 className="font-bold text-sm text-gray-900">Sales — last 7 days</h4>
//           <div className="flex-1 flex items-center justify-center text-gray-400 text-xs">
//             No sales yet
//           </div>
//         </div>

//         <div className="bg-[#fbfaf7]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#eae5dd] shadow-xs space-y-4 h-56 flex flex-col justify-between">
//           <h4 className="font-bold text-sm text-gray-900">Top products</h4>
//           <div className="flex-1 flex items-center justify-center text-gray-400 text-xs">
//             No data yet
//           </div>
//         </div>
//       </div>

//       {/* Bottom Row Responsive Boxes */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-[#fbfaf7]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#eae5dd] shadow-xs space-y-4 h-56 flex flex-col justify-between">
//           <div className="flex justify-between items-center">
//             <h4 className="font-bold text-sm text-gray-900">Recent invoices</h4>
//             <button onClick={() => setCurrentTab('invoice')} className="text-xs font-bold text-[#2c3e35] hover:underline">View all</button>
//           </div>
//           <div className="flex-1 flex items-center justify-center text-gray-400 text-xs">
//             No invoices yet
//           </div>
//         </div>

//         <div className="bg-[#fbfaf7]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#eae5dd] shadow-xs space-y-4 h-56 flex flex-col justify-between">
//           <div className="flex justify-between items-center">
//             <h4 className="font-bold text-sm text-gray-900">Low stock alerts</h4>
//             <span className="text-xs font-bold text-gray-500">Inventory</span>
//           </div>
//           <div className="space-y-2 text-xs">
//             <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
//               <span className="font-bold text-gray-800">Wireless Mouse</span>
//               <span className="font-bold text-[#a65d57]">3 PCS <span className="text-gray-400 font-normal">min 10</span></span>
//             </div>
//             <div className="flex justify-between items-center py-1.5">
//               <span className="font-bold text-gray-800">USB-C Cable</span>
//               <span className="font-bold text-[#a65d57]">8 PCS <span className="text-gray-400 font-normal">min 15</span></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';

export default function Dashboard({ setCurrentTab }) {
  const [invoices, setInvoices] = useState([]);

  // Load saved invoices from localStorage on mount and whenever tabs switch
  useEffect(() => {
    const loadedInvoices = JSON.parse(localStorage.getItem('savedInvoices')) || [];
    setInvoices(loadedInvoices);
  }, []);

  // Calculate totals dynamically
  const totalSalesAllTime = invoices.reduce((sum, inv) => sum + (Number(inv.grandTotal) || 0), 0);

  // For demonstration, let's treat today's and this month's sales based on saved records
  const salesToday = totalSalesAllTime; // or filter by current date string if needed
  const salesThisMonth = totalSalesAllTime;

  const metrics = [
    { title: 'Sales today', value: `₹ ${salesToday.toFixed(2)}` },
    { title: 'Sales this month', value: `₹ ${salesThisMonth.toFixed(2)}` },
    { title: 'Receivables', value: '₹ 0.00' },
    { title: 'Payables', value: '₹ 0.00' },
    { title: 'Expenses (month)', value: '₹ 0.00' },
    { title: 'Low stock items', value: '2', alert: true },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Header & Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight m-0">Dashboard</h2>
        <button 
          onClick={() => setCurrentTab('invoice')}
          className="bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 cursor-pointer"
        >
          <span>+ New invoice</span>
        </button>
      </div>

      {/* 6 Metric Cards Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-[#fbfaf7]/90 backdrop-blur-sm p-5 rounded-2xl border border-[#eae5dd] shadow-xs flex flex-col justify-between">
            <p className="text-[11px] font-bold text-gray-500">{m.title}</p>
            <div className="my-3">
              <h3 className={`text-xl font-black ${m.alert ? 'text-[#a65d57]' : 'text-gray-900'}`}>{m.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Row Responsive Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#fbfaf7]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#eae5dd] shadow-xs space-y-4 h-56 flex flex-col justify-between">
          <h4 className="font-bold text-sm text-gray-900">Sales — last 7 days</h4>
          {invoices.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-xs">
              No sales yet
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-between px-4 bg-white rounded-xl border border-gray-100">
              <span className="text-xs font-bold text-gray-700">Total Recorded Sales</span>
              <span className="text-sm font-black text-[#2c3e35]">₹ {totalSalesAllTime.toFixed(2)}</span>
            </div>
          )}
        </div>

        <div className="bg-[#fbfaf7]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#eae5dd] shadow-xs space-y-4 h-56 flex flex-col justify-between">
          <h4 className="font-bold text-sm text-gray-900">Top products</h4>
          {invoices.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-xs">
              No data yet
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto space-y-2 py-2">
              {invoices.flatMap(inv => inv.items || []).map((item, i) => (
                <div key={i} className="flex justify-between items-center text-xs bg-white p-2.5 rounded-xl border border-gray-100">
                  <span className="font-bold text-gray-800">{item.description}</span>
                  <span className="text-gray-500 font-medium">{item.qty} sold — <b className="text-gray-900">₹ {(item.qty * item.rate).toFixed(2)}</b></span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Row Responsive Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Invoices Card (Connected to localStorage) */}
        <div className="bg-[#fbfaf7]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#eae5dd] shadow-xs space-y-4 h-56 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-sm text-gray-900">Recent invoices</h4>
            <button onClick={() => setCurrentTab('invoice')} className="text-xs font-bold text-[#2c3e35] hover:underline cursor-pointer">View all</button>
          </div>
          
          {invoices.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-xs">
              No invoices yet
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto space-y-2 text-xs">
              {invoices.slice(0, 3).map((inv, i) => (
                <div key={i} className="flex justify-between items-center py-2 px-3 bg-white rounded-xl border border-gray-100">
                  <div>
                    <span className="font-black text-gray-900 block">{inv.id}</span>
                    <span className="text-[10px] text-gray-400">{inv.date}</span>
                  </div>
                  <span className="font-black text-[#2c3e35]">₹ {inv.grandTotal}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-[#fbfaf7]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#eae5dd] shadow-xs space-y-4 h-56 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-sm text-gray-900">Low stock alerts</h4>
            <span className="text-xs font-bold text-gray-500">Inventory</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
              <span className="font-bold text-gray-800">Wireless Mouse</span>
              <span className="font-bold text-[#a65d57]">3 PCS <span className="text-gray-400 font-normal">min 10</span></span>
            </div>
            <div className="flex justify-between items-center py-1.5">
              <span className="font-bold text-gray-800">USB-C Cable</span>
              <span className="font-bold text-[#a65d57]">8 PCS <span className="text-gray-400 font-normal">min 15</span></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}