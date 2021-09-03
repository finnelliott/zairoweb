import { GlobeIcon, CreditCardIcon, UserGroupIcon, PuzzleIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline'

import { FC } from "react"

const WhoSection: FC<{data: any}> = ({ data }) => {
    return (
      <>
      <main className="lg:relative bg-cool-black">
          <div className="mx-auto max-w-7xl w-full py-8 text-center lg:py-16 lg:text-left">
            <div className="px-4 sm:px-8 xl:pr-16">
              <h2 className="text-base text-secondary-300 font-regular tracking-wide uppercase pb-4">{data.whoPretitle}</h2>
              <p className="text-2xl tracking-tight font-extrabold text-cool-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl pb-8">
                <span className="block xl:inline">{data.whoHeading}</span>
              </p>
              </div>
              <div className="px-4 sm:px-8 xl:pr-16 grid grid-cols-3">
              {data.reviews.map((review: {name: string, location: string}) => (
                <div className="bg-gradient-to-br from-gray-50 bg-opacity-60 rounded-3xl"><div className="bg-gray-50 bg-opacity-10 rounded-3xl p-4"><span className="text-cool-white">{review.name}</span></div></div>
                ))}
              </div>
              
          </div>
        </main>
        
      </>
    )
} 

export default WhoSection