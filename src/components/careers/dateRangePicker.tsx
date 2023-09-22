'use client';

import { CalendarIcon } from '@radix-ui/react-icons';
import { addDays, format } from 'date-fns';
import * as React from 'react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface DatePickerWithRangeProps {
  className?: string;
  onDateRangeChange: (newDateRange: DateRange | undefined) => void; // Define the callback function prop.
  selectedDateRange: DateRange | undefined;
}

export function DatePickerWithRange({
  className,
  onDateRangeChange,
}: DatePickerWithRangeProps) {
  const currentDate = new Date();
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: currentDate,
    to: addDays(currentDate, 7),
  });

  // Function to handle changes in the date range and pass it to the parent component.
  const handleDateRangeChange = (newDateRange: DateRange | undefined) => {
    setDate(newDateRange);
    onDateRangeChange(newDateRange); // Call the callback function to pass data to the parent component.
  };

  return (
    <div className={cn(`grid gap-2`, className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={`outline`}
            className={cn(
              `w-full justify-start text-left font-normal mr-4`,
              !date && `text-muted-foreground`,
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, `LLL dd, y`)} -{` `}
                  {format(date.to, `LLL dd, y`)}
                </>
              ) : (
                format(date.from, `LLL dd, y`)
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={currentDate}
            selected={date}
            onSelect={(date) => {
              handleDateRangeChange(date);
            }}
            numberOfMonths={1}
            className="bg-white"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
