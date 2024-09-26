const RecurrenceOptions = ({  onChange,recurrenceType }) => {
    return (
      <div className="mt-4">
        <label className="block mb-2 text-black">Recurrence Type:</label>
        <select value={recurrenceType} onChange={onChange} className="border px-2 py-1">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
    );
  };
  
  export default RecurrenceOptions;
  