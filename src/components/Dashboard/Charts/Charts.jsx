// eslint-disable-next-line no-unused-vars
import React from 'react'
import BarChart from './BarChart'
import DonutChart from './DonutChart'
import { FaArrowUp } from "react-icons/fa6";
import ProgressBar from './ProgressBar';


function Charts() {
  return (
    <div className='flex flex-row w-full max-h-72 gap-2'>
      <div className='my-2 bg-white px-1 py-1 w-[22rem] border-solid text-black h-[52%]'>
        Sales
        <div className='pt-2 text-xs flex justify-between items-end'>
          <div className='flex flex-col justify-start'>
            <span className='font-bold'>18,000.00 </span>
            <span className='flex justify-items-start'>Sales over Time</span>
          </div>
          <div className='flex flex-col'>
            <span className='flex justify-center'>
              <FaArrowUp size={15} color='green' />33.1%
            </span>
            <span className='flex justify-items-end'>Sales last month</span>
          </div>
        </div>
        <BarChart />
      </div>
      <div className='my-2 bg-[hsl(213,9%,23%)] px-1 py-4 w-[20rem] border-solid  h-[52%]'>
        <DonutChart />
      </div>
      <div className='my-2 bg-[#353a40] px-1 py-[17px] w-[20rem] border-solid  h-[50%]'>
        <ProgressBar />
      </div>
    </div>
  )
}

export default Charts