// import React, { useState } from 'react';

// export default function Quotation() {
//   const [quotationNo, setQuotationNo] = useState('139');
//   const [date, setDate] = useState('2026-09-18');
//   const [companyName, setCompanyName] = useState('M/S SALCOMP TECHNOLOGIES INDIA PVT LTD,');
//   const [billingAddress, setBillingAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\n(ADJACENT TO NOKIA TELECOM SEZ)\nSRIPERUMPUDUR- 602105');
//   const [deliveryAddress, setDeliveryAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\nSRIPERUMPUDUR- 602105');
//   const [gstin, setGstin] = useState('');
//   const [kindAttention, setKindAttention] = useState('Mr. Manimaran');

//   const [items, setItems] = useState([
//     { id: 1, description: 'SS SPRING OD 3 X LENGTH 14 X 0.4MM DIA', hsn: '', qty: 1000, rate: 21 },
//     { id: 2, description: 'SS SPRING OD 3MM LENGTH 5MM THICK 0.4MM', hsn: '', qty: 1000, rate: 18 }
//   ]);

//   const addItem = () => {
//     setItems([...items, { id: items.length + 1, description: '', hsn: '', qty: 1, rate: 0 }]);
//   };

//   const updateItem = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = value;
//     setItems(newItems);
//   };

//   const removeItem = (index) => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   const calculateTotal = () => {
//     return items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.rate)), 0);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
//       {/* Top Action Bar */}
//       <div className="flex justify-between items-center bg-[#fbfaf7] p-4 rounded-2xl border border-[#eae5dd] shadow-xs print:hidden">
//         <h2 className="text-lg font-black text-gray-900 m-0">Create Quotation</h2>
//         <button 
//           onClick={handlePrint}
//           className="bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2"
//         >
//           <span>🖨️ Print / Download PDF</span>
//         </button>
//       </div>

//       {/* Quotation Paper Document Layout */}
//       <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#2c3e35] shadow-md text-gray-900 space-y-4 print:border-none print:shadow-none print:p-0">
        
//         {/* Quotation Title Header */}
//         <div className="border-2 border-[#2c3e35] text-center py-2 bg-[#f4f7f2]">
//           <h1 className="text-lg font-black tracking-widest text-[#2c3e35] m-0 uppercase">QUOTATION</h1>
//         </div>

//         {/* GSTIN & Cell Strip */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] px-4 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-bold bg-[#fbfaf7] gap-1">
//           <span>GSTIN : 33AXAPM7037J1ZH</span>
//           <span>Cell : 9444276784, 9094268060</span>
//         </div>

//         {/* Company Header Box with Actual Logo Image */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-4 text-center space-y-1">
//           <div className="flex justify-center items-center space-x-3">
//             <img 
//               src="/logo.jpeg" 
//               alt="M.V. Engineering Logo" 
//               className="w-12 h-12 object-contain rounded-xl bg-white p-1 border border-gray-300 shadow-xs" 
//             />
//             <h2 className="text-2xl font-black text-[#2c3e35] tracking-wide m-0">M.V. ENGINEERING</h2>
//           </div>
//           <p className="text-[11px] font-bold text-gray-600 m-0">
//             Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design and Display items.
//           </p>
//           <p className="text-[11px] text-gray-700 m-0 font-medium">
//             167/A/10, MANICAKAMPILLAI STREET, MUNNURPET, CHENNAI - 600 050
//           </p>
//           <p className="text-[11px] text-gray-700 m-0 font-medium">
//             Email : mvengineering14@gmail.com
//           </p>
//           <p className="text-[11px] text-blue-800 m-0 font-medium underline break-all">
//             Web : www.mvengineering.co.in, www.indiamart.com/mv-engineering-chennai/
//           </p>
//         </div>

//         {/* Quotation Number & Date Row */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] grid grid-cols-1 sm:grid-cols-2 text-xs font-bold">
//           <div className="p-2.5 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r-2 border-[#2c3e35]">
//             <span>No :</span>
//             <input 
//               type="text" 
//               value={quotationNo} 
//               onChange={(e) => setQuotationNo(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none w-24 px-1"
//             />
//           </div>
//           <div className="p-2.5 flex items-center space-x-2 justify-start sm:justify-end">
//             <span>DATE :</span>
//             <input 
//               type="date" 
//               value={date} 
//               onChange={(e) => setDate(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none px-1"
//             />
//           </div>
//         </div>

//         {/* Company & Billing Address */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 text-xs space-y-2">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0">Company :</span>
//             <input 
//               type="text" 
//               value={companyName} 
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="w-full font-bold border-b border-dashed border-gray-300 focus:outline-none"
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0">Address :</span>
//             <textarea 
//               value={billingAddress} 
//               onChange={(e) => setBillingAddress(e.target.value)}
//               rows={3}
//               className="w-full font-medium border border-dashed border-gray-300 p-1 rounded focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Delivery Address Section */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 text-xs space-y-2 bg-[#fbfaf7]">
//           <div className="flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0 text-[#2c3e35]">Delivery Addr:</span>
//             <textarea 
//               value={deliveryAddress} 
//               onChange={(e) => setDeliveryAddress(e.target.value)}
//               rows={2}
//               className="w-full font-medium border border-dashed border-gray-300 p-1 rounded bg-white focus:outline-none"
//               placeholder="Enter delivery destination address here..."
//             />
//           </div>
//         </div>

//         {/* GSTIN & Kind Attention */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] grid grid-cols-1 sm:grid-cols-2 text-xs">
//           <div className="p-2.5 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r-2 border-[#2c3e35]">
//             <span className="font-bold">GSTIN :</span>
//             <input 
//               type="text" 
//               value={gstin} 
//               onChange={(e) => setGstin(e.target.value)}
//               placeholder="Enter client GSTIN"
//               className="bg-transparent border-b border-gray-400 focus:outline-none flex-1 px-1"
//             />
//           </div>
//           <div className="p-2.5 flex items-center space-x-2">
//             <span className="font-bold">Kind attention:</span>
//             <input 
//               type="text" 
//               value={kindAttention} 
//               onChange={(e) => setKindAttention(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none flex-1 px-1 font-bold"
//             />
//           </div>
//         </div>

//         {/* Items Table with Horizontal Scroll Support */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] overflow-x-auto">
//           <table className="w-full min-w-[650px] text-left border-collapse text-xs">
//             <thead>
//               <tr className="bg-[#f4f7f2] border-b-2 border-[#2c3e35] text-center font-bold">
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-12">SI.NO.</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35]">DESCRIPTION</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-20">HSN</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-20">Qty</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-24">Rate/Each</th>
//                 <th className="p-2 w-28">Total Price</th>
//                 <th className="p-1 w-10 print:hidden"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index} className="border-b border-[#2c3e35] text-center">
//                   <td className="p-2 border-r-2 border-[#2c3e35] font-bold">{index + 1}</td>
//                   <td className="p-2 border-r-2 border-[#2c3e35] text-left">
//                     <input 
//                       type="text" 
//                       value={item.description} 
//                       onChange={(e) => updateItem(index, 'description', e.target.value)}
//                       className="w-full bg-transparent focus:outline-none font-medium"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="text" 
//                       value={item.hsn} 
//                       onChange={(e) => updateItem(index, 'hsn', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="number" 
//                       value={item.qty} 
//                       onChange={(e) => updateItem(index, 'qty', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none font-bold"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="number" 
//                       value={item.rate} 
//                       onChange={(e) => updateItem(index, 'rate', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none font-bold"
//                     />
//                   </td>
//                   <td className="p-2 font-bold text-right pr-4">
//                     {(Number(item.qty) * Number(item.rate)).toFixed(2)}
//                   </td>
//                   <td className="p-1 text-center print:hidden">
//                     <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700 font-bold">×</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Add Item Button */}
//           <div className="p-2 bg-[#fbfaf7] border-t border-[#2c3e35] print:hidden">
//             <button 
//               onClick={addItem}
//               className="text-xs font-bold text-[#2c3e35] hover:underline flex items-center space-x-1"
//             >
//               <span>+ Add another item row</span>
//             </button>
//           </div>
//         </div>

//         {/* Total Grand Footer */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 flex justify-between items-center bg-[#f4f7f2] font-black text-sm">
//           <span>GRAND TOTAL:</span>
//           <span className="text-base text-[#2c3e35]">₹ {calculateTotal().toFixed(2)}</span>
//         </div>

//       </div>

//     </div>
//   );
// }





// import React, { useState } from 'react';

// export default function Quotation() {
//   const [quotationNo, setQuotationNo] = useState('139');
//   const [date, setDate] = useState('2026-09-18');
//   const [companyName, setCompanyName] = useState('M/S SALCOMP TECHNOLOGIES INDIA PVT LTD,');
//   const [billingAddress, setBillingAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\n(ADJACENT TO NOKIA TELECOM SEZ)\nSRIPERUMPUDUR- 602105');
//   const [deliveryAddress, setDeliveryAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\nSRIPERUMPUDUR- 602105');
//   const [gstin, setGstin] = useState('');
//   const [kindAttention, setKindAttention] = useState('Mr. Manimaran');

