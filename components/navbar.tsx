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

import MusicPlayer from '@/components/music-player'
import Logo from '@/components/logo'


export default function Navbar() {
    return (
        <div className="absolute flex justify-between items-center w-full p-3 max-sm:pl-0 md:p-5">
            <PopoutMenu />
            <MusicPlayer />
        </div>
    )
}

const PopoutMenu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <div className="text-white font-bold tracking-[0.2em] cursor-pointer">MORE</div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 w-[300px] md:w-[400px]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <div
                                        className="h-full w-full select-none flex-col rounded-md bg-gradient-to-br from-stone-900 to-stone-950 p-4 no-underline outline-none focus:shadow-md"
                                    >
                                        <div className="flex items-center">
                                            <Logo height={50} width={50} />
                                            <div className="ml-4">
                                                <div className="mt-1 text-lg font-medium">
                                                Robin Steeman
                                                </div>
                                                <p className="text-sm leading-tight dark:text-dark-text-secondary">
                                                    I write javascript
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="https://blog.robinsteeman.com" title="Blog">
                                Link to my blog
                            </ListItem>
                            {/*<ListItem href="/docs/installation" title="Installation">*/}
                            {/*    How to install dependencies and structure your app.*/}
                            {/*</ListItem>*/}
                            {/*<ListItem href="/docs/primitives/typography" title="Typography">*/}
                            {/*    Styles for headings, paragraphs, lists...etc*/}
                            {/*</ListItem>*/}
                            <div className="flex justify-end text-sm leading-tight dark:text-dark-text-secondary">
                                <p>
                                    100x visits
                                </p>
                            </div>
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
>(({ className, title, children, ...props }, ref) => {
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
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
