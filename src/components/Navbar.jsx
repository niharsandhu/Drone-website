import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { HiChip } from "react-icons/hi";
import logo from '../assets/20240718_133407.png';
import newLogo from '../assets/menu.png';
import { TbDrone } from "react-icons/tb";
import { FaCamera ,FaFan,FaCarBattery} from "react-icons/fa";
import { LuRadioTower } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { AiOutlineBoxPlot } from "react-icons/ai";
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
    return () => {
      window.removeEventListener('scroll', onNavScroll);
    };
  }, []);

  const toggleSearch = () => {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('show-search');
  };

  return (
    <header className={
      !navState ? 'absolute top-3 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
    }>
      <nav className='flex items-center justify-between nike-container'>
        <div className='flex items-center'>
          <img
            src={logo}
            alt="logo"
            className={`w-11 h-auto ${navState && "filter brightness-0"}`}
          />
        </div>
        <ul className='flex items-center justify-center gap-2'>
          <li className='grid items-center'>
            <div className="search" id="search-bar">
              <input type="text" className="search__input" placeholder="Search..." />
              <button className="search__button" id="search-button" onClick={toggleSearch}>
                <MagnifyingGlassIcon className="search__icon" />
                <span className="search__close">&times;</span>
              </button>
            </div>
          </li>
          <li className='grid items-center'>
            <img
              src={newLogo}
              alt="new logo"
              className={`w-5 h-auto cursor-pointer ${navState && "filter brightness-0"}`}
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute top-10 right-2 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20 backdrop-blur-lg bg-opacity-40">
                <a href="electronics.html" className="block px-4 py-2 text-gray-800 hover:bg-slate-50 hover:text-black">
                   < HiChip className="w-6 h-6 inline-block mr-2" />
                  Electronics
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-slate-50 hover:text-black">
                  <TbDrone className="w-6 h-6 inline-block mr-2" />
                  Frames
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-slate-50 hover:text-black">
                  <FaCamera alt="Camera" className="w-6 h-6 inline-block mr-2" />
                  Camera
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-slate-50 hover:text-black">
                  <AiOutlineBoxPlot alt="Motors" className="w-6 h-6 inline-block mr-2" />
                  Motors
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-slate-50 hover:text-black">
                  <FaCarBattery alt="Battery" className="w-6 h-6 inline-block mr-2" />
                  Battery
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-slate-50 hover:text-black">
                  <LuRadioTower alt="Radio" className="w-6 h-6 inline-block mr-2" />
                  Radio
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-slate-50 hover:text-black">
                  <BsTools alt="Accessories" className="w-6 h-6 inline-block mr-2" />
                  Accessories
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-slate-50 hover:text-black">
                  <FaFan alt="Propellors" className="w-6 h-6 inline-block mr-2" />
                  Propellors
                </a>
              </div>
            )}
          </li>
          <li className='grid items-center'>
            <HeartIcon className={`icon-style w-5 h-auto ${navState && "text-slate-900 transition-all duration-300"}`} />
          </li>
          <li className='grid items-center relative'>
            <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
              <ShoppingBagIcon className={`icon-style w-5 h-auto ${navState && "text-slate-900 transition-all duration-300"}`} />
              <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{totalQTY}</div>
            </button>
          </li>
          <li className='grid items-center'>
            <a href="src/form.html" target="_blank">
              <UserCircleIcon className={`icon-style w-5 h-auto ${navState && "text-slate-900 transition-all duration-300"}`} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;




