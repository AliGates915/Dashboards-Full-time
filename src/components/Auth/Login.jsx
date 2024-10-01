import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Login({ users }) {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    const { email, password } = data;

    console.log("Login data:", data);
    console.log("Users array:", users);
    console.log("Email:", email);
    console.log("Password:", password);

    // eslint-disable-next-line react/prop-types
    const user = users.length > 0 ? users.find(
      (user) => user.email === email && user.password === password
    ) : undefined;

    console.log("User found:", user); // Debug user found

    if (user) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
      <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="max-md:order-1 lg:min-w-[450px]">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:w-11/12 w-full object-cover"
              alt="login-image"
            />
          </div>
          <form className="md:max-w-md w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-12">
              <h3 className="text-4xl font-extrabold text-blue">Sign in</h3>
            </div>

            <div>
              <div className="relative flex items-center">
                <input
                  {...register('email', { required: true })}
                  type="email"  // Changed from text to email
                  className="w-full text-sm border-b border-gray-300 focus:border-blue px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>

            <div className="mt-8">
              <div className="relative flex items-center">
                <input
                  {...register('password', { required: true })}
                  type={passwordVisible ? "text" : "password"}
                  className="w-full text-sm border-b border-gray-300 text-gray-800 focus:border-blue px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  onClick={togglePasswordVisibility}
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <a href="javascript:void(0);" className="text-blue font-semibold text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white bg-blue hover:bg-[#005a59] focus:outline-none"
              >
                Sign in
              </button>
              <p className="text-gray-800 text-sm text-center mt-6">
                Do not have an account{" "}
                <a href="/signup" className="text-blue-600 font-semibold hover:underline text-blue ml-1 whitespace-nowrap">
                  Register here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
