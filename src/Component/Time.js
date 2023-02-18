import Calendar from 'react-calendar'
import { DropdownButton, Dropdown} from 'react-bootstrap'

import React from 'react'

const Time = () => {
  return (<div  className='Calender-div'>
    <div className='cal-div'>
         <Calendar />
       
    </div>
    <div className='time-div'>
    <DropdownButton id="dropdown-basic-button" title="Select Time Slot">
    <Dropdown.Item className='time-div' href="">05:00 to 07:00 AM</Dropdown.Item>
      <Dropdown.Item className='time-div' href="">07:00 to 09:00 AM</Dropdown.Item>
      <Dropdown.Item className='time-div' href="">09:00 to 11:00 AM</Dropdown.Item>
      <Dropdown.Item className='time-div' href="">12:00 to 02:00 PM</Dropdown.Item>
      <Dropdown.Item className='time-div' href="">02:00 to 04:00 PM</Dropdown.Item>
    </DropdownButton>
        </div>
   
</div>)}

export default Time