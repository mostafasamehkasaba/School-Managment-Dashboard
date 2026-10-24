import { Announcements } from '@/components/Annoucents';
import MyCalendar from '@/components/Bigalender';
import EventCalendar from '@/components/EventCalnder';

export default function ParentPage() {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      <div className='w-full xl:w-2/3 flex flex-col gap-8'>
        <div className='h-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
          <MyCalendar />
        </div>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <Announcements />
      </div>
    </div>
  );
}