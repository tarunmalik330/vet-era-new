"use client";
import React from "react";
import { useAppointments } from "@/context/AppointmentsContext";
import { useRouter } from "next/navigation";
import Header from "../common/Header";

const Overview = () => {
  const { appointments } = useAppointments();
  const router = useRouter();

  const today = new Date();

  const totalAppointments = appointments.length;

  const upcomingAppointments = appointments.filter((appointment) => {
    const appointmentDate = new Date(`${appointment.date}T${appointment.time}`);
    return appointmentDate > today && appointment.status !== "Cancelled";
  });

  const pastAppointments = appointments.filter((appointment) => {
    const appointmentDate = new Date(`${appointment.date}T${appointment.time}`);
    return appointmentDate < today && appointment.status !== "Cancelled";
  });

  const cancelledAppointments = appointments.filter(
    (appointment) => appointment.status === "Cancelled"
  );

  const sortedAppointments = [...appointments].sort((a, b) => {
    return new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`);
  });

  return (
    <div>
      <Header />
      <div className="max-w-[1140px] mx-auto px-4 pt-20 pb-10">
        <h1 className="text-3xl font-bold text-blue-950 mb-8">
          Appointment Overview
        </h1>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-blue-100 text-blue-900 p-4 rounded-lg shadow text-center">
            <p className="text-lg font-medium">Total</p>
            <p className="text-2xl font-bold">{totalAppointments}</p>
          </div>
          <div className="bg-green-100 text-green-900 p-4 rounded-lg shadow text-center">
            <p className="text-lg font-medium">Upcoming</p>
            <p className="text-2xl font-bold">{upcomingAppointments.length}</p>
          </div>
          <div className="bg-yellow-100 text-yellow-900 p-4 rounded-lg shadow text-center">
            <p className="text-lg font-medium">Past</p>
            <p className="text-2xl font-bold">{pastAppointments.length}</p>
          </div>
          <div className="bg-red-100 text-red-900 p-4 rounded-lg shadow text-center">
            <p className="text-lg font-medium">Cancelled</p>
            <p className="text-2xl font-bold">{cancelledAppointments.length}</p>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Pet
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Owner
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Time
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedAppointments.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No appointments found.
                  </td>
                </tr>
              ) : (
                sortedAppointments.map((appointment, index) => {
                  const isCancelled = appointment.status === "Cancelled";
                  return (
                    <tr
                      key={index}
                      className={`hover:bg-gray-50 ${
                        isCancelled ? "bg-red-50 text-red-700" : ""
                      }`}
                    >
                      <td className="px-4 py-3">{appointment.pet}</td>
                      <td className="px-4 py-3">
                        {appointment.ownerName || "N/A"}
                      </td>
                      <td className="px-4 py-3">{appointment.date}</td>
                      <td className="px-4 py-3">{appointment.time}</td>
                      <td className="px-4 py-3 font-semibold">
                        {isCancelled ? "❌ Cancelled" : "✅ Confirmed"}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
