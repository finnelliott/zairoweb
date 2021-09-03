import { FC } from "react"

const PrimaryFooter: FC<{}> = () => {
    const navigation = {
        solutions: [
          { name: 'Marketing', href: '#' },
          { name: 'Analytics', href: '#' },
          { name: 'Commerce', href: '#' },
          { name: 'Insights', href: '#' },
        ],
        support: [
          { name: 'Pricing', href: '#' },
          { name: 'Documentation', href: '#' },
          { name: 'Guides', href: '#' },
          { name: 'API Status', href: '#' },
        ],
        company: [
          { name: 'About', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Jobs', href: '#' },
          { name: 'Press', href: '#' },
          { name: 'Partners', href: '#' },
        ],
        legal: [
          { name: 'Claim', href: '#' },
          { name: 'Privacy', href: '#' },
          { name: 'Terms', href: '#' },
        ],
        
      }

    return (
        <footer className="bg-cool-black" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img
                className="h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
                alt="Company name"
              />
              <p className="text-cool-white text-base">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-cool-white tracking-wider uppercase">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-4 hover:text-gray-5">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-cool-white tracking-wider uppercase">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-4 hover:text-gray-5">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-cool-white tracking-wider uppercase">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-4 hover:text-gray-5">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-cool-white tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-4 hover:text-gray-5">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-4 xl:text-center">&copy; 2020 Workflow, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
} 


export default PrimaryFooter
