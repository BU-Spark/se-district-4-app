"use client";

import { useState } from "react";
import { Header } from "../components/Header"; // ✅ ADD THIS BACK
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

function CalendarPage() {
  const [view, setView] = useState("dayGridMonth");
  const API_KEY = process.env.NEXT_PUBLIC_CALENDAR_API_KEY;
  const CALENDAR_ID = process.env.NEXT_PUBLIC_CALENDAR_ID;

  return (
    <div>
      <Header /> {/* ✅ HEADER HERE */}
      <main className="flex flex-col items-center justify-center min-h-screen py-10 px-6">
        <div className="tabs mb-6">
          <button
            className={view === "dayGridMonth" ? "active" : ""}
            onClick={() => setView("dayGridMonth")}
          >
            Monthly View
          </button>
          <button
            className={view === "timeGridWeek" ? "active" : ""}
            onClick={() => setView("timeGridWeek")}
          >
            Weekly View
          </button>
        </div>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
          initialView={view}
          googleCalendarApiKey={API_KEY}
          events={{ googleCalendarId: CALENDAR_ID }}
          height="auto"
        />
      </main>

      <style>{`
        .tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }
        .tabs button {
          background: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          margin: 5px;
          cursor: pointer;
          border-radius: 5px;
          transition: 0.3s;
        }
        .tabs button.active {
          background: #0056b3;
        }
        .tabs button:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default CalendarPage;
