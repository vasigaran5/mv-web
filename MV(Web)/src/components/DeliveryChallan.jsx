// import React, { useState } from 'react';

// export default function DeliveryChallan() {
//   const initialFormState = {
//     challanNo: 'DC-001',
//     orderDate: '06-03-2020',
//     dispatchDate: '06-03-2020',
//     billTo: `Ambit Depots\n10, Thakur street, Chennai 600050\nIndia\nPhone: 9876543210`,
//     challanDate: '06-03-2020',
//     refNo: '342323',
//     challanType: 'Job work',
//     gstin: '33GSPKAC371G1FE',
//     placeOfSupply: 'Tamil Nadu (33)',
//     items: [
//       { id: 1, desc: 'Plain Kurti', hsn: '62114210', qty: 10, price: 10 },
//       { id: 2, desc: 'Dressing Gown', hsn: '610799', qty: 13, price: 10 },
//       { id: 3, desc: 'Skirts', hsn: '62044990', qty: 21, price: 10 }
//     ],
//     cgstRate: 1.5,
//     sgstRate: 1.5,
//     igstRate: 0,
//     roundedOff: 0.6,
//     notes: ''
//   };

//   const [formData, setFormData] = useState(initialFormState);

//   const handleItemChange = (index, field, value) => {
//     const updatedItems = [...formData.items];
//     updatedItems[index][field] = value;
//     setFormData({ ...formData, items: updatedItems });
//   };

//   const handleAddItem = () => {
//     setFormData({
//       ...formData,
//       items: [...formData.items, { id: Date.now(), desc: '', hsn: '', qty: 1, price: 0 }]
//     });
//   };

//   const handleRemoveItem = (index) => {
//     const updatedItems = formData.items.filter((_, i) => i !== index);
//     setFormData({ ...formData, items: updatedItems });
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   // Calculations
//   const subtotal = formData.items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.price)), 0);
//   const totalTax = subtotal * ((Number(formData.cgstRate) + Number(formData.sgstRate) + Number(formData.igstRate)) / 100);
//   const grandTotal = subtotal + totalTax + Number(formData.roundedOff);

//   return (
//     <div className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center font-sans">
      
//       {/* Top Action Bar (Hidden in Print) */}
//       <div className="w-full max-w-4xl flex justify-between items-center mb-4 print:hidden">
//         <h1 className="text-sm font-bold text-gray-800">M.V. Engineering Delivery Challan</h1>
//         <div className="flex space-x-2">
//           <button
//             onClick={() => setFormData(initialFormState)}
//             className="bg-green-600 text-white px-4 py-2 rounded shadow font-medium hover:bg-green-700 transition text-xs"
//           >
//             + New Challan
//           </button>
//           <button
//             onClick={handlePrint}
//             className="bg-black text-white px-4 py-2 rounded shadow font-medium hover:bg-gray-800 transition text-xs"
//           >
//             🖨️ Print / Save PDF
//           </button>
//         </div>
//       </div>

//       {/* Delivery Challan Document Container */}
//       <div className="w-full max-w-4xl bg-white border-2 border-[#1E3A8A] p-6 text-black text-xs shadow-2xl print:shadow-none print:border-none print:p-0">
        
//         {/* Header Section */}
//         <div className="border-b-2 border-[#1E3A8A] pb-4 mb-4 flex justify-between items-start">
//           <div className="flex items-start space-x-4">
//             {/* Logo Slot */}
//             <div className="border-2 border-[#1E3A8A] w-16 h-16 flex items-center justify-center bg-white overflow-hidden shrink-0 p-1">
//               <img 
//                 src="/logo.jpeg" 
//                 alt="MV Engineering Logo" 
//                 className="w-full h-full object-contain"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://via.placeholder.com/64";
//                 }}
//               />
//             </div>
//             <div>
//               <div className="text-[11px] font-bold text-gray-700 mb-0.5">Company Name: M.V. Engineering</div>
//               <div className="text-[10px] text-gray-600 leading-tight">
//                 Address: 167/A/10, Manicakampillai Street,<br />
//                 Munnurpet, Chennai - 600 050<br />
//                 India
//               </div>
//               <div className="text-[10px] text-gray-600 mt-1">GSTIN: 33AXAPM7037J1ZH</div>
//               <div className="text-[10px] text-gray-600">Phone: 9444276784, 9094268060</div>
//             </div>
//           </div>
          
//           <div className="text-right">
//             <h2 className="text-xl font-black text-[#1E3A8A] tracking-wider mb-1">DELIVERY CHALLAN</h2>
//             <div className="text-[11px] font-bold text-gray-700">Delivery Challan# : {formData.challanNo}</div>
//           </div>
//         </div>

