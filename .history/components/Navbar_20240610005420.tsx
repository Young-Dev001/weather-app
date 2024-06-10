"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { github } from '@/app/utils/icons';
import { Button } from './ui/button';
import ThemeDropDown from './ThemeDropDown';
import SearchDialog from './SearchDialog';
import { useGlobalContext } from '@/app/context/globalContext';

function Navbar() {
  const router = useRouter();
  const contextState = useGlobalContext();
  console.log(contextState);

  return (
    <div className="bg-white border-gray-200 dark:bg-black flex items-center justify-between p-4">
      <div className="left">
        {/* Optionally add content here */}
      </div>
      <div className="search-container flex gap-2 ml-auto items-center">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <ThemeDropDown />
          <Button 
            type="button" 
            className="source-code flex items-center gap-2" 
            onClick={() => router.push("/github")}
          >
            {github} Source Code
          </Button>
        </div>        
      </div>
    </div>
  );
}

export default Navbar;
