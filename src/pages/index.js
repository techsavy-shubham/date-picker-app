import React from "react";
import DatePicker from "../components/DatePicker";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Recurring Date Picker</h1>
      <DatePicker />
    </div>
  );
}