//   const [items, setItems] = useState([
//     { id: 1, description: 'SS SPRING OD 3 X LENGTH 14 X 0.4MM DIA', hsn: '', qty: 1000, rate: 21 },
//     { id: 2, description: 'SS SPRING OD 3MM LENGTH 5MM THICK 0.4MM', hsn: '', qty: 1000, rate: 18 }
//   ]);

//   const addItem = () => {
//     setItems([...items, { id: items.length + 1, description: '', hsn: '', qty: 1, rate: 0 }]);
//   };

//   const updateItem = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = value;
//     setItems(newItems);
//   };

//   const removeItem = (index) => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   const calculateTotal = () => {
//     return items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.rate)), 0);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
//       {/* Top Action Bar */}
//       <div className="flex justify-between items-center bg-[#fbfaf7] p-4 rounded-2xl border border-[#eae5dd] shadow-xs print:hidden">
//         <h2 className="text-lg font-black text-gray-900 m-0">Create Quotation</h2>
//         <button 
//           onClick={handlePrint}
//           className="bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2"
//         >
//           <span>🖨️ Print / Download PDF</span>
//         </button>
//       </div>

//       {/* Quotation Paper Document Layout */}
//       <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#2c3e35] shadow-md text-gray-900 space-y-4 print:border-none print:shadow-none print:p-0">
        
//         {/* Quotation Title Header */}
//         <div className="border-2 border-[#2c3e35] text-center py-2 bg-[#f4f7f2]">
//           <h1 className="text-lg font-black tracking-widest text-[#2c3e35] m-0 uppercase">QUOTATION</h1>
//         </div>

//         {/* GSTIN & Cell Strip */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] px-4 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-bold bg-[#fbfaf7] gap-1">
//           <span>GSTIN : 33AXAPM7037J1ZH</span>
//           <span>Cell : 9444276784, 9094268060</span>
//         </div>

//         {/* Company Header Box with Logo Only (Redundant M.V. text removed) */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-4 text-center space-y-1">
//           <div className="flex justify-center items-center space-x-3">
//             <img 
//               src="/logo.jpeg" 
//               alt="M.V. Engineering Logo" 
//               className="w-14 h-14 object-contain rounded-xl bg-white p-1 border border-gray-300 shadow-xs" 
//             />
//           </div>
//           <p className="text-[11px] font-bold text-gray-600 m-0 pt-1">
//             Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design and Display items.
//           </p>
//           <p className="text-[11px] text-gray-700 m-0 font-medium">
//             167/A/10, MANICAKAMPILLAI STREET, MUNNURPET, CHENNAI - 600 050
//           </p>
//           <p className="text-[11px] text-gray-700 m-0 font-medium">
//             Email : mvengineering14@gmail.com
//           </p>
//           <p className="text-[11px] text-blue-800 m-0 font-medium underline break-all">
//             Web : www.mvengineering.co.in, www.indiamart.com/mv-engineering-chennai/
//           </p>
//         </div>

//         {/* Quotation Number & Date Row */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] grid grid-cols-1 sm:grid-cols-2 text-xs font-bold">
//           <div className="p-2.5 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r-2 border-[#2c3e35]">
//             <span>No :</span>
//             <input 
//               type="text" 
//               value={quotationNo} 
//               onChange={(e) => setQuotationNo(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none w-24 px-1"
//             />
//           </div>
//           <div className="p-2.5 flex items-center space-x-2 justify-start sm:justify-end">
//             <span>DATE :</span>
//             <input 
//               type="date" 
//               value={date} 
//               onChange={(e) => setDate(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none px-1"
//             />
//           </div>
//         </div>

//         {/* Company & Billing Address */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 text-xs space-y-2">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0">Company :</span>
//             <input 
//               type="text" 
//               value={companyName} 
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="w-full font-bold border-b border-dashed border-gray-300 focus:outline-none"
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0">Address :</span>
//             <textarea 
//               value={billingAddress} 
//               onChange={(e) => setBillingAddress(e.target.value)}
//               rows={3}
//               className="w-full font-medium border border-dashed border-gray-300 p-1 rounded focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Delivery Address Section */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 text-xs space-y-2 bg-[#fbfaf7]">
//           <div className="flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0 text-[#2c3e35]">Delivery Addr:</span>
//             <textarea 
//               value={deliveryAddress} 
//               onChange={(e) => setDeliveryAddress(e.target.value)}
//               rows={2}
//               className="w-full font-medium border border-dashed border-gray-300 p-1 rounded bg-white focus:outline-none"
//               placeholder="Enter delivery destination address here..."
//             />
//           </div>
//         </div>

//         {/* GSTIN & Kind Attention */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] grid grid-cols-1 sm:grid-cols-2 text-xs">
//           <div className="p-2.5 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r-2 border-[#2c3e35]">
//             <span className="font-bold">GSTIN :</span>
//             <input 
//               type="text" 
//               value={gstin} 
//               onChange={(e) => setGstin(e.target.value)}
//               placeholder="Enter client GSTIN"
//               className="bg-transparent border-b border-gray-400 focus:outline-none flex-1 px-1"
//             />
//           </div>
//           <div className="p-2.5 flex items-center space-x-2">
//             <span className="font-bold">Kind attention:</span>
//             <input 
//               type="text" 
//               value={kindAttention} 
//               onChange={(e) => setKindAttention(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none flex-1 px-1 font-bold"
//             />
//           </div>
//         </div>

//         {/* Items Table with Horizontal Scroll Support */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] overflow-x-auto">
//           <table className="w-full min-w-[650px] text-left border-collapse text-xs">
//             <thead>
//               <tr className="bg-[#f4f7f2] border-b-2 border-[#2c3e35] text-center font-bold">
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-12">SI.NO.</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35]">DESCRIPTION</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-20">HSN</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-20">Qty</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-24">Rate/Each</th>
//                 <th className="p-2 w-28">Total Price</th>
//                 <th className="p-1 w-10 print:hidden"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index} className="border-b border-[#2c3e35] text-center">
//                   <td className="p-2 border-r-2 border-[#2c3e35] font-bold">{index + 1}</td>
//                   <td className="p-2 border-r-2 border-[#2c3e35] text-left">
//                     <input 
//                       type="text" 
//                       value={item.description} 
//                       onChange={(e) => updateItem(index, 'description', e.target.value)}
//                       className="w-full bg-transparent focus:outline-none font-medium"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="text" 
//                       value={item.hsn} 
//                       onChange={(e) => updateItem(index, 'hsn', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="number" 
//                       value={item.qty} 
//                       onChange={(e) => updateItem(index, 'qty', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none font-bold"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="number" 
//                       value={item.rate} 
//                       onChange={(e) => updateItem(index, 'rate', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none font-bold"
//                     />
//                   </td>
//                   <td className="p-2 font-bold text-right pr-4">
//                     {(Number(item.qty) * Number(item.rate)).toFixed(2)}
//                   </td>
//                   <td className="p-1 text-center print:hidden">
//                     <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700 font-bold">×</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Add Item Button */}
//           <div className="p-2 bg-[#fbfaf7] border-t border-[#2c3e35] print:hidden">
//             <button 
//               onClick={addItem}
//               className="text-xs font-bold text-[#2c3e35] hover:underline flex items-center space-x-1"
//             >
//               <span>+ Add another item row</span>
//             </button>
//           </div>
//         </div>

//         {/* Total Grand Footer */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 flex justify-between items-center bg-[#f4f7f2] font-black text-sm">
//           <span>GRAND TOTAL:</span>
//           <span className="text-base text-[#2c3e35]">₹ {calculateTotal().toFixed(2)}</span>
//         </div>

//       </div>

//     </div>
//   );
// }

// import React, { useState } from 'react';

// export default function Quotation() {
//   const [quotationNo, setQuotationNo] = useState('139');
//   const [date, setDate] = useState('2026-09-18');
//   const [companyName, setCompanyName] = useState('M/S SALCOMP TECHNOLOGIES INDIA PVT LTD,');
//   const [billingAddress, setBillingAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\n(ADJACENT TO NOKIA TELECOM SEZ)\nSRIPERUMPUDUR- 602105');
//   const [deliveryAddress, setDeliveryAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\nSRIPERUMPUDUR- 602105');
//   const [gstin, setGstin] = useState('');
//   const [kindAttention, setKindAttention] = useState('Mr. Manimaran');

//   const [items, setItems] = useState([
//     { id: 1, description: 'SS SPRING OD 3 X LENGTH 14 X 0.4MM DIA', hsn: '', qty: 1000, rate: 21 },
//     { id: 2, description: 'SS SPRING OD 3MM LENGTH 5MM THICK 0.4MM', hsn: '', qty: 1000, rate: 18 }
//   ]);

//   const addItem = () => {
//     setItems([...items, { id: items.length + 1, description: '', hsn: '', qty: 1, rate: 0 }]);
//   };

//   const updateItem = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = value;
//     setItems(newItems);
//   };

//   const removeItem = (index) => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   const calculateTotal = () => {
//     return items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.rate)), 0);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
//       {/* Top Action Bar */}
//       <div className="flex justify-between items-center bg-[#fbfaf7] p-4 rounded-2xl border border-[#eae5dd] shadow-xs print:hidden">
//         <h2 className="text-lg font-black text-gray-900 m-0">Create Quotation</h2>
//         <button 
//           onClick={handlePrint}
//           className="bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 cursor-pointer"
//         >
//           <span>🖨️ Print / Download PDF</span>
//         </button>
//       </div>