//         {/* Top Info Bar (Challan #, Order Date, Dispatch Date) */}
//         <div className="grid grid-cols-3 border border-[#1E3A8A] bg-blue-50 text-center mb-4 font-bold text-[10px]">
//           <div className="p-2 border-r border-[#1E3A8A]">
//             <div className="text-blue-900">Delivery Challan #</div>
//             <input 
//               type="text" 
//               value={formData.challanNo}
//               onChange={(e) => setFormData({...formData, challanNo: e.target.value})}
//               className="w-full text-center bg-transparent font-bold mt-0.5 focus:outline-none"
//             />
//           </div>
//           <div className="p-2 border-r border-[#1E3A8A]">
//             <div className="text-blue-900">Order Date #</div>
//             <input 
//               type="text" 
//               value={formData.orderDate}
//               onChange={(e) => setFormData({...formData, orderDate: e.target.value})}
//               className="w-full text-center bg-transparent font-bold mt-0.5 focus:outline-none"
//             />
//           </div>
//           <div className="p-2">
//             <div className="text-blue-900">Dispatch Date #</div>
//             <input 
//               type="text" 
//               value={formData.dispatchDate}
//               onChange={(e) => setFormData({...formData, dispatchDate: e.target.value})}
//               className="w-full text-center bg-transparent font-bold mt-0.5 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Bill To & Meta Details Grid */}
//         <div className="grid grid-cols-2 border border-[#1E3A8A] mb-4 text-[11px]">
//           <div className="p-3 border-r border-[#1E3A8A]">
//             <span className="font-bold text-blue-900 block mb-1">Bill To:</span>
//             <textarea 
//               rows={4}
//               value={formData.billTo}
//               onChange={(e) => setFormData({...formData, billTo: e.target.value})}
//               className="w-full bg-gray-50 border border-gray-300 p-1.5 rounded resize-none text-[11px] print:border-none print:bg-transparent"
//             />
//           </div>
//           <div className="p-3 space-y-1.5">
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span className="font-semibold text-gray-600">Challan Date:</span>
//               <input 
//                 type="text" 
//                 value={formData.challanDate}
//                 onChange={(e) => setFormData({...formData, challanDate: e.target.value})}
//                 className="text-right bg-transparent font-medium w-32 focus:outline-none"
//               />
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span className="font-semibold text-gray-600">Ref #:</span>
//               <input 
//                 type="text" 
//                 value={formData.refNo}
//                 onChange={(e) => setFormData({...formData, refNo: e.target.value})}
//                 className="text-right bg-transparent font-medium w-32 focus:outline-none"
//               />
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span className="font-semibold text-gray-600">Challan Type:</span>
//               <input 
//                 type="text" 
//                 value={formData.challanType}
//                 onChange={(e) => setFormData({...formData, challanType: e.target.value})}
//                 className="text-right bg-transparent font-medium w-32 focus:outline-none"
//               />
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span className="font-semibold text-gray-600">GSTIN:</span>
//               <input 
//                 type="text" 
//                 value={formData.gstin}
//                 onChange={(e) => setFormData({...formData, gstin: e.target.value})}
//                 className="text-right bg-transparent font-medium w-36 focus:outline-none"
//               />
//             </div>
//             <div className="flex justify-between pt-1">
//               <span className="font-semibold text-gray-600">Place of Supply:</span>
//               <input 
//                 type="text" 
//                 value={formData.placeOfSupply}
//                 onChange={(e) => setFormData({...formData, placeOfSupply: e.target.value})}
//                 className="text-right bg-transparent font-medium w-36 focus:outline-none"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Itemized Table */}
//         <table className="w-full border-collapse border border-[#1E3A8A] text-center mb-4 text-[11px]">
//           <thead>
//             <tr className="bg-[#1E3A8A] text-white font-bold text-[10px]">
//               <th className="border border-[#1E3A8A] p-2 w-12">SR No.</th>
//               <th className="border border-[#1E3A8A] p-2 text-left">ITEM DESCRIPTION</th>
//               <th className="border border-[#1E3A8A] p-2 w-24">HSN/SAC</th>
//               <th className="border border-[#1E3A8A] p-2 w-16">QTY</th>
//               <th className="border border-[#1E3A8A] p-2 w-20">PRICE</th>
//               <th className="border border-[#1E3A8A] p-2 w-24">TAXABLE VALUE</th>
//               <th className="border border-[#1E3A8A] p-2 w-16 print:hidden">ACT</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.items.map((item, index) => (
//               <tr key={item.id} className="border-b border-gray-300">
//                 <td className="border border-[#1E3A8A] p-2 font-bold">{index + 1}</td>
//                 <td className="border border-[#1E3A8A] p-2 text-left">
//                   <input 
//                     type="text" 
//                     value={item.desc}
//                     onChange={(e) => handleItemChange(index, 'desc', e.target.value)}
//                     className="w-full bg-transparent focus:outline-none font-medium"
//                     placeholder="Item description"
//                   />
//                 </td>
//                 <td className="border border-[#1E3A8A] p-2">
//                   <input 
//                     type="text" 
//                     value={item.hsn}
//                     onChange={(e) => handleItemChange(index, 'hsn', e.target.value)}
//                     className="w-full text-center bg-transparent focus:outline-none"
//                   />
//                 </td>
//                 <td className="border border-[#1E3A8A] p-2 font-bold">
//                   <input 
//                     type="number" 
//                     value={item.qty}
//                     onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
//                     className="w-full text-center bg-transparent focus:outline-none font-bold"
//                   />
//                 </td>
//                 <td className="border border-[#1E3A8A] p-2 text-right">
//                   <input 
//                     type="number" 
//                     value={item.price}
//                     onChange={(e) => handleItemChange(index, 'price', e.target.value)}
//                     className="w-full text-right bg-transparent focus:outline-none"
//                   />
//                 </td>
//                 <td className="border border-[#1E3A8A] p-2 text-right font-bold">
//                   {(Number(item.qty) * Number(item.price)).toFixed(2)}
//                 </td>
//                 <td className="border border-[#1E3A8A] p-2 print:hidden">
//                   <button 
//                     onClick={() => handleRemoveItem(index)}
//                     className="text-red-600 font-bold hover:text-red-800 text-xs"
//                   >
//                     ✕
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Add Row Button */}
//         <div className="mb-4 print:hidden">
//           <button 
//             onClick={handleAddItem}
//             className="bg-[#1E3A8A] text-white px-3 py-1.5 rounded text-[11px] font-bold hover:bg-blue-800 transition"
//           >
//             + Add Item Row
//           </button>
//         </div>

