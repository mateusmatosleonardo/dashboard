'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ActiveLinkrops {
  href: string
  title: string
  icon: ReactNode
}

export const ActiveLink = ({ href, title, icon: Icon }: ActiveLinkrops) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href}>
      <div className={`flex items-center gap-x-2 hover:border-l-2 border-gray-400 cursor-pointer pl-2 ${isActive ? 'border-l-2 border-gray-400' : ''}`}>
        {Icon}
        <p className='text-gray-400 py-2'>
          {title}
        </p>
      </div>
    </Link>
  );
};