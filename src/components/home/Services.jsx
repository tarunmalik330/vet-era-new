import React from "react";

const Services = () => {
  return (
    <div className="md:mt-20 mt-10">
      <div className="container xl:max-w-[1140px] 2xl:max-w-[1440px] w-full xl:px-0 px-5 mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold mb-2 text-center text-blue-950 font-titillium">
          Welcome to VetEra
        </h1>
        <p className="text-gray-600 mb-6 text-center text-base md:text-lg xl:text-xl">
          Your all-in-one platform for pet care
        </p>

        <div className="flex gap-4 md:mb-12 mb-8 justify-center flex-wrap">
          <button className="bg-blue-950 text-white hover:text-black cursor-pointer px-6 py-1 rounded hover:bg-transparent transition border border-transparent hover:border-blue-950">
            Schedule Appointment
          </button>
          <button className="bg-white text-black hover:text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-950 transition">
            View Appointments
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Health Monitoring",
              desc: "Track your pet’s health and vital signs over time.",
            },
            {
              title: "Exercise Tracking",
              desc: "Monitor your pet’s activity levels and movement.",
            },
            {
              title: "Pet Services",
              desc: "Find grooming, boarding, and veterinary options nearby.",
            },
            {
              title: "Training Tips",
              desc: "Get AI-based expert advice for training and behavior.",
            },
            {
              title: "Chat with Vet",
              desc: "Video or text consultation with licensed veterinarians.",
            },
            {
              title: "Adoption",
              desc: "Browse pets for adoption and join adoption drives.",
            },
            {
              title: "Community",
              desc: "Discuss, share, and connect with other pet lovers.",
            },
            {
              title: "Upcoming Reminders",
              desc: "Vaccination, food delivery, and vet visit alerts.",
            },
            {
              title: "Emergency",
              desc: "Get emergency alerts and quick access to help.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white md:p-5 p-6 rounded shadow hover:shadow-md transition cursor-pointer"
            >
              <h3 className="font-semibold md:text-xl text-lg mb-4 text-center text-blue-950">
                {item.title}
              </h3>
              <p className="text-gray-600 md:text-base text-sm text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
