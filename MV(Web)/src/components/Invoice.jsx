// import React, { useState } from 'react';

// export default function Invoice() {
//   const [formData, setFormData] = useState({
//     invoiceNo: '087/26-27',
//     date: '21.08.2026',
//     buyersOrderNo: '6500006478',
//     buyersOrderDate: '16.07.2026',
//     lutNo: 'ZD3305261061750',
//     lutDate: '07-05-26',
//     vendorCode: '731269',
//     billingAddress: `ALCOMP TECHNOLOGIES INDIA PRIVATE LTD,\nUNIT 5, Sipcot Industrial Park Phase III\nAdjacent to Nokia Telecom Sez)\nChennai Bangalore Highway, Sriperumbudur\nKanchipuram, Tamil Nadu - 602105\nGSTNO: 33ABDCS1087N2Z1`,
//     deliveryAddress: `ALCOMP TECHNOLOGIES INDIA PRIVATE LTD,\nUNIT 5, Sipcot Industrial Park Phase III,\nAdjacent to Nokia Telecom Sez)\nChennai Bangalore Highway, Sriperumbudur\nKanchipuram, Tamil Nadu - 602105\nGSTNO: 33ABDCS1087N2Z1`,
//     items: [
//       { id: 1, desc: '00010 TM-MTS-PLATE\nMTS Base plate', hsn: '73089090', uom: 'Number', qty: 1, price: 8972.50 },
//       { id: 2, desc: '00020 TM-RING-PLATE\nRing shear base plate', hsn: '73089090', uom: 'Number', qty: 1, price: 5674.50 }
//     ]
//   });

//   const handleItemChange = (index, field, value) => {
//     const updatedItems = [...formData.items];
//     updatedItems[index][field] = value;
//     setFormData({ ...formData, items: updatedItems });
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const subtotal = formData.items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.price)), 0);
//   const cgst = subtotal * 0.09;
//   const sgst = subtotal * 0.09;
//   const netTotal = subtotal + cgst + sgst;

//   return (
//     <div className="bg-gray-200 min-h-screen py-6 px-4 flex flex-col items-center font-sans">
//       {/* Top Action Bar (Hidden in Print) */}
//       <div className="w-full max-w-4xl flex justify-between items-center mb-4 print:hidden">
//         <h1 className="text-sm font-bold text-gray-800">M.V. Engineering Tax Invoice Form View</h1>
//         <button
//           onClick={handlePrint}
//           className="bg-black text-white px-4 py-1.5 rounded shadow font-medium hover:bg-gray-800 transition text-xs"
//         >
//           🖨️ Print / Save PDF
//         </button>
//       </div>

//       {/* Invoice Box Container */}
//       <div className="w-full max-w-4xl bg-white border-2 border-black p-4 text-black text-xs shadow-xl print:shadow-none print:border-none print:p-0">
        
//         {/* Header Layout */}
//         <div className="border-b-2 border-black pb-2 mb-2 flex justify-between items-start">
//           <div className="flex items-start space-x-3">
//             <div className="border-2 border-black px-3 py-1 font-black text-2xl tracking-tighter bg-blue-50 text-blue-900">
//               M
//             </div>
//             <div>
//               <h2 className="text-xl font-black tracking-wider text-blue-900">M.V. ENGINEERING</h2>
//               <p className="text-[10px] font-semibold text-gray-700">Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design and Display items.</p>
//               <p className="text-[9px] text-gray-600">167/A/10, MANICAKAMPILLAI STREET, MUNNURPET, CHENNAI - 600 050, Tamilnadu.</p>
//               <p className="text-[9px] text-gray-600">Email : mvengineering14@gmail.com | Web : www.indiamart.com/mv-engineering-chennai/</p>
//             </div>
//           </div>
//           <div className="text-right">
//             <span className="inline-block bg-black text-white px-3 py-0.5 font-bold text-xs uppercase mb-1">
//               TAX INVOICE
//             </span>
//             <p className="text-[9px] font-bold text-gray-700">Cell : 9444276784, 9094268060</p>
//           </div>
//         </div>

//         {/* GSTIN & Original Tag */}
//         <div className="border-b-2 border-black pb-1 mb-2 font-bold text-[10px] flex justify-between">
//           <span>GSTIN : 33AXAPM7037J1ZH</span>
//           <span>Original for Recipient</span>
//         </div>

//         {/* Billing / Delivery & Meta Info */}
//         <div className="grid grid-cols-2 border-2 border-black mb-2">
//           {/* Addresses */}
//           <div className="border-r-2 border-black p-2 space-y-2">
//             <div>
//               <p className="font-bold underline text-blue-900 text-[10px]">BILLING ADDRESS :</p>
//               <textarea 
//                 className="w-full text-[10px] bg-gray-50 border border-gray-300 p-1 rounded resize-none print:border-none print:bg-transparent"
//                 rows={4}
//                 value={formData.billingAddress}
//                 onChange={(e) => setFormData({...formData, billingAddress: e.target.value})}
//               />
//             </div>
//             <div>
//               <p className="font-bold underline text-blue-900 text-[10px]">DELIVERY ADDRESS :</p>
//               <textarea 
//                 className="w-full text-[10px] bg-gray-50 border border-gray-300 p-1 rounded resize-none print:border-none print:bg-transparent"
//                 rows={4}
//                 value={formData.deliveryAddress}
//                 onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
//               />
//             </div>
//           </div>

