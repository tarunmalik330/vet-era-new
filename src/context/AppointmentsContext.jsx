"use client"
import React, { createContext, useContext, useEffect, useState } from "react";

const AppointmentContext = createContext();

export const useAppointments = () => useContext(AppointmentContext);

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  // Load from localStorage when component mounts
  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  // Save to localStorage whenever appointments change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};
