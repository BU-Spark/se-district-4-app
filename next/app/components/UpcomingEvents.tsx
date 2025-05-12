"use client";

//import { EventCard } from "./EventCard";
//import { useState } from "react";
import { useRouter } from "next/navigation";
//import Image from "next/image";

export function UpcomingEvents() {
  //const [selectedEvent, setSelectedEvent] = useState(null);
  const router = useRouter();

  // const events = [
  //   {
  //     title: "Community Cleanup",
  //     date: "Feb 27th",
  //     time: "11:00AM - 3:00PM",
  //     description:
  //       "Join us for a community cleanup event to keep our neighborhood beautiful.",
  //   },
  //   {
  //     title: "Town Hall Meeting",
  //     date: "Feb 28th",
  //     time: "8:30AM - 10:00AM",
  //     description:
  //       "Discuss local policies and share your thoughts with city officials.",
  //   },
  //   {
  //     title: "Charity Fundraiser",
  //     date: "Feb 28th",
  //     time: "12:00PM - 1:00PM",
  //     description:
  //       "Support a good cause by attending our annual charity fundraiser event.",
  //   },
  // ];

  return (
    <section className="py-16 px-6 mt-20 text-center bg-gray-400">
      <h3 className="text-4xl font-extrabold lora mb-12 text-#1A2C56">Upcoming Events</h3>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8 mt-6 place-items-center">
        {events.map(({ title, date, time, description }, index) => (
          <div
            key={`${date}-${time}`}
            className="p-4 rounded-none transition-colors border-t border-black bg-white hover:bg-gray-200 min-h-[300px] w-[320px] flex flex-col cursor-pointer"
            onClick={() => router.push("/calendar")}
          >
            <div className="flex items-center space-x-3 mt-3 mb-4 text-left">
              <span className="bg-[#d9d9d9] text-black px-3 py-1 rounded-full text-base font-medium lora">
                {date}
              </span>
              <span className="border border-gray-500 px-3 py-1 rounded-full text-base font-medium text-[#575757]">
                {time}
              </span>
            </div>
            <h4 className="text-lg font-bold text-[#575757] mb-2 text-left">
              {title}
            </h4>
            <p className="text-gray-700 text-md mt-1 text-left">
              {description}
            </p>
          </div> 
         ))} */}
      {/* </div> */}
       <button
       onClick={() => router.push("/calendar")}
       className="mt-6 px-6 py-3 bg-[#1A2C56] text-white rounded-full text-lg">
       View Calendar
     </button>
    </section>
  );
}