//           {/* Meta Fields Form */}
//           <div className="p-2 space-y-1 text-[10px]">
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1">
//               <span className="font-bold">INVOICE NO. :</span>
//               <input 
//                 type="text" 
//                 className="font-bold text-right bg-gray-50 border border-gray-300 px-2 py-0.5 rounded w-32 print:border-none print:bg-transparent"
//                 value={formData.invoiceNo}
//                 onChange={(e) => setFormData({...formData, invoiceNo: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1">
//               <span className="font-bold">DATE :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-0.5 rounded w-32 print:border-none print:bg-transparent"
//                 value={formData.date}
//                 onChange={(e) => setFormData({...formData, date: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1">
//               <span className="font-bold">BUYERS ORDER NO :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-0.5 rounded w-32 print:border-none print:bg-transparent"
//                 value={formData.buyersOrderNo}
//                 onChange={(e) => setFormData({...formData, buyersOrderNo: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1">
//               <span className="font-bold">DATE :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-0.5 rounded w-32 print:border-none print:bg-transparent"
//                 value={formData.buyersOrderDate}
//                 onChange={(e) => setFormData({...formData, buyersOrderDate: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1">
//               <span className="font-bold">LUT NO :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-0.5 rounded w-32 print:border-none print:bg-transparent"
//                 value={formData.lutNo}
//                 onChange={(e) => setFormData({...formData, lutNo: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1">
//               <span className="font-bold">DATE :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-0.5 rounded w-32 print:border-none print:bg-transparent"
//                 value={formData.lutDate}
//                 onChange={(e) => setFormData({...formData, lutDate: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center pt-1">
//               <span className="font-bold">VENDOR CODE :</span>
//               <input 
//                 type="text" 
//                 className="font-bold text-right bg-gray-50 border border-gray-300 px-2 py-0.5 rounded w-32 print:border-none print:bg-transparent"
//                 value={formData.vendorCode}
//                 onChange={(e) => setFormData({...formData, vendorCode: e.target.value})}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Itemized Table */}
//         <table className="w-full border-collapse border-2 border-black text-center mb-2 text-[10px]">
//           <thead>
//             <tr className="bg-gray-100 border-b-2 border-black font-bold">
//               <th className="border-r-2 border-black p-1.5 text-left">DESCRIPTION</th>
//               <th className="border-r-2 border-black p-1.5 w-20">HSN/SAC</th>
//               <th className="border-r-2 border-black p-1.5 w-16">UOM</th>
//               <th className="border-r-2 border-black p-1.5 w-12">QTY</th>
//               <th className="border-r-2 border-black p-1.5 w-20">PRICE (₹)</th>
//               <th className="p-1.5 w-24">AMOUNT (₹)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.items.map((item, index) => (
//               <tr key={item.id} className="border-b border-black align-top">
//                 <td className="border-r-2 border-black p-1.5 text-left font-medium whitespace-pre-line">{item.desc}</td>
//                 <td className="border-r-2 border-black p-1.5">{item.hsn}</td>
//                 <td className="border-r-2 border-black p-1.5">{item.uom}</td>
//                 <td className="border-r-2 border-black p-1.5 font-bold">
//                   <input 
//                     type="number" 
//                     value={item.qty} 
//                     onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
//                     className="w-10 text-center bg-gray-50 border border-gray-300 rounded print:border-none print:bg-transparent"
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-1.5 text-right">
//                   <input 
//                     type="number" 
//                     value={item.price} 
//                     onChange={(e) => handleItemChange(index, 'price', e.target.value)}
//                     className="w-16 text-right bg-gray-50 border border-gray-300 rounded print:border-none print:bg-transparent"
//                   />
//                 </td>
//                 <td className="p-1.5 text-right font-bold">{(Number(item.qty) * Number(item.price)).toFixed(2)}</td>
//               </tr>
//             ))}
//             {/* Blank spacer row */}
//             <tr className="border-b border-black h-8"><td className="border-r-2 border-black"></td><td className="border-r-2 border-black"></td><td className="border-r-2 border-black"></td><td className="border-r-2 border-black"></td><td className="border-r-2 border-black"></td><td></td></tr>
//           </tbody>
//         </table>

//         {/* Declaration & Totals */}
//         <div className="grid grid-cols-2 border-2 border-black mb-2 text-[10px]">
//           <div className="p-2.5 border-r-2 border-black flex flex-col justify-between space-y-3">
//             <div>
//               <p className="font-bold underline mb-0.5">Declaration :</p>
//               <p className="text-[9px] text-gray-700 leading-tight">
//                 We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.
//               </p>
//             </div>
//             <div>
//               <p className="font-bold underline mb-0.5">Amount In Words :</p>
//               <p className="font-bold text-blue-900 uppercase italic text-[10px]">
//                 FOURTEEN THOUSAND SIX HUNDRED AND FOURTY SEVEN RUPEES ONLY
//               </p>
//             </div>
//           </div>

//           <div className="p-2.5 space-y-1.5 flex flex-col justify-between">
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span className="font-bold">TOTAL :</span>
//               <span className="font-bold">{subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span>IGST 0% :</span>
//               <span>0.00</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span>CGST 9% :</span>
//               <span>{cgst.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span>SGST 9% :</span>
//               <span>{sgst.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between pt-1 text-xs font-black bg-gray-100 p-1 border border-black">
//               <span>NET TOTAL :</span>
//               <span>₹{netTotal.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>

//         {/* Signatures */}
//         <div className="grid grid-cols-2 border-2 border-black p-2 items-end text-[10px]">
//           <div className="flex flex-col justify-between h-20">
//             <p className="font-bold text-gray-600">Customer's Seal and Signature</p>
//             <div className="border-t border-dashed border-black w-40 pt-1"></div>
//           </div>
//           <div className="flex flex-col items-end text-right h-20 justify-between">
//             <p className="font-bold">for M.V. ENGINEERING</p>
//             <div className="my-auto">
//               <span className="text-[9px] text-gray-400 italic">[ Authorized Signatory Stamp ]</span>
//             </div>
//             <div className="w-40">
//               <div className="border-t border-black mb-0.5"></div>
//               <p className="font-bold">Authorised Signatory</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';

// export default function Invoice() {
//   const initialFormState = {
//     invoiceNo: '',
//     date: '',
//     buyersOrderNo: '',
//     buyersOrderDate: '',
//     lutNo: '',
//     lutDate: '',
//     vendorCode: '',
//     billingAddress: '',
//     deliveryAddress: '',
//     items: [
//       { id: 1, desc: '', hsn: '', uom: 'Number', qty: 1, price: 0 }
//     ],
//     igst: 0,
//     cgst: 9,
//     sgst: 9
//   };

//   const [formData, setFormData] = useState({
//     invoiceNo: '087/26-27',
//     date: '21.08.2026',
//     buyersOrderNo: '6500006478',
//     buyersOrderDate: '16.07.2026',
//     lutNo: 'ZD3305261061750',
//     lutDate: '07-05-26',
//     vendorCode: '731269',
//     billingAddress: `ALCOMP TECHNOLOGIES INDIA PRIVATE LTD,\nUNIT 5, Sipcot Industrial Park Phase III\nAdjacent to Nokia Telecom Sez)\nChennai Bangalore Highway, Sriperumbudur\nKanchipuram, Tamil Nadu - 602105\nGSTNO: 33ABDCS1087N2Z1`,
//     deliveryAddress: `ALCOMP TECHNOLOGIES INDIA PRIVATE LTD,\nUNIT 5, Sipcot Industrial Park Phase III,\nAdjacent to Nokia Telecom Sez)\nChennai Bangalore Highway, Sriperumbudur\nKanchipuram, Tamil Nadu - 602105\nGSTNO: 33ABDCS1087N2Z1`,
//     items: [
//       { id: 1, desc: '00010 TM-MTS-PLATE\nMTS Base plate', hsn: '73089090', uom: 'Number', qty: 1, price: 8972.50 },
//       { id: 2, desc: '00020 TM-RING-PLATE\nRing shear base plate', hsn: '73089090', uom: 'Number', qty: 1, price: 5674.50 }
//     ],
//     igst: 0,
//     cgst: 9,
//     sgst: 9
//   });

//   const handleItemChange = (index, field, value) => {
//     const updatedItems = [...formData.items];
//     updatedItems[index][field] = value;
//     setFormData({ ...formData, items: updatedItems });
//   };

//   const handleAddItem = () => {
//     setFormData({
//       ...formData,
//       items: [...formData.items, { id: Date.now(), desc: '', hsn: '', uom: 'Number', qty: 1, price: 0 }]
//     });
//   };

