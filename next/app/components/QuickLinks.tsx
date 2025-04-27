// import {
//   FaHandsHelping,
//   FaEnvelope,
//   FaHospital,
//   FaLandmark,
//   FaBook,
//   FaInfoCircle,
// } from "react-icons/fa";

// import ResourcePage from "../resources/ResourcePage";

// // Quick Links Component
// export function QuickLinks() {
//   const links = [
//     { text: "Essential Services", icon: <FaHospital size={20} /> },
//     { text: "Get Involved", icon: <FaHandsHelping size={20} /> },
//     { text: "Subscribe to Mailing List", icon: <FaEnvelope size={20} /> },
//     { text: "Civic Associations", icon: <FaLandmark size={20} /> },
//     { text: "All Resources", icon: <FaBook size={20} />, link: <ResourcePage /> },
//     { text: "About D4", icon: <FaInfoCircle size={20} /> },
//   ];
//   return (
//     <section className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 px-6 md:px-32 py-6">
//       {links.map(({ text, icon }) => (
//         <button
//           key={text}
//           className="bg-[#1A2C56] text-white py-3 px-4 flex justify-between items-center rounded-md w-full text-sm font-light lora-light"
//         >
//           <span className="ml-2">{text}</span>
//           <span className="mr-2">{icon}</span>
//         </button>
//       ))}
//     </section>
//   );
// }

import {
  FaHandsHelping,
  FaEnvelope,
  FaHospital,
  FaLandmark,
  FaBook,
  FaInfoCircle,
} from "react-icons/fa";
import Link from "next/link";

// Quick Links Component
export function QuickLinks() {
  const links = [
    { text: "Essential Services", icon: <FaHospital size={20} />, href: "/essential-services" },
    { text: "Get Involved", icon: <FaHandsHelping size={20} />, href: "/get-involved" },
    { text: "Subscribe to Mailing List", icon: <FaEnvelope size={20} />, href: "/subscribe" },
    { text: "Civic Associations", icon: <FaLandmark size={20} />, href: "/civic-associations" },
    { text: "All Resources", icon: <FaBook size={20} />, href: "/resources" },
    { text: "About D4", icon: <FaInfoCircle size={20} />, href: "/about" },
  ];

  return (
    <section className="mt-6 grid grid-cols-2  md:grid-cols-3 gap-6 md:gap-12 px-6 md:px-32 py-6 ">
      {links.map(({ text, icon, href }) => (
        <Link key={text} href={href}>
          <button
            className="bg-[#1A2C56] text-white py-3 px-4 flex justify-between items-center rounded-md w-full text-sm font-light lora-light"
          >
            <span className="ml-2">{text}</span>
            <span className="mr-2">{icon}</span>
          </button>
        </Link>
      ))}
    </section>
  );
}