//       {/* Quotation Paper Document Layout */}
//       <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#2c3e35] shadow-md text-gray-900 space-y-4 print:border-none print:shadow-none print:p-0">
        
//         {/* Quotation Title Header */}
//         <div className="border-2 border-[#2c3e35] text-center py-2 bg-[#f4f7f2]">
//           <h1 className="text-lg font-black tracking-widest text-[#2c3e35] m-0 uppercase">QUOTATION</h1>
//         </div>

//         {/* GSTIN & Cell Strip */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] px-4 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-bold bg-[#fbfaf7] gap-1">
//           <span>GSTIN : 33AXAPM7037J1ZH</span>
//           <span>Cell : 9444276784, 9094268060</span>
//         </div>

//         {/* Company Header Box with Logo & Clickable Hand-Cursor Links */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-4 text-center space-y-1">
//           <div className="flex justify-center items-center space-x-3">
//             <img 
//               src="/logo.jpeg" 
//               alt="M.V. Engineering Logo" 
//               className="w-14 h-14 object-contain rounded-xl bg-white p-1 border border-gray-300 shadow-xs" 
//             />
//           </div>
//           <p className="text-[11px] font-bold text-gray-600 m-0 pt-1">
//             Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design and Display items.
//           </p>
//           <p className="text-[11px] text-gray-700 m-0 font-medium">
//             167/A/10, MANICAKAMPILLAI STREET, MUNNURPET, CHENNAI - 600 050
//           </p>
//           <p className="text-[11px] text-gray-700 m-0 font-medium">
//             Email : <a href="mailto:mvengineering14@gmail.com" className="text-blue-800 hover:underline cursor-pointer">mvengineering14@gmail.com</a>
//           </p>
//           <p className="text-[11px] text-blue-800 m-0 font-medium break-all">
//             Web : <a href="https://www.mvengineering.co.in" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">www.mvengineering.co.in</a>, <a href="https://www.indiamart.com/mv-engineering-chennai/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">Indiamart Profile</a>
//           </p>
//         </div>

//         {/* Quotation Number & Date Row */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] grid grid-cols-1 sm:grid-cols-2 text-xs font-bold">
//           <div className="p-2.5 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r-2 border-[#2c3e35]">
//             <span>No :</span>
//             <input 
//               type="text" 
//               value={quotationNo} 
//               onChange={(e) => setQuotationNo(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none w-24 px-1"
//             />
//           </div>
//           <div className="p-2.5 flex items-center space-x-2 justify-start sm:justify-end">
//             <span>DATE :</span>
//             <input 
//               type="date" 
//               value={date} 
//               onChange={(e) => setDate(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none px-1"
//             />
//           </div>
//         </div>

//         {/* Company & Billing Address */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 text-xs space-y-2">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0">Company :</span>
//             <input 
//               type="text" 
//               value={companyName} 
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="w-full font-bold border-b border-dashed border-gray-300 focus:outline-none"
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0">Address :</span>
//             <textarea 
//               value={billingAddress} 
//               onChange={(e) => setBillingAddress(e.target.value)}
//               rows={3}
//               className="w-full font-medium border border-dashed border-gray-300 p-1 rounded focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Delivery Address Section */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 text-xs space-y-2 bg-[#fbfaf7]">
//           <div className="flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0 text-[#2c3e35]">Delivery Addr:</span>
//             <textarea 
//               value={deliveryAddress} 
//               onChange={(e) => setDeliveryAddress(e.target.value)}
//               rows={2}
//               className="w-full font-medium border border-dashed border-gray-300 p-1 rounded bg-white focus:outline-none"
//               placeholder="Enter delivery destination address here..."
//             />
//           </div>
//         </div>

//         {/* GSTIN & Kind Attention */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] grid grid-cols-1 sm:grid-cols-2 text-xs">
//           <div className="p-2.5 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r-2 border-[#2c3e35]">
//             <span className="font-bold">GSTIN :</span>
//             <input 
//               type="text" 
//               value={gstin} 
//               onChange={(e) => setGstin(e.target.value)}
//               placeholder="Enter client GSTIN"
//               className="bg-transparent border-b border-gray-400 focus:outline-none flex-1 px-1"
//             />
//           </div>
//           <div className="p-2.5 flex items-center space-x-2">
//             <span className="font-bold">Kind attention:</span>
//             <input 
//               type="text" 
//               value={kindAttention} 
//               onChange={(e) => setKindAttention(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none flex-1 px-1 font-bold"
//             />
//           </div>
//         </div>

//         {/* Items Table with Horizontal Scroll Support */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] overflow-x-auto">
//           <table className="w-full min-w-[650px] text-left border-collapse text-xs">
//             <thead>
//               <tr className="bg-[#f4f7f2] border-b-2 border-[#2c3e35] text-center font-bold">
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-12">SI.NO.</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35]">DESCRIPTION</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-20">HSN</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-20">Qty</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-24">Rate/Each</th>
//                 <th className="p-2 w-28">Total Price</th>
//                 <th className="p-1 w-10 print:hidden"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index} className="border-b border-[#2c3e35] text-center">
//                   <td className="p-2 border-r-2 border-[#2c3e35] font-bold">{index + 1}</td>
//                   <td className="p-2 border-r-2 border-[#2c3e35] text-left">
//                     <input 
//                       type="text" 
//                       value={item.description} 
//                       onChange={(e) => updateItem(index, 'description', e.target.value)}
//                       className="w-full bg-transparent focus:outline-none font-medium"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="text" 
//                       value={item.hsn} 
//                       onChange={(e) => updateItem(index, 'hsn', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="number" 
//                       value={item.qty} 
//                       onChange={(e) => updateItem(index, 'qty', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none font-bold"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="number" 
//                       value={item.rate} 
//                       onChange={(e) => updateItem(index, 'rate', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none font-bold"
//                     />
//                   </td>
//                   <td className="p-2 font-bold text-right pr-4">
//                     {(Number(item.qty) * Number(item.rate)).toFixed(2)}
//                   </td>
//                   <td className="p-1 text-center print:hidden">
//                     <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700 font-bold cursor-pointer">×</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Add Item Button */}
//           <div className="p-2 bg-[#fbfaf7] border-t border-[#2c3e35] print:hidden">
//             <button 
//               onClick={addItem}
//               className="text-xs font-bold text-[#2c3e35] hover:underline flex items-center space-x-1 cursor-pointer"
//             >
//               <span>+ Add another item row</span>
//             </button>
//           </div>
//         </div>

//         {/* Total Grand Footer */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 flex justify-between items-center bg-[#f4f7f2] font-black text-sm">
//           <span>GRAND TOTAL:</span>
//           <span className="text-base text-[#2c3e35]">₹ {calculateTotal().toFixed(2)}</span>
//         </div>

//       </div>

//     </div>
//   );
// }


// import React, { useState } from 'react';

// export default function Quotation() {
//   const [quotationNo, setQuotationNo] = useState('139');
//   const [date, setDate] = useState('2026-09-18');
//   const [companyName, setCompanyName] = useState('M/S SALCOMP TECHNOLOGIES INDIA PVT LTD,');
//   const [billingAddress, setBillingAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\n(ADJACENT TO NOKIA TELECOM SEZ)\nSRIPERUMPUDUR- 602105');
//   const [deliveryAddress, setDeliveryAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\nSRIPERUMPUDUR- 602105');
//   const [gstin, setGstin] = useState('');
//   const [kindAttention, setKindAttention] = useState('Mr. Manimaran');

//   const [items, setItems] = useState([
//     { id: 1, description: 'SS SPRING OD 3 X LENGTH 14 X 0.4MM DIA', hsn: '', qty: 1000, rate: 21 },
//     { id: 2, description: 'SS SPRING OD 3MM LENGTH 5MM THICK 0.4MM', hsn: '', qty: 1000, rate: 18 }
//   ]);

//   const addItem = () => {
//     setItems([...items, { id: items.length + 1, description: '', hsn: '', qty: 1, rate: 0 }]);
//   };

//   const updateItem = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = value;
//     setItems(newItems);
//   };

//   const removeItem = (index) => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   const calculateTotal = () => {
//     return items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.rate)), 0);
//   };

//   const handleSave = () => {
//     // Save to browser's localStorage silently without alert
//     const newQuotation = {
//       quotationNo,
//       date,
//       companyName,
//       billingAddress,
//       deliveryAddress,
//       gstin,
//       kindAttention,
//       items
//     };
//     const saved = JSON.parse(localStorage.getItem('savedQuotations') || '[]');
//     localStorage.setItem('savedQuotations', JSON.stringify([...saved, newQuotation]));

//     // Reset fields for the next quotation & auto-increment Quotation No smoothly
//     setQuotationNo((prev) => String(Number(prev) + 1 || 140));
//     setCompanyName('');
//     setBillingAddress('');
//     setDeliveryAddress('');
//     setGstin('');
//     setKindAttention('');
//     setItems([{ id: 1, description: '', hsn: '', qty: 1, rate: 0 }]);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
//       {/* Top Action Bar with Save & Print Buttons */}
//       <div className="flex justify-between items-center bg-[#fbfaf7] p-4 rounded-2xl border border-[#eae5dd] shadow-xs print:hidden">
//         <h2 className="text-lg font-black text-gray-900 m-0">Create Quotation</h2>
//         <div className="flex items-center space-x-3">
//           <button 
//             onClick={handleSave}
//             className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 cursor-pointer"
//           >
//             <span>💾 Save Quotation</span>
//           </button>
          
