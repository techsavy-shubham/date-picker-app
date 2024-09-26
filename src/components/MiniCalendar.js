import React, { useEffect, useState } from "react";
import { format, addDays, addWeeks, addMonths, addYears } from "date-fns";

const MiniCalendar = ({ startDate, endDate, recurrenceType }) => {
  const [recurringDates, setRecurringDates] = useState([]);

  // Function to generate recurring dates based on recurrenceType
  const calculateRecurringDates = () => {
    if (!startDate) return;

    let dates = [];
    let current = new Date(startDate);

    // Continue until either the end date is reached or a reasonable number of dates is generated
    while (endDate ? current <= new Date(endDate) : dates.length < 50) {
      dates.push(new Date(current));

      switch (recurrenceType) {
        case "daily":
          current = addDays(current, 1);
          break;
        case "weekly":
          current = addWeeks(current, 1);
          break;
        case "monthly":
          current = addMonths(current, 1);
          break;
        case "yearly":
          current = addYears(current, 1);
          break;
        default:
          return;
      }
    }

    setRecurringDates(dates);
  };

  // Recalculate recurring dates when recurrenceType, startDate, or endDate changes
  useEffect(() => {
    calculateRecurringDates();
  }, [startDate, endDate, recurrenceType]);

  return (
    <div className="calendar">
      <h3 className="text-xl font-semibold mb-4">Mini Calendar -</h3>
      <div className="calendar-grid">
        {recurringDates.map((date, index) => (
          <div key={index} className="calendar-date">
            {format(date, "dd/MM/yyyy")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendar;
