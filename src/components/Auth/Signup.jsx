 import { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    companyEmail: '',
    contactPerson: '',
    phoneNumber: '',
    website: '',
    description: '',
    accountId: null,
    designation: '',
    address: '',
    logoPicture: null, // For file upload
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [, setUser] = useState(null); // State to store user info

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key !== 'logoPicture') {
          formDataToSend.append(key, formData[key]);
        }
      });
      
      if (formData.logoPicture) {
        formDataToSend.append('file', formData.logoPicture);
      }

      const response = await axios.post('https://auditsoftware.vercel.app/auth/signup', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === 'success') {
        const userData = response.data.data.user;
        const token = response.data.data.token;
          console.log(token)
        localStorage.setItem('token', token);
        setUser(userData);
        navigate('/login')
        setSuccessMessage('Signup successful!');
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Signup failed. Please try again.');
        navigate('/signup')
      } else {
        setErrorMessage('Network error. Please check your connection.');
      }
    } 
  };

  return (
    <div>
    <div className="w-90 h-screen bg-white ml-48 font-[sans-serif] p-3">
      <div className=" flex justify-center mr-40 mb-8">
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
              value={FormData.company}
              onChange={handleInputChange}
            />
          </div>

          {/* Logo */}
          <div className='border px-6 py-8 flex mr-40 text-black'>
            <img src="/logo-removebg-preview.png" alt="" width={80} height={20} />
            <p className='mt-2 ml-3 text-2xl font-semibold'>Company Logo</p>
          </div>
        </div>

        <div className="mr-48 mt-10 grid sm:grid-cols-2 gap-6">

          <div>
            <label className=" text-gray-800 text-lg mb-2 block">
              Contact Person *
            </label>
            <input
              type="text"
              required
              className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
              placeholder="Enter name"
              value={FormData.contactPerson}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className=" text-gray-800 text-lg mb-2 block">
              Designation *
            </label>
            <input
              type="text"
              required
              className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
              placeholder="Enter designation"
              value={FormData.designation}
              onChange={handleInputChange}
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
              value={FormData.mobileNumber}
              onChange={handleInputChange}
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
              value={FormData.companyPhone}
              onChange={handleInputChange}
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
              value={FormData.companyAddress}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mr-48 mt-10 grid sm:grid-cols-2 gap-6">

          <div>
            <label className="text-gray-800 text-lg mb-2 block">Email *</label>
            <input
              type="email"
              required
              className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
              placeholder="Enter email"
              value={FormData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-gray-800 text-lg mb-2 block">Website *</label>
            <input
              type="text"
              required
              className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
              placeholder="Enter website"
              value={FormData.website}
              onChange={handleInputChange}
            />
          </div>

        </div>

        <div className="mt-4">
          <label className="text-gray-800 text-md mb-2 block">
            Company Description
          </label>
          <textarea
            rows="5"
            className="w-[73%] bg-transparent text-gray-800 text-sm border border-gray-300 focus:border-blue px-3 py-2 outline-none resize-none"
            placeholder="Enter company description"
            value={FormData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className='mb-4 mt-6'>
          <label className="text-gray-800 text-lg mb-2 block">Account ID *</label>
          <input
            type="text"
            required
            className="w-[46rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
            placeholder="Enter account ID"
            value={FormData.accountId}
            onChange={handleInputChange}
          />
        </div>


        <div className="mt-18 grid sm:grid-cols-2 gap-6 mr-48">
          <div>
            <label className="text-gray-800 text-lg mb-2 block">Password *</label>
            <div className="relative flex">
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter password"
                value={FormData.password}
                onChange={handleInputChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-[5.5rem] cursor-pointer"
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

                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Confirm password"
                value={FormData.confirmPassword}
                onChange={handleInputChange}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-[5.5rem] cursor-pointer"
                onClick={togglePasswordVisibility}
                viewBox="0 0 128 128"
              >
                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                <circle cx="64" cy="64" r="8" />
              </svg>
            </div>
          </div>

        </div>
        <div className="mt-4 text-red">{errorMessage && <p>{errorMessage}</p>}</div>

        <div className="my-4 flex justify-between">
          <p className='ml-2 text-gray-800'>
            Already have an account?
            <span className='pl-1 text-blue font-medium'>
              <Link to="/login">Login here</Link>
            </span>
          </p>
          <div className='flex mb-8 '>
            <button
              type="submit"
              onClick={handleSubmit}
              className=" bg-blue text-white font-medium 
              mr-[250px] py-3 w-[8rem]  rounded-full cursor-pointer hover:bg-[#005a59]"
            >
              Sign up
            </button>
        {/* Success message */}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

          </div>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Signup;
