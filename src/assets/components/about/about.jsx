import React from 'react';
import './about.css';
import { ImNewspaper } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { TbCircleLetterWFilled } from "react-icons/tb";
import revive from './Revive.jpg'
import voeux from './Voeux.jpg'
import kingz from './Kingz.jpg'
import unifresh from './Unifresh.jpg'

const About = () => {
    return(
        <>
        <main className='flex flex-col gap-10 mt-5'>
        <h1 className='text-3xl font-[700]'>EVERYTHING YOU NEED TO KNOW ABOUT</h1>
        <div className='flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className='text-3xl font-[700] text-[#0796D6]'>THE DIGITAL IMPACTS</h1>
            <center>
            <p className='text-lg'>The <span className='text-xl font-[700]'>Digital Impacts</span> create a perfect company for its customers.
<span className='text-xl font-[700]'> Digital Impacts</span> offers the best services to ensure your business thrives online.<br/>Because we partner with our clients with a team 
 of professionals, we can to provide the best on our side. We strive to be leaders in digital<br/>marketing services 
 worldwide by revolutionizing the industry and setting new standards of professionalism and success.</p>
            </center>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className='text-3xl font-[700] text-[#0796D6]'>OUR VISION</h1>
            <center>
            <p className='text-lg'>We strive to be leaders in digital marketing services across the world by revolutionizing the industry and setting new
 standards of<br/>professionalism and success. Our vision is to become a top agency offering online marketing strategies, digital sales 
 solutions, and internet<br/>brand management in the international business sphere.</p>
            </center>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className='text-3xl font-[700] text-[#0796D6]'>OUR MISSION</h1>
            <center>
            <p className='text-lg'>Our mission is to partner with customers for their success as we create diverse client base including companies and individuals
 functioning in<br/>many different fields and economies. We will be best in providing consistently successful, unique, and forward-thinking digital 
 marketing<br/>solutions that take into account the individual requirements and unique demands of each client.</p>
            </center>
        </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center w-[450px] h-[150px] gap-3 bg-[#2A363F] text-white'>
                <h1 className='text-4xl font-[700]'>10000+</h1>
                <h1 className='text-4xl font-[700]'>Domain Names Registered</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-[450px] h-[150px] gap-3 bg-[#0796D6] text-white'>
                <h1 className='text-4xl font-[700]'>90000+</h1>
                <h1 className='text-4xl font-[700]'>Websites Hosted</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-[450px] h-[150px] gap-3 bg-[#F5F5F5]'>
                <h1 className='text-4xl font-[700]'>45000+</h1>
                <h1 className='text-4xl font-[700]'>Customers</h1>
            </div>
        </div>
        <div className='flex flex-col gap-8'>
            <h1 className='text-5xl font-[700]'>Projects We've Delivered</h1>
            <center>
            <p>Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web and mobile apps<br/>related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy.</p>
            </center>
            <div className='flex flex-col bg-[#F5F5F5]'>
                <div className='flex text-[#0796D6] justify-around items-center'>
                    <div className='flex flex-col gap-3'>
                    <p>INDUSTRY</p>
                    <h1 className='text-2xl font-[700]'>REVIVE</h1>
                    <p>Revive Beauty Salon & Institute</p>
                    <p className='flex items-center gap-2'><ImNewspaper className='text-4xl'/> WEB DEVELOPMENT</p>
                    <p className='flex items-center gap-2'><ImNewspaper className='text-4xl'/> QUALITY ASSURANCE</p>
                    <span className='flex items-center justify-around'><FaReact  className='text-4xl'/> <FaAws  className='text-4xl'/></span>
                    </div>
                    <img src={revive} alt="Revive" height={500} width={500} className='hover:opacity-50 transition-opacity duration-300 cursor-pointer'/>
                </div>
                <div className='flex text-[#0796D6] justify-around items-center'>
                    <img src={voeux} alt="Voeux" height={500} width={500} className='hover:opacity-50 transition-opacity duration-300 cursor-pointer'/>
                    <div className='flex flex-col gap-3'>
                    <p>INDUSTRY</p>
                    <h1 className='text-2xl font-[700]'>Voeux</h1>
                    <p>Natural Skin Care</p>
                    <p className='flex items-center gap-2'><ImNewspaper className='text-4xl'/> WEB DEVELOPMENT</p>
                    <p className='flex items-center gap-2'><ImNewspaper className='text-4xl'/> QUALITY ASSURANCE</p>
                    <span className='flex items-center justify-around'><TbCircleLetterWFilled  className='text-4xl'/> <FaAws  className='text-4xl'/></span>
                    </div>
                </div>
                <div className='flex text-[#0796D6] justify-around items-center'>
                    <div className='flex flex-col gap-3'>
                    <p>INDUSTRY</p>
                    <h1 className='text-2xl font-[700]'>KINGZ</h1>
                    <p>Ecommerce Website</p>
                    <p className='flex items-center gap-2'><ImNewspaper className='text-4xl'/> WEB DEVELOPMENT</p>
                    <p className='flex items-center gap-2'><ImNewspaper className='text-4xl'/> QUALITY ASSURANCE</p>
                    <span className='flex items-center justify-around'><TbCircleLetterWFilled  className='text-4xl'/> <FaAws  className='text-4xl'/></span>
                    </div>
                    <img src={kingz} alt="KINGZ" height={500} width={500} className='hover:opacity-50 transition-opacity duration-300 cursor-pointer'/>
                </div>
                <div className='flex text-[#0796D6] justify-around items-center'>
                    <img src={unifresh} alt="UniFresh" height={500} width={500} className='hover:opacity-50 transition-opacity duration-300 cursor-pointer'/>
                    <div className='flex flex-col gap-3'>
                    <p>INDUSTRY</p>
                    <h1 className='text-2xl font-[700]'>UniFresh</h1>
                    <p>Fruit and Vegetable Retail Store</p>
                    <p className='flex items-center gap-2'><ImNewspaper className='text-4xl'/> WEB DEVELOPMENT</p>
                    <p className='flex items-center gap-2'><ImNewspaper className='text-4xl'/> QUALITY ASSURANCE</p>
                    <span className='flex items-center justify-around'><FaReact  className='text-4xl'/> <FaAws  className='text-4xl'/></span>
                    </div>
                </div>
            </div>
        </div>
        </main>
        </>
    )
}

export default About;