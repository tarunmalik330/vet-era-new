import React from "react";

const ScheduleAppointment = () => {
  return (
    <div className="pt-20">
      <div className="container xl:max-w-[1140px] mx-auto w-full xl:px-0 px-5">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold mb-2 text-center text-blue-950 font-titillium">
          Schedule an Appointment
        </h1>
        <form className="w-full max-w-[700px] bg-white p-6 rounded-lg shadow space-y-4 mx-auto mt-10">
          <div>
            <label className="block font-medium mb-1">Pet Name</label>
            <input
              type="text"
              placeholder="e.g., Buddy"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Select Vet</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Dr. Sharma</option>
              <option>Dr. Mehta</option>
              <option>Dr. Roy</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Date</label>
            <input type="date" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Time</label>
            <input type="time" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Concern</label>
            <textarea
              placeholder="Brief description..."
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button type="submit"
            className="bg-blue-950 text-white hover:text-black cursor-pointer px-6 py-2 rounded hover:bg-transparent transition border border-transparent hover:border-blue-950 text-sm md:text-base sm:py-1 duration-300"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
