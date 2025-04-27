'use client';

import React, { useState } from 'react';
import { assets } from '@/app/assets/assets.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Header } from '../components/Header';

export default function ResourcePage() {

    const resources = [
        { title: "311: Public Service Number", image: assets.bos311Icon, link: "https://www.boston.gov/departments/boston-311" },
        { title: "Who is your Boston City Counsellor?", image: assets.city_council_icon, link: "https://www.boston.gov/departments/city-council/who-my-boston-city-councilor" },
        { title: "Housing", image: assets.building, link: "https://www.boston.gov/search?page=2&query=all%20resources&" },
        { title: "Alcoholic Beverages Licensing", image: assets.licensing, link: "https://www.boston.gov/departments/licensing-board/apply-alcoholic-beverages-retail-license" },
        { title: "Business Support", image: assets.vendor, link: "https://www.boston.gov/search?utf8=%E2%9C%93&query=business+support" },
        { title: "Mayor’s Office", image: assets.stateOffices, link: "https://www.boston.gov/departments/mayors-office " },
        { title: "Public Works", image: assets.trashRecycle, link: "https://www.boston.gov/departments/public-works" },
        { title: "Schools", image: assets.schools, link: "https://www.boston.gov/departments/schools" },
        { title: "Substance Abuse", image: assets.alert, link: "https://www.boston.gov/government/cabinets/boston-public-health-commission/recovery-services" },
        { title: "Youth", image: assets.teenCenter, link: "https://www.boston.gov/boston-youth-hub" },
        { title: "Community Centers", image: assets.accessibility, link: "https://www.boston.gov/community-centers" },
        { title: "About D4", image: assets.info1 },
        { title: "Inspectional Services", image: assets.bIsForBoston, link: "https://www.boston.gov/departments/inspectional-services" },
        { title: "Mental & Public Health", image: assets.wellness, link: "https://www.boston.gov/government/cabinets/boston-public-health-commission" },
        { title: "Police Department", image: assets.policeLogo, link: "https://www.boston.gov/departments/police" },
        { title: "Senior & Disability Assistance", image: assets.accessibility, link: "https://www.boston.gov/departments/age-strong-commission" },
        { title: "Traffic/Transportation", image: assets.t, link: "https://www.boston.gov/departments/transportation" },
        { title: "Family Support", image: assets.people, link: "https://www.boston.gov/departments/early-childhood/parent-and-family-support" },
        { title: "All Resources", image: assets.alertRed, link: "https://www.boston.gov/search?page=1&query=all%20resources&facet%5B0%5D=department_profile&facet%5B1%5D=topic_page" },
        { title: "Legal Services", image: assets.cityCouncil, link: "https://www.boston.gov/departments/law" },
        { title: "Parks", image: assets.playground, link: "https://www.boston.gov/departments/parks-and-recreation" },
        { title: "Reentry", image: assets.info, link: "https://www.boston.gov/departments/returning-citizens" },
        { title: "District 4 Newsletter Signup", image: assets.newsletter, link: "https://lp.constantcontactpages.com/su/6umkRa8" },
        { title: "Veterans", image: assets.veteransServicesLogo, link: "https://www.boston.gov/departments/veterans-services" },
    ];

    const news = [
        {
            headlines: "Food Drive",
            content: "I am pleased to inform you that starting next week, we will begin much-needed repairs on Main Street and the Elm Street Bridge.",
            date: "05/29/2024",
        },
        {
            headlines: "Community Clean-Up Day",
            content: "Join us this Saturday for a neighborhood clean-up event. Bags and gloves will be provided at the Community Center.",
            date: "06/02/2024",
        },
        {
            headlines: "Public Safety Meeting",
            content: "City officials will host a town hall to address recent safety concerns and discuss new policies for better community protection.",
            date: "06/10/2024",
        },
        {
            headlines: "New Park Opening",
            content: "We’re excited to announce the grand opening of the new Oakwood Park this weekend. Bring your family and enjoy food, music, and fun!",
            date: "06/15/2024",
        },
        {
            headlines: "School Supply Giveaway",
            content: "Free school supplies will be distributed to students in need at the D4 Community Center. First come, first served.",
            date: "07/01/2024",
        },
        {
            headlines: "Summer Youth Programs Begin",
            content: "Registration is now open for the city’s free summer youth programs, including sports, arts, and educational camps.",
            date: "07/05/2024",
        },
        {
            headlines: "Infrastructure Improvement",
            content: "Starting next month, we will begin sidewalk and lighting upgrades throughout key areas of the district.",
            date: "07/20/2024",
        },
        {
            headlines: "Fire Safety Awareness Week",
            content: "The Fire Department will host safety demos, school visits, and giveaways to educate families on fire preparedness.",
            date: "08/10/2024",
        },
    ];

    const upcomingevents = [
        {
            heading: "Public Hearing Docket #0335",
            content: "Order for a hearing regarding all City of Boston grants administered by the Boston Fire Department.",
            date: "April 25th 2025",
            time: "10:00AM",
            location: "Iannella Chamber, 5th Floor Boston City Hall Boston, MA 02201",
            link: "https://www.boston.gov/public-notices/16359466"
        },
        {
            heading: "Public Hearing Docket #0336",
            content: "Order for a series of hearings regarding all City of Boston grants administered by the Boston Police Department.",
            date: "May 23rd 2025",
            time: "10:00AM",
            location: "Iannella Chamber, 5th Floor Boston City Hall Boston, MA 02201",
            link: "https://www.boston.gov/public-notices/16363426"
        },
        {
            heading: "Public Hearing Docket #0145",
            content: " Petition for a Special Law Re: To establish the Commission of Inspectors General on Financial Management.",
            date: "June 5th 2025",
            time: '02:00PM',
            location: "Iannella Chamber, 5th Floor Boston City Hall Boston, MA 02201",
            link: "https://www.boston.gov/public-notices/16363171"
        }
    ];

    const [showMore, setShowMore] = useState(false);
    const visibleResource = showMore ? resources : resources.slice(0, 6);

    return (
        <>
            <Header />
            <div className="px-4 sm:px-6 lg:px-8">
                {/* FEATURED RESOURCES */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mt-10 mb-4">
                    FEATURED RESOURCES
                </h1>
                <hr className="mb-6" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                    {visibleResource.map((item, index) => (
                        <a
                            key={index}
                            href={item.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full max-w-[350px] p-4 border rounded hover:shadow-md transition"
                        >
                            <span className="text-sm sm:text-base font-medium">{item.title}</span>
                            <Image className="w-6 h-6 sm:w-7 sm:h-7 ml-4" src={item.image} alt={item.title} />
                        </a>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="bg-gray-200 text-sm px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>

                {/* NEWS AND UPDATES */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mt-16 mb-4">
                    NEWS AND UPDATES
                </h1>
                <hr className="mb-6" />

                <div className="relative">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="mySwiper py-6"
                    >
                        {news.map((nwz, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#122160] text-white p-6 mx-8 rounded-lg shadow-md h-[270px] flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold">{nwz.headlines}</h3>
                                        <hr className="border-white my-2" />
                                        <p className="italic text-sm">{nwz.content}</p>
                                    </div>
                                    <p className="text-gray-300 text-sm mt-4">Date: {nwz.date}</p>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Custom navigation buttons */}
                        <div className="custom-prev absolute left-[-10px] top-1/2 transform -translate-y-1/2 z-50 bg-white p-2 rounded-full shadow-md hover:scale-110 transition cursor-pointer">
                            <ChevronLeft className="text-blue-900" size={24} />
                        </div>
                        <div className="custom-next absolute right-[-10px] top-1/2 transform -translate-y-1/2 z-50 bg-white p-2 rounded-full shadow-md hover:scale-110 transition cursor-pointer">
                            <ChevronRight className="text-blue-900" size={24} />
                        </div>
                    </Swiper>
                </div>

                {/* UPCOMING EVENTS */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mt-16 mb-4">
                    UPCOMING EVENTS
                </h1>
                <hr className="mb-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {upcomingevents.map((items, index) => (
                        <a
                            key={index}
                            href={items.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-[400px] bg-blue-950 rounded-lg overflow-hidden text-white hover:shadow-xl transition-shadow duration-300"
                        >

                            <div className="p-4">
                                <p className="text-xl mb-2">{items.heading}</p>
                                <p className="italic">{items.content}</p>
                                <Image src={assets.date}
                                    alt='date'
                                    height={35}
                                    width={35}
                                    className='mt-4 bg-white rounded-full border-2 border-black' />
                                <p className="mt-[-30] ml-12 text-sm text-gray-300">{items.date}</p>
                                <Image src={assets.time}
                                    alt='time'
                                    height={35}
                                    width={35}
                                    className='mt-5 bg-white rounded-full border-2 border-black' />
                                <p className="mt-[-30] ml-12 text-sm text-gray-300">{items.time}</p>

                                <Image src={assets.location}
                                    alt='time'
                                    height={35}
                                    width={35}
                                    className='mt-5 bg-white rounded-full border-2 border-black' />
                                <p className="mt-[-30] ml-12 text-sm text-gray-300">{items.location}</p>


                            </div>
                        </a>
                    ))}

                </div>
            </div>

        </>
    );
}
