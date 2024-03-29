"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Github from '@/components/svgs/github'
import MusicPlayer from '@/components/music-player'
import LogoFull from '@/components/svgs/logo-full'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const getViews = async () => {
    try {
        return await (await fetch(`${process.env.NEXT_PUBLIC_VIEWS_API_URL}?key=next-portfolio`, { cache: 'no-store' })).json()
    } catch (e) {
        console.log(e)
    }
}

export default function TopNavbar() {
    return (
        <div className="absolute flex justify-between items-center w-full p-3 max-sm:pl-0 md:p-5">
            <PopoutMenu />
            <div className="flex items-center gap-1">
                <a href="https://github.com/Robspin" target="_blank">
                    <Github className="fill-white h-5 w-5 mt-[2px]" />
                </a>
                <MusicPlayer />
            </div>
        </div>
    )
}

const PopoutMenu = () => {
    const [viewCount, setViewCount] = useState<undefined | number>(undefined)

    useEffect(() => {
        ;(async () => {
            if (!viewCount) {
                const viewCount = await getViews()
                setViewCount(viewCount ?? 0)
            }
        })()
    }, [])

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <div className="text-white font-bold tracking-[0.2em] cursor-pointer">MORE</div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="space-y-3 p-6 w-[300px] md:w-[400px]">
                            <li className="mb-2 bg-stone-900 rounded py-4">
                                <NavigationMenuLink asChild>
                                    <LogoFull className="fill-stone-200" height={50} width={250}/>
                                </NavigationMenuLink>
                            </li>
{/*                             <ListItem href="https://blog.robinsteeman.com" title="Blog">
                                Link to my blog
                            </ListItem> */}
                            <ListItem href="https://robinsteeman.com/more/matrix" title="Enter the matrix">
                                A matrix experience with html canvas en javascript
                            </ListItem>
                            <ListItem href="https://snake-rho-nine.vercel.app/" title="Classic snake">
                                Snake made in vanilla Javascript
                            </ListItem>
                            {viewCount &&
                                <div className="flex justify-end text-sm leading-tight dark:text-dark-text-secondary">
                                    <p>
                                        {viewCount}x visits
                                    </p>
                                </div>}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    target="_blank"
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-900 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-stone-400">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
