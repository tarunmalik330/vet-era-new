"use client";
import React from "react";
import { useAppointments } from "@/context/AppointmentsContext";
import Image from "next/image";
import Link from "next/link";

const ViewAppointments = () => {
  const { appointments } = useAppointments();
  const latest = appointments[appointments.length - 1];

  if (!latest) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-gray-700">
        <p>No appointment found.</p>
        <div className="mt-10">
        <Link
          href="/appointments/overview"
          className="bg-blue-950 text-white font-titillium hover:text-black cursor-pointer px-6 py-2 rounded hover:bg-transparent transition border border-transparent hover:border-blue-950 text-sm md:text-base sm:py-3 duration-300"
        >
          Accept Appointment
        </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mb-24 md:mb-20 font-titillium font-semibold text-blue-950">
        View Appointment
      </h1>
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <div className="py-2 sm:py-3 rounded-lg border border-gray-300 text-dark-blue placeholder:text-dark-blue font-medium placeholder:fomt-medium text-lg placeholder:text-lg focus:outline-none">
          <div className="flex px-4 justify-between items-center pb-2">
            <div>
              <p className="font-semibold">{latest.date}</p>
              <p className="text-gray-600">{latest.time}</p>
            </div>
            <div className="text-right">
              <img
                src="/assets/images/png/pet.png"
                alt="pet"
                className="rounded-full size-[60px] mx-auto animate-pulse"
              />
              <p className="text-sm text-center font-medium">{latest.vet}</p>
            </div>
          </div>

          <div className="pt-2">
            <p className="px-4 py-2 sm:py-3 border-t border-gray-300 text-dark-blue placeholder:text-dark-blue font-medium placeholder:fomt-medium text-lg placeholder:text-lg focus:outline-none">
              🐾 Pet: {latest.pet}
            </p>
          </div>

          <div className="">
            <p className="px-4 pt-2 sm:pt-3 border-t  border-gray-300 text-dark-blue placeholder:text-dark-blue font-medium placeholder:fomt-medium text-lg placeholder:text-lg focus:outline-none">
              🩺 Concern: {latest.concern}
            </p>
          </div>
        </div>

        <button className="bg-dark-blue text-white cursor-pointer px-6 py-2 rounded-lg w-full hover:bg-transparent hover:text-dark-blue border hover:border-dark-blue transition">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ViewAppointments;
