import react from 'react';
import './end.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import usa from './USA.jpg'
import uk from './UK.jpg'
import canada from './Canada.jpg'

const End = () => {
    return (
        <>
            <footer className='flex flex-col bg-[#0796D6] pt-10 pb-10'>
                <div className='flex items-center justify-around'>
                <div>
                    <h1 className="text-2xl font-bold">COMPANY</h1>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Why Choose Us</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Pricing & Plans</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Investors</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">SERVICES</h1>
                    <ul>
                        <li><a href="#">Web Design & Development</a></li>
                        <li><a href="#">Why Choose Us</a></li>
                        <li><a href="#">Specialized SEO Services</a></li>
                        <li><a href="#">Specialized Social Services</a></li>
                        <li><a href="#">Specialized Graphics Services</a></li>
                        <li><a href="#">Investors</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">RESOURCES</h1>
                    <ul>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Terms of Services</a></li>
                        <li><a href="#">Help & FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Site Map</a></li>
                    </ul>
                    <div className='flex flex-col gap-5'>
                        <span>
                            <button className='text-white border px-20 py-1 rounded-full mt-4'>Follow Us</button>
                        </span>
                        <span className='flex gap-5'>
                            <button className='text-white text-3xl border border-solid p-2 rounded-[50px]'><FaFacebookF /></button>
                            <button className='text-white text-3xl border border-solid p-2 rounded-[50px]'><FaInstagram /></button>
                            <button className='text-white text-3xl border border-solid p-2 rounded-[50px]'><FaLinkedinIn /></button>
                            <button className='text-white text-3xl border border-solid p-2 rounded-[50px]'><TfiTwitter /></button>
                        </span>
                    </div>
                </div>
                </div>
                <div className='text-white flex justify-around mt-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={usa} alt="USA Office" className='h-[130px] w-[130px] rounded-full object-cover'/>
                        <h1 className="font-bold">USA:</h1>
                        <p>1st Avenue, SW, Hickory,NC, USA<br/>
Email: info@thedigitalimpacts.com</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={uk} alt="UK Office" className='h-[130px] w-[130px] rounded-full object-cover'/>
                        <h1 className="font-bold">UK:</h1>
                        <center><p>Oldham Greater Manchester, United Kingdom<br/>
Email: info@thedigitalimpacts.com</p></center>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={canada} alt="CANADA Office" className='h-[130px] w-[130px] rounded-full object-cover'/>
                        <h1 className="font-bold">CANADA:</h1>
                        <p>92 Avenue, Surrey, BC, Canada<br/>
Email: info@thedigitalimpacts.com</p>
                    </div>
                </div>
                <p className='bg-white h-1 m-10'></p>
                <p className='text-white text-center'>Copyright © 2022 The Digital Impacts. All rights reserved.</p>
            </footer>
        </>
    )
}

export default End;