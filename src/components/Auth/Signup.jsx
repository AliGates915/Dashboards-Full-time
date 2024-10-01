/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function SignUp({ users, setUsers }) {
  const [name, setName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [accountId, setAccountId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    // Clear previous error messages
    setError('');

    // Check if any fields are empty
    if (
      !name ||
      !contactPerson ||
      !designation ||
      !mobileNumber ||
      !companyPhone ||
      !companyAddress ||
      !website ||
      !accountId ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError('All fields are required!');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Store the new user's data in the shared users array
    const newUser = {
      name,
      contactPerson,
      designation,
      mobileNumber,
      companyPhone,
      companyAddress,
      website,
      accountId,
      email,
      password,
      description,
    };

    // Update the users state and local storage
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Save to local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert('Account created successfully!');
    navigate('/login');
  };

  return (
    <div>
      <div className="w-full h-screen bg-white mx-20 mb-6 font-[sans-serif] p-3">
        <div className=" flex justify-center mb-8">
          <h4 className="text-blue text-2xl font-bold">Create a New Account</h4>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          
          <div className='flex justify-between'>
            <div className=''>
              <label className="text-gray-800 text-lg mb-2 block">
                Company Name *
              </label>
              <input
                type="text"
                required
                className="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter company name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              </div>

            {/* Logo */}
            <div className='flex mr-40 text-black'>
              <img src="/public/logo-removebg-preview.png" alt="" width={70} height={40}/>
              <p className='mt-2 ml-3 text-2xl font-semibold'>Company Logo</p>  
            </div>
            </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            
            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Contact Person *
              </label>
              <input
                type="text"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter name"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Designation *
              </label>
              <input
                type="text"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Mobile No. *
              </label>
              <input
                type="text"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Company Phone No.
              </label>
              <input
                type="number"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter company phone number"
                value={companyPhone}
                onChange={(e) => setCompanyPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Company Address *
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter company address"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">            
          
          <div>
              <label className="text-gray-800 text-lg mb-2 block">Email *</label>
              <input
                type="email"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">Website *</label>
              <input
                type="text"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

          </div>

          <div className="mt-4">
            <label className="text-gray-800 text-md mb-2 block">
              Company Description
            </label>
            <textarea
              rows="5"
              className="w-[77%] bg-transparent text-gray-800 text-sm border border-gray-300 focus:border-blue px-3 py-2 outline-none resize-none"
              placeholder="Enter company description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <div className='mb-4 mt-6'>
              <label className="text-gray-800 text-lg mb-2 block">Account ID *</label>
              <input
                type="text"
                required
                className="w-[46rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter account ID"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
              />
            </div>


          <div className='className="mt-18 grid sm:grid-cols-2 gap-6"'>  
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Password *</label>
              <div className="relative flex">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  required
                  className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-[22rem] cursor-pointer"
                  onClick={togglePasswordVisibility}
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                  <circle cx="64" cy="64" r="8" />
                </svg>
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-md mb-2 block">
                Confirm Password *
              </label>
              <div className="relative flex">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  required
                  className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-[22rem] cursor-pointer"
                  onClick={togglePasswordVisibility}
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                  <circle cx="64" cy="64" r="8" />
                </svg>
              </div>
            </div>

          </div>
          <div className="mt-4 text-red-500">{error && <p>{error}</p>}</div>

          <div className="my-4 flex justify-between">
            <p className='ml-2 text-gray-800'>
              Already have an account?
              <span className='pl-1 text-blue font-medium'> 
                <a href="/login">Login here</a>
              </span>
            </p>
            <div className='flex'>
            <button
              type="submit"
              onClick={handleSignUp}
              className=" bg-blue text-white font-medium mr-[170px] py-3 w-[8rem] rounded-full cursor-pointer hover:bg-[#005a59]"
            >
              Sign up
            </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
