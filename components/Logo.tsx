import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'


const Logo = ({clasName, spanDesign}: {clasName?:string, spanDesign?:string}) => {
  return <Link href={"/"}>
    <h2 className={cn("text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",clasName)}>
        Shop24<span className={cn("text-shop_light_green group-hover:text-shop_dark_green hoverEffect", spanDesign)}>h</span>
    </h2>
  </Link>
}

export default Logo