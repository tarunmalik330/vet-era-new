"use client";
import React from "react";
import { useAppointments } from "@/context/AppointmentsContext";
import { FaClipboardList, FaClock } from "react-icons/fa";
import { BsCalendar2Check, BsCalendarX } from "react-icons/bs";
import Link from "next/link";
import Header from "../common/Header";

const Overview = () => {
  const { appointments } = useAppointments();

  // Get current date and categorize appointments
  const now = new Date();

  const total = appointments.length;
  const cancelled = appointments.filter((a) => a.status === "Cancelled").length;
  const upcoming = appointments.filter(
    (a) => new Date(a.date) > now && a.status === "Pending"
  ).length;
  const past = appointments.filter(
    (a) => new Date(a.date) < now && a.status !== "Cancelled"
  ).length;

  return (
    <div>
      <Header />
      <div className="max-w-[760px] rounded-xl mx-auto bg-white py-8 mt-20">
        <div className="mb-8 px-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 font-titillium">
            Welcome, Dr. Smith
          </h1>
          <div className="flex flex-wrap gap-4">
            <Link href="/appointments/schedule">
              <button className="bg-blue-950 text-white px-5 py-3 rounded-md flex items-center space-x-2 text-sm duration-300 hover:bg-blue-900">
                <FaClipboardList />
                <span>New Appointment</span>
              </button>
            </Link>
            <button className="border border-gray-300 px-5 py-2 rounded-md flex items-center space-x-2 text-sm hover:bg-gray-100">
              <span className="text-lg font-bold">+</span>
              <span>Add Patient</span>
            </button>
          </div>
        </div>

        {/* Appointments Overview */}
        <div className="px-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-titillium">
            Appointments Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-6 gap-6">
            {/* Past Appointments */}
            <OverviewCard
              title="Past Appointments"
              value={past}
              Icon={BsCalendarX}
            />
            {/* Cancellations */}
            <OverviewCard
              title="Cancellations"
              value={cancelled}
              Icon={FaClock}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Total Appointments */}
            <OverviewCard
              title="Total Appointments"
              value={total}
              Icon={FaClipboardList}
            />
            {/* Upcoming Appointments */}
            <OverviewCard
              title="Upcoming Appointments"
              value={upcoming}
              Icon={BsCalendar2Check}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const OverviewCard = ({ title, value, Icon }) => (
  <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4 shadow-sm hover:shadow-md transition">
    <div className="bg-gray-100 p-3 rounded">
      <Icon className="text-blue-950 text-xl" />
    </div>
    <div>
      <p className="text-xl font-semibold text-gray-800">{title}</p>
      <p className="text-2xl font-bold text-blue-950">{value}</p>
    </div>
  </div>
);

export default Overview;
