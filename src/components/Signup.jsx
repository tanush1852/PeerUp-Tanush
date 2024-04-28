import React, { useState } from 'react';
import image from "../assets/bg.jpg";

const Signup = () => {
    
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNo: '',
    profilePicture: null,
    emailError: '',
    passwordError: '',
    contactNoError: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Email and contact number validation
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const domainName = value.split('@')[1];
      const validDomains = ['gmail.com', 'yahoo.com'];
      if (!emailRegex.test(value)) {
        setFormData({ ...formData, emailError: "Please enter a valid email address", email: value });
      } 
      else if (!validDomains.includes(domainName)) {
        setFormData({ ...formData, emailError: "Please enter a valid email domain", email: value });
      }
      else {
        setFormData({ ...formData, email: value, emailError: '' });
      }
    } else if (name === 'contactNo') {
      if (!/^\d*$/.test(value)) {
        setFormData({ ...formData, contactNoError: "Only numbers are allowed", contactNo: value });
      } else if (value.length > 10) {
        setFormData({ ...formData, contactNoError: "Exceeding the length!", contactNo: value });
      } else {
        setFormData({ ...formData, contactNo: value, contactNoError: '' });
      }
    } else {
      const newValue = type === 'file' ? e.target.files[0] : value;
      setFormData({ ...formData, [name]: newValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password verification
    if (formData.password !== formData.confirmPassword) {
      setFormData({ ...formData, passwordError: "Passwords do not match" });
      return;
    }
    // Reset password error message if passwords match
    setFormData({ ...formData, passwordError: '' });

    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/2 flex justify-center items-center bg-slate-400">
        <div className="w-3/4 max-w-3/4 bg-slate-400 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8 font-serif">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-column space stretch gap-14">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold mb-2">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold mb-2">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
            </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
              {/* Display email error message */}
              {formData.emailError && <p className="text-red-500 text-sm">{formData.emailError}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">New Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
              {/* Display password error message */}
              {formData.passwordError && <p className="text-red-500 text-sm">{formData.passwordError}</p>}
            </div>
            <div>
              <label htmlFor="contactNo" className="block text-sm font-semibold mb-2">Contact No.</label>
              <input type="text" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
              {/* Display contact number error message */}
              {formData.contactNoError && <p className="text-red-500 text-sm">{formData.contactNoError}</p>}
            </div>
            <div>
              <label htmlFor="profilePicture" className="block text-sm font-semibold mb-2">Profile Picture</label>
              <input type="file" id="profilePicture" name="profilePicture" accept="image/*" onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${image})`}}></div>
    </div>
  );
};

export default Signup;