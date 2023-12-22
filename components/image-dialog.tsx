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
                <div className="cursor-pointer">
                    {children}
                </div>
            </DialogTrigger>
            <DialogContent>
                <div className="h-[90vh] relative">
                    <Image src={src} alt={alt} className="object-contain" fill />
                </div>
            </DialogContent>
        </Dialog>
    )
}