//           <button 
//             onClick={handlePrint}
//             className="bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 cursor-pointer"
//           >
//             <span>🖨️ Print / Download PDF</span>
//           </button>
//         </div>
//       </div>

//       {/* Quotation Paper Document Layout */}
//       <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#2c3e35] shadow-md text-gray-900 space-y-4 print:border-none print:shadow-none print:p-0">
        
//         {/* Quotation Title Header */}
//         <div className="border-2 border-[#2c3e35] text-center py-2 bg-[#f4f7f2]">
//           <h1 className="text-lg font-black tracking-widest text-[#2c3e35] m-0 uppercase">QUOTATION</h1>
//         </div>

//         {/* GSTIN & Cell Strip */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] px-4 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-bold bg-[#fbfaf7] gap-1">
//           <span>GSTIN : 33AXAPM7037J1ZH</span>
//           <span>Cell : 9444276784, 9094268060</span>
//         </div>

//         {/* Company Header Box with Logo & Clickable Hand-Cursor Links */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-4 text-center space-y-1">
//           <div className="flex justify-center items-center space-x-3">
//             <img 
//               src="/logo.jpeg" 
//               alt="M.V. Engineering Logo" 
//               className="w-14 h-14 object-contain rounded-xl bg-white p-1 border border-gray-300 shadow-xs" 
//             />
//           </div>
//           <p className="text-[11px] font-bold text-gray-600 m-0 pt-1">
//             Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design and Display items.
//           </p>
//           <p className="text-[11px] text-gray-700 m-0 font-medium">
//             167/A/10, MANICAKAMPILLAI STREET, MUNNURPET, CHENNAI - 600 050
//           </p>
//           <p className="text-[11px] text-gray-700 m-0 font-medium">
//             Email : <a href="mailto:mvengineering14@gmail.com" className="text-blue-800 hover:underline cursor-pointer">mvengineering14@gmail.com</a>
//           </p>
//           <p className="text-[11px] text-blue-800 m-0 font-medium break-all">
//             Web : <a href="https://www.mvengineering.co.in" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">www.mvengineering.co.in</a>, <a href="https://www.indiamart.com/mv-engineering-chennai/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">Indiamart Profile</a>
//           </p>
//         </div>

//         {/* Quotation Number & Date Row */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] grid grid-cols-1 sm:grid-cols-2 text-xs font-bold">
//           <div className="p-2.5 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r-2 border-[#2c3e35]">
//             <span>No :</span>
//             <input 
//               type="text" 
//               value={quotationNo} 
//               onChange={(e) => setQuotationNo(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none w-24 px-1"
//             />
//           </div>
//           <div className="p-2.5 flex items-center space-x-2 justify-start sm:justify-end">
//             <span>DATE :</span>
//             <input 
//               type="date" 
//               value={date} 
//               onChange={(e) => setDate(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none px-1"
//             />
//           </div>
//         </div>

//         {/* Company & Billing Address */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 text-xs space-y-2">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0">Company :</span>
//             <input 
//               type="text" 
//               value={companyName} 
//               onChange={(e) => setCompanyName(e.target.value)}
//               placeholder="Enter company name"
//               className="w-full font-bold border-b border-dashed border-gray-300 focus:outline-none"
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0">Address :</span>
//             <textarea 
//               value={billingAddress} 
//               onChange={(e) => setBillingAddress(e.target.value)}
//               rows={3}
//               placeholder="Enter billing address"
//               className="w-full font-medium border border-dashed border-gray-300 p-1 rounded focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Delivery Address Section */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 text-xs space-y-2 bg-[#fbfaf7]">
//           <div className="flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2">
//             <span className="font-bold w-20 shrink-0 text-[#2c3e35]">Delivery Addr:</span>
//             <textarea 
//               value={deliveryAddress} 
//               onChange={(e) => setDeliveryAddress(e.target.value)}
//               rows={2}
//               className="w-full font-medium border border-dashed border-gray-300 p-1 rounded bg-white focus:outline-none"
//               placeholder="Enter delivery destination address here..."
//             />
//           </div>
//         </div>

//         {/* GSTIN & Kind Attention */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] grid grid-cols-1 sm:grid-cols-2 text-xs">
//           <div className="p-2.5 flex items-center space-x-2 border-b sm:border-b-0 sm:border-r-2 border-[#2c3e35]">
//             <span className="font-bold">GSTIN :</span>
//             <input 
//               type="text" 
//               value={gstin} 
//               onChange={(e) => setGstin(e.target.value)}
//               placeholder="Enter client GSTIN"
//               className="bg-transparent border-b border-gray-400 focus:outline-none flex-1 px-1"
//             />
//           </div>
//           <div className="p-2.5 flex items-center space-x-2">
//             <span className="font-bold">Kind attention:</span>
//             <input 
//               type="text" 
//               value={kindAttention} 
//               onChange={(e) => setKindAttention(e.target.value)}
//               placeholder="e.g. Mr. Manager"
//               className="bg-transparent border-b border-gray-400 focus:outline-none flex-1 px-1 font-bold"
//             />
//           </div>
//         </div>

//         {/* Items Table with Horizontal Scroll Support */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] overflow-x-auto">
//           <table className="w-full min-w-[650px] text-left border-collapse text-xs">
//             <thead>
//               <tr className="bg-[#f4f7f2] border-b-2 border-[#2c3e35] text-center font-bold">
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-12">SI.NO.</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35]">DESCRIPTION</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-20">HSN</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-20">Qty</th>
//                 <th className="p-2 border-r-2 border-[#2c3e35] w-24">Rate/Each</th>
//                 <th className="p-2 w-28">Total Price</th>
//                 <th className="p-1 w-10 print:hidden"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index} className="border-b border-[#2c3e35] text-center">
//                   <td className="p-2 border-r-2 border-[#2c3e35] font-bold">{index + 1}</td>
//                   <td className="p-2 border-r-2 border-[#2c3e35] text-left">
//                     <input 
//                       type="text" 
//                       value={item.description} 
//                       onChange={(e) => updateItem(index, 'description', e.target.value)}
//                       placeholder="Enter item description"
//                       className="w-full bg-transparent focus:outline-none font-medium"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="text" 
//                       value={item.hsn} 
//                       onChange={(e) => updateItem(index, 'hsn', e.target.value)}
//                       placeholder="HSN"
//                       className="w-full text-center bg-transparent focus:outline-none"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="number" 
//                       value={item.qty} 
//                       onChange={(e) => updateItem(index, 'qty', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none font-bold"
//                     />
//                   </td>
//                   <td className="p-2 border-r-2 border-[#2c3e35]">
//                     <input 
//                       type="number" 
//                       value={item.rate} 
//                       onChange={(e) => updateItem(index, 'rate', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none font-bold"
//                     />
//                   </td>
//                   <td className="p-2 font-bold text-right pr-4">
//                     {(Number(item.qty) * Number(item.rate)).toFixed(2)}
//                   </td>
//                   <td className="p-1 text-center print:hidden">
//                     <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700 font-bold cursor-pointer">×</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Add Item Button */}
//           <div className="p-2 bg-[#fbfaf7] border-t border-[#2c3e35] print:hidden">
//             <button 
//               onClick={addItem}
//               className="text-xs font-bold text-[#2c3e35] hover:underline flex items-center space-x-1 cursor-pointer"
//             >
//               <span>+ Add another item row</span>
//             </button>
//           </div>
//         </div>

//         {/* Total Grand Footer */}
//         <div className="border-x-2 border-b-2 border-[#2c3e35] p-3 flex justify-between items-center bg-[#f4f7f2] font-black text-sm">
//           <span>GRAND TOTAL:</span>
//           <span className="text-base text-[#2c3e35]">₹ {calculateTotal().toFixed(2)}</span>
//         </div>

//       </div>

//     </div>
//   );
// }



// import React, { useState } from 'react';

// export default function Quotation() {
//   const [quotationNo, setQuotationNo] = useState('139');
//   const [date, setDate] = useState('2026-09-18');
//   const [companyName, setCompanyName] = useState('M/S SALCOMP TECHNOLOGIES INDIA PVT LTD,');
//   const [billingAddress, setBillingAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\n(ADJACENT TO NOKIA TELECOM SEZ)\nSRIPERUMPUDUR- 602105');
//   const [deliveryAddress, setDeliveryAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\nSRIPERUMPUDUR- 602105');
//   const [gstin, setGstin] = useState('');
//   const [kindAttention, setKindAttention] = useState('Mr. Manimaran');

//   const [items, setItems] = useState([
//     { id: 1, description: 'SS SPRING OD 3 X LENGTH 14 X 0.4MM DIA', hsn: '', qty: 1000, rate: 21 },
//     { id: 2, description: 'SS SPRING OD 3MM LENGTH 5MM THICK 0.4MM', hsn: '', qty: 1000, rate: 18 }
//   ]);

