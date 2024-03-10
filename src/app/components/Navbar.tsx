'use client'

import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from 'next/image'
import { Fragment, useEffect, useRef, useState } from "react";
import Logo from "../../../public/top_logo.png"

interface NavObject {
    path: string,
    name: string,
}

const navItems: NavObject[] = [
    { path: '/about', name: 'About Me' },
    { path: '/services', name: 'Services' },
    { path: '/areas-served', name: 'Areas Served' },
    { path: '/resources', name: 'Resources' },
    { path: '/clients', name: 'Happy Clients' },
  ];

export default function Navbar() {
  // State to control if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu

    // Close the menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
          }
        };
      
        // Listen for both mouse and touch events
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
      
        return () => {
          // Clean up both event listeners
          document.removeEventListener("mousedown", handleClickOutside);
          document.removeEventListener("touchstart", handleClickOutside);
        };
      }, [menuRef]);

  return (
    <nav className="bg-transparent text-white p-4 top-0 absolute w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <Link href="/" className="text-xl font-bold lg:pl-14 xl:pl-20">
          <Image
            src={Logo}
            // width={137}
            // height={48}
            alt="Tiffany Logo"
            className="w-[137px] h-auto md:w-[200px] 4k:w-[250px]"
          />
        </Link>
        <div className="hidden text-white lg:flex lg:flex-end lg:visible lg:space-x-10 pr-20 xl:text-xl">
          {
            navItems.map((item, i) => (
              <Link
                key={`${item.path}-pc`}
                href={item.path}
                className="hover:text-gray-400"
              >
                {item.name}
              </Link>
            ))
          }
        </div>
        {/* Mobile */}
        {/* Hamburger menu on the right */}
        <div className="relative lg:hidden">
            <Menu>
          <Menu.Button
            className="flex items-center px-3 py-2 border rounded text-white border-white uppercase text-xs font-bold hover:text-white hover:border-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
              Menu
              <Bars3Icon className="h-6 w-6 text-white ml-1" />
          </Menu.Button>
          </Menu>
        </div>
      </div>

      {/* Sliding menu */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        as={Fragment}
      >
        <div ref={menuRef} className="fixed top-0 right-0 h-full w-3/4 md:w-1/2 bg-primary-dark text-white font-bold shadow-xl z-50">
          <div className="flex flex-col items-start justify-start p-4">
          <Link href="/" className="text-xl font-bold pb-4" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/top_logo.png"
                  width={205.5}
                  height={72}
                  alt="Tiffany Logo"
                />
              </Link>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg py-2">
                  {item.name}
              </Link>
            ))}
          </div>
          <div className="absolute bottom-2 right-2">
          <Image 
                  src="/liz_moore.png"
                  width={75}
                  height={75}
                  alt="Liz Moore logo"
                />
          </div>
        </div>
      </Transition>
    </nav>
    // Regular
  )
}
