import React from 'react';
import './portfolio.css';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Portfolio= () => {
    return(
        <>
        <main className='mt-10'>
            <center>
                <h1 className='text-3xl font-[700]'>Feel free To<span className='text-[#0796D6]'> Contact</span> Us By Submitting<br/><span className='text-[#0796D6]'>Form Or Contact Live Support</span></h1>
            </center>
            <div className='flex items-center justify-center gap-5 mt-10'>
                <div>
                <p><iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d18888.50941887474!2d-2.128079!3d53.717128!3m2!1i1024!2i768!4f13.1!2m1!1sOldham%20Graham%2C%20Manchester%C2%A0UK!5e0!3m2!1sen!2sus!4v1789732849815!5m2!1sen!2sus" width="700" height="350" style={{Border : 0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe></p>
                <span className="flex gap-20">
                <p className="flex gap-10 items-center"><IoCall  className='text-[#0796D6] text-2xl'/><span className="font-[700]">+447424997026<br/>+447900190002</span></p>
                <p className="flex gap-10 items-center p-10"><MdEmail className='text-[#0796D6] text-2xl'/><span className="font-[700]">info@thedigitalimpacts.com</span></p>
                </span>
                </div>
                <form className='flex flex-col w-100 gap-5 pb-10 pt-5 px-10 border-t-10 border-b-20 rounded-[20px] border-[#0796D6] shadow-[0px_0px_6px_#0796D6]'>
                    <span className='flex flex-col gap-5'>
                        <label className='text-[#0796D6]'>Name</label>
                        <input type="text" placeholder='your name' className='border-b-2 border-[#f5f5f5]'/>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <label className='text-[#0796D6]'>Surname</label>
                        <input type="text" placeholder='your surname' className='border-b-2 border-[#f5f5f5]'/>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <label className='text-[#0796D6]'>Email</label>
                        <input type="email" placeholder='your email address' className='border-b-2 border-[#f5f5f5]'/>
                    </span>
                    <span className='flex flex-col gap-5'>
                        <label className='text-[#0796D6]'>Contact Number</label>
                        <input type="text" placeholder='123-45-678' className='border-b-2 border-[#f5f5f5]'/>
                    </span>
                    <button type="submit" className='float-left px-6 py-2 bg-[#0796D6] h-fit w-fit text-white rounded-[50px] hover:bg-[#057bbd]'>Submit</button>
                </form>
            </div>
            <div className='flex flex-col items-center justify-center gap-10 m-20'>
                <p className='h-5 w-30 bg-[#0796D6]'></p>
                <h1 className='text-5xl font-[700] text-[#0796D6]'>Let's Work Together</h1>
                <center>
                <p className='text-xl'>Driving your business forward with strong marketing strategies<br/>Get a free consultation to make this happen!</p>
                </center>
                <button className="cursor-pointer bg-[#0796D6] px-6 py-2 rounded-[50px] text-sm hover:scale-125 transition-transform duration-1000">Connect</button>
            </div>
        </main>
        </>
    )
}

export default Portfolio;