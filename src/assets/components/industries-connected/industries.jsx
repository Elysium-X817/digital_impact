import React from 'react';
import './industries.css';
import realestate from './Estate.jpg'
import Education from './Education.jpg'
import Commerce from './Commerce.jpg'
import Hospitality from './Hospitality.jpg'
import Healthcare from './Health-Care.jpg'
import Fintech from './Fintech.jpg'

const Industries = () => {
    return(
        <>
        <main className='mb-10'>
            <center>
                <h1 className='font-[750] text-4xl'>Industries We<br/><span className='text-[#0796D6]'>Work With</span></h1>
                <p>We work as a technology partner for various industries<br/>Our expertise can be applied to the specific demands<br/>and nuances in your industry</p>
            </center>
            <div className='bg-[#f7f7f7] flex flex-col gap-10 mt-10'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col items-center'>
                    <img src={realestate} alt="Real Estate" height={230} width={230}/>
                    <h1 className='font-[500] text-2xl'>REAL ESTATE</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={Education} alt="Education" height={230} width={230}/>
                    <h1 className='font-[500] text-2xl'>EDUCATION</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={Commerce} alt="Commerce" height={230} width={230}/>
                    <h1 className='font-[500] text-2xl'>COMMERCE</h1>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col items-center'>
                    <img src={Hospitality} alt="Hospitality" height={230} width={230}/>
                    <h1 className='font-[500] text-2xl'>HOSPITALITY</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={Healthcare} alt="Healthcare" height={230} width={230}/>
                    <h1 className='font-[500] text-2xl'>HEALTHCARE</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={Fintech} alt="Fintech" height={230} width={230}/>
                    <h1 className='font-[500] text-2xl'>FINTECH</h1>
                </div>
            </div>
            </div>
        </main>
        </>
    )
}

export default Industries;