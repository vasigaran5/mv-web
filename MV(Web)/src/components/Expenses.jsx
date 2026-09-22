import React, { useState, useEffect } from 'react';

export default function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'General', amount: '1200.00', date: '19-09-2026', note: 'Office stationery supplies', taxEligible: true },
    { id: 2, category: 'Utilities', amount: '2400.50', date: '18-09-2026', note: 'Monthly electricity bill', taxEligible: false }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    category: 'General',
    amount: '',
    date: new Date().toISOString().split('T')[0].split('-').reverse().join('-'),
    note: '',
    taxEligible: false
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedExpenses');
    if (saved) {
      setExpenses(JSON.parse(saved));
    }
  }, []);

  const saveToLocalStorage = (updated) => {
    setExpenses(updated);
    localStorage.setItem('savedExpenses', JSON.stringify(updated));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      ...formData
    };

    const updated = [newExpense, ...expenses];
    saveToLocalStorage(updated);
    setIsModalOpen(false);

    // Reset form
    setFormData({
      category: 'General',
      amount: '',
      date: new Date().toISOString().split('T')[0].split('-').reverse().join('-'),
      note: '',
      taxEligible: false
    });
  };

  const handleDelete = (id) => {
    const updated = expenses.filter(e => e.id !== id);
    saveToLocalStorage(updated);
  };

  // Calculate total expenses amount
  const totalExpenses = expenses.reduce((sum, exp) => sum + (Number(exp.amount) || 0), 0);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 relative">
      
      {/* Top Header & Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Expenses</h1>
          <p className="text-xs text-gray-500 font-medium">Track business expenses and tax-eligible inputs</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 bg-[#2c3e35] hover:bg-[#1f2c25] text-white text-xs font-bold rounded-xl shadow-md transition cursor-pointer"
        >
          + Add expense
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-[#fbfaf7]/90 p-5 rounded-2xl border border-[#eae5dd] w-full sm:w-72 shadow-xs">
        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total Expenses</p>
        <h3 className="text-2xl font-black text-[#a65d57] mt-1">₹ {totalExpenses.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h3>
      </div>

      {/* Expenses Table Container */}
      <div className="bg-[#fbfaf7]/90 p-6 rounded-2xl border border-[#eae5dd] shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#eae5dd] text-gray-400 font-bold">
                <th className="pb-3 px-2">DATE</th>
                <th className="pb-3 px-2">CATEGORY</th>
                <th className="pb-3 px-2">NOTE</th>
                <th className="pb-3 px-2 text-center">TAX ELIGIBLE</th>
                <th className="pb-3 px-2 text-right">AMOUNT</th>
                <th className="pb-3 px-2 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {expenses.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-gray-400">No expenses recorded yet</td>
                </tr>
              ) : (
                expenses.map((exp) => (
                  <tr key={exp.id} className="border-b border-gray-100 hover:bg-white/60 transition">
                    <td className="py-4 px-2 font-medium text-gray-600">{exp.date}</td>
                    <td className="py-4 px-2 font-bold text-gray-900">{exp.category}</td>
                    <td className="py-4 px-2 text-gray-500">{exp.note || '-'}</td>
                    <td className="py-4 px-2 text-center">
                      <span className={`px-2.5 py-1 rounded-lg font-bold text-[10px] ${exp.taxEligible ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {exp.taxEligible ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="py-4 px-2 text-right font-black text-gray-900">
                      ₹ {Number(exp.amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button onClick={() => handleDelete(exp.id)} className="text-[#a65d57] font-bold hover:underline cursor-pointer">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD EXPENSE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-[#fbfaf7] border border-[#eae5dd] w-full max-w-xl rounded-3xl p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto text-xs">
            
            <div className="flex justify-between items-center border-b border-[#eae5dd] pb-3">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Add expense</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700 font-bold text-base cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleAddExpense} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Category</label>
                  <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium">
                    <option>General</option>
                    <option>Utilities</option>
                    <option>Rent</option>
                    <option>Transport</option>
                    <option>Salary / Wages</option>
                    <option>Supplies</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-gray-600 block mb-1">Amount ₹</label>
                  <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} required className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-bold" placeholder="0" />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-600 block mb-1">Date</label>
                <input type="text" name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium" />
              </div>

              <div>
                <label className="font-bold text-gray-600 block mb-1">Note</label>
                <input type="text" name="note" value={formData.note} onChange={handleInputChange} className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl" placeholder="Optional description..." />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input 
                  type="checkbox" 
                  name="taxEligible" 
                  id="taxEligible" 
                  checked={formData.taxEligible} 
                  onChange={handleInputChange} 
                  className="rounded border-gray-300 text-[#2c3e35] focus:ring-[#2c3e35] w-4 h-4 cursor-pointer"
                />
                <label htmlFor="taxEligible" className="font-bold text-gray-700 cursor-pointer">
                  Tax-eligible (claimable input)
                </label>
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