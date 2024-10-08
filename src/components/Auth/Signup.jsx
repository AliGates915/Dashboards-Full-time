import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    email: "", //required
    password: "", //required
    confirmPassword: "", //required
    company: "", //required
    companyNumber: "",     
    contactPerson: "",//required
    mobileNumber: "", //required
    website: "",//required
    description: "",
    designation: "",//required
    companyAddress: "",//required
    accountId:'' , //required
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
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
    setErrorMessage("");
    setSuccessMessage("");

    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      alert('Email, password, and confirm password are required.')
      return;
    }

    try {
      const formDataToSend = {
        email,
        password,
        confirmPassword,
      };

      const response = await axios.post(
        "https://auditsoftware.vercel.app/auth/signup",
        formDataToSend,
        {
          headers: {
            "Content-Type": "application/json", // use JSON instead of multipart/form-data
          },
        }
      );

      if (response.data.status === "success") {
        const userData = response.data.data.user;
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        setUser(userData);
        navigate("/");
        setSuccessMessage("Signup successful!");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data.message || "Signup failed. Please try again."
        );
      } else {
        setErrorMessage("Network error. Please check your connection.");
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
          <div className="flex justify-between">
            <div className="">
              <label className="text-gray-800 text-lg mb-2 block">
                Company Name *
              </label>
              <input
                type="text"
                name="company"
                className="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter company name"
                value={FormData.company}
                onChange={handleInputChange}
              />
            </div>

          </div>

          <div className="mr-48 mt-6 grid sm:grid-cols-2 gap-6">
            <div>
              <label className=" text-gray-800 text-lg mb-2 block">
                Contact Person *
              </label>
              <input
                type="text"
                name="contactPerson"
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
                name="designation"
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
                name="mobileNumber"
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
                name="companyNumber"
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
                name="companyAddress"
                className="w-full bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter company address"
                value={FormData.companyAddress}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mr-48 mt-10 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Email *
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter email"
                value={FormData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Website *
              </label>
              <input
                type="text"
                name="website"
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
              name="description"
              className="w-[73%] bg-transparent text-gray-800 text-sm border border-gray-300 focus:border-blue px-3 py-2 outline-none resize-none"
              placeholder="Enter company description"
              value={FormData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4 mt-6">
            <label className="text-gray-800 text-lg mb-2 block">
              Account ID *
            </label>
            <input
              name="accountId"
              type="text"
              className="w-[46rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
              placeholder="Enter account ID"
              value={FormData.accountId}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-18 grid sm:grid-cols-2 gap-6 mr-48">
            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Password *
              </label>
              <div className="relative flex">
                <input
                required
                name='password'
                  type={passwordVisible ? "text" : "password"}
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
                name="confirmPassword"
                  required
                  type={passwordVisible ? "text" : "password"}
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
          <div className="mt-4 text-red">
            {errorMessage && <p>{errorMessage}</p>}
          </div>

            <div className="flex justify-end ">
              <button
                type="submit"
                onClick={handleSubmit}
                className=" bg-blue text-white font-medium 
              mr-[250px] py-3 w-[7.5rem] mb-4  rounded-full cursor-pointer hover:bg-[#005a59]"
              >
                Sign up
              </button>
              {/* Success message */}
              {successMessage && (
                <p style={{ color: "green" }}>{successMessage}</p>
              )}
            </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
