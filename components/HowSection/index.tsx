import { FC } from "react"

const WhatSection: FC<{data: any}> = ({ data }) => {
    return (
        <div className="relative bg-cool-black">
        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-8 pb-20 text-center lg:pt-16 lg:pb-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h2 className="text-base text-primary-300 font-regular tracking-wide uppercase">{data.howPretitle}</h2>
              <p className="text-2xl tracking-tight font-extrabold text-cool-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                <span className="block xl:inline">{data.howHeading}</span>
              </p>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                {data.howSubheading}
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cool-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    {data.heroCTA1Text}
                  </a>
                </div>
                
              </div>
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


export default WhatSection