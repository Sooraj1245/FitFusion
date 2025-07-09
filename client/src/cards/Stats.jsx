import React from 'react'
import CardHeader from '../components/CardHeader'
import DropDown from '../components/Dropdown'
import AreaChart from '../components/AreaChart'

const Stats = () => {
  return (
    <div className='w-full h-full flex flex-col'>
        <div className='flex justify-between'>
            <CardHeader icon="👁️" name="Statistics" />
            <DropDown />
        </div>
        <div className='flex-1 p-2'>
          <AreaChart />
        </div>
    </div>
  )
}

export default Stats