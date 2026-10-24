import { Announcements } from '@/components/Annoucents';
import AttendeceChart from '@/components/AttendeceChart'
import CountCaharts from '@/components/CountCaharts'
import EventCalnder from '@/components/EventCalnder';
import FinalChart from '@/components/FinalChart';
import UserCard from '@/components/userCards'
import React from 'react'

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Admin() {
  return (
    <div className='w-full flex gap-3'>
      {/* left */}
      <div className='w-[75%]'>
          <div className='flex gap-2 w-100 '>
          {/* user cards */}
            <UserCard type='student'/>
            <UserCard type='teacher'/>
            <UserCard type='student'/>
            <UserCard type='staff'/>
        </div>
        {/* Chart */}
        <div className='flex gap-4 mt-10'>
          <div className='w-[500px]'>
            <CountCaharts/>
          </div>

          <div className='w-full'>
            <AttendeceChart/>
          </div>
        </div>

        <div className='w-full mt-5 h'> 
            <FinalChart/>
        </div>
      </div>
        
        <div  className='w-[25%] '>
          <EventCalnder/>
          <Announcements/>
        </div>
    </div>
  )
}
