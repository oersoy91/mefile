import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useState } from "react";

export default function Cal() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