//         {/* Totals & Summary Section */}
//         <div className="grid grid-cols-2 mb-6">
//           <div className="p-2">
//             <span className="font-bold text-gray-700 block mb-1">Notes:</span>
//             <textarea 
//               rows={3}
//               placeholder="Enter any notes..."
//               value={formData.notes}
//               onChange={(e) => setFormData({...formData, notes: e.target.value})}
//               className="w-full border border-gray-300 rounded p-2 text-xs bg-gray-50 focus:outline-none focus:border-[#1E3A8A]"
//             />
//           </div>
//           <div className="p-2 space-y-1.5 text-right text-[11px]">
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span className="font-semibold">Sub Total:</span>
//               <span className="font-bold">₹{subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1">
//               <span className="font-semibold">Total Tax:</span>
//               <span className="font-bold">₹{totalTax.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1 items-center">
//               <span className="font-semibold">Rounded Off:</span>
//               <input 
//                 type="number" 
//                 step="0.1"
//                 value={formData.roundedOff}
//                 onChange={(e) => setFormData({...formData, roundedOff: e.target.value})}
//                 className="w-20 text-right bg-gray-50 border border-gray-300 rounded p-0.5 font-bold print:border-none print:bg-transparent"
//               />
//             </div>
//             <div className="flex justify-between pt-2 text-xs font-black bg-blue-50 p-2 border border-[#1E3A8A]">
//               <span>Grand Total:</span>
//               <span>₹{grandTotal.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>

//         {/* Authorized Signatory Section */}
//         <div className="flex justify-end pt-8">
//           <div className="text-right w-64">
//             <p className="font-bold text-[11px] mb-12">for M.V. ENGINEERING</p>
//             <div className="border-t border-black pt-1">
//               <p className="font-bold text-[11px]">Authorized Signatory</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }




// import React, { useState } from 'react';

// export default function DeliveryChallan() {
//   const initialFormState = {
//     challanNo: 'DC-001',
//     orderDate: '06-03-2020',
//     dispatchDate: '06-03-2020',
//     billTo: `Ambit Depots\n10, Thakur street, Chennai 600050\nIndia\nPhone: 9876543210`,
//     challanDate: '06-03-2020',
//     refNo: '342323',
//     challanType: 'Job work',
//     gstin: '33GSPKAC371G1FE',
//     placeOfSupply: 'Tamil Nadu (33)',
//     items: [
//       { id: 1, desc: 'Plain Kurti', hsn: '62114210', qty: 10, price: 10 },
//       { id: 2, desc: 'Dressing Gown', hsn: '610799', qty: 13, price: 10 },
//       { id: 3, desc: 'Skirts', hsn: '62044990', qty: 21, price: 10 }
//     ],
//     cgstRate: 1.5,
//     sgstRate: 1.5,
//     igstRate: 0,
//     roundedOff: 0.6,
//     notes: ''
//   };

//   const [formData, setFormData] = useState(initialFormState);

//   const handleItemChange = (index, field, value) => {
//     const updatedItems = [...formData.items];
//     updatedItems[index][field] = value;
//     setFormData({ ...formData, items: updatedItems });
//   };

