import React, { lazy } from "react";

export const Calendar = lazy(
  () => import("../../../icons/DateCalendar/calendar.svg?react"),
);
export const CalendarCheck = lazy(
  () => import("../../../icons/DateCalendar/calendar_check.svg?react"),
);
export const CalendarDate = lazy(
  () => import("../../../icons/DateCalendar/calendar_date.svg?react"),
);
export const CalendarDisable = lazy(
  () => import("../../../icons/DateCalendar/calendar_disable.svg?react"),
);
export const CalendarEvent = lazy(
  () => import("../../../icons/DateCalendar/calendar_event.svg?react"),
);
export const CalendarEventRepeat = lazy(
  () => import("../../../icons/DateCalendar/calendar_event_repeat.svg?react"),
);
export const CalendarMoney = lazy(
  () => import("../../../icons/DateCalendar/calendar_money.svg?react"),
);
export const CalendarNote = lazy(
  () => import("../../../icons/DateCalendar/calendar_note.svg?react"),
);
export const CalendarToday = lazy(
  () => import("../../../icons/DateCalendar/calendar_today.svg?react"),
);
export const DateRange = lazy(
  () => import("../../../icons/DateCalendar/date_range.svg?react"),
);
export const DateTime = lazy(
  () => import("../../../icons/DateCalendar/Data_time.svg?react"),
);

export type DateCalendarIcons =
  | "DateCalendarCalendar"
  | "DateCalendarCalendarCheck"
  | "DateCalendarCalendarDate"
  | "DateCalendarCalendarDisable"
  | "DateCalendarCalendarEvent"
  | "DateCalendarCalendarEventRepeat"
  | "DateCalendarCalendarMoney"
  | "DateCalendarCalendarNote"
  | "DateCalendarCalendarToday"
  | "DateCalendarDateRange"
  | "DateCalendarDateTime";

export const dateCalendarIconsList: Record<
  DateCalendarIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  DateCalendarCalendar: Calendar,
  DateCalendarCalendarCheck: CalendarCheck,
  DateCalendarCalendarDate: CalendarDate,
  DateCalendarCalendarDisable: CalendarDisable,
  DateCalendarCalendarEvent: CalendarEvent,
  DateCalendarCalendarEventRepeat: CalendarEventRepeat,
  DateCalendarCalendarMoney: CalendarMoney,
  DateCalendarCalendarNote: CalendarNote,
  DateCalendarCalendarToday: CalendarToday,
  DateCalendarDateRange: DateRange,
  DateCalendarDateTime: DateTime,
};
