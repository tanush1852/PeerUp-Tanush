// App.jsx

import React from 'react';
import SendFriendRequest from './SendFriendRequest';
import AcceptFriendRequest from './AcceptFriendRequest';
import './index.css'; // Import Tailwind CSS styles

const App = () => {
  // Sample data for received friend requests
  const receivedRequests = [
    { id: 1, sender: 'User1' },
    { id: 2, sender: 'User2' },
    { id: 3, sender: 'User3' }
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex justify-around w-3/4">
        {/* Display current friends and send friend requests */}
        <div className="w-1/2 pr-4">
          <h1 className="text-2xl font-bold mb-4">My Friends</h1>
          {/* Display current friends */}
          <div className="bg-white shadow-lg p-6 rounded-lg mb-4">
            {/* Your current friends list here */}
            <p className="text-gray-700">No friends yet</p>
          </div>
          {/* Send friend request component */}
          <SendFriendRequest />
        </div>
        {/* Display received friend requests */}
        <div className="w-1/2 pl-4">
          <h1 className="text-2xl font-bold mb-4">Friend Requests</h1>
          {/* Accept friend request component */}
          <AcceptFriendRequest requests={receivedRequests} />
        </div>
      </div>
    </div>
  );
};

export default App;
