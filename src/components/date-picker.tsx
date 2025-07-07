"use client";

import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { format } from "date-fns";

type DatePickerProps = {
  id: string;
  name: string;
  defaultValue?: string | undefined;
};

const DatePicker = ({ id, name, defaultValue }: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date()
  );

  const formattedStringDate = date ? format(date, "yyyy-MM-dd") : "Select date";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full" asChild>
        <Button
          variant="outline"
          id={id}
          className="justify-between font-normal text-left"
        >
          {formattedStringDate}
          <ChevronDownIcon />
          <input type="hidden" name={name} value={formattedStringDate} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDate(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
