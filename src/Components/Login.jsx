import React, { useState } from 'react';

const Login = ({ onLogin, onBack }) => {
  // 1. New State for Nickname
  const [nickname, setNickname] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname && email && password) {
      // 2. We pass the NICKNAME back to the App
      onLogin({ 
        name: nickname, 
        // This API generates an avatar with their initials!
        avatar: `https://ui-avatars.com/api/?name=${nickname}&background=f97316&color=fff` 
      });
    } else {
      alert("Please fill in all fields (we need your nickname!)");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex animate-in fade-in duration-300">
      
      {/* LEFT SIDE: Image */}
      <div className="hidden lg:block w-1/2 h-full relative">
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Travel Login"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-4xl font-bold font-serif italic">Start Your Journey</h2>
          <p className="text-lg opacity-90 mt-2">Join thousands of travelers planning their next big trip.</p>
        </div>
      </div>

      {/* RIGHT SIDE: Form */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 relative">
        <button 
          onClick={onBack}
          className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 font-bold bg-gray-100 p-2 rounded-full w-10 h-10 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Hello! 👋</h2>
            <p className="text-gray-500 mt-2">Tell us who you are to get started.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* --- NEW NICKNAME FIELD --- */}
            <div>
              <label className="block text-sm font-bold text-gray-700 ml-1">Nickname</label>
              <input 
                type="text" 
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-medium"
                placeholder="What should we call you?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 ml-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-xl shadow-lg shadow-orange-500/30 text-white font-bold bg-orange-600 hover:bg-orange-700 hover:scale-[1.02] transition-all active:scale-95"
            >
              Let's Go! ✈️
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;