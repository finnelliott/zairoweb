import { GlobeIcon, CreditCardIcon, UserGroupIcon, PuzzleIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline'

import { FC } from "react"

const WhoSection: FC<{data: any}> = ({ data }) => {
    return (
      <>
      <main className="relative bg-cool-black z-0 overflow-hidden">
      <div className="z-0 w-120 h-120 rounded-full absolute top-0 transform -translate-x-1/2" style={{"background": "radial-gradient(50% 50% at 50% 50%, #016A45 0%, #011E56 53.65%, #111828 100%)"}}></div>
      <div className="z-0 w-120 h-120 rounded-full absolute bottom-0 right-0 transform translate-x-1/2" style={{"background": "radial-gradient(50% 50% at 50% 50%, #016A45 0%, #011E56 53.65%, #111828 100%)"}}></div>


          <div className="mx-auto max-w-7xl w-full py-16 text-center lg:text-left">
            <div className="px-4 sm:px-8 xl:pr-16">
              <h2 className="relative z-20 text-base text-secondary-300 font-regular tracking-wide uppercase pb-4">{data.whoPretitle}</h2>
              <p className="text-2xl tracking-tight font-extrabold text-cool-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl pb-8">
                <span className="relative z-20 block xl:inline">{data.whoHeading}</span>
              </p>
              </div>
              <div className="px-4 sm:px-8 xl:pr-16 grid grid-cols-3 gap-4">
              {data.reviews.map((review: {name: string, location: string}) => (
                <div key={review.name} className="relative z-20 bg-clip-padding bg-gradient-to-br from-cool-white backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 rounded-3xl p-4 py-48"><span className="text-cool-white">{review.name}</span></div>
                ))}
              </div>
              
          </div>





        </main>
        
      </>
    )
} 

export default WhoSection