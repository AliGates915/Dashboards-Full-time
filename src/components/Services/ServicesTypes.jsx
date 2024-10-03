// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


function ServicesTypes() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className='bg-[#f4fcfe] mx-[18rem] w-88 border-blue border mt-40'>
      <h1 className='flex justify-start text-2xl font-bold mt-4 pl-8 text-blue'>
        Service Types
      </h1>

      <div className='gird grid-cols-1 mt-2 mx-[2rem] block'>

        <div className="mb-4">
          <label htmlFor="services" className="flex justify-start font-semibold text-gray-800 mb-2">
            Select Service Type
          </label>
          <div className="relative">
            {/* Dropdown input field */}
            <div className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer" onClick={toggleDropdown}>
              <input
                type="text"
                className="bg-transparent text-sm outline-none cursor-pointer w-full"
                placeholder="Select a service"
                readOnly
              />
              {/* Dropdown icon */}
              <span className="ml-2 text-gray-800">
                ▼
              </span>
            </div>

            {/* Dropdown menu - visible when isOpen is true */}
            {isOpen && (
              <div
                className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto"
                onMouseLeave={closeDropdown}
              >
                <ul className="divide-y divide-gray-100">
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Web Development</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Mobile App Development</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Digital Marketing</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Graphic Design</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Content Creation</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">SEO Optimization</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Cloud Computing</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">IT Consulting</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Cybersecurity</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Data Analysis</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">E-commerce Solutions</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Social Media Management</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">UI/UX Design</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">DevOps Services</li>
                  <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Blockchain Development</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='pb-6'>
          <button
            className="bg-blue text-white text-md font-bold w-full py-2 mt-2 rounded-xl hover:bg-[#005a59]"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServicesTypes