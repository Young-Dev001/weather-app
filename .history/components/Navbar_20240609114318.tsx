"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { github } from '@/app/utils/icons';
import { Button } from './ui/button';
import ThemeDropDown from './ThemeDropDown';

function Navbar() {
const router = useRouter()

  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="left"></div>
    <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
    <ThemeDropDown />
        <Button type="button" className="source-code flex items-center gap-2 text-sm bg-gray-800  md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
            onClick={() =>  router.push("/github")}>
                {github}Source Code
        </Button>
    </div>
    </div>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
      </button>
      </div>
      </div>

  );
}

export default Navbar