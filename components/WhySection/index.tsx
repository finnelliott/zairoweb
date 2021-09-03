import { GlobeIcon, CreditCardIcon, UserGroupIcon, PuzzleIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline'

import { FC, createElement } from "react"

const IconComponent: FC<{icon: string}> = ({icon}) => {
    const TagName = icon;
    return <TagName />
}



const WhySection: FC<{data: any}> = ({ data }) => {
    return (
      <>
      <main className="lg:relative bg-gradient-to-r from-cool-black via-primary-700 to-secondary-700">
          <div className="mx-auto max-w-7xl w-full pt-8 text-center lg:pt-16 lg:text-left">
            <div className="px-4 sm:px-8 xl:pr-16">
              <h2 className="text-base text-secondary-300 font-regular tracking-wide uppercase pb-4">{data.whyPretitle}</h2>
              <p className="text-2xl tracking-tight font-extrabold text-cool-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                <span className="block xl:inline">{data.whyHeading}</span>
              </p>
              </div>
          </div>
        </main>
        <div className="relative bg-gradient-to-r from-cool-black via-primary-700 to-secondary-700">
          
        <div className="py-12">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
                {data.whyItems.map((item: { name: string, description: string, icon: string}) => (
                    <div key={item.name}>
                    <dt>
                        <div className="flex items-center justify-center h-8 w-8 rounded-md text-secondary-300">
                        {
                            item.icon === "GlobeIcon" ? <GlobeIcon className="h-8 w-8" /> : item.icon === "CreditCardIcon" ? <CreditCardIcon className="h-8 w-8" /> : item.icon === "UserGroupIcon" ? <UserGroupIcon className="h-8 w-8" /> : <PuzzleIcon className="h-8 w-8" />
                        }
                        </div>
                        <p className="mt-5 text-lg leading-6 font-medium text-secondary-300">{item.name}</p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-5">{item.description}</dd>
                    </div>
                ))}
                </dl>
                <div className="flex justify-end pt-6">
                    <div className="rounded-full shadow">
                        <a
                            href={`/${data.howCTA.navigationItemLink.linkUrl}`}
                            className="bg-secondary-300 py-2 px-4 border border-transparent justify-between rounded-full text-lg font-semibold text-cool-black hover:bg-secondary-400 flex items-center"
                        >
                            <span className="mx-auto pl-6 sm:pl-0">{data.howCTA.linkText}</span>
                            <ArrowNarrowRightIcon className="w-6 h-6 ml-4" />
                        </a>
                    </div>
                </div>
                
            </div>
            
            </div>
            
      </div>
      </>
    )
} 

export default WhySection