"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppointments } from "@/context/AppointmentsContext";
import CustomInput from "../common/CustomInput";

const ScheduleAppointment = () => {
  const { addAppointment } = useAppointments();
  const router = useRouter();
  const [form, setForm] = useState({
    pet: "",
    vet: "",
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
    <div className="py-14 sm:pt-16 md:pt-20">
      <div className="container xl:max-w-[1140px] mx-auto w-full xl:px-0 px-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mb-24 md:mb-20 font-titillium font-semibold text-blue-950">
          Schedule an Appointment
        </h1>
        <form
          className="max-w-[700px] bg-white p-3 md:p-6 rounded-lg shadow space-y-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <img
            src="/assets/images/png/pet.png"
            alt="pet"
            className="rounded-full size-[110px] mx-auto -mt-20 animate-pulse"
          />
          <CustomInput
            name="pet"
            value={form.pet}
            type="text"
            onChange={handleChange}
            placeholder="Enter Pet Name"
            lable="Pet Name"
          />
          <CustomInput
            name="vet"
            value={form.vet}
            onChange={handleChange}
            placeholder="Enter vet Name"
            lable="Select Vet"
          />
          <CustomInput
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
            lable="Date"
          />
          <CustomInput
            value={form.time}
            name="time"
            type="time"
            onChange={handleChange}
            lable="Time"
          />
          <div>
            <label className="block font-medium text-lg mb-1">Concern</label>
            <textarea
              name="concern"
              placeholder="Brief description..."
              value={form.concern}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border resize-none border-gray-300 text-dark-blue placeholder:text-dark-blue font-medium placeholder:fomt-medium text-lg placeholder:text-lg focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-950 text-white cursor-pointer px-6 py-2 rounded hover:bg-transparent hover:text-black border hover:border-blue-950 transition"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