//   const handleRemoveItem = (index) => {
//     const updatedItems = formData.items.filter((_, i) => i !== index);
//     setFormData({ ...formData, items: updatedItems });
//   };

//   const handleNewInvoice = () => {
//     if (window.confirm("Are you sure you want to clear all details and start a new invoice?")) {
//       setFormData(initialFormState);
//     }
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   // Calculations
//   const subtotal = formData.items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.price)), 0);
//   const igstAmount = subtotal * (Number(formData.igst) / 100);
//   const cgstAmount = subtotal * (Number(formData.cgst) / 100);
//   const sgstAmount = subtotal * (Number(formData.sgst) / 100);
//   const netTotal = subtotal + igstAmount + cgstAmount + sgstAmount;

//   const numberToWords = (num) => {
//     return "FOURTEEN THOUSAND SIX HUNDRED AND FORTY SEVEN RUPEES ONLY";
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center font-sans">
//       {/* Top Action Bar (Hidden in Print) */}
//       <div className="w-full max-w-5xl flex justify-between items-center mb-4 print:hidden">
//         <h1 className="text-sm font-bold text-gray-800">M.V. Engineering Tax Invoice Form</h1>
//         <div className="flex space-x-2">
//           <button
//             onClick={handleNewInvoice}
//             className="bg-green-600 text-white px-4 py-2 rounded shadow font-medium hover:bg-green-700 transition text-xs"
//           >
//             + Create New Invoice
//           </button>
//           <button
//             onClick={handlePrint}
//             className="bg-black text-white px-4 py-2 rounded shadow font-medium hover:bg-gray-800 transition text-xs"
//           >
//             🖨️ Print / Save PDF
//           </button>
//         </div>
//       </div>

//       {/* Physical Invoice Paper Layout */}
//       <div className="w-full max-w-5xl bg-white border-2 border-black p-6 text-black text-xs shadow-2xl print:shadow-none print:border-none print:p-0">
        
//         {/* Header Section */}
//         <div className="border-b-2 border-black pb-4 mb-3 flex justify-between items-start">
//           <div className="flex items-start space-x-4">
//             {/* Fixed Logo Slot - Expanded and using object-contain to prevent cutting */}
//             <div className="border-2 border-black w-24 h-20 flex items-center justify-center bg-white overflow-hidden shrink-0 p-1">
//               <img 
//                 src="/logo.jpeg" 
//                 alt="MV Engineering Logo" 
//                 className="w-full h-full object-contain"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = document.querySelector('nav img, aside img, header img')?.src || "/logo.jpeg";
//                 }}
//               />
//             </div>
//             <div>
//               <h2 className="text-2xl font-black tracking-wider text-blue-900 mb-0.5">M.V. ENGINEERING</h2>
//               <p className="text-[10px] font-semibold text-gray-700">Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design and Display items.</p>
//               <p className="text-[10px] text-gray-600">167/A/10, MANICAKAMPILLAI STREET, MUNNURPET, CHENNAI - 600 050, Tamilnadu.</p>
//               <p className="text-[10px] text-gray-600">Email : mvengineering14@gmail.com | Web : www.indiamart.com/mv-engineering-chennai/</p>
//             </div>
//           </div>
//           <div className="text-right">
//             <span className="inline-block bg-black text-white px-4 py-1 font-bold text-xs uppercase mb-1.5 tracking-wider">
//               TAX INVOICE
//             </span>
//             <p className="text-[10px] font-bold text-gray-700">Cell : 9444276784, 9094268060</p>
//           </div>
//         </div>

//         {/* GSTIN & Original Tag */}
//         <div className="border-b-2 border-black pb-1.5 mb-3 font-bold text-[11px] flex justify-between items-center">
//           <span>GSTIN : 33AXAPM7037J1ZH</span>
//           <span className="text-[10px] italic">Original for Recipient</span>
//         </div>

//         {/* Billing / Delivery & Meta Info Grid */}
//         <div className="grid grid-cols-2 border-2 border-black mb-3">
//           {/* Addresses Column */}
//           <div className="border-r-2 border-black p-3 space-y-3">
//             <div>
//               <p className="font-bold underline text-blue-900 text-[11px] mb-1.5">BILLING ADDRESS :</p>
//               <textarea 
//                 className="w-full text-[11px] bg-gray-50 border border-gray-300 p-1.5 rounded resize-none print:border-none print:bg-transparent"
//                 rows={4}
//                 value={formData.billingAddress}
//                 onChange={(e) => setFormData({...formData, billingAddress: e.target.value})}
//                 placeholder="Enter Billing Address..."
//               />
//             </div>
//             <div>
//               <p className="font-bold underline text-blue-900 text-[11px] mb-1.5">DELIVERY ADDRESS :</p>
//               <textarea 
//                 className="w-full text-[11px] bg-gray-50 border border-gray-300 p-1.5 rounded resize-none print:border-none print:bg-transparent"
//                 rows={4}
//                 value={formData.deliveryAddress}
//                 onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
//                 placeholder="Enter Delivery Address..."
//               />
//             </div>
//           </div>

