import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
// eslint-disable-next-line react/prop-types
function SignUp({ users, setUsers }) { // Accept users and setUsers as props
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    const handleSignUp = () => {
      // Store the new user's data in the shared users array
      setUsers([...users, { name, email, password }]);
      alert('Account created successfully!');
      navigate('/login');
    };
  

  return (
    <div>
      <div className="font-[sans-serif] bg-white md:h-screen">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <div className="max-md:order-1 p-4 bg-gray-50 h-full">
            <img src="https://readymadeui.com/signin-image.webp" alt="login-image" />
          </div>

          <div className="flex items-center p-6 h-full w-full">
            <form className="max-w-lg w-full mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-10">
                <h3 className="text-blue md:text-3xl text-2xl font-extrabold">Create an Account</h3>
              </div>

              <div>
                <label className="text-gray-800 text-md block mb-2">Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent text-sm border-b px-2 py-2 border-gray-300 focus:border-blue outline-none"
                  placeholder="Enter name"
                />
              </div>

              <div className="mt-5">
                <label className="text-gray-800 text-md block mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter email"
                />
              </div>

              <div className="mt-5">
                <label className="text-gray-800 text-md block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-sm border-b text-black border-gray-300 focus:border-blue px-2 py-2 outline-none"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                  </svg>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={handleSignUp}
                  className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue text-white focus:outline-none"
                >
                  Create an Account
                </button>
                <p className="text-sm mt-6 text-gray-800">
                  Already have an account? <a href="/login" className="text-blue font-semibold hover:underline ml-1">Login here</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
