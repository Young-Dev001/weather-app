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
        <Button type="button" className="source-code flex items-center gap-2  flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
            onClick={() =>  router.push("/github")}>
                {github}Source Code
        </Button>
    </div>
    </div>

  );
}

export default Navbar