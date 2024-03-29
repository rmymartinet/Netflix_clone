import { useState, useCallback, useEffect } from 'react'
import NavBarItem from './NavBarItem'
import MobileMenu from './MobileMenu'
import { FiChevronDown } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import AccountMenu from './AccountMenu';

const TOP_OFFSET = 66;




const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > TOP_OFFSET) {

                setShowBackground(true)

            } else {
                setShowBackground(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu(currentValue => !currentValue)
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu(currentValue => !currentValue)
    }, [])


    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
            
            `}>
                <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavBarItem label='Home' />
                    <NavBarItem label='Series' />
                    <NavBarItem label='Films' />
                    <NavBarItem label='New & Popular' />
                    <NavBarItem label='My List' />
                    <NavBarItem label='Browse by languages' />
                </div>
                <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer'>
                    <p className='text-white text-sm'>Browse</p>
                    <FiChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className='flex flex-row ml-auto gap-7 items-center'>
                    <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
                        <BsSearch />
                    </div>
                    <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
                        <BsBell />
                    </div>

                    <div onClick={toggleAccountMenu} className='flex flex-row items-center gap-2 cursor-pointer relative'>
                        <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                            <img src="/images/default_green.png" alt="Logo" />
                        </div>
                        <FiChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default NavBar