//   const handleAddItem = () => {
//     setFormData({
//       ...formData,
//       items: [...formData.items, { id: Date.now(), desc: '', hsn: '', qty: 1, price: 0 }]
//     });
//   };

//   const handleRemoveItem = (index) => {
//     const updatedItems = formData.items.filter((_, i) => i !== index);
//     setFormData({ ...formData, items: updatedItems });
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   // Calculations
//   const subtotal = formData.items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.price)), 0);
//   const totalTax = subtotal * ((Number(formData.cgstRate) + Number(formData.sgstRate) + Number(formData.igstRate)) / 100);
//   const grandTotal = subtotal + totalTax + Number(formData.roundedOff);

//   return (
//     <div className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center font-sans">
      
//       {/* Top Action Bar (Hidden in Print) */}
//       <div className="w-full max-w-4xl flex justify-between items-center mb-4 print:hidden">
//         <h1 className="text-base font-bold text-gray-800">M.V. Engineering Delivery Challan</h1>
//         <div className="flex space-x-3">
//           <button
//             onClick={() => setFormData(initialFormState)}
//             className="bg-green-600 text-white px-4 py-2 rounded shadow font-medium hover:bg-green-700 transition text-sm"
//           >
//             + New Challan
//           </button>
//           <button
//             onClick={handlePrint}
//             className="bg-black text-white px-4 py-2 rounded shadow font-medium hover:bg-gray-800 transition text-sm"
//           >
//             🖨️ Print / Save PDF
//           </button>
//         </div>
//       </div>

//       {/* Delivery Challan Document Container */}
//       <div className="w-full max-w-4xl bg-white border-2 border-[#1E3A8A] p-8 text-black text-sm shadow-2xl print:shadow-none print:border-none print:p-0">
        
//         {/* Header Section */}
//         <div className="border-b-2 border-[#1E3A8A] pb-5 mb-5 flex justify-between items-start">
//           <div className="flex items-start space-x-5">
//             {/* Logo Slot */}
//             <div className="border-2 border-[#1E3A8A] w-20 h-20 flex items-center justify-center bg-white overflow-hidden shrink-0 p-1">
//               <img 
//                 src="/logo.jpeg" 
//                 alt="MV Engineering Logo" 
//                 className="w-full h-full object-contain"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://via.placeholder.com/80";
//                 }}
//               />
//             </div>
//             <div>
//               <div className="text-base font-bold text-gray-800 mb-1">Company Name: M.V. Engineering</div>
//               <div className="text-xs text-gray-600 leading-relaxed">
//                 Address: 167/A/10, Manicakampillai Street,<br />
//                 Munnurpet, Chennai - 600 050<br />
//                 India
//               </div>
//               <div className="text-xs text-gray-600 mt-1">GSTIN: 33AXAPM7037J1ZH</div>
//               <div className="text-xs text-gray-600">Phone: 9444276784, 9094268060</div>
//             </div>
//           </div>
          
//           <div className="text-right">
//             <h2 className="text-2xl font-black text-[#1E3A8A] tracking-wider mb-1">DELIVERY CHALLAN</h2>
//             <div className="text-sm font-bold text-gray-700">Delivery Challan# : {formData.challanNo}</div>
//           </div>
//         </div>

