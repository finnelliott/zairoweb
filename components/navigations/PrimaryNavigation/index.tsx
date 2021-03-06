import { ArrowNarrowRightIcon } from "@heroicons/react/outline"
import { FC } from "react"

const Primarynavigationigation: FC<{menu: any}> = ({menu}) => {
      
    return (
        <header className="bg-gradient-to-r from-cool-black via-primary-700 to-secondary-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Zairo</span>
                    <svg className="w-auto h-10" width="151" height="43" viewBox="0 0 151 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.5048 29.326H70.194V33.325H53.8609V29.326L64.5928 13.631H53.8609V9.63203H70.194V13.631L59.5048 29.326Z" fill="#F9FAFB"/>
                    <path d="M72.8322 21.371C72.8322 18.9917 73.3168 16.8847 74.2859 15.05C75.2836 13.2154 76.6233 11.7964 78.3051 10.793C80.0154 9.76103 81.8967 9.24503 83.949 9.24503C85.8018 9.24503 87.4123 9.61769 88.7805 10.363C90.1772 11.0797 91.2889 11.9827 92.1155 13.072V9.63203H97.0326V33.325H92.1155V29.799C91.2889 30.917 90.163 31.8487 88.7377 32.594C87.3125 33.3394 85.6878 33.712 83.8635 33.712C81.8396 33.712 79.9868 33.196 78.3051 32.164C76.6233 31.1034 75.2836 29.6414 74.2859 27.778C73.3168 25.886 72.8322 23.7504 72.8322 21.371ZM92.1155 21.457C92.1155 19.823 91.7735 18.404 91.0894 17.2C90.4338 15.996 89.5644 15.0787 88.4812 14.448C87.398 13.8174 86.2293 13.502 84.9751 13.502C83.7209 13.502 82.5523 13.8174 81.4691 14.448C80.3859 15.05 79.5023 15.953 78.8182 17.157C78.1626 18.3324 77.8348 19.737 77.8348 21.371C77.8348 23.005 78.1626 24.4384 78.8182 25.671C79.5023 26.9037 80.3859 27.8497 81.4691 28.509C82.5808 29.1397 83.7494 29.455 84.9751 29.455C86.2293 29.455 87.398 29.1397 88.4812 28.509C89.5644 27.8784 90.4338 26.961 91.0894 25.757C91.7735 24.5244 92.1155 23.091 92.1155 21.457Z" fill="#F9FAFB"/>
                    <path d="M105.059 6.49303C104.176 6.49303 103.435 6.19203 102.836 5.59003C102.238 4.98803 101.938 4.24269 101.938 3.35403C101.938 2.46536 102.238 1.72003 102.836 1.11803C103.435 0.516027 104.176 0.215027 105.059 0.215027C105.915 0.215027 106.641 0.516027 107.24 1.11803C107.839 1.72003 108.138 2.46536 108.138 3.35403C108.138 4.24269 107.839 4.98803 107.24 5.59003C106.641 6.19203 105.915 6.49303 105.059 6.49303ZM107.454 9.63203V33.325H102.58V9.63203H107.454Z" fill="#F9FAFB"/>
                    <path d="M117.872 13.072C118.585 11.868 119.526 10.9364 120.694 10.277C121.892 9.58903 123.303 9.24503 124.927 9.24503V14.319H123.687C121.778 14.319 120.324 14.8064 119.326 15.781C118.357 16.7557 117.872 18.447 117.872 20.855V33.325H112.998V9.63203H117.872V13.072Z" fill="#F9FAFB"/>
                    <path d="M138.772 33.712C136.548 33.712 134.539 33.2104 132.743 32.207C130.947 31.175 129.536 29.7417 128.51 27.907C127.484 26.0437 126.971 23.8937 126.971 21.457C126.971 19.049 127.498 16.9134 128.553 15.05C129.607 13.1867 131.047 11.7534 132.871 10.75C134.695 9.74669 136.733 9.24503 138.985 9.24503C141.237 9.24503 143.275 9.74669 145.1 10.75C146.924 11.7534 148.363 13.1867 149.418 15.05C150.473 16.9134 151 19.049 151 21.457C151 23.865 150.458 26.0007 149.375 27.864C148.292 29.7274 146.81 31.175 144.929 32.207C143.076 33.2104 141.023 33.712 138.772 33.712ZM138.772 29.455C140.026 29.455 141.194 29.154 142.278 28.552C143.389 27.95 144.287 27.047 144.971 25.843C145.655 24.639 145.997 23.177 145.997 21.457C145.997 19.737 145.67 18.2894 145.014 17.114C144.358 15.91 143.489 15.007 142.406 14.405C141.323 13.803 140.154 13.502 138.9 13.502C137.646 13.502 136.477 13.803 135.394 14.405C134.339 15.007 133.498 15.91 132.871 17.114C132.244 18.2894 131.93 19.737 131.93 21.457C131.93 24.0084 132.572 25.9864 133.855 27.391C135.166 28.767 136.805 29.455 138.772 29.455Z" fill="#F9FAFB"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.3784 43C33.1854 43 42.7568 33.3741 42.7568 21.5C42.7568 20.4794 42.6861 19.4755 42.5493 18.4928C35.1789 12.4304 21.4853 21.5 21.4853 21.5C21.4853 21.5 29.1058 9.92033 35.9453 5.76346C32.1275 2.18758 27.007 0 21.3784 0C9.57143 0 0 9.62588 0 21.5C0 22.4493 0.0611806 23.3843 0.179793 24.3011C7.48803 30.7707 21.4853 21.5 21.4853 21.5C21.4853 21.5 13.7679 33.2269 6.89538 37.3147C10.7041 40.8443 15.7909 43 21.3784 43Z" fill="#F9FAFB"/>
                    </svg>
              </a>
              
            </div>
            <div className="ml-10 space-x-4 flex items-center">
              <div className="hidden mr-10 space-x-12 lg:block">
                {menu.navigationItems.map((item: any) => (
                  <a key={item.navigationItemLink.linkUrl} href={`/${item.navigationItemLink.linkUrl}`} className="text-lg font-medium text-cool-white hover:text-indigo-50">
                    {item.linkText}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="bg-white py-2 px-4 border border-transparent rounded-full text-lg font-semibold text-cool-black hover:bg-gray-5 flex items-center"
              >
                Find a unit
                <ArrowNarrowRightIcon className="w-6 h-6 ml-4" />
              </a>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {menu.navigationItems.map((item: any) => (
              <a key={item.navigationItemLink.linkUrl} href={item.navigationItemLink.linkUrl} className="text-lg font-medium text-cool-white hover:text-gray-5">
                {item.linkText}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
} 


export default Primarynavigationigation