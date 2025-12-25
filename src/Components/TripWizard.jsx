import React, { useState } from 'react';

const TripWizard = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [friends, setFriends] = useState([]);
  const [currentFriend, setCurrentFriend] = useState("");

  const handleAddFriend = (e) => {
    e.preventDefault();
    if (currentFriend.trim()) {
      setFriends([...friends, currentFriend]);
      setCurrentFriend("");
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* 1. Dark Overlay (Backdrop) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* 2. The Modal Box */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100">
        
        {/* Header */}
        <div className="bg-orange-600 p-6 text-white">
          <h2 className="text-2xl font-bold">Plan a New Adventure ✈️</h2>
          <p className="opacity-90 text-sm">Create a group trip and split costs.</p>
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          
          {/* Destination Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Where to?</label>
            <input 
              type="text" 
              placeholder="e.g. Tokyo, Japan" 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition-all font-medium"
            />
          </div>

          {/* Budget Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Estimated Budget (Per Person)</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-400 font-bold">₹</span>
              <input 
                type="number" 
                placeholder="20000" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none font-medium"
              />
            </div>
          </div>

          {/* Add Friends Section */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Invite Travel Buddies</label>
            <form onSubmit={handleAddFriend} className="flex gap-2">
              <input 
                type="text" 
                value={currentFriend}
                onChange={(e) => setCurrentFriend(e.target.value)}
                placeholder="Enter friend's name..." 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button className="bg-gray-900 text-white px-4 rounded-xl font-bold hover:bg-black transition-colors">
                +
              </button>
            </form>
            
            {/* Friends Chips */}
            <div className="flex flex-wrap gap-2 mt-3 min-h-[30px]">
              {friends.length === 0 && <span className="text-xs text-gray-400 italic">No friends invited yet</span>}
              {friends.map((friend, idx) => (
                <span key={idx} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  {friend}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/30 transition-transform active:scale-95">
            Create Trip Group
          </button>
        </div>

      </div>
    </div>
  );
};

export default TripWizard;