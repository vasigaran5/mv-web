// import React, { useState } from 'react';

// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     if (email === 'admin@mv.com' && password === 'admin123') {
//       onLogin('admin');
//     } else if (email === 'manager@mv.com' && password === 'manager123') {
//       onLogin('manager');
//     } else {
//       setError('Invalid email or password! Try demo accounts below.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#fcfbfa] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
//       {/* Background Warm & Amber Gradient Glow Orbs */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-amber-300/40 via-orange-300/30 to-yellow-200/40 rounded-full blur-[130px] pointer-events-none"></div>
//       <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-gradient-to-br from-indigo-200/30 to-purple-200/20 rounded-full blur-[100px] pointer-events-none"></div>

//       {/* Main Glassmorphism Card */}
//       <div className="relative z-10 bg-white/80 backdrop-blur-xl p-8 rounded-[32px] border border-[#eae5dd] shadow-xl w-full max-w-md space-y-6 text-gray-900">
        
//         {/* Branding & Logo */}
//         <div className="text-center space-y-3">
//           <div className="inline-flex justify-center items-center space-x-3 bg-[#f8f6f0] px-4 py-2 rounded-2xl border border-[#eae5dd] shadow-xs">
//             <img 
//               src="/logo.jpeg" 
//               alt="M.V. Engineering Logo" 
//               className="w-10 h-10 object-contain rounded-xl bg-white p-1 shadow-xs border border-gray-200" 
//             />
//             <span className="text-base font-black tracking-wide text-[#2c3e35]">
//               M.V. ENGINEERING
//             </span>
//           </div>
//           <p className="text-xs text-gray-500 font-medium">Smart Billing ERP & Management Portal</p>
//         </div>

//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-bold p-3 rounded-2xl text-center">
//             {error}
//           </div>
//         )}

//         {/* Login Form */}
//         <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
//           <div className="space-y-1.5">
//             <label className="block font-bold text-gray-700">Email Address</label>
//             <input 
//               type="email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               placeholder="e.g. admin@mv.com"
//               required
//               className="w-full p-3.5 rounded-2xl border border-gray-300 bg-[#fbfaf7] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c3e35] focus:ring-2 focus:ring-[#2c3e35]/10 font-medium transition"
//             />
//           </div>

//           <div className="space-y-1.5">
//             <label className="block font-bold text-gray-700">Password</label>
//             <input 
//               type="password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               placeholder="••••••••"
//               required
//               className="w-full p-3.5 rounded-2xl border border-gray-300 bg-[#fbfaf7] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c3e35] focus:ring-2 focus:ring-[#2c3e35]/10 font-medium transition"
//             />
//           </div>

//           <button 
//             type="submit"
//             className="w-full py-3.5 bg-[#2c3e35] hover:bg-[#1f2c25] text-white font-black text-sm rounded-2xl shadow-md transition transform active:scale-[0.98]"
//           >
//             Sign In to Dashboard
//           </button>
//         </form>

//         {/* Demo credentials are intentionally not embedded in production code. */}
//         <div className="bg-[#f8f6f0] p-4 rounded-2xl border border-[#eae5dd] space-y-2 text-[11px]">
//           <p className="font-black text-[#2c3e35] uppercase tracking-wider">Demo Credentials:</p>
//           <div className="flex justify-between items-center text-gray-700">
//             <span><b>Admin:</b> admin@mv.com</span>
//             <span className="bg-white px-2 py-0.5 rounded-lg border border-gray-200 font-bold text-gray-900">admin123</span>
//           </div>
//           <div className="flex justify-between items-center text-gray-700">
//             <span><b>Manager:</b> manager@mv.com</span>
//             <span className="bg-white px-2 py-0.5 rounded-lg border border-gray-200 font-bold text-gray-900">manager123</span>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); setError('');
    try {
      const r = await fetch('/backend/api/auth.php?action=login', {method:'POST', headers:{'Content-Type':'application/json'}, credentials:'include', body:JSON.stringify({email,password})});
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || 'Invalid email or password');
      onLogin(data.user.role);
    } catch (err) { setError(err.message || 'Unable to sign in'); }
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden font-sans"
      style={{
        backgroundColor: '#fefcf8',
        backgroundImage: `
          radial-gradient(at 15% 20%, rgba(255, 183, 135, 0.6) 0px, transparent 55%),
          radial-gradient(at 85% 15%, rgba(255, 223, 128, 0.6) 0px, transparent 55%),
          radial-gradient(at 50% 85%, rgba(168, 230, 207, 0.55) 0px, transparent 55%),
          linear-gradient(to right, rgba(234, 229, 221, 0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(234, 229, 221, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 32px 32px, 32px 32px'
      }}
    >
      
      {/* Shining Glowing Blurred Orbs for extra glossy effect */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-amber-300/30 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-emerald-200/30 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Main Glassmorphism Card */}
      <div className="relative z-10 bg-white/85 backdrop-blur-2xl p-8 rounded-[32px] border border-white/80 shadow-2xl w-full max-w-md space-y-6 text-gray-900">
        
        {/* Branding & Logo */}
        <div className="text-center space-y-3">
          <div className="inline-flex justify-center items-center space-x-3 bg-white/90 px-4 py-2 rounded-2xl border border-[#eae5dd] shadow-xs">
            <img 
              src="/logo.jpeg" 
              alt="M.V. Engineering Logo" 
              className="w-10 h-10 object-contain rounded-xl bg-white p-1 shadow-xs border border-gray-200" 
            />
            <span className="text-base font-black tracking-wide text-[#2c3e35]">
              M.V. ENGINEERING
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium">Smart Billing ERP & Management Portal</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-bold p-3 rounded-2xl text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="block font-bold text-gray-700">Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="e.g. admin@mv.com"
              required
              className="w-full p-3.5 rounded-2xl border border-gray-300 bg-white/90 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c3e35] focus:ring-2 focus:ring-[#2c3e35]/10 font-medium transition"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block font-bold text-gray-700">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••"
              required
              className="w-full p-3.5 rounded-2xl border border-gray-300 bg-white/90 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2c3e35] focus:ring-2 focus:ring-[#2c3e35]/10 font-medium transition"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3.5 bg-[#2c3e35] hover:bg-[#1f2c25] text-white font-black text-sm rounded-2xl shadow-md transition transform active:scale-[0.98] cursor-pointer"
          >
            Sign In to Dashboard
          </button>
        </form>

        {/* Demo credentials are intentionally not embedded in production code. */}
        <div className="bg-white/75 p-4 rounded-2xl border border-[#eae5dd] space-y-2 text-[11px]">
          <p className="font-black text-[#2c3e35] uppercase tracking-wider">Demo Credentials:</p>
          <div className="flex justify-between items-center text-gray-700">
            <span><b>Admin:</b> admin@mv.com</span>
            <span className="bg-white px-2 py-0.5 rounded-lg border border-gray-200 font-bold text-gray-900">admin123</span>
          </div>
          <div className="flex justify-between items-center text-gray-700">
            <span><b>Manager:</b> manager@mv.com</span>
            <span className="bg-white px-2 py-0.5 rounded-lg border border-gray-200 font-bold text-gray-900">manager123</span>
          </div>
        </div>

      </div>
    </div>
  );
}