//           {/* Meta Details Column */}
//           <div className="p-3 space-y-2 text-[11px] flex flex-col justify-between">
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">INVOICE NO. :</span>
//               <input 
//                 type="text" 
//                 className="font-bold text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.invoiceNo}
//                 onChange={(e) => setFormData({...formData, invoiceNo: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">DATE :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.date}
//                 onChange={(e) => setFormData({...formData, date: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">BUYERS ORDER NO :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.buyersOrderNo}
//                 onChange={(e) => setFormData({...formData, buyersOrderNo: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">DATE :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.buyersOrderDate}
//                 onChange={(e) => setFormData({...formData, buyersOrderDate: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">LUT NO :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.lutNo}
//                 onChange={(e) => setFormData({...formData, lutNo: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">DATE :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.lutDate}
//                 onChange={(e) => setFormData({...formData, lutDate: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center pt-1">
//               <span className="font-bold">VENDOR CODE :</span>
//               <input 
//                 type="text" 
//                 className="font-bold text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.vendorCode}
//                 onChange={(e) => setFormData({...formData, vendorCode: e.target.value})}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Itemized Table */}
//         <table className="w-full border-collapse border-2 border-black text-center mb-3 text-[11px]">
//           <thead>
//             <tr className="bg-gray-100 border-b-2 border-black font-bold">
//               <th className="border-r-2 border-black p-2 text-left">DESCRIPTION</th>
//               <th className="border-r-2 border-black p-2 w-28">HSN/SAC</th>
//               <th className="border-r-2 border-black p-2 w-20">UOM</th>
//               <th className="border-r-2 border-black p-2 w-16">QTY</th>
//               <th className="border-r-2 border-black p-2 w-28">PRICE (₹)</th>
//               <th className="border-r-2 border-black p-2 w-28">AMOUNT (₹)</th>
//               <th className="p-2 w-12 print:hidden">ACT</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.items.map((item, index) => (
//               <tr key={item.id} className="border-b border-black align-top">
//                 <td className="border-r-2 border-black p-2 text-left font-medium">
//                   <textarea 
//                     rows={2}
//                     value={item.desc} 
//                     onChange={(e) => handleItemChange(index, 'desc', e.target.value)}
//                     className="w-full bg-gray-50 border border-gray-300 rounded p-1.5 resize-none print:border-none print:bg-transparent"
//                     placeholder="Item description..."
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-2">
//                   <input 
//                     type="text" 
//                     value={item.hsn} 
//                     onChange={(e) => handleItemChange(index, 'hsn', e.target.value)}
//                     className="w-full text-center bg-gray-50 border border-gray-300 p-1 rounded print:border-none print:bg-transparent"
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-2">
//                   <input 
//                     type="text" 
//                     value={item.uom} 
//                     onChange={(e) => handleItemChange(index, 'uom', e.target.value)}
//                     className="w-full text-center bg-gray-50 border border-gray-300 p-1 rounded print:border-none print:bg-transparent"
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-2 font-bold">
//                   <input 
//                     type="number" 
//                     value={item.qty} 
//                     onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
//                     className="w-full text-center bg-gray-50 border border-gray-300 p-1 rounded print:border-none print:bg-transparent"
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-2 text-right">
//                   <input 
//                     type="number" 
//                     value={item.price} 
//                     onChange={(e) => handleItemChange(index, 'price', e.target.value)}
//                     className="w-full text-right bg-gray-50 border border-gray-300 p-1 rounded print:border-none print:bg-transparent"
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-2 text-right font-bold pt-3">
//                   {(Number(item.qty) * Number(item.price)).toFixed(2)}
//                 </td>
//                 <td className="p-2 print:hidden">
//                   <button 
//                     onClick={() => handleRemoveItem(index)}
//                     className="text-red-600 font-bold hover:text-red-800 text-sm"
//                     title="Remove Item"
//                   >
//                     ✕
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Add Item Row Button */}
//         <div className="mb-3 print:hidden">
//           <button 
//             onClick={handleAddItem}
//             className="bg-blue-900 text-white px-3 py-1.5 rounded text-[11px] font-bold hover:bg-blue-800 transition"
//           >
//             + Add Item Row
//           </button>
//         </div>

//         {/* Declaration & Totals Grid */}
//         <div className="grid grid-cols-2 border-2 border-black mb-3 text-[11px]">
//           <div className="p-3 border-r-2 border-black flex flex-col justify-between space-y-4">
//             <div>
//               <p className="font-bold underline mb-1">Declaration :</p>
//               <p className="text-[10px] text-gray-700 leading-relaxed">
//                 We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.
//               </p>
//             </div>
//             <div>
//               <p className="font-bold underline mb-1">Amount In Words :</p>
//               <p className="font-bold text-blue-900 uppercase italic text-[11px]">
//                 {numberToWords(netTotal)}
//               </p>
//             </div>
//           </div>

//           <div className="p-3 space-y-2 flex flex-col justify-between">
//             <div className="flex justify-between border-b border-gray-200 pb-1.5 items-center">
//               <span className="font-bold">TOTAL :</span>
//               <span className="font-bold">{subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5 items-center">
//               <div className="flex items-center space-x-1.5">
//                 <span>IGST</span>
//                 <input 
//                   type="number" 
//                   value={formData.igst} 
//                   onChange={(e) => setFormData({...formData, igst: e.target.value})}
//                   className="w-12 text-center bg-gray-50 border border-gray-300 rounded p-0.5 print:border-none print:bg-transparent"
//                 />
//                 <span>% :</span>
//               </div>
//               <span>{igstAmount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5 items-center">
//               <div className="flex items-center space-x-1.5">
//                 <span>CGST</span>
//                 <input 
//                   type="number" 
//                   value={formData.cgst} 
//                   onChange={(e) => setFormData({...formData, cgst: e.target.value})}
//                   className="w-12 text-center bg-gray-50 border border-gray-300 rounded p-0.5 print:border-none print:bg-transparent"
//                 />
//                 <span>% :</span>
//               </div>
//               <span>{cgstAmount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5 items-center">
//               <div className="flex items-center space-x-1.5">
//                 <span>SGST</span>
//                 <input 
//                   type="number" 
//                   value={formData.sgst} 
//                   onChange={(e) => setFormData({...formData, sgst: e.target.value})}
//                   className="w-12 text-center bg-gray-50 border border-gray-300 rounded p-0.5 print:border-none print:bg-transparent"
//                 />
//                 <span>% :</span>
//               </div>
//               <span>{sgstAmount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between pt-1.5 text-xs font-black bg-gray-100 p-1.5 border border-black">
//               <span>NET TOTAL :</span>
//               <span>₹{netTotal.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>

//         {/* Signatures & Seal Section */}
//         <div className="grid grid-cols-2 border-2 border-black p-3 items-end text-[11px]">
//           <div className="flex flex-col justify-between h-24">
//             <p className="font-bold text-gray-600">Customer's Seal and Signature</p>
//             <div className="border-t border-dashed border-black w-48 pt-1"></div>
//           </div>
//           <div className="flex flex-col items-end text-right h-24 justify-between">
//             <p className="font-bold">for M.V. ENGINEERING</p>
//             <div className="my-auto">
//               <span className="text-[10px] text-gray-400 italic">[ Authorized Signatory Stamp ]</span>
//             </div>
//             <div className="w-48">
//               <div className="border-t border-black mb-1"></div>
//               <p className="font-bold">Authorised Signatory</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

//dont touch the code above that code is working perfectly fine


// import React, { useState } from 'react';

// export default function Invoice() {
//   const initialFormState = {
//     invoiceNo: '',
//     date: '',
//     buyersOrderNo: '',
//     buyersOrderDate: '',
//     lutNo: '',
//     lutDate: '',
//     vendorCode: '',
//     billingAddress: '',
//     deliveryAddress: '',
//     items: [
//       { id: 1, desc: '', hsn: '', uom: 'Number', qty: 1, price: 0 }
//     ],
//     igst: 0,
//     cgst: 9,
//     sgst: 9
//   };

