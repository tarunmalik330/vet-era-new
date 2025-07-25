"use client";
import React from "react";
import { useAppointments } from "@/context/AppointmentsContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ViewAppointments = () => {
  // const { appointments } = useAppointments();
  // const latest = appointments[appointments.length - 1];
 const { appointments, cancelAppointment } = useAppointments();
  const router = useRouter();
  const latest = appointments[appointments.length - 1];

  if (!latest) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-gray-700">
        <p>No appointment found.</p>
      </div>
    );
  }
const handleCancel = () => {
  cancelAppointment(latest.id);  // ✅ Mark it as cancelled, don't remove
  router.push("/appointments/overview");
};

  return (
    <div className="max-w-[800px] mx-auto mt-10 p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mb-24 md:mb-20 font-titillium font-semibold text-blue-950">
        View Appointment
      </h1>
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <div className="py-2 sm:py-3 rounded-lg border border-gray-300 text-dark-blue placeholder:text-dark-blue font-medium placeholder:fomt-medium text-lg placeholder:text-lg focus:outline-none">
          <div className="flex px-4 justify-between items-center pb-2">
            <div>
              <p className="font-semibold font-titillium text-lg">
                {latest.date}
              </p>
              <p className="text-gray-600 font-titillium text-lg">
                {latest.time}
              </p>
            </div>
            <div className="text-right">
              <img
                src="/assets/images/svg/user.svg"
                alt="user"
                className="rounded-full size-[60px] mx-auto cursor-pointer"
              />
              <p className="text-lg capitalize text-center font-titillium font-medium">
                {latest.vet}
              </p>
            </div>
          </div>
          <p className="text-lg font-semibold font-titillium text-dark-blue px-4">
            📋 Type: <span className="font-normal">{latest.type}</span>
          </p>
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
        <Link
          href="/appointments/overview"
          className="bg-dark-blue text-white cursor-pointer px-6 py-2 rounded-lg w-full hover:bg-transparent hover:text-dark-blue border hover:border-dark-blue text-lg transition-all ease-linear duration-300 block text-center font-titillium font-medium"
        >
          Accept Appointment
        </Link>
        <button
          onClick={handleCancel}
          className="bg-red-700 text-white cursor-pointer px-6 py-2 rounded-lg w-full hover:bg-transparent hover:text-dark-blue border text-lg hover:border-red-700 transition-all ease-linear duration-300 font-titillium font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ViewAppointments;
