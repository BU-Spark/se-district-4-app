"use client";

import { Header } from "../components/Header";
import { useEffect, useState } from "react";

export default function CalendarPage() {
  const [view, setView] = useState("weekly");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.dataset.elfsightAppLazy = "true";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const container = document.getElementById("calendar-container");
    if (container) {
      container.innerHTML = "";
      const newDiv = document.createElement("div");
      newDiv.className =
        view === "weekly"
          ? "elfsight-app-c1f88b6c-5ebc-4fdf-9928-3223d4c34a58"
          : "elfsight-app-1c9fcc98-c59b-496e-862e-125a5a9c8e03";
      newDiv.setAttribute("data-elfsight-app-lazy", "true");
      container.appendChild(newDiv);
    }
  }, [view]);

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen py-10 px-6">
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              view === "monthly"
                ? "bg-[#0E1A2B] text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setView("monthly")}
          >
            Monthly View
          </button>
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              view === "weekly"
                ? "bg-[#0E1A2B] text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setView("weekly")}
          >
            Weekly View
          </button>
        </div>
        <div
          id="calendar-container"
          className="w-full flex justify-center mt-6"
        >
          <div
            className="elfsight-app-c1f88b6c-5ebc-4fdf-9928-3223d4c34a58"
            data-elfsight-app-lazy
          ></div>
        </div>
      </main>
    </div>
  );
}
