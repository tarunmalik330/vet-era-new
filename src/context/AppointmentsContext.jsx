// "use client";
// import React, { createContext, useState, useContext } from "react";

// const AppointmentsContext = createContext();

// export function AppointmentsProvider({ children }) {
//   const [appointments, setAppointments] = useState([]);

//   function addAppointment(appointment) {
//     setAppointments([...appointments, appointment]);
//   }

//   return (
//     <AppointmentsContext.Provider value={{ appointments, addAppointment }}>
//       {children}
//     </AppointmentsContext.Provider>
//   );
// }

// export function useAppointments() {
//   return useContext(AppointmentsContext);
// }
