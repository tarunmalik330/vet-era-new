"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppointments } from "@/context/AppointmentsContext";

const ScheduleAppointment = () => {
  const { addAppointment } = useAppointments();
  const router = useRouter();
  const [form, setForm] = useState({
    pet: "",
    vet: "Dr. Sharma",
    date: "",
    time: "",
    concern: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ ...form, status: "Pending" });
    router.push("/appointments/view");
  };

  return (
    <div className="pt-20">
      <div className="container xl:max-w-[1140px] mx-auto w-full xl:px-0 px-5">
        <h1 className="text-4xl text-center mb-10 font-semibold text-blue-950">
          Schedule an Appointment
        </h1>
        <form
          className="max-w-[700px] bg-white p-6 rounded-lg shadow space-y-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block font-medium mb-1">Pet Name</label>
            <input
              name="pet"
              type="text"
              placeholder="e.g., Buddy"
              value={form.pet}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Select Vet</label>
            <select
              name="vet"
              value={form.vet}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option>Dr. Sharma</option>
              <option>Dr. Mehta</option>
              <option>Dr. Roy</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Date</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Time</label>
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Concern</label>
            <textarea
              name="concern"
              placeholder="Brief description..."
              value={form.concern}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-transparent hover:text-black border hover:border-blue-950 transition"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
