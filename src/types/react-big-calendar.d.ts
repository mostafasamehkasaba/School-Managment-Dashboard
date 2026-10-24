declare module 'react-big-calendar' {
  import { ComponentType } from 'react'

  export interface CalendarProps {
    localizer: any
    events?: any[]
    startAccessor?: string | ((event: any) => Date)
    endAccessor?: string | ((event: any) => Date)
    style?: React.CSSProperties
    [key: string]: any
  }

  export const Calendar: ComponentType<CalendarProps>
  export function momentLocalizer(moment: any): any

  export type View = 'month' | 'week' | 'work_week' | 'day' | 'agenda'

  export const Views: {
    MONTH: 'month'
    WEEK: 'week'
    WORK_WEEK: 'work_week'
    DAY: 'day'
    AGENDA: 'agenda'
  }
}
