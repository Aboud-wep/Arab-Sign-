import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import mainIcon from '../assets/Icons/Main icon.png'
import mediaIcon from '../assets/Icons/Media icon.png'
import arabsignIcon from '../assets/Icons/Arab Sign.png'

const Header = () => {
  return (
    <Disclosure
      as="header"
      className="bg-gradient-to-r from-[#1B375F] via-[#0153A5] to-[#0153A5] font-janna"
    >
      {({ open }) => (
        <>
          <div className="flex items-center justify-between p-4 lg:h-[227px] ">
            
            <div className="items-center mx-5 sm:space-x-0 ">
              <img
                src={arabsignIcon}
                alt="Arab Sign icon"
                className="h-[80px]  lg:h-[103px]"
              />
              <p className="font-bold text-white text-[22px]  lg:text-[28px]">
                إشارة عربي
              </p>
            </div>

            <ul className="justify-center flex-1 hidden lg:flex">
              <li className="hover:bg-[#1B375F] focus:bg-[#1B375F] rounded-md p-2">
                <Link to="/Home" className="flex flex-col items-center">
                  <img
                    src={mainIcon}
                    alt="Main icon"
                    className="h-[60px] sm:h-[70px] lg:h-[76px]"
                  />
                  <h1 className="mt-2 font-bold text-white text-[22px] sm:text-[24px] lg:text-[26px]">
                    الرئيسية
                  </h1>
                </Link>
              </li>
              <li className="hover:bg-[#1B375F] focus:bg-[#1B375F] rounded-md p-2">
                <Link to="/content" className="flex flex-col items-center">
                  <img
                    src={mediaIcon}
                    alt="Media icon"
                    className="h-[60px] sm:h-[70px] lg:h-[76px]"
                  />
                  <h1 className="mt-2 font-bold text-white text-[22px] sm:text-[24px] lg:text-[26px]">
                    المحتوى المرئي
                  </h1>
                </Link>
              </li>
            </ul>

            <div className="flex-1 sm:mx-4 md:mx-6 lg:flex-none lg:ml-6 lg:w-[463px]">
              <input
                type="text"
                placeholder="ابحث..."
                className="w-full h-[40px] sm:h-[48px] lg:h-[60px] text-white placeholder-white bg-transparent border border-white rounded-full px-4"
              />
            </div>

            <div className="mx-5 lg:hidden">
              <Disclosure.Button className="p-2 text-white rounded-md focus:outline-none ">
                {open ? (
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          
          <Disclosure.Panel
            className={ `transition-all duration-300 ease-in-out origin-top transform lg:hidden ${
              open ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <ul className="p-4 space-y-2">
              <li>
                <Link to="/Home" className="block text-lg text-white hover:bg-[#1B375F]">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/content" className="block text-lg text-white hover:bg-[#1B375F]">
                  المحتوى المرئي
                </Link>
              </li>
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header