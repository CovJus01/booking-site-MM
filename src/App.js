import "./App.css";
import { BookingForm, BookingStatement } from "./BookingComponents";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

function calcCost(hours, date) {
  let dayOfWeek = date.getDay();
  let isWeekend = dayOfWeek === 0 || dayOfWeek === 6 ? 1 : 0;
  return hours * (100 + 50 * isWeekend);
}
function App() {
  const [submitted, setSubmit] = useState(false);

  //HANDLING SUBMIT DATA
  const Submit = (data) => {
    setSubmit({ ...data, cost: calcCost(data.Hours, data.Date) });
    console.log(data);
  };

  //PSEUDO OUTPUT
  const Book = (values) => {
    console.log(
      `Date: ${submitted.Date.toDateString()} \nHours: ${
        submitted.Hours
      } \nCost: ${submitted.cost}   `
    );
  };

  return (
    <>
      <h1 className="Title">Get a Quote!</h1>
      <div className={submitted.submitted ? "animateCard" : "staticCard"}>
        <BookingStatement data={submitted} book={Book} />
      </div>

      <div className="Card">
        <BookingForm submit={Submit} />
      </div>
      <div className={submitted.submitted ? "TruckMove" : "Truck"}>
        <FontAwesomeIcon icon={faTruck} size="7x" />
      </div>
    </>
  );
}

export default App;
