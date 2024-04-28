// AcceptFriendRequest.jsx

import React from 'react';

const AcceptFriendRequest = ({ requests }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Accept Friend Requests</h2>
      {/* List of friend requests */}
      <div className="space-y-4">
        {requests.map(request => (
          <div key={request.id} className="flex items-center justify-between border-b border-gray-300 py-2">
            <p className="text-lg">{request.sender}</p>
            <div>
              <button className="bg-green-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-green-600">Accept</button>
              <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">Decline</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptFriendRequest;
