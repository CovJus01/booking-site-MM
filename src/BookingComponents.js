import "./App.css";
import React, { useState } from "react";

function BookingForm({ submit }) {
  let current = new Date();
  //Conversion to datetime-local
  let dateString = current.toISOString().substring(0, 16);

  //Setting some useState variables
  const [hours, setHours] = useState(1);
  const [date, setDate] = useState("");

  //Handling Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    submit({ submitted: true, Hours: hours, Date: new Date(date) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ContentWrap" width="100px">
        <h1>Create a Booking!</h1>
        {/*Hours Form*/}
        <label className="labels block">Hours Required: </label>
        <input
          type="number"
          min="1"
          max="24"
          className="block"
          onChange={(e) => setHours(e.target.value)}
          value={hours}
          required
        />
        {/*Date & Time Form*/}
        <label className="labels block">Select Date and Time: </label>
        <input
          type="datetime-local"
          className="block"
          min={dateString}
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
        <button className="button" type="submit">
          QUOTE!
        </button>
      </div>
    </form>
  );
}

function BookingStatement({ data, book }) {
  //Handling Booking
  const handleBooking = () => {
    book();
  };
  return data.submitted ? (
    <div className="ContentWrap">
      <h1>Cost: ${data.cost}</h1>
      <h1>Date: {data.Date.toDateString()}</h1>
      <h1> Hours: {data.Hours}</h1>

      <button className="button" onClick={handleBooking}>
        BOOK ME!
      </button>
    </div>
  ) : (
    <div className="ContentWrap"></div>
  );
}

export { BookingForm, BookingStatement };