//   const addItem = () => {
//     setItems([...items, { id: items.length + 1, description: '', hsn: '', qty: 1, rate: 0 }]);
//   };

//   const updateItem = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = value;
//     setItems(newItems);
//   };

//   const removeItem = (index) => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   const calculateTotal = () => {
//     return items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.rate)), 0);
//   };

//   const handleSave = () => {
//     const newQuotation = {
//       quotationNo,
//       date,
//       companyName,
//       billingAddress,
//       deliveryAddress,
//       gstin,
//       kindAttention,
//       items
//     };
//     const saved = JSON.parse(localStorage.getItem('savedQuotations') || '[]');
//     localStorage.setItem('savedQuotations', JSON.stringify([...saved, newQuotation]));

//     setQuotationNo((prev) => String(Number(prev) + 1 || 140));
//     setCompanyName('');
//     setBillingAddress('');
//     setDeliveryAddress('');
//     setGstin('');
//     setKindAttention('');
//     setItems([{ id: 1, description: '', hsn: '', qty: 1, rate: 0 }]);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="max-w-4xl mx-auto space-y-6 pb-12 font-sans">
      
//       {/* Top Action Bar with Save & Print Buttons */}
//       <div className="flex justify-between items-center bg-[#fbfaf7] p-4 rounded-2xl border border-[#eae5dd] shadow-xs print:hidden">
//         <h2 className="text-lg font-black text-gray-900 m-0">Create Quotation</h2>
//         <div className="flex items-center space-x-3">
//           <button 
//             onClick={handleSave}
//             className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 cursor-pointer"
//           >
//             <span>💾 Save Quotation</span>
//           </button>
          
//           <button 
//             onClick={handlePrint}
//             className="bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 cursor-pointer"
//           >
//             <span>🖨️ Print / Download PDF</span>
//           </button>
//         </div>
//       </div>

//       {/* Quotation Paper Document Layout */}
//       <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-blue-900 shadow-md text-gray-900 space-y-3 print:border-blue-900 print:shadow-none print:p-2">
        
//         {/* Quotation Title Header */}
//         <div className="border border-blue-900 text-center py-2 bg-white">
//           <h1 className="text-base font-black tracking-widest text-blue-900 m-0 uppercase">QUOTATION</h1>
//         </div>

//         {/* GSTIN & Cell Strip */}
//         <div className="border-x border-b border-blue-900 px-4 py-2 flex justify-between items-center text-[11px] font-bold text-blue-900 bg-white">
//           <span>GSTIN : 33AXAPM7037J1ZH</span>
//           <span>Cell : 9444276784, 9094268060</span>
//         </div>

//         {/* Company Header Box with Logo & Details */}
//         <div className="border-x border-b border-blue-900 p-4 text-center space-y-1 relative">
//           <div className="absolute left-4 top-4 border-2 border-blue-800 px-2 py-1 rounded bg-white hidden sm:block">
//             <span className="font-black text-blue-900 text-lg tracking-tighter">M</span>
//             <span className="font-black text-red-600 text-lg tracking-tighter">E</span>
//           </div>
//           <div className="flex justify-center items-center space-x-2 sm:hidden pb-1">
//             <div className="border-2 border-blue-800 px-2 py-0.5 rounded bg-white">
//               <span className="font-black text-blue-900 text-base">M</span>
//               <span className="font-black text-red-600 text-base">E</span>
//             </div>
//           </div>
//           <h2 className="text-lg font-extrabold tracking-wide text-blue-900 uppercase m-0">M.V. ENGINEERING</h2>
//           <p className="text-[10px] font-bold text-gray-700 m-0">
//             Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design and Display items.
//           </p>
//           <p className="text-[10px] text-gray-800 m-0 font-medium">
//             167/A/10, MANICAKAMPILLAI STREET, MUNNURPET, CHENNAI - 600 050
//           </p>
//           <p className="text-[10px] text-gray-800 m-0 font-medium">
//             Email : <a href="mailto:mvengineering14@gmail.com" className="hover:underline">mvengineering14@gmail.com</a>
//           </p>
//           <p className="text-[10px] text-blue-900 m-0 font-bold break-all">
//             Web : <a href="https://www.mvengineering.co.in" target="_blank" rel="noopener noreferrer" className="hover:underline">www.mvengineering.co.in</a>, <a href="https://www.indiamart.com/mv-engineering-chennai/" target="_blank" rel="noopener noreferrer" className="hover:underline">www.indiamart.com/mv-engineering-chennai/</a>
//           </p>
//         </div>

//         {/* Quotation Number & Date Row */}
//         <div className="border-x border-b border-blue-900 grid grid-cols-2 text-xs font-bold text-blue-900">
//           <div className="p-2 flex items-center space-x-2 border-r border-blue-900">
//             <span>No :</span>
//             <input 
//               type="text" 
//               value={quotationNo} 
//               onChange={(e) => setQuotationNo(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none w-24 px-1 text-gray-900"
//             />
//           </div>
//           <div className="p-2 flex items-center space-x-2 justify-end">
//             <span>DATE :</span>
//             <input 
//               type="date" 
//               value={date} 
//               onChange={(e) => setDate(e.target.value)}
//               className="bg-transparent border-b border-gray-400 focus:outline-none px-1 text-gray-900 font-bold"
//             />
//           </div>
//         </div>

//         {/* Company & Billing Address */}
//         <div className="border-x border-b border-blue-900 p-3 text-xs space-y-1.5 text-gray-900">
//           <div className="flex items-center space-x-2">
//             <span className="font-bold w-20 shrink-0 text-blue-900">Company :</span>
//             <input 
//               type="text" 
//               value={companyName} 
//               onChange={(e) => setCompanyName(e.target.value)}
//               placeholder="Enter company name"
//               className="w-full font-bold text-blue-900 border-b border-dashed border-gray-300 focus:outline-none"
//             />
//           </div>
//           <div className="flex items-start space-x-2">
//             <span className="font-bold w-20 shrink-0 text-blue-900">Address :</span>
//             <textarea 
//               value={billingAddress} 
//               onChange={(e) => setBillingAddress(e.target.value)}
//               rows={3}
//               placeholder="Enter billing address"
//               className="w-full font-medium border border-dashed border-gray-300 p-1 rounded focus:outline-none"
//             />
//           </div>
//           <div className="flex items-center space-x-2 pt-1">
//             <span className="font-bold w-20 shrink-0 text-blue-900">GSTIN :</span>
//             <input 
//               type="text" 
//               value={gstin} 
//               onChange={(e) => setGstin(e.target.value)}
//               placeholder=""
//               className="w-full border-b border-dashed border-gray-300 focus:outline-none"
//             />
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="font-bold w-20 shrink-0 text-blue-900">Kind attention:</span>
//             <input 
//               type="text" 
//               value={kindAttention} 
//               onChange={(e) => setKindAttention(e.target.value)}
//               placeholder="e.g. Mr. Manimaran"
//               className="w-full font-bold border-b border-dashed border-gray-300 focus:outline-none text-gray-900"
//             />
//           </div>
//         </div>

//         {/* Items Table */}
//         <div className="border-x border-b border-blue-900 overflow-x-auto">
//           <table className="w-full min-w-[650px] text-left border-collapse text-xs">
//             <thead>
//               <tr className="bg-blue-50 border-b border-blue-900 text-blue-900 text-center font-bold">
//                 <th className="p-2 border-r border-blue-900 w-12">SI.NO.</th>
//                 <th className="p-2 border-r border-blue-900">DESCRIPTION</th>
//                 <th className="p-2 border-r border-blue-900 w-16">HSN</th>
//                 <th className="p-2 border-r border-blue-900 w-16">Qty</th>
//                 <th className="p-2 border-r border-blue-900 w-24">Rate/Each</th>
//                 <th className="p-2 w-28">Total Price</th>
//                 <th className="p-1 w-10 print:hidden"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index} className="border-b border-blue-900 text-center">
//                   <td className="p-2 border-r border-blue-900 font-bold">{index + 1}</td>
//                   <td className="p-2 border-r border-blue-900 text-left">
//                     <input 
//                       type="text" 
//                       value={item.description} 
//                       onChange={(e) => updateItem(index, 'description', e.target.value)}
//                       placeholder="Description"
//                       className="w-full bg-transparent focus:outline-none font-medium"
//                     />
//                   </td>
//                   <td className="p-2 border-r border-blue-900">
//                     <input 
//                       type="text" 
//                       value={item.hsn} 
//                       onChange={(e) => updateItem(index, 'hsn', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none"
//                     />
//                   </td>
//                   <td className="p-2 border-r border-blue-900">
//                     <input 
//                       type="number" 
//                       value={item.qty} 
//                       onChange={(e) => updateItem(index, 'qty', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none font-bold"
//                     />
//                   </td>
//                   <td className="p-2 border-r border-blue-900">
//                     <input 
//                       type="number" 
//                       value={item.rate} 
//                       onChange={(e) => updateItem(index, 'rate', e.target.value)}
//                       className="w-full text-center bg-transparent focus:outline-none font-bold"
//                     />
//                   </td>
//                   <td className="p-2 font-bold text-right pr-4">
//                     {(Number(item.qty) * Number(item.rate)).toFixed(2)}
//                   </td>
//                   <td className="p-1 text-center print:hidden">
//                     <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700 font-bold cursor-pointer">×</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Add Item Button */}
//           <div className="p-2 bg-white border-t border-blue-900 print:hidden">
//             <button 
//               onClick={addItem}
//               className="text-xs font-bold text-blue-900 hover:underline flex items-center space-x-1 cursor-pointer"
//             >
//               <span>+ Add another item row</span>
//             </button>
//           </div>
//         </div>

