import React, { useState } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Invoice from './components/Invoice';
import Quotation from './components/Quotation';
import DeliveryChallan from './components/DeliveryChallan';
import Expenses from './components/Expenses';
import Inventory from './components/Inventory';
import Parties from './components/Parties';
import Payments from './components/Payments';
import Reports from './components/Reports';
import Settings from './components/Settings';
import TeamAdmin from './components/TeamAdmin';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = (userRole) => {
    setRole(userRole);
    setIsAuthenticated(true);
    setCurrentTab('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setRole(null);
    setCurrentTab('dashboard');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div 
      className="min-h-screen text-gray-900 flex flex-col md:flex-row font-sans antialiased overflow-x-hidden relative"
      style={{
        backgroundColor: '#fefcf8',
        backgroundImage: `
          radial-gradient(at 10% 20%, rgba(255, 183, 135, 0.45) 0px, transparent 50%),
          radial-gradient(at 90% 10%, rgba(255, 223, 128, 0.45) 0px, transparent 50%),
          radial-gradient(at 50% 90%, rgba(168, 230, 207, 0.4) 0px, transparent 50%),
          linear-gradient(to right, rgba(234, 229, 221, 0.35) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(234, 229, 221, 0.35) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 32px 32px, 32px 32px'
      }}
    >
      {/* Mobile Top Navigation Toggle Bar */}
      <div className="md:hidden flex items-center justify-between bg-white/80 backdrop-blur-md p-4 border-b border-[#eae5dd] relative z-50">
        <div className="flex items-center space-x-2">
          <img src="/logo.jpeg" alt="Logo" className="w-8 h-8 object-contain rounded-lg bg-white p-0.5 border" />
          <span className="font-extrabold text-sm text-gray-900">M.V. Engineering</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl bg-[#2c3e35] text-white text-xs font-bold cursor-pointer"
        >
          {isMobileMenuOpen ? '✕ Close' : '☰ Menu'}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block z-50`}>
        <Sidebar 
          currentTab={currentTab} 
          setCurrentTab={(tab) => { setCurrentTab(tab); setIsMobileMenuOpen(false); }} 
          role={role}
          onLogout={handleLogout}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto h-screen relative z-10">
        {currentTab === 'dashboard' && <Dashboard setCurrentTab={setCurrentTab} />}
        {currentTab === 'invoice' && <Invoice />}
        {currentTab === 'dc' && <DeliveryChallan />}
        {currentTab === 'quotation' && <Quotation />}
        {currentTab === 'inventory' && <Inventory />}
        {currentTab === 'parties' && <Parties />}
        {currentTab === 'payments' && <Payments />}
        {currentTab === 'expenses' && <Expenses />}
        {currentTab === 'reports' && <Reports />}
        {currentTab === 'settings' && <Settings role={role} />}
        
        {currentTab === 'admin' && (
          role === 'admin' ? (
            <TeamAdmin role={role} setRole={setRole} />
          ) : (
            <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-3xl text-center space-y-2">
              <h3 className="font-black text-lg">Access Denied</h3>
              <p className="text-xs font-medium">You are logged in as a <b>Manager</b>. Only Admins can access the Team & CRUD Admin panel.</p>
            </div>
          )
        )}
      </main>
    </div>
  );
}