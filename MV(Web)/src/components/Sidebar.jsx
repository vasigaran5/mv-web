import React from 'react';

export default function Sidebar({ currentTab, setCurrentTab, role, onLogout }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'invoice', label: 'Invoices', icon: '📄' },
    { id: 'dc', label: 'Delivery Challan', icon: '🚚' },
    { id: 'quotation', label: 'Quotations', icon: '📑' },
    { id: 'inventory', label: 'Inventory', icon: '📦' },
    { id: 'parties', label: 'Parties', icon: '👥' },
    { id: 'payments', label: 'Payments', icon: '💳' },
    { id: 'expenses', label: 'Expenses', icon: '📉' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'admin', label: 'Team & Admin', icon: '🛡️' },
  ];

  return (
    <aside className="w-64 bg-[#f8f6f0]/90 backdrop-blur-xl flex flex-col justify-between p-6 select-none shrink-0 h-screen border-r border-[#eae5dd]">
      <div>
        {/* App Branding */}
        <div className="flex items-center space-x-3 mb-6 px-1">
          <img 
            src="/logo.jpeg" 
            alt="M.V. Engineering Logo" 
            className="w-10 h-10 object-contain rounded-xl bg-white p-1 border border-[#eae5dd] shadow-xs" 
          />
          <div>
            <h2 className="font-extrabold text-gray-900 text-sm tracking-tight m-0">M.V. Engineering</h2>
            <p className="text-[10px] text-gray-500 font-medium m-0">Smart Billing ERP</p>
          </div>
        </div>

        {/* Menu Navigation */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`w-full flex items-center space-x-3.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2c3e35] text-white shadow-md shadow-[#2c3e35]/20'
                    : 'text-gray-600 hover:bg-[#efece6] hover:text-gray-900'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile & Logout */}
      <div className="space-y-3 pt-4 border-t border-[#eae5dd]">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-gray-800 capitalize">Role: {role}</span>
        </div>
        <button 
          onClick={onLogout}
          className="w-full py-2.5 px-3 bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs rounded-xl transition text-left flex items-center space-x-2 border border-[#eae5dd] shadow-xs cursor-pointer"
        >
          <span>🚪</span>
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}