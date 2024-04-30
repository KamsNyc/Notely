import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className='mt-[56px]'>
        {/* FLEX COL CONTAINER */}
        <div className="flex flex-col items-center gap-[32px]">
            {/* HERO TEXT */}
            <div className="flex flex-col items-center justify-center">
                <h1 className='text-center font-bold text-[36px] leading-[100%]'>Seamless Note-Taking with Notely</h1>

                <p className='text-center text-[#a1a1a1] text-[14px] leading-[130%] px-[20px] pt-2'>Notely is the world&apos;s safest, largest and intelligent digital notebook. Join over 10M+ users already using Notely.</p>

                <button className='mt-4 font-medium text-white bg-primary px-[55px] py-[10px] rounded-[5px]'>Get Started</button>
            </div>
            {/* HERO IMAGE */}
            <div className="flex items-center justify-center">
                <Image
                src={'/LandingImage.png'}
                alt='hero image'
                width={500}
                height={500}
                className='max-w-[280px] max-h-[384px] '
                />
            </div>

        </div>
    </section>
  )
}

export default Hero
