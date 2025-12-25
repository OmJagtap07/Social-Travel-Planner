import React from 'react';
import SpecialDeals from './SpecialDeals'; // Reusing your existing grid component!

const DestinationDetails = ({ destinationName, onBack, allTrips, myFriends }) => {
  
  // 1. MOCK DATA for the "Overview" Section
  // In a real app, you would fetch this from an API based on destinationName
  const destinationData = {
    name: destinationName || "Japan",
    country: "East Asia",
    tagline: "Explore trips, experiences, and plans created by your network.",
    coverImage: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2000", // Japan Image
    friendsVisiting: 4,
    friendsPlanning: 2,
    posts: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400",
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400",
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=400"
    ]
  };

  // Filter trips that match this destination (Case insensitive)
  const relatedTrips = allTrips.filter(t => 
    t.location.toLowerCase().includes(destinationName.toLowerCase()) || 
    t.name.toLowerCase().includes(destinationName.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white animate-in slide-in-from-right duration-300">
      
      {/* 🟢 SECTION 1: DESTINATION OVERVIEW (Cover) */}
      <div className="relative h-[400px] w-full">
        <img 
          src={destinationData.coverImage} 
          className="w-full h-full object-cover" 
          alt={destinationData.name} 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold transition-all flex items-center gap-2"
        >
          ← Back to Home
        </button>

        {/* Title Content */}
        <div className="absolute bottom-10 left-8 md:left-16 text-white max-w-3xl">
          <span className="bg-orange-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
            Trending Destination
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-2">{destinationData.name}</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90">{destinationData.tagline}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* 🟢 SECTION 2: FRIENDS ACTIVITY (Core USP) */}
        <section className="bg-orange-50 rounded-3xl p-8 border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Avatar Pile */}
            <div className="flex -space-x-4">
              {myFriends.slice(0, 4).map((friend, i) => (
                <img 
                  key={i} 
                  src={`https://ui-avatars.com/api/?name=${friend}&background=random`} 
                  className="w-12 h-12 rounded-full border-4 border-white" 
                  alt={friend} 
                />
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Your network is active here!</h3>
              <p className="text-gray-600">
                <span className="font-bold text-orange-600">{destinationData.friendsVisiting} friends</span> have visited • 
                <span className="font-bold text-orange-600"> {destinationData.friendsPlanning}</span> planning a trip
              </p>
            </div>
          </div>
          <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold shadow-sm hover:shadow-md transition-all border border-orange-100">
            Ask for Recommendations 💬
          </button>
        </section>

        {/* 🟢 SECTION 3: TRIPS RELATED TO THIS DESTINATION */}
        {/* We reuse the SpecialDeals component but pass filtered data! */}
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-6">Available Plans for {destinationData.name}</h2>
          <SpecialDeals 
            trips={relatedTrips} 
            myFriends={myFriends} 
            category="all" // Keeps the default layout
          />
          {relatedTrips.length === 0 && (
             <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
               <p className="text-gray-500">No public itineraries yet. <span className="text-orange-600 font-bold cursor-pointer">Be the first to create one!</span></p>
             </div>
          )}
        </div>

        {/* 🟢 SECTION 4: EXPERIENCES (Social Content) */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Experiences</h2>
              <p className="text-gray-500">Captured moments from your circle.</p>
            </div>
            <button className="text-orange-600 font-bold hover:underline">View all posts →</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px]">
            {/* Large item */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
               <img src={destinationData.posts[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-4 left-4 flex items-center gap-2">
                 <img src="https://ui-avatars.com/api/?name=Rohan" className="w-8 h-8 rounded-full border border-white"/>
                 <span className="text-white font-bold text-sm bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">Rohan in Kyoto</span>
               </div>
            </div>
            {/* Smaller items */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
               <img src={destinationData.posts[1]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
               <img src={destinationData.posts[2]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DestinationDetails;