import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function SelectServices({ onServiceTypeSelect }) {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState('');
  const [selectedAuditor, setSelectedAuditor] = useState('');
  const [isOpenCustomer, setIsOpenCustomer] = useState(false);
  const [isOpenServiceType, setIsOpenServiceType] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const navigate = useNavigate(); // for programmatic navigation

  const services = [
    'Web Development',
    'Mobile App Development',
    'Graphic Design',
    'Cloud Computing',
    'Blockchain Development',
  ];

  const auditors = [
    "Alexander Pierce", "Nadia", "Jane",
    'Nora', 'Alexander', 'Sarah', 'Norman', 'John'
  ];

  const toggleCustomerDropdown = () => {
    setIsOpenCustomer(!isOpenCustomer);
    setIsOpenServiceType(false);
    setIsOpenService(false);
  };

  const toggleServiceTypeDropdown = () => {
    setIsOpenServiceType(!isOpenServiceType);
    setIsOpenCustomer(false);
    setIsOpenService(false);
  };

  const toggleServiceDropdown = () => {
    setIsOpenService(!isOpenService);
    setIsOpenCustomer(false);
    setIsOpenServiceType(false);
  };

  const closeDropdown = (setIsOpen) => setIsOpen(false);

  const handleSave = () => {
    // Validation: Check if any field is empty
    if (!selectedCustomer || !selectedServiceType || !selectedAuditor) {
      alert('Please fill out all fields before saving.');
      return; // Prevent navigation if validation fails
    }

    // Call the onServiceTypeSelect with the selected service type
    onServiceTypeSelect(selectedServiceType);
    setTooltipVisible(true);

    // Navigate to the new page after validation and saving
    navigate('/customer-questions');
  };

  return (
    <div className='bg-[#f4fcfe] mx-[18rem] w-88 border border-blue mt-8'>
      {/* Tooltip for successful save */}
      {tooltipVisible && (
        <div className="absolute top20 left-[86%] transform bg-green text-white p-2">
          Successfully saved!
        </div>
      )}
      <h1 className='flex justify-center text-2xl font-bold mt-4 text-blue'>
        Select Services
      </h1>

      <div className='grid grid-cols-1 mt-2 mx-[10.5rem]'>

        {/* Select Customer */}
        <div className="mb-4">
          <label className="flex justify-center font-semibold text-gray-800 mb-2">
            Select Customer
          </label>
          <div className="relative">
            <div
              className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer"
              onClick={toggleCustomerDropdown}
            >
              <input
                type="text"
                required
                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                placeholder="Select a customer"
                value={selectedCustomer}
                readOnly
              />
              <span className="ml-2 text-gray-800">▼</span>
            </div>

            {isOpenCustomer && (
              <div
                className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto z-10"
                onMouseLeave={() => closeDropdown(setIsOpenCustomer)}
              >
                <ul className="divide-y divide-gray-100">
                  {services.map((option, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCustomer(option);
                        closeDropdown(setIsOpenCustomer);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Select Service Type */}
        <div className="mb-4">
          <label className="flex justify-center font-semibold text-gray-800 mb-2">
            Select Service Type
          </label>
          <div className="relative">
            <div
              className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer"
              onClick={toggleServiceTypeDropdown}
            >
              <input
                type="text"
                required
                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                placeholder="Select a service type"
                value={selectedServiceType}
                readOnly
              />
              <span className="ml-2 text-gray-800">▼</span>
            </div>

            {isOpenServiceType && (
              <div
                className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto z-10"
                onMouseLeave={() => closeDropdown(setIsOpenServiceType)}
              >
                <ul className="divide-y divide-gray-100">
                  {services.map((option, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                      onClick={() => {
                        setSelectedServiceType(option);
                        onServiceTypeSelect(option); // Lift the selected service type
                        closeDropdown(setIsOpenServiceType);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Select Auditor */}
        <div className="mb-4">
          <label className="flex justify-center font-semibold text-gray-800 mb-2">
            Select Auditor
          </label>
          <div className="relative">
            <div
              className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer"
              onClick={toggleServiceDropdown}
            >
              <input
                type="text"
                required
                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                placeholder="Select an auditor"
                value={selectedAuditor}
                readOnly
              />
              <span className="ml-2 text-gray-800">▼</span>
            </div>

            {isOpenService && (
              <div
                className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto z-10"
                onMouseLeave={() => closeDropdown(setIsOpenService)}
              >
                <ul className="divide-y divide-gray-100">
                  {auditors.map((option, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                      onClick={() => {
                        setSelectedAuditor(option);
                        closeDropdown(setIsOpenService);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Rate Input */}
        <div className='mt-2 mb-2'>
          <label className="text-gray-800 flex justify-center font-semibold">
            Rate *
          </label>
          <input
            type="text"
            required
            className="flex justify-center text-gray-800 bg-transparent text-sm border rounded-xl border-blue px-2 py-2 outline-none"
          />
        </div>

        {/* Save Button */}
        <div className='pb-6 ml-3'>
          <button 
            className="bg-blue text-white text-md font-bold w-48 py-2 mt-6 rounded-xl hover:bg-[#005a59]"
            onClick={handleSave}
            
          >
            Save & Continue
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default SelectServices;