//   const [formData, setFormData] = useState({
//     invoiceNo: '087/26-27',
//     date: '21.08.2026',
//     buyersOrderNo: '6500006478',
//     buyersOrderDate: '16.07.2026',
//     lutNo: 'ZD3305261061750',
//     lutDate: '07-05-26',
//     vendorCode: '731269',
//     billingAddress: `ALCOMP TECHNOLOGIES INDIA PRIVATE LTD,\nUNIT 5, Sipcot Industrial Park Phase III\nAdjacent to Nokia Telecom Sez)\nChennai Bangalore Highway, Sriperumbudur\nKanchipuram, Tamil Nadu - 602105\nGSTNO: 33ABDCS1087N2Z1`,
//     deliveryAddress: `ALCOMP TECHNOLOGIES INDIA PRIVATE LTD,\nUNIT 5, Sipcot Industrial Park Phase III,\nAdjacent to Nokia Telecom Sez)\nChennai Bangalore Highway, Sriperumbudur\nKanchipuram, Tamil Nadu - 602105\nGSTNO: 33ABDCS1087N2Z1`,
//     items: [
//       { id: 1, desc: '00010 TM-MTS-PLATE\nMTS Base plate', hsn: '73089090', uom: 'Number', qty: 1, price: 8972.50 },
//       { id: 2, desc: '00020 TM-RING-PLATE\nRing shear base plate', hsn: '73089090', uom: 'Number', qty: 1, price: 5674.50 }
//     ],
//     igst: 0,
//     cgst: 9,
//     sgst: 9
//   });

//   const handleItemChange = (index, field, value) => {
//     const updatedItems = [...formData.items];
//     updatedItems[index][field] = value;
//     setFormData({ ...formData, items: updatedItems });
//   };

//   const handleAddItem = () => {
//     setFormData({
//       ...formData,
//       items: [...formData.items, { id: Date.now(), desc: '', hsn: '', uom: 'Number', qty: 1, price: 0 }]
//     });
//   };

//   const handleRemoveItem = (index) => {
//     const updatedItems = formData.items.filter((_, i) => i !== index);
//     setFormData({ ...formData, items: updatedItems });
//   };

//   const handleNewInvoice = () => {
//     if (window.confirm("Are you sure you want to clear all details and start a new invoice?")) {
//       setFormData(initialFormState);
//     }
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   // Calculations
//   const subtotal = formData.items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.price)), 0);
//   const igstAmount = subtotal * (Number(formData.igst) / 100);
//   const cgstAmount = subtotal * (Number(formData.cgst) / 100);
//   const sgstAmount = subtotal * (Number(formData.sgst) / 100);
//   const netTotal = subtotal + igstAmount + cgstAmount + sgstAmount;

//   return (
//     <div className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center font-sans">
//       {/* Top Action Bar (Hidden in Print) */}
//       <div className="w-full max-w-5xl flex justify-between items-center mb-4 print:hidden">
//         <h1 className="text-sm font-bold text-gray-800">M.V. Engineering Tax Invoice Form</h1>
//         <div className="flex space-x-2">
//           <button
//             onClick={handleNewInvoice}
//             className="bg-green-600 text-white px-4 py-2 rounded shadow font-medium hover:bg-green-700 transition text-xs"
//           >
//             + Create New Invoice
//           </button>
//           <button
//             onClick={handlePrint}
//             className="bg-black text-white px-4 py-2 rounded shadow font-medium hover:bg-gray-800 transition text-xs"
//           >
//             🖨️ Print / Save PDF
//           </button>
//         </div>
//       </div>

//       {/* Physical Invoice Paper Layout */}
//       <div className="w-full max-w-5xl bg-white border-2 border-black p-6 text-black text-xs shadow-2xl print:shadow-none print:border-none print:p-0">
        
//         {/* Header Section */}
//         <div className="border-b-2 border-black pb-4 mb-3 flex justify-between items-start">
//           <div className="flex items-start space-x-4">
//             {/* Fixed Logo Slot - Expanded and using object-contain to prevent cutting */}
//             <div className="border-2 border-black w-24 h-20 flex items-center justify-center bg-white overflow-hidden shrink-0 p-1">
//               <img 
//                 src="/logo.jpeg" 
//                 alt="MV Engineering Logo" 
//                 className="w-full h-full object-contain"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = document.querySelector('nav img, aside img, header img')?.src || "/logo.jpeg";
//                 }}
//               />
//             </div>
//             <div>
//               <h2 className="text-2xl font-black tracking-wider text-blue-900 mb-0.5">M.V. ENGINEERING</h2>
//               <p className="text-[10px] font-semibold text-gray-700">Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design and Display items.</p>
//               <p className="text-[10px] text-gray-600">167/A/10, MANICAKAMPILLAI STREET, MUNNURPET, CHENNAI - 600 050, Tamilnadu.</p>
//               <p className="text-[10px] text-gray-600">Email : mvengineering14@gmail.com | Web : www.indiamart.com/mv-engineering-chennai/</p>
//             </div>
//           </div>
//           <div className="text-right">
//             <span className="inline-block bg-black text-white px-4 py-1 font-bold text-xs uppercase mb-1.5 tracking-wider">
//               TAX INVOICE
//             </span>
//             <p className="text-[10px] font-bold text-gray-700">Cell : 9444276784, 9094268060</p>
//           </div>
//         </div>

//         {/* GSTIN & Original Tag */}
//         <div className="border-b-2 border-black pb-1.5 mb-3 font-bold text-[11px] flex justify-between items-center">
//           <span>GSTIN : 33AXAPM7037J1ZH</span>
//           <span className="text-[10px] italic">Original for Recipient</span>
//         </div>

//         {/* Billing / Delivery & Meta Info Grid */}
//         <div className="grid grid-cols-2 border-2 border-black mb-3">
//           {/* Addresses Column */}
//           <div className="border-r-2 border-black p-3 space-y-3">
//             <div>
//               <p className="font-bold underline text-blue-900 text-[11px] mb-1.5">BILLING ADDRESS :</p>
//               <textarea 
//                 className="w-full text-[11px] bg-gray-50 border border-gray-300 p-1.5 rounded resize-none print:border-none print:bg-transparent"
//                 rows={4}
//                 value={formData.billingAddress}
//                 onChange={(e) => setFormData({...formData, billingAddress: e.target.value})}
//                 placeholder="Enter Billing Address..."
//               />
//             </div>
//             <div>
//               <p className="font-bold underline text-blue-900 text-[11px] mb-1.5">DELIVERY ADDRESS :</p>
//               <textarea 
//                 className="w-full text-[11px] bg-gray-50 border border-gray-300 p-1.5 rounded resize-none print:border-none print:bg-transparent"
//                 rows={4}
//                 value={formData.deliveryAddress}
//                 onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
//                 placeholder="Enter Delivery Address..."
//               />
//             </div>
//           </div>

//           {/* Meta Details Column */}
//           <div className="p-3 space-y-2 text-[11px] flex flex-col justify-between">
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">INVOICE NO. :</span>
//               <input 
//                 type="text" 
//                 className="font-bold text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.invoiceNo}
//                 onChange={(e) => setFormData({...formData, invoiceNo: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">DATE :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.date}
//                 onChange={(e) => setFormData({...formData, date: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">BUYERS ORDER NO :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.buyersOrderNo}
//                 onChange={(e) => setFormData({...formData, buyersOrderNo: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">DATE :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.buyersOrderDate}
//                 onChange={(e) => setFormData({...formData, buyersOrderDate: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">LUT NO :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.lutNo}
//                 onChange={(e) => setFormData({...formData, lutNo: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center border-b border-gray-200 pb-1.5">
//               <span className="font-bold">DATE :</span>
//               <input 
//                 type="text" 
//                 className="text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.lutDate}
//                 onChange={(e) => setFormData({...formData, lutDate: e.target.value})}
//               />
//             </div>
//             <div className="flex justify-between items-center pt-1">
//               <span className="font-bold">VENDOR CODE :</span>
//               <input 
//                 type="text" 
//                 className="font-bold text-right bg-gray-50 border border-gray-300 px-2 py-1 rounded w-44 print:border-none print:bg-transparent"
//                 value={formData.vendorCode}
//                 onChange={(e) => setFormData({...formData, vendorCode: e.target.value})}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Itemized Table */}
//         <table className="w-full border-collapse border-2 border-black text-center mb-3 text-[11px]">
//           <thead>
//             <tr className="bg-gray-100 border-b-2 border-black font-bold">
//               <th className="border-r-2 border-black p-2 text-left">DESCRIPTION</th>
//               <th className="border-r-2 border-black p-2 w-28">HSN/SAC</th>
//               <th className="border-r-2 border-black p-2 w-20">UOM</th>
//               <th className="border-r-2 border-black p-2 w-16">QTY</th>
//               <th className="border-r-2 border-black p-2 w-28">PRICE (₹)</th>
//               <th className="border-r-2 border-black p-2 w-28">AMOUNT (₹)</th>
//               <th className="p-2 w-12 print:hidden">ACT</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.items.map((item, index) => (
//               <tr key={item.id} className="border-b border-black align-top">
//                 <td className="border-r-2 border-black p-2 text-left font-medium">
//                   <textarea 
//                     rows={2}
//                     value={item.desc} 
//                     onChange={(e) => handleItemChange(index, 'desc', e.target.value)}
//                     className="w-full bg-gray-50 border border-gray-300 rounded p-1.5 resize-none print:border-none print:bg-transparent"
//                     placeholder="Item description..."
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-2">
//                   <input 
//                     type="text" 
//                     value={item.hsn} 
//                     onChange={(e) => handleItemChange(index, 'hsn', e.target.value)}
//                     className="w-full text-center bg-gray-50 border border-gray-300 p-1 rounded print:border-none print:bg-transparent"
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-2">
//                   <input 
//                     type="text" 
//                     value={item.uom} 
//                     onChange={(e) => handleItemChange(index, 'uom', e.target.value)}
//                     className="w-full text-center bg-gray-50 border border-gray-300 p-1 rounded print:border-none print:bg-transparent"
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-2 font-bold">
//                   <input 
//                     type="number" 
//                     value={item.qty} 
//                     onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
//                     className="w-full text-center bg-gray-50 border border-gray-300 p-1 rounded print:border-none print:bg-transparent"
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-2 text-right">
//                   <input 
//                     type="number" 
//                     value={item.price} 
//                     onChange={(e) => handleItemChange(index, 'price', e.target.value)}
//                     className="w-full text-right bg-gray-50 border border-gray-300 p-1 rounded print:border-none print:bg-transparent"
//                   />
//                 </td>
//                 <td className="border-r-2 border-black p-2 text-right font-bold pt-3">
//                   {(Number(item.qty) * Number(item.price)).toFixed(2)}
//                 </td>
//                 <td className="p-2 print:hidden">
//                   <button 
//                     onClick={() => handleRemoveItem(index)}
//                     className="text-red-600 font-bold hover:text-red-800 text-sm"
//                     title="Remove Item"
//                   >
//                     ✕
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Add Item Row Button */}
//         <div className="mb-3 print:hidden">
//           <button 
//             onClick={handleAddItem}
//             className="bg-blue-900 text-white px-3 py-1.5 rounded text-[11px] font-bold hover:bg-blue-800 transition"
//           >
//             + Add Item Row
//           </button>
//         </div>

//         {/* Declaration & Totals Grid */}
//         <div className="grid grid-cols-2 border-2 border-black mb-3 text-[11px]">
//           <div className="p-3 border-r-2 border-black flex flex-col justify-between">
//             <div>
//               <p className="font-bold underline mb-1">Declaration :</p>
//               <p className="text-[10px] text-gray-700 leading-relaxed">
//                 We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.
//               </p>
//             </div>
//           </div>

//           <div className="p-3 space-y-2 flex flex-col justify-between">
//             <div className="flex justify-between border-b border-gray-200 pb-1.5 items-center">
//               <span className="font-bold">TOTAL :</span>
//               <span className="font-bold">{subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5 items-center">
//               <div className="flex items-center space-x-1.5">
//                 <span>IGST</span>
//                 <input 
//                   type="number" 
//                   value={formData.igst} 
//                   onChange={(e) => setFormData({...formData, igst: e.target.value})}
//                   className="w-12 text-center bg-gray-50 border border-gray-300 rounded p-0.5 print:border-none print:bg-transparent"
//                 />
//                 <span>% :</span>
//               </div>
//               <span>{igstAmount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5 items-center">
//               <div className="flex items-center space-x-1.5">
//                 <span>CGST</span>
//                 <input 
//                   type="number" 
//                   value={formData.cgst} 
//                   onChange={(e) => setFormData({...formData, cgst: e.target.value})}
//                   className="w-12 text-center bg-gray-50 border border-gray-300 rounded p-0.5 print:border-none print:bg-transparent"
//                 />
//                 <span>% :</span>
//               </div>
//               <span>{cgstAmount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5 items-center">
//               <div className="flex items-center space-x-1.5">
//                 <span>SGST</span>
//                 <input 
//                   type="number" 
//                   value={formData.sgst} 
//                   onChange={(e) => setFormData({...formData, sgst: e.target.value})}
//                   className="w-12 text-center bg-gray-50 border border-gray-300 rounded p-0.5 print:border-none print:bg-transparent"
//                 />
//                 <span>% :</span>
//               </div>
//               <span>{sgstAmount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between pt-1.5 text-xs font-black bg-gray-100 p-1.5 border border-black">
//               <span>NET TOTAL :</span>
//               <span>₹{netTotal.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>

