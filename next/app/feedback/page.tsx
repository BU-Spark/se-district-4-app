'use client';

import { useState } from 'react';
import { Header } from '../components/Header';


const FeedbackPage = () => {
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

            <div className="p-10 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Community Feedback</h1>
                <p className="text-gray-600 mb-6">
                    Need help? You can send an email to BOS:311 for non-emergency services through the feedback form below.


                </p>

                {error && <p className="text-red-600 mb-4">{error}</p>}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full border-2 p-2"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full border-2 p-2"
                    />
                    <input
                        type="email"
                        name="confirmEmail"
                        value={formData.confirmEmail}
                        onChange={handleChange}
                        placeholder="Confirm Email Address"
                        className="w-full border-2 p-2"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone (optional)"
                        className="w-full border-2 p-2"
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full border-2 p-2"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full border-2 p-2 h-32"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 font-bold rounded"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackPage;
