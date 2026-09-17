import React from 'react';
import home from './Home-img.jpg'
import './home.css'
import { FaGears } from "react-icons/fa6";
import { IoMdRocket } from "react-icons/io";
import { IoTabletLandscapeSharp } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import { IoBug } from "react-icons/io5";

const Home = () => {
  return (
    <main className='justify-between mt-20'>
      <div className='flex'>
      <span>
        <img src={home} alt="Home" height={500} width={540}/>
      </span>
      <div className="home">
        <h1 className='text-5xl font-[700] py-2 pr-60'>We are full Services <br /><span className='text-[#0796D6]'>Digital Marketing Agency</span></h1>
        <span>
          <h1 className='text-[#0796D6] text-2xl font-[700] py-4 pr-7'>Welcome to the Digital Impacts</h1>
          <div className="h-1 bg-[#0796D6]"></div>
          <p>We partner with our clients with a team of professionals, we are able to provide<br />the best on our side. We strive to be leaders in digital marketing services worldwide<br />by revolutionizing the industry and setting new standards of professionalism and success.</p>
        </span>
        <button className='cursor-pointer bg-[#0796D6] px-6 py-2 rounded-[50px] text-sm hover:scale-125 transition-transform duration-1000 float-right m-5'>Message Us Now</button>
      </div>
      </div>
      <div className='flex flex-col items-center justify-center pt-5'>
        <center>
          <h1 className='text-3xl font-[700] py-2'>We <span className='text-[#0796D6] text-3xl font-[700]'>Provide</span> The Best<br />Services For <span className='text-[#0796D6] text-3xl font-[700] py-4 pr-7'>Our<br />Developers</span></h1>
        </center>
        <div>
          <div className='flex items-center justify-center gap-10 py-10'>
            <div className='flex flex-col items-center justify-center gap-4 p-10 h-90 border-t-10 border-b-20 rounded-[20px] border-[#0796D6] shadow-[0px_0px_6px_#0796D6] cursor-pointer hover:scale-110 transition-transform duration-1000'>
              <h1 className='font-[750] text-2xl'>Digital Marketing</h1>
              <p className='text-[#0796D6] text-3xl'><FaGears /></p>
              <center>
                <p>The <span className='text-[#0796D6]'>Digital Impacts</span> have<br />compiled a list of the best<br />digital marketing companies in<br />the world.</p>
              </center>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 p-10 h-90 border-t-10 border-b-20 rounded-[20px] border-[#0796D6] shadow-[0px_0px_6px_#0796D6] cursor-pointer hover:scale-110 transition-transform duration-1000'>
              <h1 className='font-[750] text-2xl'>Web Development</h1>
              <p className='text-[#0796D6] text-3xl'><IoMdRocket /></p>
              <center>
                <p>Web design services comprise<br />the process of user interface<br /><span className='text-[#0796D6]'>UI</span> and user experience <span className='text-[#0796D6]'>UX</span><br />design of any web-based<br />solution.</p>
              </center>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 p-10 h-90 border-t-10 border-b-20 rounded-[20px] border-[#0796D6] shadow-[0px_0px_6px_#0796D6] cursor-pointer hover:scale-110 transition-transform duration-1000'>
              <h1 className='font-[750] text-2xl'>Graphic Designing</h1>
              <p className='text-[#0796D6] text-3xl'><IoTabletLandscapeSharp /></p>
              <center>
                <p>Create visual concepts to<br/>communicate ideas that<br/>inspire and captivate<br/>consumers, creative thinking,<br/>an aptitude towards art and<br/>design</p>
              </center>
            </div>
          </div>
          <div className='flex items-center justify-center gap-10 py-10'>
            <div className='flex flex-col items-center justify-center gap-4 p-10 h-90 border-t-10 border-b-20 rounded-[20px] border-[#0796D6] shadow-[0px_0px_6px_#0796D6] cursor-pointer hover:scale-110 transition-transform duration-1000'>
              <h1 className='font-[750] text-2xl'>Content Writer</h1>
              <p className='text-[#0796D6] text-3xl'><CiFileOn /></p>
              <center>
                <p>That <span className='text-[#0796D6]'>content</span> can include blog<br />posts, video or podcast scripts,<br/>ebooks or whitepapers, press<br/>releases, product category<br/>descriptions, landing page or<br/>social media</p>
              </center>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 p-10 h-90 border-t-10 border-b-20 rounded-[20px] border-[#0796D6] shadow-[0px_0px_6px_#0796D6] cursor-pointer hover:scale-110 transition-transform duration-1000'>
              <h1 className='font-[750] text-2xl'>SEO</h1>
              <p className='text-[#0796D6] text-3xl'><IoBug /></p>
              <center>
                <p>Help search engines find,<br/>crawl, and index your content<br/>efficiently. The website can<br/>become easily findable, more<br/>relevant and popular towards<br/>user search queries.</p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;