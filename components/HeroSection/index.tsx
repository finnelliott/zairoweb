import { FC } from "react"
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

const HeroSection: FC<{data: any}> = ({ data }) => {
    return (
        <div className="relative bg-gradient-to-r from-cool-black via-primary-700 to-secondary-700">
        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl font-semibold text-cool-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                <span className="block xl:inline leading-relaxed">{data.heroHeading}</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-5 sm:text-2xl md:mt-5 md:max-w-3xl">
                {data.heroSubheading}
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="shadow rounded-full">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full text-cool-white bg-secondary-300 hover:bg-secondary-400 md:py-4 md:text-lg md:px-10"
                  >
                    {data.heroCTA1Text}
                    <ArrowNarrowRightIcon className="w-6 h-6 ml-4" />
                  </a>
                </div>
                
              </div>
              <p className="mt-10 text-sm text-gray-5">
                  {data.heroCTA2Text}
              </p>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </div>
        </main>
      </div>
    )
} 


export default HeroSection