//         {/* Signatures & Seal Section */}
//         <div className="grid grid-cols-2 border-2 border-black p-3 items-end text-[11px]">
//           <div className="flex flex-col justify-between h-24">
//             <p className="font-bold text-gray-600">Customer's Seal and Signature</p>
//             <div className="border-t border-dashed border-black w-48 pt-1"></div>
//           </div>
//           <div className="flex flex-col items-end text-right h-24 justify-between">
//             <p className="font-bold">for M.V. ENGINEERING</p>
//             <div className="my-auto">
//               <span className="text-[10px] text-gray-400 italic">[ Authorized Signatory Stamp ]</span>
//             </div>
//             <div className="w-48">
//               <div className="border-t border-black mb-1"></div>
//               <p className="font-bold">Authorised Signatory</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function Invoice() {
  const initialFormState = {
    invoiceNo: '',
    date: '',
    buyersOrderNo: '',
    buyersOrderDate: '',
    lutNo: '',
    lutDate: '',
    vendorCode: '',
    billingAddress: '',
    deliveryAddress: '',
    items: [
      { id: 1, desc: '', hsn: '', uom: 'Number', qty: 1, price: 0 }
    ],
    igst: 0,
    cgst: 9,
    sgst: 9
  };

  const [formData, setFormData] = useState({
    invoiceNo: '087/26-27',
    date: '21.08.2026',
    buyersOrderNo: '6500006478',
    buyersOrderDate: '16.07.2026',
    lutNo: 'ZD3305261061750',
    lutDate: '07-05-26',
    vendorCode: '731269',
    billingAddress: 'ALCOMP TECHNOLOGIES, Sriperumbudur, Kanchipuram - 602105',
    deliveryAddress: 'ALCOMP TECHNOLOGIES, Sriperumbudur, Kanchipuram - 602105',
    items: [
      { id: 1, desc: '00010 TM-MTS-PLATE\nMTS Base plate', hsn: '73089090', uom: 'Number', qty: 1, price: 8972.50 },
      { id: 2, desc: '00020 TM-RING-PLATE\nRing shear base plate', hsn: '73089090', uom: 'Number', qty: 1, price: 5674.50 }
    ],
    igst: 0,
    cgst: 9,
    sgst: 9
  });

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { id: Date.now(), desc: '', hsn: '', uom: 'Number', qty: 1, price: 0 }]
    });
  };

  const handleRemoveItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  const handleNewInvoice = () => {
    if (window.confirm("Are you sure you want to clear all details and start a new invoice?")) {
      setFormData(initialFormState);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Calculations
  const subtotal = formData.items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.price)), 0);
  const igstAmount = subtotal * (Number(formData.igst) / 100);
  const cgstAmount = subtotal * (Number(formData.cgst) / 100);
  const sgstAmount = subtotal * (Number(formData.sgst) / 100);
  const netTotal = subtotal + igstAmount + cgstAmount + sgstAmount;

  return (
    <div className="min-h-screen py-4 px-2 sm:px-4 flex flex-col items-center font-sans bg-gray-100 print:bg-white print:p-0">
      
      {/* Strict Print CSS to hide dashboard sidebar & menus */}
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          .printable-invoice, .printable-invoice * {
            visibility: visible !important;
          }
          .printable-invoice {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Top Action Bar (Hidden in Print) */}
      <div className="no-print w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-4 gap-2 bg-white p-3 rounded-lg shadow">
        <h1 className="text-xs sm:text-sm font-bold text-gray-800">M.V. Engineering Tax Invoice Form</h1>
        <div className="flex space-x-2">
          <button
            onClick={handleNewInvoice}
            className="bg-green-600 text-white px-3 py-1.5 rounded shadow font-medium hover:bg-green-700 transition text-xs"
          >
            + New Invoice
          </button>
          <button
            onClick={handlePrint}
            className="bg-black text-white px-3 py-1.5 rounded shadow font-medium hover:bg-gray-800 transition text-xs"
          >
            🖨️ Print / PDF
          </button>
        </div>
      </div>

      {/* Physical Invoice Paper Layout */}
      <div className="printable-invoice w-full max-w-4xl bg-white border border-black p-3 sm:p-4 text-black text-xs shadow-xl">
        
        {/* Header Section (Logo on Left, Center Details & Right Tax Invoice) */}
        <div className="border-b border-black pb-2 mb-2 relative flex items-center">
          
          {/* Logo on Left Corner */}
          <div className="border border-black w-12 h-10 flex items-center justify-center bg-white overflow-hidden shrink-0 p-0.5 absolute left-0 top-0">
            <img 
              src="/logo.jpeg" 
              alt="MV Engineering Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/logo.jpeg";
              }}
            />
          </div>

          {/* Centered Company Name & Address */}
          <div className="w-full text-center px-16">
            <h2 className="text-base sm:text-lg font-black tracking-wider text-red-600 mb-0.5">M.V. ENGINEERING</h2>
            <p className="text-[9px] font-semibold text-gray-700">Mfrs. Of Press Tools, Jigs & Fixtures, fabrication, SPM, Design & Display items.</p>
            <p className="text-[9px] text-gray-600">167/A/10, Manicakampillai Street, Munnurpet, Chennai - 600 050 | Ph: 9444276784, 9094268060</p>
          </div>

          {/* Tax Invoice Badge on Right */}
          <div className="absolute right-0 top-0 text-right">
            <span className="inline-block bg-black text-white px-2 py-0.5 font-bold text-[9px] uppercase mb-0.5 tracking-wider">
              TAX INVOICE
            </span>
            <p className="text-[8px] font-bold text-gray-700">Original for Recipient</p>
          </div>

        </div>

        {/* GSTIN Bar */}
        <div className="border-b border-black pb-1 mb-2 font-bold text-[10px] flex justify-between items-center bg-blue-50 px-2 py-1">
          <span>GSTIN : 33AXAPM7037J1ZH</span>
          <span>State: Tamil Nadu (33)</span>
        </div>

        {/* Billing / Delivery & Meta Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-black mb-2 text-xs">
          {/* Addresses Column */}
          <div className="border-b sm:border-b-0 sm:border-r border-black p-2 space-y-2 flex flex-col justify-between">
            <div>
              <span className="font-bold underline text-blue-900 text-[10px] block mb-1">BILLING ADDRESS :</span>
              <input 
                type="text"
                className="w-full text-[11px] bg-gray-50 border border-gray-300 py-2.5 px-1.5 rounded print:border-none print:bg-transparent font-medium"
                value={formData.billingAddress}
                onChange={(e) => setFormData({...formData, billingAddress: e.target.value})}
                placeholder="Enter Billing Address..."
              />
            </div>
            <div>
              <span className="font-bold underline text-blue-900 text-[10px] block mb-1">DELIVERY ADDRESS :</span>
              <input 
                type="text"
                className="w-full text-[11px] bg-gray-50 border border-gray-300 py-2.5 px-1.5 rounded print:border-none print:bg-transparent font-medium"
                value={formData.deliveryAddress}
                onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                placeholder="Enter Delivery Address..."
              />
            </div>
          </div>

          {/* Meta Details Column */}
          <div className="p-2 space-y-1 text-[11px] flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-gray-200 pb-0.5">
              <span className="font-semibold text-gray-700 text-[10px]">INVOICE NO. :</span>
              <input 
                type="text" 
                className="font-bold text-right bg-transparent px-1 py-0.5 rounded w-36 focus:outline-none"
                value={formData.invoiceNo}
                onChange={(e) => setFormData({...formData, invoiceNo: e.target.value})}
              />
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-0.5">
              <span className="font-semibold text-gray-700 text-[10px]">DATE :</span>
              <input 
                type="text" 
                className="text-right bg-transparent px-1 py-0.5 rounded w-36 focus:outline-none font-medium"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-0.5">
              <span className="font-semibold text-gray-700 text-[10px]">BUYERS ORDER NO :</span>
              <input 
                type="text" 
                className="text-right bg-transparent px-1 py-0.5 rounded w-36 focus:outline-none font-medium"
                value={formData.buyersOrderNo}
                onChange={(e) => setFormData({...formData, buyersOrderNo: e.target.value})}
              />
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-0.5">
              <span className="font-semibold text-gray-700 text-[10px]">DATE :</span>
              <input 
                type="text" 
                className="text-right bg-transparent px-1 py-0.5 rounded w-36 focus:outline-none font-medium"
                value={formData.buyersOrderDate}
                onChange={(e) => setFormData({...formData, buyersOrderDate: e.target.value})}
              />
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-0.5">
              <span className="font-semibold text-gray-700 text-[10px]">LUT NO :</span>
              <input 
                type="text" 
                className="text-right bg-transparent px-1 py-0.5 rounded w-36 focus:outline-none font-medium"
                value={formData.lutNo}
                onChange={(e) => setFormData({...formData, lutNo: e.target.value})}
              />
            </div>
            <div className="flex justify-between items-center pt-0.5">
              <span className="font-semibold text-gray-700 text-[10px]">VENDOR CODE :</span>
              <input 
                type="text" 
                className="font-bold text-right bg-transparent px-1 py-0.5 rounded w-36 focus:outline-none"
                value={formData.vendorCode}
                onChange={(e) => setFormData({...formData, vendorCode: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="overflow-x-auto mb-2">
          <table className="w-full border-collapse border border-black text-center text-[11px] min-w-[600px]">
            <thead>
              <tr className="bg-blue-900 text-white border-b border-black font-bold text-[10px]">
                <th className="border-r border-black p-1 text-left">DESCRIPTION</th>
                <th className="border-r border-black p-1 w-24">HSN/SAC</th>
                <th className="border-r border-black p-1 w-16">UOM</th>
                <th className="border-r border-black p-1 w-12">QTY</th>
                <th className="border-r border-black p-1 w-24">PRICE (₹)</th>
                <th className="border-r border-black p-1 w-24">AMOUNT (₹)</th>
                <th className="p-1 w-8 no-print">ACT</th>
              </tr>
            </thead>
            <tbody>
              {formData.items.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-300 align-top">
                  <td className="border-r border-black p-1 text-left font-medium">
                    <input 
                      type="text"
                      value={item.desc} 
                      onChange={(e) => handleItemChange(index, 'desc', e.target.value)}
                      className="w-full bg-transparent p-0.5 text-[11px] focus:outline-none"
                      placeholder="Item description..."
                    />
                  </td>
                  <td className="border-r border-black p-1">
                    <input 
                      type="text" 
                      value={item.hsn} 
                      onChange={(e) => handleItemChange(index, 'hsn', e.target.value)}
                      className="w-full text-center bg-transparent p-0.5 text-[11px] focus:outline-none"
                    />
                  </td>
                  <td className="border-r border-black p-1">
                    <input 
                      type="text" 
                      value={item.uom} 
                      onChange={(e) => handleItemChange(index, 'uom', e.target.value)}
                      className="w-full text-center bg-transparent p-0.5 text-[11px] focus:outline-none"
                    />
                  </td>
                  <td className="border-r border-black p-1 font-bold">
                    <input 
                      type="number" 
                      value={item.qty} 
                      onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
                      className="w-full text-center bg-transparent p-0.5 text-[11px] focus:outline-none font-bold"
                    />
                  </td>
                  <td className="border-r border-black p-1 text-right">
                    <input 
                      type="number" 
                      value={item.price} 
                      onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                      className="w-full text-right bg-transparent p-0.5 text-[11px] focus:outline-none"
                    />
                  </td>
                  <td className="border-r border-black p-1 text-right font-bold pt-1.5">
                    {(Number(item.qty) * Number(item.price)).toFixed(2)}
                  </td>
                  <td className="p-1 no-print">
                    <button 
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-600 font-bold hover:text-red-800 text-xs"
                      title="Remove Item"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Item Row Button */}
        <div className="mb-2 no-print">
          <button 
            onClick={handleAddItem}
            className="bg-[#1E3A8A] text-white px-2.5 py-1 rounded text-[10px] font-bold hover:bg-blue-800 transition"
          >
            + Add Item Row
          </button>
        </div>

        {/* Declaration & Totals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-black mb-2 text-[11px]">
          <div className="p-2 border-b sm:border-b-0 sm:border-r border-black flex flex-col justify-between">
            <div>
              <p className="font-bold underline mb-0.5 text-[10px]">Declaration :</p>
              <p className="text-[9px] text-gray-700 leading-tight">
                We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.
              </p>
            </div>
          </div>

          <div className="p-2 space-y-1 flex flex-col justify-between">
            <div className="flex justify-between border-b border-gray-200 pb-0.5 items-center">
              <span className="font-semibold text-[10px]">TOTAL :</span>
              <span className="font-bold">{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-0.5 items-center">
              <div className="flex items-center space-x-1">
                <span className="text-[10px]">IGST</span>
                <input 
                  type="number" 
                  value={formData.igst} 
                  onChange={(e) => setFormData({...formData, igst: e.target.value})}
                  className="w-10 text-center bg-transparent p-0.5 focus:outline-none"
                />
                <span className="text-[10px]">% :</span>
              </div>
              <span>{igstAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-0.5 items-center">
              <div className="flex items-center space-x-1">
                <span className="text-[10px]">CGST</span>
                <input 
                  type="number" 
                  value={formData.cgst} 
                  onChange={(e) => setFormData({...formData, cgst: e.target.value})}
                  className="w-10 text-center bg-transparent p-0.5 focus:outline-none"
                />
                <span className="text-[10px]">% :</span>
              </div>
              <span>{cgstAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-0.5 items-center">
              <div className="flex items-center space-x-1">
                <span className="text-[10px]">SGST</span>
                <input 
                  type="number" 
                  value={formData.sgst} 
                  onChange={(e) => setFormData({...formData, sgst: e.target.value})}
                  className="w-10 text-center bg-transparent p-0.5 focus:outline-none"
                />
                <span className="text-[10px]">% :</span>
              </div>
              <span>{sgstAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-1 text-xs font-black bg-blue-50 p-1 border border-black">
              <span>NET TOTAL :</span>
              <span>₹{netTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Signatures & Seal Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-black p-2 items-end text-[11px] gap-4">
          <div className="flex flex-col justify-between h-20">
            <p className="font-bold text-gray-600 text-[10px]">Customer's Seal and Signature</p>
            <div className="border-t border-dashed border-black w-40 pt-0.5"></div>
          </div>
          <div className="flex flex-col items-start sm:items-end text-left sm:text-right h-20 justify-between">
            <p className="font-bold text-[10px]">for M.V. ENGINEERING</p>
            <div className="w-40">
              <div className="border-t border-black mb-0.5"></div>
              <p className="font-bold text-[10px]">Authorised Signatory</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}