//         {/* Total Amount Row */}
//         <div className="border-x border-b border-blue-900 p-2.5 flex justify-between items-center bg-gray-50 font-black text-xs text-blue-900">
//           <span className="uppercase tracking-wider flex-1 text-right pr-6">Total Amount</span>
//           <span className="w-32 text-right text-gray-900">{calculateTotal().toFixed(2)}</span>
//         </div>

//         {/* Terms and Conditions Box */}
//         <div className="border border-blue-900 p-3 space-y-1 text-[11px] bg-white text-gray-800">
//           <p className="font-bold text-blue-900 uppercase">Terms and Conditions</p>
//           <p>1. GST 18% (CGST 9%+SGST9%)</p>
//           <p>2. Delivery : 4 weeks from the date of receiving order</p>
//           <p>3. PAYMENT: 30 days after work done</p>
//           <p>4. Validity : 1 Months</p>
//         </div>

//         {/* Bottom Note & Authorized Signatory Block */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end pt-2 gap-4">
//           <div className="text-[11px] text-gray-700 italic space-y-0.5 max-w-sm">
//             <p>We hope that the above quotation would be found highly competitive and acceptable</p>
//             <p>we are awaiting for your valuable order at an early date.</p>
//           </div>

//           {/* Signature Card Box */}
//           <div className="border border-blue-900 w-48 text-center text-[10px] self-end ml-auto">
//             <div className="border-b border-blue-900 py-1 text-[9px] font-bold text-right pr-2 text-gray-700">Yours faith fully,</div>
//             <div className="h-10 flex items-center justify-center">
//               <span className="font-serif italic text-blue-900 font-bold text-sm">M.V. Engineering</span>
//             </div>
//             <div className="border-t border-blue-900 bg-blue-50 py-1 font-black text-blue-900 uppercase text-[9px] leading-tight">
//               C.MAYILVASAGAN<br/>PROPRIETOR
//             </div>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }



// import React, { useState } from 'react';



// export default function Quotation() {

//   const [quotationNo, setQuotationNo] = useState('139');

//   const [date, setDate] = useState('2026-09-18');

//   const [companyName, setCompanyName] = useState('M/S SALCOMP TECHNOLOGIES INDIA PVT LTD,');

//   const [billingAddress, setBillingAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\n(ADJACENT TO NOKIA TELECOM SEZ)\nSRIPERUMPUDUR- 602105');

//   const [deliveryAddress, setDeliveryAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\nSRIPERUMPUDUR- 602105');

//   const [gstin, setGstin] = useState('');

//   const [kindAttention, setKindAttention] = useState('Mr. Manimaran');



//   const [items, setItems] = useState([

//     { id: 1, description: 'SS SPRING OD 3 X LENGTH 14 X 0.4MM DIA', hsn: '', qty: 1000, rate: 21 },

//     { id: 2, description: 'SS SPRING OD 3MM LENGTH 5MM THICK 0.4MM', hsn: '', qty: 1000, rate: 18 }

//   ]);



//   const addItem = () => {

//     setItems([...items, { id: items.length + 1, description: '', hsn: '', qty: 1, rate: 0 }]);

//   };



//   const updateItem = (index, field, value) => {

//     const newItems = [...items];

//     newItems[index][field] = value;

//     setItems(newItems);

//   };



//   const removeItem = (index) => {

//     setItems(items.filter((_, i) => i !== index));

//   };



//   const calculateTotal = () => {

//     return items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.rate)), 0);

//   };



//   const handleSave = () => {

//     const newQuotation = {

//       quotationNo,

//       date,

//       companyName,

//       billingAddress,

//       deliveryAddress,

//       gstin,

//       kindAttention,

//       items

//     };

//     const saved = JSON.parse(localStorage.getItem('savedQuotations') || '[]');

//     localStorage.setItem('savedQuotations', JSON.stringify([...saved, newQuotation]));



//     setQuotationNo((prev) => String(Number(prev) + 1 || 140));

//     setCompanyName('');

//     setBillingAddress('');

//     setDeliveryAddress('');

//     setGstin('');

//     setKindAttention('');

//     setItems([{ id: 1, description: '', hsn: '', qty: 1, rate: 0 }]);

//   };



//   const handlePrint = () => {

//     window.print();

//   };



//   return (

//     <div className="max-w-4xl mx-auto space-y-6 pb-12 font-sans">

     

//       {/* Top Action Bar with Save & Print Buttons */}

//       <div className="flex justify-between items-center bg-[#fbfaf7] p-4 rounded-2xl border border-[#eae5dd] shadow-xs print:hidden">

//         <h2 className="text-lg font-black text-gray-900 m-0">Create Quotation</h2>

//         <div className="flex items-center space-x-3">

//           <button

//             onClick={handleSave}

//             className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 cursor-pointer"

//           >

//             <span>💾 Save Quotation</span>

//           </button>

         

//           <button

//             onClick={handlePrint}

//             className="bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 cursor-pointer"

//           >

//             <span>🖨️ Print / Download PDF</span>

//           </button>

//         </div>

//       </div>



//       {/* Quotation Paper Document Layout */}

//       <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-blue-900 shadow-md text-gray-900 space-y-0 print:border-blue-900 print:shadow-none print:p-2">

       

//         {/* Quotation Title Header */}

//         <div className="border-2 border-blue-900 text-center py-2 bg-white">

//           <h1 className="text-base font-black tracking-widest text-blue-900 m-0 uppercase">QUOTATION</h1>

//         </div>



//         {/* GSTIN & Cell Strip */}

//         <div className="border-x-2 border-b-2 border-blue-900 px-4 py-2 flex justify-between items-center text-[11px] font-bold text-blue-900 bg-white">

//           <span>GSTIN : 33AXAPM7037J1ZH</span>

//           <span>Cell : 9444276784, 9094268060</span>

//         </div>



//         {/* Company Header Box with Real Image Logo & Details */}

//         <div className="border-x-2 border-b-2 border-blue-900 p-4 text-center space-y-1 relative">

//           <div className="absolute left-4 top-3 bg-white p-1 rounded border border-blue-900 shadow-xs hidden sm:block">

//             <img

//               src="/logo.jpeg"

//               alt="Logo"

//               className="w-12 h-12 object-contain"

//             />

//           </div>

//           <div className="flex justify-center items-center pb-1 sm:hidden">

//             <img

//               src="/logo.jpeg"

//               alt="Logo"

//               className="w-10 h-10 object-contain border border-blue-900 rounded p-0.5 bg-white"

//             />

//           </div>

//           <h2 className="text-lg font-extrabold tracking-wide text-red-600 uppercase m-0">M.V. ENGINEERING</h2>

//           <p className="text-[10px] font-bold text-gray-700 m-0">

//             Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design and Display items.

//           </p>

//           <p className="text-[10px] text-gray-800 m-0 font-medium">

//             167/A/10, MANICAKAMPILLAI STREET, MUNNURPET, CHENNAI - 600 050

//           </p>

//           <p className="text-[10px] text-gray-800 m-0 font-medium">

//             Email : <a href="mailto:mvengineering14@gmail.com" className="hover:underline">mvengineering14@gmail.com</a>

//           </p>

//           <p className="text-[10px] text-blue-900 m-0 font-bold break-all">

//             Web : <a href="https://www.mvengineering.co.in" target="_blank" rel="noopener noreferrer" className="hover:underline">www.mvengineering.co.in</a>, <a href="https://www.indiamart.com/mv-engineering-chennai/" target="_blank" rel="noopener noreferrer" className="hover:underline">www.indiamart.com/mv-engineering-chennai/</a>

//           </p>

//         </div>



//         {/* Quotation Number & Date Row */}

//         <div className="border-x-2 border-b-2 border-blue-900 grid grid-cols-2 text-xs font-bold text-blue-900">

//           <div className="p-2.5 flex items-center space-x-2 border-r-2 border-blue-900">

//             <span>No :</span>

//             <input

//               type="text"

//               value={quotationNo}

//               onChange={(e) => setQuotationNo(e.target.value)}

//               className="bg-transparent border-b border-gray-400 focus:outline-none w-24 px-1 text-gray-900"

//             />

//           </div>

//           <div className="p-2.5 flex items-center space-x-2 justify-end">

//             <span>DATE :</span>

//             <input

//               type="date"

//               value={date}

//               onChange={(e) => setDate(e.target.value)}

//               className="bg-transparent border-b border-gray-400 focus:outline-none px-1 text-gray-900 font-bold"

//             />

//           </div>

//         </div>



//         {/* Company & Billing Address */}

//         <div className="border-x-2 border-b-2 border-blue-900 p-3 text-xs space-y-1.5 text-gray-900">

//           <div className="flex items-center space-x-2">

//             <span className="font-bold w-20 shrink-0 text-blue-900">Company :</span>

//             <input

//               type="text"

//               value={companyName}

//               onChange={(e) => setCompanyName(e.target.value)}

