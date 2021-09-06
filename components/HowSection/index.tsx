import { ArrowNarrowRightIcon } from "@heroicons/react/outline"
import { FC } from "react"
import Image from 'next/image'

const WhatSection: FC<{data: any}> = ({ data }) => {
    return (
      <>
      <main className="relative bg-cool-black">
      <div className="z-0 w-120 h-120 rounded-full absolute bottom-0 transform -translate-x-1/2" style={{"background": "radial-gradient(50% 50% at 50% 50%, #016A45 0%, #011E56 53.65%, #111828 100%)"}}></div>
      <div className="z-0 w-120 h-120 rounded-full absolute top-0 right-0 transform translate-x-1/2" style={{"background": "radial-gradient(50% 50% at 50% 50%, #016A45 0%, #011E56 53.65%, #111828 100%)"}}></div>


      <div className="relative z-10">
          <div className="mx-auto max-w-7xl w-full pt-8 text-center lg:pt-16 lg:text-left">
            <div className="px-4 sm:px-8 xl:pr-16">
              <h2 className="text-base text-primary-300 font-regular tracking-wide uppercase pb-4">{data.howPretitle}</h2>
              <p className="text-2xl tracking-tight font-extrabold text-cool-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                <span className="block xl:inline">{data.howHeading}</span>
              </p>
              </div>
          </div>
        </div>
        <div className="relative z-10">
          
        <div className="">
          <div className="mx-auto max-w-7xl w-full pt-4 pb-20 text-center lg:pb-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-5 sm:text-xl md:mt-5 md:max-w-3xl">
                {data.howDescription}
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full shadow">
                  <a
                    href={`/${data.howCTA.navigationItemLink.linkUrl}`}
                    className="bg-primary-300 py-2 px-4 border border-transparent justify-between rounded-full text-lg font-semibold text-cool-white hover:bg-primary-400 flex items-center"
                  >
                    <span className="mx-auto pl-6 sm:pl-0">{data.howCTA.linkText}</span>
                    <ArrowNarrowRightIcon className="w-6 h-6 ml-4" />
                  </a>
                </div>
                
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
              <div 
                className="absolute inset-0 w-full h-full object-cover">
              <Image
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
                layout='fill'
              />
            </div>
          </div>
        </div>
      </div>
      </main>
      </>
    )
} 


export default WhatSection