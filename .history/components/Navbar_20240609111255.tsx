"use client"
import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { github } from '@/app/utils/icons';
import ThemeDropDown from '@/ThemeDropDown/ThemeDropDown';

function Navbar() {
const router = useRouter()

  return (
    <div className="w-full py-4 justify-between items-center">
    <div className="left"></div>
    <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
    <ThemeDropDown />
        <Button type="button" className="source-code flex items-center gap-2" 
            onClick={() =>  router.push("/github")}>
                {github}Source Code
        </Button>
    </div>
    </div>

  );
}

export default Navbar