//         {/* Top Info Bar (Challan #, Order Date, Dispatch Date) */}
//         <div className="grid grid-cols-3 border border-[#1E3A8A] bg-blue-50 text-center mb-5 font-bold text-xs">
//           <div className="p-2.5 border-r border-[#1E3A8A]">
//             <div className="text-blue-900 font-bold">Delivery Challan #</div>
//             <input 
//               type="text" 
//               value={formData.challanNo}
//               onChange={(e) => setFormData({...formData, challanNo: e.target.value})}
//               className="w-full text-center bg-transparent font-bold mt-1 text-sm focus:outline-none"
//             />
//           </div>
//           <div className="p-2.5 border-r border-[#1E3A8A]">
//             <div className="text-blue-900 font-bold">Order Date #</div>
//             <input 
//               type="text" 
//               value={formData.orderDate}
//               onChange={(e) => setFormData({...formData, orderDate: e.target.value})}
//               className="w-full text-center bg-transparent font-bold mt-1 text-sm focus:outline-none"
//             />
//           </div>
//           <div className="p-2.5">
//             <div className="text-blue-900 font-bold">Dispatch Date #</div>
//             <input 
//               type="text" 
//               value={formData.dispatchDate}
//               onChange={(e) => setFormData({...formData, dispatchDate: e.target.value})}
//               className="w-full text-center bg-transparent font-bold mt-1 text-sm focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Bill To & Meta Details Grid */}
//         <div className="grid grid-cols-2 border border-[#1E3A8A] mb-5 text-sm">
//           <div className="p-4 border-r border-[#1E3A8A]">
//             <span className="font-bold text-blue-900 block mb-2">Bill To:</span>
//             <textarea 
//               rows={4}
//               value={formData.billTo}
//               onChange={(e) => setFormData({...formData, billTo: e.target.value})}
//               className="w-full bg-gray-50 border border-gray-300 p-2 rounded resize-none text-sm print:border-none print:bg-transparent"
//             />
//           </div>
//           <div className="p-4 space-y-2">
//             <div className="flex justify-between border-b border-gray-200 pb-1.5">
//               <span className="font-semibold text-gray-700">Challan Date:</span>
//               <input 
//                 type="text" 
//                 value={formData.challanDate}
//                 onChange={(e) => setFormData({...formData, challanDate: e.target.value})}
//                 className="text-right bg-transparent font-medium w-36 text-sm focus:outline-none"
//               />
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5">
//               <span className="font-semibold text-gray-700">Ref #:</span>
//               <input 
//                 type="text" 
//                 value={formData.refNo}
//                 onChange={(e) => setFormData({...formData, refNo: e.target.value})}
//                 className="text-right bg-transparent font-medium w-36 text-sm focus:outline-none"
//               />
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5">
//               <span className="font-semibold text-gray-700">Challan Type:</span>
//               <input 
//                 type="text" 
//                 value={formData.challanType}
//                 onChange={(e) => setFormData({...formData, challanType: e.target.value})}
//                 className="text-right bg-transparent font-medium w-36 text-sm focus:outline-none"
//               />
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5">
//               <span className="font-semibold text-gray-700">GSTIN:</span>
//               <input 
//                 type="text" 
//                 value={formData.gstin}
//                 onChange={(e) => setFormData({...formData, gstin: e.target.value})}
//                 className="text-right bg-transparent font-medium w-40 text-sm focus:outline-none"
//               />
//             </div>
//             <div className="flex justify-between pt-1">
//               <span className="font-semibold text-gray-700">Place of Supply:</span>
//               <input 
//                 type="text" 
//                 value={formData.placeOfSupply}
//                 onChange={(e) => setFormData({...formData, placeOfSupply: e.target.value})}
//                 className="text-right bg-transparent font-medium w-40 text-sm focus:outline-none"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Itemized Table */}
//         <table className="w-full border-collapse border border-[#1E3A8A] text-center mb-5 text-sm">
//           <thead>
//             <tr className="bg-[#1E3A8A] text-white font-bold text-xs">
//               <th className="border border-[#1E3A8A] p-2.5 w-12">SR No.</th>
//               <th className="border border-[#1E3A8A] p-2.5 text-left">ITEM DESCRIPTION</th>
//               <th className="border border-[#1E3A8A] p-2.5 w-28">HSN/SAC</th>
//               <th className="border border-[#1E3A8A] p-2.5 w-16">QTY</th>
//               <th className="border border-[#1E3A8A] p-2.5 w-24">PRICE</th>
//               <th className="border border-[#1E3A8A] p-2.5 w-28">TAXABLE VALUE</th>
//               <th className="border border-[#1E3A8A] p-2.5 w-16 print:hidden">ACT</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.items.map((item, index) => (
//               <tr key={item.id} className="border-b border-gray-300">
//                 <td className="border border-[#1E3A8A] p-2.5 font-bold">{index + 1}</td>
//                 <td className="border border-[#1E3A8A] p-2.5 text-left">
//                   <input 
//                     type="text" 
//                     value={item.desc}
//                     onChange={(e) => handleItemChange(index, 'desc', e.target.value)}
//                     className="w-full bg-transparent focus:outline-none font-medium text-sm"
//                     placeholder="Item description"
//                   />
//                 </td>
//                 <td className="border border-[#1E3A8A] p-2.5">
//                   <input 
//                     type="text" 
//                     value={item.hsn}
//                     onChange={(e) => handleItemChange(index, 'hsn', e.target.value)}
//                     className="w-full text-center bg-transparent focus:outline-none text-sm"
//                   />
//                 </td>
//                 <td className="border border-[#1E3A8A] p-2.5 font-bold">
//                   <input 
//                     type="number" 
//                     value={item.qty}
//                     onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
//                     className="w-full text-center bg-transparent focus:outline-none font-bold text-sm"
//                   />
//                 </td>
//                 <td className="border border-[#1E3A8A] p-2.5 text-right">
//                   <input 
//                     type="number" 
//                     value={item.price}
//                     onChange={(e) => handleItemChange(index, 'price', e.target.value)}
//                     className="w-full text-right bg-transparent focus:outline-none text-sm"
//                   />
//                 </td>
//                 <td className="border border-[#1E3A8A] p-2.5 text-right font-bold">
//                   {(Number(item.qty) * Number(item.price)).toFixed(2)}
//                 </td>
//                 <td className="border border-[#1E3A8A] p-2.5 print:hidden">
//                   <button 
//                     onClick={() => handleRemoveItem(index)}
//                     className="text-red-600 font-bold hover:text-red-800 text-sm"
//                   >
//                     ✕
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Add Row Button */}
//         <div className="mb-5 print:hidden">
//           <button 
//             onClick={handleAddItem}
//             className="bg-[#1E3A8A] text-white px-4 py-2 rounded text-xs font-bold hover:bg-blue-800 transition"
//           >
//             + Add Item Row
//           </button>
//         </div>

