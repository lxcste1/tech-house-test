"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@mui/base/Button';
import { menuItems } from '../utils/utils';

import '@/app/styles/header.scss';

export const SubMenu: React.FC = () => {
    const pathname = usePathname();
  
    return (
      <div className="relative flex md:justify-center gap-10 px-5 overflow-x-auto whitespace-nowrap scrollbar-hide shadow-md w-full">
        {menuItems.map(({ label, path }) => (
          <Link key={label} href={path} className={`${pathname === path ? 'active' : ''}`}>
            <Button
              className={`flex items-center mx-2 h-[50px] text-base normal-case ${pathname === path ? 'bg-white text-primary-main font-bold' : 'text-neutral-60 font-semibold'}`}
            >
              {label}
            </Button>
          </Link>
        ))}
      </div>
    );
  };
  
  export default SubMenu;
