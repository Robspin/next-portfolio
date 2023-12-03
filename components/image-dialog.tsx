import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
    children: ReactNode
    src: string
    alt: string
}

export function ImageDialog({ src, alt, children }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button>
                    {children}
                </button>
            </DialogTrigger>
            <DialogContent>
                <div className="h-[90vh] relative">
                    <Image src={src} alt={alt} className="object-contain" layout="fill" />
                </div>
            </DialogContent>
        </Dialog>
    )
}
