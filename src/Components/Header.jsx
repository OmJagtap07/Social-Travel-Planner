import React, { useState } from 'react';

const Header = ({ user, onLoginClick, onLogout }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="h-20 bg-white flex items-center justify-between px-6 lg:px-12 sticky top-0 z-40 border-b border-gray-100/50 backdrop-blur-md bg-white/80">
      
      {/* 1. Logo */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <div className="bg-orange-500 p-2 rounded-xl rotate0">
          <span className="text-white font-black text-xl">TG</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">
          Travel<span className="text-orange-500">Guide</span>
        </h1>
      </div>

      

      {/* 3. User Section */}
      <div className="flex items-center space-x-6">
        <button className="hidden sm:block text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors">
          My Trips
        </button>

        {user ? (
          // --- LOGGED IN STATE ---
          <div className="relative group h-full flex items-center"> 
            {/* Added 'h-full flex items-center' to ensure the parent is stable */}
            
            <button className="flex items-center space-x-3 focus:outline-none py-2">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-gray-900 leading-none">{user.name}</p>
                <p className="text-[10px] text-gray-500 font-medium">Traveler</p>
              </div>
              
              <div className="h-10 w-10 rounded-full bg-orange-100 p-0.5 border-2 border-white shadow-sm overflow-hidden">
                 <img src={user.avatar} alt="profile" className="w-full h-full object-cover rounded-full" />
              </div>

              <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* === THE FIX IS HERE === */}
            {/* 1. We removed 'mt-2' */}
            {/* 2. We added 'pt-4' (Padding Top) to create an invisible bridge */}
            <div className="absolute right-0 top-full pt-4 w-48 hidden group-hover:block z-50">
              
              {/* This inner div is the actual visible card */}
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                
                <div className="px-4 py-2 border-b border-gray-50">
                  <p className="text-xs text-gray-400">Signed in as</p>
                  <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
                </div>
                
                <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                  Profile Settings
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                  My Bookings
                </a>
                
                <div className="border-t border-gray-50 mt-1"></div>
                
                <button 
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 font-bold hover:bg-red-50 transition-colors"
                >
                  Log Out
                </button>
              </div>
            </div>
            
          </div>
        ) : (
          // --- LOGGED OUT STATE ---
          <button 
            onClick={onLoginClick}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-transform active:scale-95 shadow-lg shadow-gray-900/20"
          >
            Log In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;