import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TimeslotForm from "../TimeslotForm/TimeslotForm";
import "./Timeslot.css";

const Timeslot = () => {
  const { date } = useParams();
  const [timeslotStatus, setTimeslotStatus] = useState({});
  const [selectedTimeslot, setSelectedTimeslot] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchTimeslotStatus();
  }, [date]);

  const fetchTimeslotStatus = async () => {
    // Mocking API response
    const mockData = {
      "09:00AM-10:00AM": "available",
      "10:00AM-11:00AM": "booked",
      "11:00AM-12:00PM": "available",
      "12:00PM-01:00PM": "available",
      "01:00PM-02:00PM": "available",
      "02:00PM-03:00PM": "available",
      "03:00PM-04:00PM": "available",
      "04:00PM-05:00PM": "available",
      "05:00PM-06:00PM": "booked",
    };
    setTimeslotStatus(mockData);
    console.log("Timeslot Status:", mockData); // Debugging line
  };

  const openModal = (timeslot) => {
    setSelectedTimeslot(timeslot);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="timeslot">
      <h2>Book for Date: {date}</h2>
      <div className="timeslot-buttons">
        {Object.keys(timeslotStatus).map((slot) => (
          <button
            key={slot}
            className={`timeslot-button ${
              timeslotStatus[slot] === "booked" ? "booked" : "available"
            }`}
            onClick={() =>
              timeslotStatus[slot] === "available" && openModal(slot)
            }
            disabled={timeslotStatus[slot] === "booked"}
          >
            {slot}
          </button>
        ))}
      </div>
      <TimeslotForm
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        timeslot={selectedTimeslot}
      />
    </div>
  );
};

export default Timeslot;
