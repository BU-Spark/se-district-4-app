"use client";

import { useRef, useState } from "react";
import { Header } from "../components/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export default function CalendarPage() {
  const calendarRef = useRef<FullCalendar>(null);
  const [view, setView] = useState<"dayGridMonth" | "timeGridWeek">("dayGridMonth");
  const [currentTitle, setCurrentTitle] = useState<string>("");

  const API_KEY = process.env.NEXT_PUBLIC_CALENDAR_API_KEY!;
  const CALENDAR_ID = process.env.NEXT_PUBLIC_CALENDAR_ID!;

  const calendarApi = () => {
    if (!calendarRef.current) return null;
    return calendarRef.current.getApi();
  };

  const handleToday = () => {
    const api = calendarApi();
    if (api) api.today();
  };

  const handlePrev = () => {
    const api = calendarApi();
    if (api) api.prev();
  };

  const handleNext = () => {
    const api = calendarApi();
    if (api) api.next();
  };

  const handleChangeView = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newView = e.target.value as "dayGridMonth" | "timeGridWeek";
    const api = calendarApi();
    if (api) {
      api.changeView(newView);
      setView(newView);
    }
  };

  return (
    <div>
      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen py-10 px-6">
        {/* Custom Toolbar */}
        <div className="w-full flex justify-between items-center mb-6">
          {/* Left: Today button */}
          <button
            onClick={handleToday}
            className="border border-black rounded-full py-2 px-6 text-lg font-normal lora-light bg-white"
          >
            Today
          </button>

          {/* Center: < Title > */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrev}
              className="text-black text-2xl"
              style={{ background: "transparent", border: "none" }}
            >
              &lt;
            </button>
            <div className="text-xl font-normal italic font-serif">
              {currentTitle}
            </div>
            <button
              onClick={handleNext}
              className="text-black text-2xl"
              style={{ background: "transparent", border: "none" }}
            >
              &gt;
            </button>
          </div>

          {/* Right: Month/Week dropdown */}
          <select
            value={view}
            onChange={handleChangeView}
            className="border border-black rounded-full py-2 px-6 text-lg font-normal lora-light bg-white appearance-none bg-no-repeat bg-right bg-[length:1.5rem] bg-center pr-10"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg fill=\"black\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
            }}
          >
            <option value="dayGridMonth">Month</option>
            <option value="timeGridWeek">Week</option>
          </select>
        </div>

        {/* Calendar */}
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
          initialView={view}
          googleCalendarApiKey={API_KEY}
          events={{ googleCalendarId: CALENDAR_ID }}
          height="auto"
          headerToolbar={false} // ❗ Hides the built-in toolbar
          datesSet={(info) => {
            setView(info.view.type as "dayGridMonth" | "timeGridWeek");
            setCurrentTitle(info.view.title);
          }}
        />
      </main>

      <style jsx global>{`
        /* Remove default calendar border */
        .fc {
          border: none !important;
        }
      `}</style>
    </div>
  );
}
