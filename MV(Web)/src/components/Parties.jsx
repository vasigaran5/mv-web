// import React, { useState, useEffect } from 'react';

// export default function Parties() {
//   const [parties, setParties] = useState([
//     { id: 1, type: 'vendor', name: 'Murugan Wholesale Traders', phone: '9840123456', email: 'murugan.traders@gmail.com', state: 'Tamil Nadu', gstin: '33AABCM1234F1Z5', address: '45, Rattan Bazaar, Chennai', openingBalance: '0' },
//     { id: 2, type: 'customer', name: 'Priya Electronics & Spares', phone: '9443211223', email: 'priya.electronics@yahoo.com', state: 'Tamil Nadu', gstin: '33XYZPA5678G2Z1', address: '12, Gandhi Road, Coimbatore', openingBalance: '1250.00' },
//     { id: 3, type: 'customer', name: 'Anbu Provision Stores', phone: '9789055443', email: 'anbustores@gmail.com', state: 'Tamil Nadu', gstin: '33BBBUA9876H1Z9', address: '88, Bazaar Street, Madurai', openingBalance: '450.50' }
//   ]);

//   const [filterTab, setFilterTab] = useState('All'); // 'All', 'customer', 'vendor'
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Form state for new party
//   const [formData, setFormData] = useState({
//     type: 'Customer',
//     name: '',
//     phone: '',
//     email: '',
//     gstin: '',
//     state: '',
//     address: '',
//     openingBalance: '0'
//   });

//   // Load from localStorage on mount
//   useEffect(() => {
//     const saved = localStorage.getItem('savedParties');
//     if (saved) {
//       setParties(JSON.parse(saved));
//     }
//   }, []);

