import React from 'react'
import { Header } from '../components/Header'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '../assets/assets'

const AboutPage = () => {
    return (

        <div>
            <Header />
            <div className='mt-12 ml-16 text-2xl font-Montserrat font-serif'>
                <Link href='/'
                    className='h-[40px] w-[75px]'>Home</Link>
                <span className='text-slate-400'>{' > '}</span>
                <Link href="/about"><span className=''>About</span><span className='text-slate-400'>{' > '}</span><span className='text-red-600 font-semibold'>Brian J. Worrell</span></Link>

            </div>

            {/* Counsellor Data */}
            <div className='m-12'>

                <Image
                    src={assets.BrianWorrellCOB}
                    alt='BrianWorrellCOB'
                    height={360}
                    width={360}
                    className='rounded-full' />

                <hr
                    className='mt-8 border-dashed w-[400px]' />

                {/* Phone */}
                <Image
                    src={assets.phone}
                    alt='phone'
                    height={50}
                    width={50}
                    className='mt-5 rounded-full border-2 border-black' />
                <p className='mt-[-35] ml-24 text-lg'>617-635-3131</p>

                <hr
                    className='mt-8 border-dashed w-[400px]' />

                <Image
                    src={assets.email}
                    alt='mail'
                    height={50}
                    width={50}
                    className='mt-5 rounded-full border-2 border-black' />

                <hr
                    className='mt-8 border-dashed w-[400px]' />

            </div>


        </div>

    )
}

export default AboutPage
