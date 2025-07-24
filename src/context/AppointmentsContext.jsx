"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppointmentContext = createContext();

export const useAppointments = () => useContext(AppointmentContext);

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  // Load appointments from localStorage on mount
  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  // Save appointments to localStorage when they change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  // Add new appointment
  const addAppointment = (appointment) => {
    const newAppointment = {
      ...appointment,
      id: Date.now(),
      status: "Upcoming",
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  // Cancel an appointment (mark as Cancelled)
  const cancelAppointment = (id) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "Cancelled" }
          : appointment
      )
    );
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointment,
        cancelAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