//               placeholder="Enter company name"

//               className="w-full font-bold text-blue-900 border-b border-dashed border-gray-300 focus:outline-none"

//             />

//           </div>

//           <div className="flex items-start space-x-2">

//             <span className="font-bold w-20 shrink-0 text-blue-900">Address :</span>

//             <textarea

//               value={billingAddress}

//               onChange={(e) => setBillingAddress(e.target.value)}

//               rows={3}

//               placeholder="Enter billing address"

//               className="w-full font-medium border border-dashed border-gray-300 p-1 rounded focus:outline-none"

//             />

//           </div>

//           <div className="flex items-center space-x-2 pt-1">

//             <span className="font-bold w-20 shrink-0 text-blue-900">GSTIN :</span>

//             <input

//               type="text"

//               value={gstin}

//               onChange={(e) => setGstin(e.target.value)}

//               placeholder=""

//               className="w-full border-b border-dashed border-gray-300 focus:outline-none"

//             />

//           </div>

//           <div className="flex items-center space-x-2">

//             <span className="font-bold w-20 shrink-0 text-blue-900">Kind attention:</span>

//             <input

//               type="text"

//               value={kindAttention}

//               onChange={(e) => setKindAttention(e.target.value)}

//               className="w-full font-bold border-b border-dashed border-gray-300 focus:outline-none text-gray-900"

//             />

//           </div>

//         </div>



//         {/* Items Table */}

//         <div className="border-x-2 border-b-2 border-blue-900 overflow-x-auto">

//           <table className="w-full min-w-[650px] text-left border-collapse text-xs">

//             <thead>

//               <tr className="bg-blue-50 border-b-2 border-blue-900 text-blue-900 text-center font-bold">

//                 <th className="p-2 border-r-2 border-blue-900 w-12">SI.NO.</th>

//                 <th className="p-2 border-r-2 border-blue-900">DESCRIPTION</th>

//                 <th className="p-2 border-r-2 border-blue-900 w-16">HSN</th>

//                 <th className="p-2 border-r-2 border-blue-900 w-16">Qty</th>

//                 <th className="p-2 border-r-2 border-blue-900 w-24">Rate/Each</th>

//                 <th className="p-2 w-28">Total Price</th>

//                 <th className="p-1 w-10 print:hidden"></th>

//               </tr>

//             </thead>

//             <tbody>

//               {items.map((item, index) => (

//                 <tr key={index} className="border-b border-blue-900 text-center">

//                   <td className="p-2 border-r-2 border-blue-900 font-bold">{index + 1}</td>

//                   <td className="p-2 border-r-2 border-blue-900 text-left">

//                     <input

//                       type="text"

//                       value={item.description}

//                       onChange={(e) => updateItem(index, 'description', e.target.value)}

//                       placeholder="Description"

//                       className="w-full bg-transparent focus:outline-none font-medium"

//                     />

//                   </td>

//                   <td className="p-2 border-r-2 border-blue-900">

//                     <input

//                       type="text"

//                       value={item.hsn}

//                       onChange={(e) => updateItem(index, 'hsn', e.target.value)}

//                       className="w-full text-center bg-transparent focus:outline-none"

//                     />

//                   </td>

//                   <td className="p-2 border-r-2 border-blue-900">

//                     <input

//                       type="number"

//                       value={item.qty}

//                       onChange={(e) => updateItem(index, 'qty', e.target.value)}

//                       className="w-full text-center bg-transparent focus:outline-none font-bold"

//                     />

//                   </td>

//                   <td className="p-2 border-r-2 border-blue-900">

//                     <input

//                       type="number"

//                       value={item.rate}

//                       onChange={(e) => updateItem(index, 'rate', e.target.value)}

//                       className="w-full text-center bg-transparent focus:outline-none font-bold"

//                     />

//                   </td>

//                   <td className="p-2 font-bold text-right pr-4">

//                     {(Number(item.qty) * Number(item.rate)).toFixed(2)}

//                   </td>

//                   <td className="p-1 text-center print:hidden">

//                     <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700 font-bold cursor-pointer">×</button>

//                   </td>

//                 </tr>

//               ))}

//             </tbody>

//           </table>



//           {/* Add Item Button */}

//           <div className="p-2 bg-white border-t border-blue-900 print:hidden">

//             <button

//               onClick={addItem}

//               className="text-xs font-bold text-blue-900 hover:underline flex items-center space-x-1 cursor-pointer"

//             >

//               <span>+ Add another item row</span>

//             </button>

//           </div>

//         </div>



//         {/* Total Amount Row */}

//         <div className="border-x-2 border-b-2 border-blue-900 p-2.5 flex justify-between items-center bg-gray-50 font-black text-xs text-blue-900">

//           <span className="uppercase tracking-wider flex-1 text-right pr-6">TOTAL AMOUNT</span>

//           <span className="w-32 text-right text-gray-900 font-black text-sm">{calculateTotal().toFixed(2)}</span>

//         </div>



//         {/* Terms and Conditions Box */}

//         <div className="border-x-2 border-b-2 border-blue-900 p-3 space-y-1 text-[11px] bg-white text-gray-800">

//           <p className="font-bold text-blue-900 uppercase">TERMS AND CONDITIONS</p>

//           <p>1. GST 18% (CGST 9%+SGST9%)</p>

//           <p>2. Delivery : 4 weeks from the date of receiving order</p>

//           <p>3. PAYMENT: 30 days after work done</p>

//           <p>4. Validity : 1 Months</p>

//         </div>



//         {/* Bottom Note & Authorized Signatory Block with Empty Signature Space */}

//         <div className="border-x-2 border-b-2 border-blue-900 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 bg-white">

//           <div className="text-[11px] text-gray-700 italic space-y-0.5 max-w-sm">

//             <p>We hope that the above quotation would be found highly competitive and acceptable</p>

//             <p>we are awaiting for your valuable order at an early date.</p>

//           </div>



//           {/* Signature Box (Empty area for physical signature) */}

//           <div className="border-2 border-blue-900 w-48 text-center text-[10px] self-end ml-auto bg-white">

//             <div className="border-b-2 border-blue-900 py-1 text-[9px] font-bold text-right pr-2 text-gray-700">Yours faithfully,</div>

//             <div className="h-14 flex items-center justify-center">

//               {/* Empty space for signature */}

//             </div>

//             <div className="border-t-2 border-blue-900 bg-blue-50 py-1 font-black text-blue-900 uppercase text-[9px] leading-tight">

//               C.MAYILVASAGAN<br/>PROPRIETOR

//             </div>

//           </div>

//         </div>



//       </div>



//     </div>

//   );

// } 



import React, { useState } from 'react';

