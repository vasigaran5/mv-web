import React, { useState, useEffect } from 'react';

export default function Settings({ role }) {
  const [business, setBusiness] = useState({
    businessName: 'M.V. Engineering',
    gstin: '33ABCDE1234F1Z5',
    state: 'Tamil Nadu',
    phone: '9876543210',
    email: 'owner@mveng.test',
    invoicePrefix: 'INV-',
    nextInvoiceNo: '1005',
    address: '12 MG Road, Chennai',
    logo: ''
  });

  const [savedMessage, setSavedMessage] = useState(false);

  // Debug check: let's print what role is actually arriving
  console.log("Current role prop received:", role);

  // If role is missing or says Manager, let's check localStorage or fallback. 
  // To test right now, let's force it to check if role includes 'Admin' (case-insensitive)
  const currentRole = role || localStorage.getItem('userRole') || 'Admin';
  const isAdmin = currentRole.toLowerCase().includes('admin');

  useEffect(() => {
    const saved = localStorage.getItem('businessSettings');
    if (saved) {
      setBusiness(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    if (!isAdmin) return;
    const { name, value } = e.target;
    setBusiness({ ...business, [name]: value });
  };

  const handleImageUpload = (e) => {
    if (!isAdmin) return;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBusiness(prev => ({ ...prev, logo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAdmin) {
      alert('Permission Denied: Only Admins can modify business settings.');
      return;
    }
    localStorage.setItem('businessSettings', JSON.stringify(business));
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 relative">
      <div>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Settings</h1>
        <p className="text-xs text-gray-500 font-medium">
          {isAdmin 
            ? 'Manage your business profile and invoice settings (Admin Mode Active)' 
            : 'Manager View: Business settings are read-only and restricted to Admins.'}
        </p>
      </div>

      <div className="bg-[#fbfaf7]/90 p-8 rounded-3xl border border-[#eae5dd] shadow-sm space-y-6">
        <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Business profile</h3>

        {savedMessage && (
          <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-xs font-bold rounded-xl">
            Settings saved successfully!
          </div>
        )}

        {/* Status Banner */}
        {isAdmin ? (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-xl flex items-center justify-between">
            <span>🟢 Logged in as Admin. You have full permission to edit and save business settings.</span>
            <span className="text-[10px] bg-emerald-200 px-2 py-0.5 rounded text-emerald-900">Role: {currentRole}</span>
          </div>
        ) : (
          <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold rounded-xl">
            ⚠️ You are logged in as a Manager. You can view business settings, but updating them is restricted to Admins.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {/* Logo / Image Upload Section */}
          <div className="flex items-center space-x-4 pb-4 border-b border-[#eae5dd]">
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#eae5dd] flex items-center justify-center overflow-hidden shadow-xs">
              {business.logo ? (
                <img src={business.logo} alt="Logo" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400 font-bold text-lg">🏢</span>
              )}
            </div>
            <div>
              <label className="font-bold text-gray-700 block mb-1">Business Logo / Image</label>
              {isAdmin ? (
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#2c3e35] file:text-white hover:file:bg-[#1f2c25] cursor-pointer" 
                />
              ) : (
                <p className="text-gray-400 font-medium">Upload disabled for managers</p>
              )}
            </div>
          </div>

          <div>
            <label className="font-bold text-gray-600 block mb-1">Business name</label>
            <input 
              type="text" 
              name="businessName" 
              value={business.businessName} 
              onChange={handleChange} 
              disabled={!isAdmin}
              className={`w-full bg-white border border-[#eae5dd] p-3 rounded-xl font-bold text-gray-900 ${!isAdmin ? 'bg-gray-100/60 cursor-not-allowed opacity-80' : ''}`} 
              required 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-gray-600 block mb-1">GSTIN</label>
              <input 
                type="text" 
                name="gstin" 
                value={business.gstin} 
                onChange={handleChange} 
                disabled={!isAdmin}
                className={`w-full bg-white border border-[#eae5dd] p-3 rounded-xl font-medium ${!isAdmin ? 'bg-gray-100/60 cursor-not-allowed opacity-80' : ''}`} 
              />
            </div>
            <div>
              <label className="font-bold text-gray-600 block mb-1">State (drives GST split)</label>
              <input 
                type="text" 
                name="state" 
                value={business.state} 
                onChange={handleChange} 
                disabled={!isAdmin}
                className={`w-full bg-white border border-[#eae5dd] p-3 rounded-xl font-medium ${!isAdmin ? 'bg-gray-100/60 cursor-not-allowed opacity-80' : ''}`} 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-gray-600 block mb-1">Phone</label>
              <input 
                type="text" 
                name="phone" 
                value={business.phone} 
                onChange={handleChange} 
                disabled={!isAdmin}
                className={`w-full bg-white border border-[#eae5dd] p-3 rounded-xl font-medium ${!isAdmin ? 'bg-gray-100/60 cursor-not-allowed opacity-80' : ''}`} 
              />
            </div>
            <div>
              <label className="font-bold text-gray-600 block mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                value={business.email} 
                onChange={handleChange} 
                disabled={!isAdmin}
                className={`w-full bg-white border border-[#eae5dd] p-3 rounded-xl font-medium ${!isAdmin ? 'bg-gray-100/60 cursor-not-allowed opacity-80' : ''}`} 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-gray-600 block mb-1">Invoice prefix</label>
              <input 
                type="text" 
                name="invoicePrefix" 
                value={business.invoicePrefix} 
                onChange={handleChange} 
                disabled={!isAdmin}
                className={`w-full bg-white border border-[#eae5dd] p-3 rounded-xl font-medium ${!isAdmin ? 'bg-gray-100/60 cursor-not-allowed opacity-80' : ''}`} 
              />
            </div>
            <div>
              <label className="font-bold text-gray-600 block mb-1">Next invoice #</label>
              <input 
                type="text" 
                name="nextInvoiceNo" 
                value={business.nextInvoiceNo} 
                onChange={handleChange} 
                disabled={!isAdmin}
                className={`w-full bg-white border border-[#eae5dd] p-3 rounded-xl font-medium ${!isAdmin ? 'bg-gray-100/60 cursor-not-allowed opacity-80' : ''}`} 
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-gray-600 block mb-1">Address</label>
            <textarea 
              name="address" 
              rows="2" 
              value={business.address} 
              onChange={handleChange} 
              disabled={!isAdmin}
              className={`w-full bg-white border border-[#eae5dd] p-3 rounded-xl font-medium resize-none ${!isAdmin ? 'bg-gray-100/60 cursor-not-allowed opacity-80' : ''}`}
            ></textarea>
          </div>

          {/* Save button visible only for Admin */}
          {isAdmin && (
            <div className="pt-4">
              <button type="submit" className="px-6 py-3 bg-[#2c3e35] hover:bg-[#1f2c25] text-white font-bold rounded-xl shadow-md transition cursor-pointer">
                Save changes
              </button>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}