import React, { useState } from 'react';
import axios from 'axios';

const SendFriendRequest = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Logic to handle search submit
    console.log('Search term:', searchTerm);
  };

  const handleSendRequest = async () => {
    try {
      // Make HTTP POST request to send friend request
      const response = await axios.post('/api/send-friend-request', {
        senderId: 'your_sender_id', // Replace with actual sender ID
        receiverId: 'your_receiver_id' // Replace with actual receiver ID
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Send Friend Request</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md ml-2"
          onClick={handleSearchSubmit}
        >
          Search
        </button>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mr-2"
        onClick={handleSendRequest}
      >
        Send Request
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-md">Cancel</button>
    </div>
  );
};

export default SendFriendRequest;