//         {/* Totals & Summary Section */}
//         <div className="grid grid-cols-2 mb-8">
//           <div className="p-2">
//             <span className="font-bold text-gray-700 block mb-1 text-sm">Notes:</span>
//             <textarea 
//               rows={3}
//               placeholder="Enter any notes..."
//               value={formData.notes}
//               onChange={(e) => setFormData({...formData, notes: e.target.value})}
//               className="w-full border border-gray-300 rounded p-2.5 text-sm bg-gray-50 focus:outline-none focus:border-[#1E3A8A]"
//             />
//           </div>
//           <div className="p-2 space-y-2 text-right text-sm">
//             <div className="flex justify-between border-b border-gray-200 pb-1.5">
//               <span className="font-semibold">Sub Total:</span>
//               <span className="font-bold">₹{subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5">
//               <span className="font-semibold">Total Tax:</span>
//               <span className="font-bold">₹{totalTax.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-200 pb-1.5 items-center">
//               <span className="font-semibold">Rounded Off:</span>
//               <input 
//                 type="number" 
//                 step="0.1"
//                 value={formData.roundedOff}
//                 onChange={(e) => setFormData({...formData, roundedOff: e.target.value})}
//                 className="w-24 text-right bg-gray-50 border border-gray-300 rounded p-1 font-bold text-sm print:border-none print:bg-transparent"
//               />
//             </div>
//             <div className="flex justify-between pt-2.5 text-base font-black bg-blue-50 p-2.5 border border-[#1E3A8A]">
//               <span>Grand Total:</span>
//               <span>₹{grandTotal.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>