//   const saveToLocalStorage = (updatedParties) => {
//     setParties(updatedParties);
//     localStorage.setItem('savedParties', JSON.stringify(updatedParties));
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddParty = (e) => {
//     e.preventDefault();
//     const newParty = {
//       id: Date.now(),
//       ...formData,
//       type: formData.type.toLowerCase() // normalize to 'customer' or 'vendor'
//     };

//     const updated = [newParty, ...parties];
//     saveToLocalStorage(updated);
//     setIsModalOpen(false);

//     // Reset form
//     setFormData({
//       type: 'Customer',
//       name: '',
//       phone: '',
//       email: '',
//       gstin: '',
//       state: '',
//       address: '',
//       openingBalance: '0'
//     });
//   };

//   const handleDelete = (id) => {
//     const updated = parties.filter(p => p.id !== id);
//     saveToLocalStorage(updated);
//   };

//   // Filter parties based on tabs
//   const filteredParties = parties.filter(p => {
//     if (filterTab === 'All') return true;
//     return p.type.toLowerCase() === filterTab.toLowerCase();
//   });

//   return (
//     <div className="max-w-7xl mx-auto space-y-6 pb-12 relative">
      
//       {/* Top Header & Button */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div>
//           <h1 className="text-2xl font-black text-gray-900 tracking-tight">Parties</h1>
//           <p className="text-xs text-gray-500 font-medium">Manage your customers and vendors list</p>
//         </div>
//         <button 
//           onClick={() => setIsModalOpen(true)}
//           className="px-4 py-2.5 bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold rounded-xl shadow-md transition cursor-pointer"
//         >
//           + Add party
//         </button>
//       </div>

//       {/* Filter Tabs & Table Container */}
//       <div className="bg-[#fbfaf7]/90 p-6 rounded-2xl border border-[#eae5dd] space-y-6 shadow-sm">
        
//         {/* Filter Pills */}
//         <div className="flex items-center space-x-2 bg-[#f3efe6] p-1.5 rounded-2xl w-fit border border-[#eae5dd]">
//           {['All', 'customer', 'vendor'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setFilterTab(tab)}
//               className={`px-5 py-2 rounded-xl text-xs font-bold capitalize transition cursor-pointer ${
//                 filterTab === tab 
//                   ? 'bg-white text-gray-900 shadow-xs border border-[#eae5dd]' 
//                   : 'text-gray-500 hover:text-gray-900'
//               }`}
//             >
//               {tab === 'customer' ? 'customers' : tab === 'vendor' ? 'vendors' : 'All'}
//             </button>
//           ))}
//         </div>

//         {/* Parties Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse text-xs">
//             <thead>
//               <tr className="border-b border-[#eae5dd] text-gray-400 font-bold">
//                 <th className="pb-3 px-2">NAME</th>
//                 <th className="pb-3 px-2">TYPE</th>
//                 <th className="pb-3 px-2">PHONE</th>
//                 <th className="pb-3 px-2">STATE</th>
//                 <th className="pb-3 px-2">GSTIN</th>
//                 <th className="pb-3 px-2 text-right">BALANCE</th>
//                 <th className="pb-3 px-2 text-right">ACTIONS</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredParties.length === 0 ? (
//                 <tr>
//                   <td colSpan="7" className="py-8 text-center text-gray-400">No parties found</td>
//                 </tr>
//               ) : (
//                 filteredParties.map((p) => (
//                   <tr key={p.id} className="border-b border-gray-100 hover:bg-white/60 transition">
//                     <td className="py-4 px-2 font-bold text-gray-900">{p.name}</td>
//                     <td className="py-4 px-2 text-gray-500 capitalize">{p.type}</td>
//                     <td className="py-4 px-2 text-gray-600 font-medium">{p.phone || '-'}</td>
//                     <td className="py-4 px-2 text-gray-600">{p.state || '-'}</td>
//                     <td className="py-4 px-2 text-gray-500 font-mono text-[11px]">{p.gstin || '-'}</td>
//                     <td className="py-4 px-2 text-right font-black text-[#2c3e35]">
//                       ₹ {Number(p.openingBalance || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
//                     </td>
//                     <td className="py-4 px-2 text-right space-x-3">
//                       <button onClick={() => handleDelete(p.id)} className="text-[#a65d57] font-bold hover:underline cursor-pointer">Delete</button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//       </div>

//       {/* ADD PARTY MODAL */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
//           <div className="bg-[#fbfaf7] border border-[#eae5dd] w-full max-w-xl rounded-3xl p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto text-xs">
            
//             <div className="flex justify-between items-center border-b border-[#eae5dd] pb-3">
//               <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Add party</h3>
//               <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700 font-bold text-base cursor-pointer">✕</button>
//             </div>

//             <form onSubmit={handleAddParty} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="font-bold text-gray-600 block mb-1">Type</label>
//                   <select name="type" value={formData.type} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium">
//                     <option>Customer</option>
//                     <option>Vendor</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="font-bold text-gray-600 block mb-1">Name *</label>
//                   <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium" placeholder="Party name" />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="font-bold text-gray-600 block mb-1">Phone</label>
//                   <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="9000000000" />
//                 </div>
//                 <div>
//                   <label className="font-bold text-gray-600 block mb-1">Email</label>
//                   <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="example@email.com" />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="font-bold text-gray-600 block mb-1">GSTIN</label>
//                   <input type="text" name="gstin" value={formData.gstin} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl uppercase" placeholder="GSTIN number" />
//                 </div>
//                 <div>
//                   <label className="font-bold text-gray-600 block mb-1">State (for GST)</label>
//                   <input type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="e.g. Tamil Nadu" />
//                 </div>
//               </div>

//               <div>
//                 <label className="font-bold text-gray-600 block mb-1">Address</label>
//                 <textarea name="address" value={formData.address} onChange={handleInputChange} rows="2" className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="Complete street address..."></textarea>
//               </div>

//               <div>
//                 <label className="font-bold text-gray-600 block mb-1">Opening balance ₹</label>
//                 <input type="number" name="openingBalance" value={formData.openingBalance} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-bold" placeholder="0" />
//               </div>

//               <div className="flex justify-end space-x-3 pt-4 border-t border-[#eae5dd]">
//                 <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-xl cursor-pointer">
//                   Cancel
//                 </button>
//                 <button type="submit" className="px-5 py-2 bg-[#2c3e35] hover:bg-[#1f2c25] text-white font-bold rounded-xl shadow-md cursor-pointer">
//                   Save party
//                 </button>
//               </div>
//             </form>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }


import React, { useState } from 'react';

export default function PartiesDashboard() {
  const [parties, setParties] = useState([
    { id: 1, name: 'krishnapriya baskaran', type: 'Vendor', buyersOrderNo: '6500006478', phone: '09364324606', state: 'Tamil Nadu', gstin: '988776064332', balance: 9000.00 },
    { id: 2, name: 'Priya Electronics & Spares', type: 'Customer', buyersOrderNo: '6500006479', phone: '9443211223', state: 'Tamil Nadu', gstin: '33XY7PA5678G771', balance: 1250.00 },
    { id: 3, name: 'Anbu Provision Stores', type: 'Customer', buyersOrderNo: '6500006480', phone: '9789055443', state: 'Tamil Nadu', gstin: '33BBEUA9870H1Z9', balance: 450.50 }
  ]);

  const [activeTab, setActiveTab] = useState('All'); // All, Customers, Vendors
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New Party Form State
  const [newParty, setNewParty] = useState({
    name: '',
    type: 'Customer',
    buyersOrderNo: '',
    phone: '',
    state: 'Tamil Nadu',
    gstin: '',
    balance: ''
  });

  // Filter parties based on tab and search query (Name, Buyers Order No, Phone, GSTIN)
  const filteredParties = parties.filter(party => {
    const matchesTab = 
      activeTab === 'All' || 
      (activeTab === 'Customers' && party.type === 'Customer') || 
      (activeTab === 'Vendors' && party.type === 'Vendor');

    const matchesSearch = 
      party.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      party.buyersOrderNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      party.phone.includes(searchQuery) ||
      party.gstin.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this party?")) {
      setParties(parties.filter(p => p.id !== id));
    }
  };

  const handleAddPartySubmit = (e) => {
    e.preventDefault();
    if (!newParty.name || !newParty.phone) {
      alert("Please fill in Name and Phone number.");
      return;
    }
    setParties([
      ...parties,
      {
        id: Date.now(),
        name: newParty.name,
        type: newParty.type,
        buyersOrderNo: newParty.buyersOrderNo || 'N/A',
        phone: newParty.phone,
        state: newParty.state,
        gstin: newParty.gstin || 'N/A',
        balance: Number(newParty.balance) || 0
      }
    ]);
    setNewParty({ name: '', type: 'Customer', buyersOrderNo: '', phone: '', state: 'Tamil Nadu', gstin: '', balance: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-[#FFFDF9] font-sans text-xs text-gray-800">
      

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6">
        
        {/* Header & Add Party Button */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Parties</h2>
            <p className="text-gray-500 text-[11px]">Manage your customers and vendors list</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-900 text-white px-4 py-2 rounded-md font-bold shadow hover:bg-blue-800 transition flex items-center space-x-1.5"
          >
            <span>+ Add party</span>
          </button>
        </div>

        {/* Main Card Container */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
          
          {/* Tabs & Search Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            
            {/* Filter Tabs (All, Customers, Vendors) */}
            <div className="bg-gray-100 p-1 rounded-lg flex space-x-1">
              <button
                onClick={() => setActiveTab('All')}
                className={`px-5 py-1.5 rounded-md font-bold transition ${activeTab === 'All' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-600 hover:text-black'}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('Customers')}
                className={`px-5 py-1.5 rounded-md font-bold transition ${activeTab === 'Customers' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-600 hover:text-black'}`}
              >
                Customers
              </button>
              <button
                onClick={() => setActiveTab('Vendors')}
                className={`px-5 py-1.5 rounded-md font-bold transition ${activeTab === 'Vendors' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-600 hover:text-black'}`}
              >
                Vendors
              </button>
            </div>

            {/* Search Input (Searches Name, Buyers Order No, Phone, GSTIN) */}
            <div className="w-full md:w-80">
              <input
                type="text"
                placeholder="Search by buyers order no, name, phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-blue-900"
              />
            </div>
          </div>

          {/* Parties Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 font-bold text-[10px] uppercase tracking-wider">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Buyers Order No</th>
                  <th className="py-3 px-4">Phone</th>
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4">GSTIN</th>
                  <th className="py-3 px-4 text-right">Balance</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredParties.length > 0 ? (
                  filteredParties.map((party) => (
                    <tr key={party.id} className="hover:bg-gray-50 transition">
                      <td className="py-3.5 px-4 font-bold text-gray-900">{party.name}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${party.type === 'Customer' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                          {party.type}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-blue-900">{party.buyersOrderNo}</td>
                      <td className="py-3.5 px-4 text-gray-600">{party.phone}</td>
                      <td className="py-3.5 px-4 text-gray-600">{party.state}</td>
                      <td className="py-3.5 px-4 text-gray-600">{party.gstin}</td>
                      <td className="py-3.5 px-4 text-right font-bold text-gray-900">
                        ₹{Number(party.balance).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDelete(party.id)}
                          className="text-red-600 font-bold hover:text-red-800 transition text-[11px]"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-8 text-center text-gray-400 italic">
                      No parties found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </main>

      {/* Add Party Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
            <h3 className="text-base font-bold text-gray-900 mb-4">Add New Party</h3>
            <form onSubmit={handleAddPartySubmit} className="space-y-3">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Party Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter name..."
                  className="w-full border border-gray-300 rounded p-2 bg-gray-50 text-xs focus:outline-none focus:border-blue-900"
                  value={newParty.name}
                  onChange={(e) => setNewParty({...newParty, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Type *</label>
                  <select
                    className="w-full border border-gray-300 rounded p-2 bg-gray-50 text-xs focus:outline-none focus:border-blue-900"
                    value={newParty.type}
                    onChange={(e) => setNewParty({...newParty, type: e.target.value})}
                  >
                    <option value="Customer">Customer</option>
                    <option value="Vendor">Vendor</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Buyers Order No</label>
                  <input
                    type="text"
                    placeholder="Order No..."
                    className="w-full border border-gray-300 rounded p-2 bg-gray-50 text-xs focus:outline-none focus:border-blue-900"
                    value={newParty.buyersOrderNo}
                    onChange={(e) => setNewParty({...newParty, buyersOrderNo: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Phone *</label>
                  <input
                    type="text"
                    required
                    placeholder="Phone number..."
                    className="w-full border border-gray-300 rounded p-2 bg-gray-50 text-xs focus:outline-none focus:border-blue-900"
                    value={newParty.phone}
                    onChange={(e) => setNewParty({...newParty, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    placeholder="State..."
                    className="w-full border border-gray-300 rounded p-2 bg-gray-50 text-xs focus:outline-none focus:border-blue-900"
                    value={newParty.state}
                    onChange={(e) => setNewParty({...newParty, state: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Opening Balance (₹)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full border border-gray-300 rounded p-2 bg-gray-50 text-xs focus:outline-none focus:border-blue-900"
                    value={newParty.balance}
                    onChange={(e) => setNewParty({...newParty, balance: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">GSTIN</label>
                  <input
                    type="text"
                    placeholder="GSTIN number..."
                    className="w-full border border-gray-300 rounded p-2 bg-gray-50 text-xs focus:outline-none focus:border-blue-900"
                    value={newParty.gstin}
                    onChange={(e) => setNewParty({...newParty, gstin: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded font-bold hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-900 text-white rounded font-bold hover:bg-blue-800 transition"
                >
                  Save Party
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}