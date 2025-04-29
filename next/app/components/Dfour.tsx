import React from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'
import Link from 'next/link';

const Dfour = () => {
    return (
        <div id="dfour-section" className='mt-10 ml-10'>
            <h2 className='text-5xl font-extrabold italic lora '>City Councilor</h2>
            <hr className=' mt-2  h-[12px] w-[1190px] bg-indigo-950 border-2 border-indigo-900' />
            <div className='mt-8'>

                <Image
                    src={assets.BrianWorrell}
                    alt='Brian Worrell'
                    className='w-[300px] h-[400px] object-cover rounded-t-[50px] rounded-b-[50px]'
                />
                {/* Text */}
                <div className='mt-[-400px] ml-96 font-Montserrat'>
                    <h2 className='text-4xl font-extrabold'>Meet Brain Worrell</h2>
                    <br />
                    <p className='text-3xl'>Brian is the city council representative for District 4,</p>
                    <p className='text-3xl'> serving neighborhoods of Mattapan, Dorchester, </p>
                    <p className='text-3xl'>and parts of Jamaica Plains and Rosindale.</p>
                    <br />
                    <p className='text-3xl'>A native Bostonian, Brian was raised by parents who</p>
                    <p className='text-3xl'>migrated to the United States from Jamaica and </p>
                    <p className='text-3xl'>Barbados in search of the American dream.</p>

                    <br />

                    <Link href="/about">

                        <button className='text-[25px] w-[429px] h-[60px] bg-blue-950 text-white italic lora '>Learn more about Brian</button>
                    </Link>



                </div>




            </div>

            {/* D4 Staff */}

            <div className='mt-28'>

                <h2 className='text-5xl font-extrabold italic lora '>District 4 Staff</h2>
                <hr className=' mt-2  h-[12px] w-[1190px] bg-indigo-950 border-2 border-indigo-900' />
                <div className='mt-8 w-[316px] h-[390px] object-cover rounded-t-[50px] rounded-b-[50px] bg-gray-300 border-2 border-black'>

                    <a href="mailto:anushree.sahay@boston.gov">
                        <Image
                            src={assets.AnushreeSahay}
                            alt="Anushree Sahay"
                            className='relative justify-self-center mt-3 border-[3px] border-gray-500 rounded-full h-[192px] w-[200px] '
                        />
                        <h2 className='m-3 text-2xl text-indigo-900 font-extrabold'>Director of Policy and Communications</h2>

                        <button className='mt-5 ml-16 w-40 h-7 rounded-3xl bg-indigo-950 font-Montserrat text-white'>SEND AN EMAIL</button>


                    </a>

                </div>


            </div>





        </div>


    )
}

export default Dfour
