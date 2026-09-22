import React, { useState, useEffect } from 'react';

export default function TeamAdmin({ role }) {
  const [users, setUsers] = useState([
    { id: '1', name: 'Demo Admin', email: 'admin@mv.com', role: 'admin', plan: 'PRO', status: 'ACTIVE', joined: '19 Aug 2026' },
    { id: '2', name: 'Demo Manager', email: 'manager@mv.com', role: 'manager', plan: 'PRO', status: 'ACTIVE', joined: '19 Aug 2026' }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  // New User Form State
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'manager',
    password: ''
  });

  const isAdmin = role?.toLowerCase() === 'admin';

  useEffect(() => {
    const saved = localStorage.getItem('erpTeamUsers');
    if (saved) {
      setUsers(JSON.parse(saved));
    }
  }, []);

  const saveUsers = (updated) => {
    setUsers(updated);
    localStorage.setItem('erpTeamUsers', JSON.stringify(updated));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!isAdmin) {
      alert('Permission Denied: Only Admins can add new team members.');
      return;
    }

    const created = {
      id: Date.now().toString(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      plan: 'PRO',
      status: 'ACTIVE',
      joined: '19 Aug 2026'
    };

    saveUsers([...users, created]);
    setNewUser({ name: '', email: '', role: 'manager', password: '' });
    setIsAddModalOpen(false);
  };

  const handleDeleteUser = (id) => {
    if (!isAdmin) {
      alert('Permission Denied: Only Admins can delete users.');
      return;
    }
    if (users.length <= 1) {
      alert('Cannot delete the last remaining user.');
      return;
    }
    const updated = users.filter(u => u.id !== id);
    saveUsers(updated);
  };

  const handlePasswordChangeSubmit = (e) => {
    e.preventDefault();
    if (!isAdmin) return;
    alert(`Password successfully updated for ${selectedUser.name}!`);
    setIsPasswordModalOpen(false);
    setSelectedUser(null);
    setNewPassword('');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Team & Admin</h1>
          <p className="text-xs text-gray-500 font-medium">
            {isAdmin 
              ? 'Admin Mode: Full access to add members, change credentials, and manage roles.' 
              : 'View-only access. You cannot modify or delete team members.'}
          </p>
        </div>

        {isAdmin && (
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2.5 bg-[#ff7a00] hover:bg-[#e06a00] text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
          >
            + Add New User
          </button>
        )}
      </div>

      {/* Users Table Card */}
      <div className="bg-[#fbfaf7]/90 border border-[#eae5dd] rounded-3xl shadow-xs overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-gray-50/80 border-b border-[#eae5dd] text-[10px] text-gray-400 font-extrabold uppercase">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Plan</th>
              <th className="p-4">Status</th>
              <th className="p-4">Joined</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eae5dd]">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-white/50 transition">
                <td className="p-4 font-extrabold text-gray-900">{u.name}</td>
                <td className="p-4 font-medium text-gray-600">{u.email}</td>
                <td className="p-4 font-bold uppercase text-[10px]">
                  <span className={`px-2.5 py-1 rounded-md ${u.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                    {u.role}
                  </span>
                </td>
                <td className="p-4 font-extrabold text-amber-600">{u.plan}</td>
                <td className="p-4 font-bold text-green-600 text-[10px]">{u.status}</td>
                <td className="p-4 font-medium text-gray-500">{u.joined}</td>
                <td className="p-4 text-right space-x-2">
                  {isAdmin ? (
                    <>
                      <button 
                        onClick={() => { setSelectedUser(u); setIsPasswordModalOpen(true); }}
                        className="px-2.5 py-1.5 bg-white border border-[#eae5dd] hover:bg-gray-50 text-gray-800 font-bold rounded-lg shadow-xs cursor-pointer"
                        title="Reset Password"
                      >
                        🔑 Reset Password
                      </button>
                      <button 
                        onClick={() => handleDeleteUser(u.id)}
                        className="px-2.5 py-1.5 bg-red-50 border border-red-200 hover:bg-red-100 text-red-600 font-bold rounded-lg cursor-pointer"
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-400 font-medium italic">Restricted</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-[#fbfaf7] border border-[#eae5dd] w-full max-w-md p-6 rounded-3xl shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#eae5dd] pb-3">
              <h3 className="text-sm font-black text-gray-900 uppercase">Create New Team Member</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleAddUser} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-gray-600 block mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={newUser.name} 
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})} 
                  placeholder="e.g. Rahul Sharma" 
                  className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium" 
                  required 
                />
              </div>

              <div>
                <label className="font-bold text-gray-600 block mb-1">Email Address</label>
                <input 
                  type="email" 
                  value={newUser.email} 
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})} 
                  placeholder="rahul@mv.com" 
                  className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium" 
                  required 
                />
              </div>

              <div>
                <label className="font-bold text-gray-600 block mb-1">Role Permission</label>
                <select 
                  value={newUser.role} 
                  onChange={(e) => setNewUser({...newUser, role: e.target.value})} 
                  className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-bold text-gray-800 cursor-pointer"
                >
                  <option value="manager">Manager (Restricted Settings)</option>
                  <option value="admin">Admin (Full Access)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-gray-600 block mb-1">Temporary Password</label>
                <input 
                  type="password" 
                  value={newUser.password} 
                  onChange={(e) => setNewUser({...newUser, password: e.target.value})} 
                  placeholder="••••••••" 
                  className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium" 
                  required 
                />
              </div>

              <div className="pt-4 flex justify-end space-x-2">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 font-bold rounded-xl cursor-pointer">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-[#ff7a00] hover:bg-[#e06a00] text-white font-bold rounded-xl shadow-md cursor-pointer">Create User</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reset Password Modal */}
      {isPasswordModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-[#fbfaf7] border border-[#eae5dd] w-full max-w-sm p-6 rounded-3xl shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#eae5dd] pb-3">
              <h3 className="text-sm font-black text-gray-900 uppercase">Reset Password</h3>
              <button onClick={() => setIsPasswordModalOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold cursor-pointer">✕</button>
            </div>

            <p className="text-xs text-gray-600">
              Set a new login password for <b className="text-gray-900">{selectedUser.name}</b> ({selectedUser.email}).
            </p>

            <form onSubmit={handlePasswordChangeSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-gray-600 block mb-1">New Password</label>
                <input 
                  type="password" 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)} 
                  placeholder="Enter new password" 
                  className="w-full bg-white border border-[#eae5dd] p-2.5 rounded-xl font-medium" 
                  required 
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button type="button" onClick={() => setIsPasswordModalOpen(false)} className="px-3 py-2 bg-gray-200 font-bold rounded-xl cursor-pointer">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[#2c3e35] text-white font-bold rounded-xl shadow-md cursor-pointer">Update Password</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}