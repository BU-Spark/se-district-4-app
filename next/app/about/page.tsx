
'use client'; // Important for using useState in Next.js App Router (if you're using app/ structure)

import React, { useState } from 'react';

import { Header } from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '../assets/assets';

const BrianWorrell = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        confirmEmail: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation
        if (!formData.fullName || !formData.email || !formData.confirmEmail || !formData.subject || !formData.message) {
            setError('Please fill in all required fields.');
            return;
        }

        if (formData.email !== formData.confirmEmail) {
            setError('Email addresses do not match.');
            return;
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(formData.email)) {
            setError('Invalid email format.');
            return;
        }

        setError('');

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setShowForm(false);
                setFormData({ fullName: '', email: '', confirmEmail: '', phone: '', subject: '', message: '' });
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (err) {
            console.error(err);
            alert('Error sending message.');
        }
    };
    return (
        <div className="relative">
            <Header />

            {/* Breadcrumb */}
            <div className='mt-12 ml-16 text-2xl font-Montserrat '>
                <Link href='/' className='h-[40px] w-[75px]'>Home</Link>
                <span className='text-slate-400'>{' > '}</span>
                <Link href='/about'>About</Link>
                <span className='text-slate-400'>{' > '}</span>
                <span className='text-red-600 font-semibold'>Brian J. Worrell</span>
            </div>

            {/* Main Section */}
            <div className='flex flex-col md:flex-row m-12 gap-10'>
                {/* Left Panel */}
                <div className='flex flex-col items-center md:w-1/3'>
                    <Image
                        src={assets.BrianWorrellCOB}
                        alt='Brian Worrell'
                        height={360}
                        width={360}
                        className='rounded-full'
                    />
                    <hr
                        className='mt-8 border-dashed w-[400px]' />
                    <div className='mt-8 space-y-6'>
                        {/* Phone */}
                        <div className='flex items-center gap-4'>
                            <Image
                                src={assets.phone}
                                alt='Phone'
                                height={40}
                                width={40}
                                className='rounded-full border-2 border-black'
                            />
                            <p className='text-lg text-blue-500'>617-635-3131</p>
                        </div>
                        <hr
                            className='mt-8 border-dashed w-[400px]' />

                        {/* Email */}
                        <div className='flex items-center gap-4 cursor-pointer'
                            onClick={() => setShowForm(true)}>
                            <Image
                                src={assets.email}
                                alt='Email'
                                height={40}
                                width={40}
                                className='rounded-full text-blue-500 border-2 border-black'
                            />
                            <p className='text-lg text-blue-500'>Send an Email</p>
                        </div>
                        <hr
                            className='mt-8 border-dashed w-[400px]' />

                        {/* Address */}
                        <div className='flex items-start gap-4 text-lg text-gray-700 mt-6'>
                            <Image
                                src={assets.location}
                                alt='Location'
                                height={40}
                                width={40}
                                className='rounded-full border-2 border-black'
                            />
                            <div className='flex flex-col'>
                                <p>Boston City Hall</p>
                                <p>5th Floor</p>
                                <p>Boston, MA 02201</p>
                            </div>
                        </div>

                        <hr
                            className='mt-8 border-dashed w-[400px]' />
                        {/* Elected & Party Info */}
                        <div className='text-lg  text-gray-600'>

                            <p><strong>Elected:</strong> 2021</p>
                            <hr
                                className='mt-8 border-dashed w-[400px]' />
                            <p className='mt-3'><strong>Party:</strong> Democratic (D)</p>
                        </div>
                        <hr
                            className='mt-8 border-dashed w-[400px]' />


                        {/* Stay Connected Button */}
                        <div className="flex items-center gap-4 ">
                            <Image
                                src={assets.newsletter}
                                alt='connected'
                                height={40}
                                width={40}
                                className='rounded-full border-2 border-black'
                            />
                            <p className='text-lg'>Stay Connected</p>
                            <br />

                        </div>
                        <a className="p-14 text-blue-400 "
                            href="https://lp.constantcontactpages.com/su/6umkRa8">Sign up for the D4 Newsletter</a>
                        <hr
                            className='mt-8 border-dashed w-[400px]' />
                    </div>
                    <hr
                        className='mt-8 border-dashed w-[400px]' />
                    <br />
                    <hr
                        className='mt-8 border-dashed w-[400px]' />
                </div>

                {/* Right Panel - Bio */}
                <div className='md:w-2/3 space-y-6 text-gray-800 font-Montserrat '>
                    <h1 className='text-9xl f   ont-bold'>Brian J. Worrell</h1>
                    <h2 className='text-3xl mx-2 text-gray-500'>City Councilor, District 4</h2>
                    <hr
                        className='mt-8 border-dashed w-[600px]' />


                    <p className='text-lg'>
                        Brian Worrell is the Boston City Councilor for District 4, which includes Mattapan, Dorchester, and parts of Jamaica Plain and Roslindale.
                    </p>

                    <p className='text-lg'>
                        A native Bostonian, Brian was raised by parents who migrated to the United States from Jamaica and Barbados in search of the American dream. Through his parent’s hard work, determination, and belief in their community, Brian was given access to opportunity in Boston. He graduated from METCO and earned a bachelor’s degree at Northeastern University, majoring in accounting and entrepreneurship, and eventually becoming the proud owner of a Boston-based business.
                    </p>

                    <p className='text-lg'>
                        As a small business owner who helped dozens of first-time homebuyers realize the goal of homeownership, Brian learned the ins and outs of city government. Over the last 16 years, he has coordinated several community events – such as cookouts, concerts, professional networking events, youth basketball tournaments, backpack drives, free haircuts at a local barbershop in Dorchester, and coordinated a COVID vaccine clinic – all to bring together our intergenerational, diverse district.
                    </p>

                    <p className='text-lg'>
                        Since taking office, he’s continued this commitment to the community by proposing legislation that addresses the challenges facing the district and leveraging his knowledge and experiences with city government to deliver for his constituents. In his first term, he was able to secure historic funding for District 4, expand homeownership opportunities through ARPA funding and take action on the affordability crisis, launching a study to analyze how to build more accessible and affordable housing in District 4 and working with stakeholders to activate vacant lots and reimagine existing spaces, pass a home-rule petition to expand access to liquor licenses, and proposed initiatives like the Black and Brown economic empowerment agenda and the Cradle-to-Career to tackle long-standing inequities in access to opportunity.

                        He is looking forward to continuing to partner with the Mayor’s office, his colleagues, and state leaders to deliver tangible results for the people he represents.
                    </p>
                </div>
            </div>

            {/* Contact Form Modal */}
            {showForm && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50'>
                    <div className='bg-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-full p-6 overflow-y-auto relative'>
                        <button className='absolute top-4 right-4 text-2xl font-bold text-red-500' onClick={() => setShowForm(false)}>×</button>
                        <h2 className='text-3xl font-bold border-b-4 border-black pb-2 mb-4'>Contact Us</h2>
                        <p className='text-gray-600 mb-6'>Have a question, or just need help? You can send an email to <a href='mailto:brian.worrell@boston.gov' className='text-blue-600 underline'>brian.worrell@boston.gov</a>through the form below.</p>
                        {error && <p className='text-red-600 mb-4'>{error}</p>}
                        <form className='space-y-4' onSubmit={handleSubmit}>
                            <input type='text' name='fullName' value={formData.fullName} onChange={handleChange} placeholder='Full Name' className='w-full border-2 p-2' />
                            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email Address' className='w-full border-2 p-2' />
                            <input type='email' name='confirmEmail' value={formData.confirmEmail} onChange={handleChange} placeholder='Confirm Email Address' className='w-full border-2 p-2' />
                            <input type='text' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone' className='w-full border-2 p-2' />
                            <input type='text' name='subject' value={formData.subject} onChange={handleChange} placeholder='Subject' className='w-full border-2 p-2' />
                            <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Message' className='w-full border-2 p-2 h-32' />
                            <button type='submit' className='w-full bg-blue-600 text-white py-2 font-bold'>Send Message</button>
                        </form>
                    </div>
                </div>
            )}
        </div >
    );
};

export default BrianWorrell;

