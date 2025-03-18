import {
  FaHandsHelping,
  FaEnvelope,
  FaHospital,
  FaLandmark,
  FaBook,
  FaInfoCircle,
} from "react-icons/fa";

// Quick Links Component
export function QuickLinks() {
  const links = [
    { text: "Essential Services", icon: <FaHospital size={20} /> },
    { text: "Get Involved", icon: <FaHandsHelping size={20} /> },
    { text: "Subscribe to Mailing List", icon: <FaEnvelope size={20} /> },
    { text: "Civic Associations", icon: <FaLandmark size={20} /> },
    { text: "All Resources", icon: <FaBook size={20} /> },
    { text: "About D4", icon: <FaInfoCircle size={20} /> },
  ];
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 px-6 md:px-32 py-6">
      {links.map(({ text, icon }) => (
        <button
          key={text}
          className="bg-[#1A2C56] text-white py-3 px-4 flex justify-between items-center rounded-md w-full text-sm font-light lora-light"
        >
          <span className="ml-2">{text}</span>
          <span className="mr-2">{icon}</span>
        </button>
      ))}
    </section>
  );
}
