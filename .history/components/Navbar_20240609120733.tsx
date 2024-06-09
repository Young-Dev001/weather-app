"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { github } from '@/app/utils/icons';
import { Button } from './ui/button';
import ThemeDropDown from './ThemeDropDown';
import SearchDialog from './SearchDialog';

function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-white border-gray-200 dark:bg-black flex items-center justify-between p-4">
      <div className="left">
        {/* Add your left side content here if needed */}
      </div>
      <div className="search-container flex gap-2 ml-auto items-center">
        <SearchDialog />
        <div className="btn-group">
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
