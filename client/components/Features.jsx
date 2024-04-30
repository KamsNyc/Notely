import Image from 'next/image'
import React from 'react'

function Features() {
    // FEATURES OBJECT
    const featuresList = [
        {
            icon: '/FeatureIcon1.svg',
            heading: "Share notes with friends",
            paragraph: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        },
        {
            icon: "/FeatureIcon2.svg",
            heading: "Auto Completion",
            paragraph: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        },
        {
            icon: "/FeatureIcon3.svg",
            heading: "Manage your notes with friends",
            paragraph: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
        }
    ]
  return (
    <section className='mt-[32px]'>
        <h3 className='text-center text-[32px] font-semibold'>Features</h3>
        {/* Features Card section */}
        <div className="mt-[24px] flex flex-col items-center gap-[12px]">
             {/* Features Card */}
            {
                featuresList && featuresList.map((item, index) =>(
                    <div key={index} className="flex flex-col items-center">
                {/* Icon */}
                <Image 
                src={item.icon}
                alt='Share notes with friends'
                width={48}
                height={48}
                />
                {/* Heading */}
                <span className='pt-[12px] font-medium text-[20px]'>{item.heading}</span>
                {/* Paragraph */}
                <p className='px-[33px] text-center text-[14px] text-paragraph'>{item.paragraph}</p>
            </div>
                ))
            }

        </div> 

    </section>
  )
}

export default Features