//         {/* Authorized Signatory Section */}
//         <div className="flex justify-end pt-10">
//           <div className="text-right w-72">
//             <p className="font-bold text-sm mb-16">for M.V. ENGINEERING</p>
//             <div className="border-t border-black pt-1.5">
//               <p className="font-bold text-sm">Authorized Signatory</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function DeliveryChallan() {
  const initialFormState = {
    challanNo: 'DC-001',
    orderDate: '06-03-2020',
    dispatchDate: '06-03-2020',
    billTo: `Ambit Depots\n10, Thakur street, Chennai 600050\nIndia\nPhone: 9876543210`,
    challanDate: '06-03-2020',
    refNo: '342323',
    challanType: 'Job work',
    gstin: '33GSPKAC371G1FE',
    placeOfSupply: 'Tamil Nadu (33)',
    items: [
      { id: 1, desc: 'Plain Kurti', hsn: '62114210', qty: 10, price: 10 },
      { id: 2, desc: 'Dressing Gown', hsn: '610799', qty: 13, price: 10 },
      { id: 3, desc: 'Skirts', hsn: '62044990', qty: 21, price: 10 }
    ],
    cgstRate: 1.5,
    sgstRate: 1.5,
    igstRate: 0,
    roundedOff: 0.6,
    notes: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { id: Date.now(), desc: '', hsn: '', qty: 1, price: 0 }]
    });
  };

  const handleRemoveItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  const handlePrint = () => {
    window.print();
  };

  // Calculations
  const subtotal = formData.items.reduce((acc, item) => acc + (Number(item.qty) * Number(item.price)), 0);
  const totalTax = subtotal * ((Number(formData.cgstRate) + Number(formData.sgstRate) + Number(formData.igstRate)) / 100);
  const grandTotal = subtotal + totalTax + Number(formData.roundedOff);

  return (
    <div className="bg-transparent min-h-screen py-2 px-2 flex flex-col items-center font-sans">
      
      {/* Print Specific Styles to hide sidebar/menu outside this component */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-challan, #printable-challan * {
            visibility: visible;
          }
          #printable-challan {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 10px;
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>

      {/* Top Action Bar (Hidden in Print) */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-2 print:hidden">
        <h1 className="text-xs font-bold text-gray-800">M.V. Engineering Delivery Challan</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setFormData(initialFormState)}
            className="bg-green-600 text-white px-3 py-1 rounded shadow font-medium hover:bg-green-700 transition text-xs"
          >
            + New Challan
          </button>
          <button
            onClick={handlePrint}
            className="bg-black text-white px-3 py-1 rounded shadow font-medium hover:bg-gray-800 transition text-xs"
          >
            🖨️ Print / Save PDF
          </button>
        </div>
      </div>

      {/* Delivery Challan Document Container */}
      <div id="printable-challan" className="w-full max-w-4xl bg-white border border-[#1E3A8A] p-4 text-black text-xs shadow-xl print:shadow-none print:border-none print:p-0 print:m-0">
        
        {/* Header Section */}
        <div className="border-b border-[#1E3A8A] pb-2 mb-2 flex justify-between items-start">
          <div className="flex items-start space-x-3">
            {/* Logo Slot */}
            <div className="border border-[#1E3A8A] w-12 h-12 flex items-center justify-center bg-white overflow-hidden shrink-0 p-0.5">
              <img 
                src="/logo.jpeg" 
                alt="MV Engineering Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/80";
                }}
              />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">Company Name: M.V. Engineering</div>
              <div className="text-[10px] text-gray-600 leading-tight">
                Address: 167/A/10, Manicakampillai Street, Munnurpet, Chennai - 600 050
              </div>
              <div className="text-[10px] text-gray-600 mt-0.5">GSTIN: 33AXAPM7037J1ZH | Phone: 9444276784, 9094268060</div>
            </div>
          </div>
          
          <div className="text-right">
            <h2 className="text-lg font-black text-[#1E3A8A] tracking-wide mb-0.5">DELIVERY CHALLAN</h2>
            <div className="text-[11px] font-bold text-gray-700">Delivery Challan# : {formData.challanNo}</div>
          </div>
        </div>

        {/* Top Info Bar (Challan #, Order Date, Dispatch Date) */}
        <div className="grid grid-cols-3 border border-[#1E3A8A] bg-blue-50 text-center mb-2 font-bold text-xs">
          <div className="p-1.5 border-r border-[#1E3A8A]">
            <div className="text-blue-900 font-bold text-[10px]">Delivery Challan #</div>
            <input 
              type="text" 
              value={formData.challanNo}
              onChange={(e) => setFormData({...formData, challanNo: e.target.value})}
              className="w-full text-center bg-transparent font-bold text-xs focus:outline-none"
            />
          </div>
          <div className="p-1.5 border-r border-[#1E3A8A]">
            <div className="text-blue-900 font-bold text-[10px]">Order Date #</div>
            <input 
              type="text" 
              value={formData.orderDate}
              onChange={(e) => setFormData({...formData, orderDate: e.target.value})}
              className="w-full text-center bg-transparent font-bold text-xs focus:outline-none"
            />
          </div>
          <div className="p-1.5">
            <div className="text-blue-900 font-bold text-[10px]">Dispatch Date #</div>
            <input 
              type="text" 
              value={formData.dispatchDate}
              onChange={(e) => setFormData({...formData, dispatchDate: e.target.value})}
              className="w-full text-center bg-transparent font-bold text-xs focus:outline-none"
            />
          </div>
        </div>

        {/* Bill To & Meta Details Grid */}
        <div className="grid grid-cols-2 border border-[#1E3A8A] mb-2 text-xs">
          <div className="p-2 border-r border-[#1E3A8A] flex flex-col justify-start">
            <span className="font-bold text-blue-900 block mb-1 text-[11px]">Bill To:</span>
            <textarea 
              rows={4}
              value={formData.billTo}
              onChange={(e) => setFormData({...formData, billTo: e.target.value})}
              className="w-full bg-gray-50 border border-gray-300 p-1.5 rounded text-[11px] focus:outline-none focus:border-[#1E3A8A] resize-none overflow-hidden print:border-none print:bg-transparent font-medium leading-relaxed"
            />
          </div>
          <div className="p-2 space-y-1">
            <div className="flex justify-between border-b border-gray-200 pb-0.5">
              <span className="font-semibold text-gray-700 text-[11px]">Challan Date:</span>
              <input 
                type="text" 
                value={formData.challanDate}
                onChange={(e) => setFormData({...formData, challanDate: e.target.value})}
                className="text-right bg-transparent font-medium w-28 text-[11px] focus:outline-none"
              />
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-0.5">
              <span className="font-semibold text-gray-700 text-[11px]">Ref #:</span>
              <input 
                type="text" 
                value={formData.refNo}
                onChange={(e) => setFormData({...formData, refNo: e.target.value})}
                className="text-right bg-transparent font-medium w-28 text-[11px] focus:outline-none"
              />
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-0.5">
              <span className="font-semibold text-gray-700 text-[11px]">Challan Type:</span>
              <input 
                type="text" 
                value={formData.challanType}
                onChange={(e) => setFormData({...formData, challanType: e.target.value})}
                className="text-right bg-transparent font-medium w-28 text-[11px] focus:outline-none"
              />
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-0.5">
              <span className="font-semibold text-gray-700 text-[11px]">GSTIN:</span>
              <input 
                type="text" 
                value={formData.gstin}
                onChange={(e) => setFormData({...formData, gstin: e.target.value})}
                className="text-right bg-transparent font-medium w-32 text-[11px] focus:outline-none"
              />
            </div>
            <div className="flex justify-between pt-0.5">
              <span className="font-semibold text-gray-700 text-[11px]">Place of Supply:</span>
              <input 
                type="text" 
                value={formData.placeOfSupply}
                onChange={(e) => setFormData({...formData, placeOfSupply: e.target.value})}
                className="text-right bg-transparent font-medium w-32 text-[11px] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Itemized Table */}
        <table className="w-full border-collapse border border-[#1E3A8A] text-center mb-2 text-xs">
          <thead>
            <tr className="bg-[#1E3A8A] text-white font-bold text-[10px]">
              <th className="border border-[#1E3A8A] p-1 w-8">SR No.</th>
              <th className="border border-[#1E3A8A] p-1 text-left">ITEM DESCRIPTION</th>
              <th className="border border-[#1E3A8A] p-1 w-20">HSN/SAC</th>
              <th className="border border-[#1E3A8A] p-1 w-12">QTY</th>
              <th className="border border-[#1E3A8A] p-1 w-16">PRICE</th>
              <th className="border border-[#1E3A8A] p-1 w-20">TAXABLE VALUE</th>
              <th className="border border-[#1E3A8A] p-1 w-10 print:hidden">ACT</th>
            </tr>
          </thead>
          <tbody>
            {formData.items.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="border border-[#1E3A8A] p-1 font-bold">{index + 1}</td>
                <td className="border border-[#1E3A8A] p-1 text-left">
                  <input 
                    type="text" 
                    value={item.desc}
                    onChange={(e) => handleItemChange(index, 'desc', e.target.value)}
                    className="w-full bg-transparent focus:outline-none font-medium text-[11px]"
                    placeholder="Item description"
                  />
                </td>
                <td className="border border-[#1E3A8A] p-1">
                  <input 
                    type="text" 
                    value={item.hsn}
                    onChange={(e) => handleItemChange(index, 'hsn', e.target.value)}
                    className="w-full text-center bg-transparent focus:outline-none text-[11px]"
                  />
                </td>
                <td className="border border-[#1E3A8A] p-1 font-bold">
                  <input 
                    type="number" 
                    value={item.qty}
                    onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
                    className="w-full text-center bg-transparent focus:outline-none font-bold text-[11px]"
                  />
                </td>
                <td className="border border-[#1E3A8A] p-1 text-right">
                  <input 
                    type="number" 
                    value={item.price}
                    onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                    className="w-full text-right bg-transparent focus:outline-none text-[11px]"
                  />
                </td>
                <td className="border border-[#1E3A8A] p-1 text-right font-bold">
                  {(Number(item.qty) * Number(item.price)).toFixed(2)}
                </td>
                <td className="border border-[#1E3A8A] p-1 print:hidden">
                  <button 
                    onClick={() => handleRemoveItem(index)}
                    className="text-red-600 font-bold hover:text-red-800 text-xs"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Row Button */}
        <div className="mb-2 print:hidden">
          <button 
            onClick={handleAddItem}
            className="bg-[#1E3A8A] text-white px-2.5 py-1 rounded text-[11px] font-bold hover:bg-blue-800 transition"
          >
            + Add Item Row
          </button>
        </div>

        {/* Totals & Summary Section */}
        <div className="grid grid-cols-2 mb-3">
          <div className="p-1">
            <span className="font-bold text-gray-700 block mb-0.5 text-[11px]">Notes:</span>
            <input 
              type="text"
              placeholder="Enter any notes..."
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className="w-full border border-gray-300 rounded p-1 text-[11px] bg-gray-50 focus:outline-none focus:border-[#1E3A8A]"
            />
          </div>
          <div className="p-1 space-y-1 text-right text-[11px]">
            <div className="flex justify-between border-b border-gray-200 pb-0.5">
              <span className="font-semibold">Sub Total:</span>
              <span className="font-bold">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-0.5">
              <span className="font-semibold">Total Tax:</span>
              <span className="font-bold">₹{totalTax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-0.5 items-center">
              <span className="font-semibold">Rounded Off:</span>
              <input 
                type="number" 
                step="0.1"
                value={formData.roundedOff}
                onChange={(e) => setFormData({...formData, roundedOff: e.target.value})}
                className="w-16 text-right bg-gray-50 border border-gray-300 rounded p-0.5 font-bold text-[11px] print:border-none print:bg-transparent"
              />
            </div>
            <div className="flex justify-between pt-1 text-xs font-black bg-blue-50 p-1.5 border border-[#1E3A8A]">
              <span>Grand Total:</span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Authorized Signatory Section */}
        <div className="flex justify-end pt-2">
          <div className="text-right w-56">
            <p className="font-bold text-[11px] mb-8">for M.V. ENGINEERING</p>
            <div className="border-t border-black pt-0.5">
              <p className="font-bold text-[11px]">Authorized Signatory</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}