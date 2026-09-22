import React, { useState, useEffect } from 'react';

export default function Payments() {
  const [payments, setPayments] = useState([
    { id: 1, party: 'Priya Electronics & Spares', direction: 'Received (in)', amount: '1250.00', mode: 'CASH', date: '19-09-2026', note: 'Advance payment' },
    { id: 2, party: 'Murugan Wholesale Traders', direction: 'Paid (out)', amount: '3500.00', mode: 'UPI', date: '18-09-2026', note: 'Bill settlement' }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [partiesList, setPartiesList] = useState([]);

  // Form state
  const [formData, setFormData] = useState({
    party: '- None -',
    direction: 'Received (in)',
    amount: '',
    mode: 'CASH',
    date: new Date().toISOString().split('T')[0].split('-').reverse().join('-'),
    note: ''
  });

  // Load from localStorage on mount
  useEffect(() => {
    const savedPayments = localStorage.getItem('savedPayments');
    if (savedPayments) {
      setPayments(JSON.parse(savedPayments));
    }

    const savedParties = localStorage.getItem('savedParties');
    if (savedParties) {
      setPartiesList(JSON.parse(savedParties));
    }
  }, []);

  const saveToLocalStorage = (updated) => {
    setPayments(updated);
    localStorage.setItem('savedPayments', JSON.stringify(updated));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPayment = (e) => {
    e.preventDefault();
    const newPayment = {
      id: Date.now(),
      ...formData
    };

    const updated = [newPayment, ...payments];
    saveToLocalStorage(updated);
    setIsModalOpen(false);

    // Reset form
    setFormData({
      party: '- None -',
      direction: 'Received (in)',
      amount: '',
      mode: 'CASH',
      date: new Date().toISOString().split('T')[0].split('-').reverse().join('-'),
      note: ''
    });
  };

  const handleDelete = (id) => {
    const updated = payments.filter(p => p.id !== id);
    saveToLocalStorage(updated);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 relative">
      
      {/* Top Header & Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Payments</h1>
          <p className="text-xs text-gray-500 font-medium">Record and track money coming in and going out</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold rounded-xl shadow-md transition cursor-pointer"
        >
          + Record payment
        </button>
      </div>

      {/* Payments Table Container */}
      <div className="bg-[#fbfaf7]/90 p-6 rounded-2xl border border-[#eae5dd] shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#eae5dd] text-gray-400 font-bold">
                <th className="pb-3 px-2">DATE</th>
                <th className="pb-3 px-2">PARTY</th>
                <th className="pb-3 px-2">DIRECTION</th>
                <th className="pb-3 px-2">MODE</th>
                <th className="pb-3 px-2">NOTE</th>
                <th className="pb-3 px-2 text-right">AMOUNT</th>
                <th className="pb-3 px-2 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {payments.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-gray-400">No payments recorded yet</td>
                </tr>
              ) : (
                payments.map((p) => (
                  <tr key={p.id} className="border-b border-gray-100 hover:bg-white/60 transition">
                    <td className="py-4 px-2 font-medium text-gray-600">{p.date}</td>
                    <td className="py-4 px-2 font-bold text-gray-900">{p.party}</td>
                    <td className="py-4 px-2">
                      <span className={`px-2 py-1 rounded-lg font-bold text-[10px] ${p.direction.includes('Received') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-[#a65d57]'}`}>
                        {p.direction}
                      </span>
                    </td>
                    <td className="py-4 px-2 font-bold text-gray-500">{p.mode}</td>
                    <td className="py-4 px-2 text-gray-500">{p.note || '-'}</td>
                    <td className="py-4 px-2 text-right font-black text-gray-900">
                      ₹ {Number(p.amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button onClick={() => handleDelete(p.id)} className="text-[#a65d57] font-bold hover:underline cursor-pointer">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* RECORD PAYMENT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-[#fbfaf7] border border-[#eae5dd] w-full max-w-xl rounded-3xl p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto text-xs">
            
            <div className="flex justify-between items-center border-b border-[#eae5dd] pb-3">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Record payment</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700 font-bold text-base cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleAddPayment} className="space-y-4">
              <div>
                <label className="font-bold text-gray-600 block mb-1">Party</label>
                <select name="party" value={formData.party} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium">
                  <option>- None -</option>
                  {partiesList.map((party, idx) => (
                    <option key={idx} value={party.name}>{party.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Direction</label>
                  <select name="direction" value={formData.direction} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium">
                    <option>Received (in)</option>
                    <option>Paid (out)</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Amount ₹</label>
                  <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} required className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-bold" placeholder="0" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Mode</label>
                  <select name="mode" value={formData.mode} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium">
                    <option>CASH</option>
                    <option>UPI</option>
                    <option>BANK TRANSFER</option>
                    <option>CHEQUE</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Date</label>
                  <input type="text" name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium" />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-600 block mb-1">Note</label>
                <input type="text" name="note" value={formData.note} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="Optional note..." />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-[#eae5dd]">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-xl cursor-pointer">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 bg-[#2c3e35] hover:bg-[#1f2c25] text-white font-bold rounded-xl shadow-md cursor-pointer">
                  Save
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}