/* eslint-disable no-unused-vars */
import { useState } from 'react';

function CustomerProfile() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = () => {
    // Clear previous error messages
    setError('');

    // Check if any fields are empty
    if (!name || !address || !company || !companyAddress || !number || !email || !password || !confirmPassword) {
        setError('All fields are required!');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        setError('Passwords do not match!');
        return;
    }
  };

  return (
    <div>
      <div className="w-full h-screen bg-white mx-14 font-[sans-serif] pt-4">
        <div className="text-center mb-8">
          <h4 className="text-blue text-2xl font-bold">Customer Registration</h4>
          <div className='text-blue text-md'>
              Enter the details of all incoming customers.
          </div>
        </div>
        
        <h1 className='ml-10 text-blue text-xl font-bold'>Personal Information</h1>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="ml-10 grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Company</label>
              <input
                name="name"
                type="text"
                required
                className="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Company"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Person</label>
              <input
                name="address"
                type="text"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Person"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Designation</label>
              <input
                name="company"
                type="text"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Designation"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Address</label>
              <input
                name="companyAddress"
                type="text"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Address"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>
          
          </div>
          </form>
          <h1 className='ml-10 text-blue text-xl font-bold my-6'>Order Information</h1>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="ml-10 grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-lg mb-2 block">City *</label>
              <input
                name="number"
                type="text"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter City"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Website</label>
              <input
                name="email"
                required
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Website"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Logo Picture *</label>
              <input type="file" name="Choose file" id="upload" />
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Mobile Number *</label>
              <input
                name="number"
                type="number"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Mobile Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">Username/Email address *</label>
              <input
                name="companyAddress"
                type="text"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Username or Email"
                value={email}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>
          

            <div>
              <label className="text-gray-800 text-lg mb-2 block">NTN *</label>
              <input
                name="number"
                type="number"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter NTN"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">STRN *</label>
              <input
                name="email"
                required
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter STRN"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Password *</label>
              <div className="relative flex mr-20">
                <input
                  name="password"
                  required
                  type={passwordVisible ? "text" : "password"}  // Toggle between 'text' and 'password'
                  className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-64 cursor-pointer"
                  onClick={togglePasswordVisibility}
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24z"></path>
                </svg>
              </div>
            </div>

          </div>

          <div className="ml-10 flex gap-2 justify-start mt-6">
            <div className="items-start">
              <input
                type='radio'
                id="admin"
                name="userRole"
                className="mr-2"
              />
              <label htmlFor="admin" className="text-gray-800 text-md">Admin</label>
            </div>
            <div className=" flex items-center">
              <input
                type="radio"
                id="customer"
                name="userRole"

                className="mr-2"
              />
              <label htmlFor="customer" className="text-gray-800 text-md">Customer</label>
            </div>
          </div>
          
          <div className="ml-10 mt-4">
            <label className="text-gray-800 text-md mb-2 block">
              Description
            </label>
            <textarea
              rows="5"
              className="w-[77%] bg-transparent text-gray-800 text-sm border border-gray-300 focus:border-blue px-3 py-2 outline-none resize-none"
              placeholder="Enter company description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className='pb-6 ml-10 flex justify-center'>
            <button
            onClick={handleSignUp}
            className="bg-blue text-white text-md font-bold w-48 py-2 mt-6 rounded-xl hover:bg-[#005a59]"
          >
            SUBMIT
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default CustomerProfile;