export default function Quotation() {
  const [quotationNo, setQuotationNo] = useState('139');
  const [date, setDate] = useState('2026-09-18');
  const [companyName, setCompanyName] = useState('M/S SALCOM TECHNOLOGIES INDIA PVT LTD,');
  const [billingAddress, setBillingAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III, SINGAPERUMAL KOIL ROAD SH 57, SRIPERUMPUDUR- 602105');
  const [deliveryAddress, setDeliveryAddress] = useState('SIPCOT INDUSTRIAL PARK PHASE III,\nSINGAPERUMAL KOIL ROAD SH 57,\nSRIPERUMPUDUR- 602105');
  const [gstin, setGstin] = useState('');
  const [kindAttention, setKindAttention] = useState('Mr. Manimaran');

  const [items, setItems] = useState([
    { id: 1, description: 'SS SPRING OD 3 X LENGTH 14 X 0.4MM DIA', hsn: '', qty: 1000, rate: 21 },
    { id: 2, description: 'SS SPRING OD 3MM LENGTH 5MM THICK 0.4MM', hsn: '', qty: 1000, rate: 18 }
  ]);

  const addItem = () => {
    setItems([...items, { id: items.length + 1, description: '', hsn: '', qty: 1, rate: 0 }]);
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.rate)), 0);
  };

  const handleSave = () => {
    const newQuotation = {
      quotationNo,
      date,
      companyName,
      billingAddress,
      deliveryAddress,
      gstin,
      kindAttention,
      items
    };
    const saved = JSON.parse(localStorage.getItem('savedQuotations') || '[]');
    localStorage.setItem('savedQuotations', JSON.stringify([...saved, newQuotation]));

    setQuotationNo((prev) => String(Number(prev) + 1 || 140));
    setCompanyName('');
    setBillingAddress('');
    setDeliveryAddress('');
    setGstin('');
    setKindAttention('');
    setItems([{ id: 1, description: '', hsn: '', qty: 1, rate: 0 }]);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 pb-12 font-sans">
      
      {/* Print Specific Styles: Hides everything except .quotation-sheet */}
      <style dangerouslySetInnerHTML={{ __html: `
        @page {
          size: A4 portrait;
          margin: 6mm;
        }
        @media print {
          body * {
            visibility: hidden;
          }
          .quotation-sheet, .quotation-sheet * {
            visibility: visible;
          }
          .quotation-sheet {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            border: 2px solid #1e3a8a !important;
            padding: 8px !important;
            margin: 0 !important;
            box-shadow: none !important;
            font-size: 11px !important;
            background-color: #ffffff !important;
          }
          body, html {
            background-color: #ffffff !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact;
          }
        }
      `}} />

      {/* Top Action Bar with Save & Print Buttons */}
      <div className="flex justify-between items-center bg-[#fbfaf7] p-4 rounded-2xl border border-[#eae5dd] shadow-xs print:hidden">
        <h2 className="text-lg font-black text-gray-900 m-0">Create Quotation</h2>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleSave}
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 cursor-pointer"
          >
            <span>💾 Save Quotation</span>
          </button>
          
          <button
            onClick={handlePrint}
            className="bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center space-x-2 cursor-pointer"
          >
            <span>🖨️ Print / Download PDF</span>
          </button>
        </div>
      </div>

      {/* Quotation Paper Document Layout with Unified Outer Border */}
      <div className="quotation-sheet bg-white p-6 sm:p-7 rounded-3xl border-2 border-blue-900 shadow-md text-gray-900">
        
        {/* Quotation Title Header */}
        <div className="border-b-2 border-blue-900 text-center py-1.5 bg-white">
          <h1 className="text-sm font-black tracking-widest text-blue-900 m-0 uppercase">QUOTATION</h1>
        </div>

        {/* GSTIN & Cell Strip */}
        <div className="border-b-2 border-blue-900 px-3 py-1.5 flex justify-between items-center text-[10px] font-bold text-blue-900 bg-white">
          <span>GSTIN : 33AXAPM7037J1ZH</span>
          <span>Cell : 9444276784, 9094268060</span>
        </div>

        {/* Company Header Box with Real Image Logo & Details */}
        <div className="border-b-2 border-blue-900 p-3 text-center space-y-0.5 relative bg-white">
          <div className="absolute left-3 top-2.5 bg-white p-1 rounded border border-blue-900 shadow-xs hidden sm:block">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="flex justify-center items-center pb-1 sm:hidden">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-8 h-8 object-contain border border-blue-900 rounded p-0.5 bg-white"
            />
          </div>
          <h2 className="text-base font-extrabold tracking-wide text-red-600 uppercase m-0">M.V. ENGINEERING</h2>
          <p className="text-[9px] font-bold text-gray-700 m-0">
            Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design and Display items.
          </p>
          <p className="text-[9px] text-gray-800 m-0 font-medium">
            167/A/10, MANICAKAMPILLAI STREET, MUNNURPET, CHENNAI - 600 050
          </p>
          <p className="text-[9px] text-gray-800 m-0 font-medium">
            Email : <a href="mailto:mvengineering14@gmail.com" className="hover:underline">mvengineering14@gmail.com</a>
          </p>
          <p className="text-[9px] text-blue-900 m-0 font-bold break-all">
            Web : <a href="https://www.mvengineering.co.in" target="_blank" rel="noopener noreferrer" className="hover:underline">www.mvengineering.co.in</a>, <a href="https://www.indiamart.com/mv-engineering-chennai/" target="_blank" rel="noopener noreferrer" className="hover:underline">www.indiamart.com/mv-engineering-chennai/</a>
          </p>
        </div>

        {/* Quotation Number & Date Row */}
        <div className="border-b-2 border-blue-900 grid grid-cols-2 text-[11px] font-bold text-blue-900 bg-white">
          <div className="p-2 flex items-center space-x-2 border-r-2 border-blue-900">
            <span>No :</span>
            <input
              type="text"
              value={quotationNo}
              onChange={(e) => setQuotationNo(e.target.value)}
              className="bg-transparent border-b border-gray-400 focus:outline-none w-24 px-1 text-gray-900"
            />
          </div>
          <div className="p-2 flex items-center space-x-2 justify-end">
            <span>DATE :</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent border-b border-gray-400 focus:outline-none px-1 text-gray-900 font-bold"
            />
          </div>
        </div>

        {/* Company & Billing Address */}
        <div className="border-b-2 border-blue-900 p-2.5 text-[11px] space-y-1 text-gray-900 bg-white">
          <div className="flex items-center space-x-2">
            <span className="font-bold w-20 shrink-0 text-blue-900">Company :</span>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
              className="w-full font-bold text-blue-900 border-b border-dashed border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold w-20 shrink-0 text-blue-900">Address :</span>
            <input
              type="text"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              placeholder="Enter billing address"
              className="w-full font-medium border-b border-dashed border-gray-300 px-1 py-0.5 focus:outline-none text-[11px]"
            />
          </div>
          <div className="flex items-center space-x-2 pt-0.5">
            <span className="font-bold w-20 shrink-0 text-blue-900">GSTIN :</span>
            <input
              type="text"
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
              placeholder=""
              className="w-full border-b border-dashed border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold w-20 shrink-0 text-blue-900">Kind attention:</span>
            <input
              type="text"
              value={kindAttention}
              onChange={(e) => setKindAttention(e.target.value)}
              className="w-full font-bold border-b border-dashed border-gray-300 focus:outline-none text-gray-900"
            />
          </div>
        </div>

        {/* Items Table */}
        <div className="border-b-2 border-blue-900 overflow-x-auto bg-white">
          <table className="w-full min-w-[650px] text-left border-collapse text-[11px]">
            <thead>
              <tr className="bg-blue-50 border-b-2 border-blue-900 text-blue-900 text-center font-bold">
                <th className="p-1.5 border-r-2 border-blue-900 w-12">SI.NO.</th>
                <th className="p-1.5 border-r-2 border-blue-900">DESCRIPTION</th>
                <th className="p-1.5 border-r-2 border-blue-900 w-16">HSN</th>
                <th className="p-1.5 border-r-2 border-blue-900 w-16">Qty</th>
                <th className="p-1.5 border-r-2 border-blue-900 w-24">Rate/Each</th>
                <th className="p-1.5 w-28">Total Price</th>
                <th className="p-1 w-10 print:hidden"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b border-blue-900 text-center">
                  <td className="p-1.5 border-r-2 border-blue-900 font-bold">{index + 1}</td>
                  <td className="p-1.5 border-r-2 border-blue-900 text-left">
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => updateItem(index, 'description', e.target.value)}
                      placeholder="Description"
                      className="w-full bg-transparent focus:outline-none font-medium"
                    />
                  </td>
                  <td className="p-1.5 border-r-2 border-blue-900">
                    <input
                      type="text"
                      value={item.hsn}
                      onChange={(e) => updateItem(index, 'hsn', e.target.value)}
                      className="w-full text-center bg-transparent focus:outline-none"
                    />
                  </td>
                  <td className="p-1.5 border-r-2 border-blue-900">
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) => updateItem(index, 'qty', e.target.value)}
                      className="w-full text-center bg-transparent focus:outline-none font-bold"
                    />
                  </td>
                  <td className="p-1.5 border-r-2 border-blue-900">
                    <input
                      type="number"
                      value={item.rate}
                      onChange={(e) => updateItem(index, 'rate', e.target.value)}
                      className="w-full text-center bg-transparent focus:outline-none font-bold"
                    />
                  </td>
                  <td className="p-1.5 font-bold text-right pr-4">
                    {(Number(item.qty) * Number(item.rate)).toFixed(2)}
                  </td>
                  <td className="p-1 text-center print:hidden">
                    <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700 font-bold cursor-pointer">×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Item Button */}
          <div className="p-1.5 bg-white border-t border-blue-900 print:hidden">
            <button
              onClick={addItem}
              className="text-xs font-bold text-blue-900 hover:underline flex items-center space-x-1 cursor-pointer"
            >
              <span>+ Add another item row</span>
            </button>
          </div>
        </div>

        {/* Total Amount Row */}
        <div className="border-b-2 border-blue-900 p-2 flex justify-between items-center bg-gray-50 font-black text-[11px] text-blue-900">
          <span className="uppercase tracking-wider flex-1 text-right pr-6">TOTAL AMOUNT</span>
          <span className="w-32 text-right text-gray-900 font-black text-xs">{calculateTotal().toFixed(2)}</span>
        </div>

        {/* Terms and Conditions Box */}
        <div className="border-b-2 border-blue-900 p-2.5 space-y-0.5 text-[10px] bg-white text-gray-800">
          <p className="font-bold text-blue-900 uppercase">TERMS AND CONDITIONS</p>
          <p>1. GST 18% (CGST 9%+SGST9%)</p>
          <p>2. Delivery : 4 weeks from the date of receiving order</p>
          <p>3. PAYMENT: 30 days after work done</p>
          <p>4. Validity : 1 Months</p>
        </div>

        {/* Bottom Note & Authorized Signatory Block */}
        <div className="p-3 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 bg-white">
          <div className="text-[10px] text-gray-700 italic space-y-0.5 max-w-sm">
            <p>We hope that the above quotation would be found highly competitive and acceptable</p>
            <p>we are awaiting for your valuable order at an early date.</p>
          </div>

          <div className="border-2 border-blue-900 w-44 text-center text-[10px] self-end ml-auto bg-white">
            <div className="border-b-2 border-blue-900 py-0.5 text-[9px] font-bold text-right pr-2 text-gray-700">Yours faithfully,</div>
            <div className="h-10 flex items-center justify-center">
              {/* Empty space for physical signature */}
            </div>
            <div className="border-t-2 border-blue-900 bg-blue-50 py-0.5 font-black text-blue-900 uppercase text-[8px] leading-tight">
              C.MAYILVASAGAN<br/>PROPRIETOR
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}