import React from "react";

const ViewAppointments = () => {
  const appointments = [
    {
      pet: "Buddy",
      vet: "Dr. Sharma",
      date: "2025-07-22",
      time: "10:30 AM",
      concern: "Skin Allergy",
      status: "Confirmed",
    },
    {
      pet: "Lucy",
      vet: "Dr. Mehta",
      date: "2025-07-25",
      time: "03:00 PM",
      concern: "Regular Checkup",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Your Appointments</h1>
      <div className="max-w-3xl mx-auto grid gap-4">
        {appointments.map((appt, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
          >
            <div className="flex justify-between mb-2">
              <h2 className="font-semibold text-lg">{appt.pet}</h2>
              <span
                className={`text-sm font-medium ${
                  appt.status === "Confirmed"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {appt.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Vet: {appt.vet} <br />
              Date: {appt.date} | Time: {appt.time} <br />
              Concern: {appt.concern}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAppointments;
