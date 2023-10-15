import { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'


type Props = {
    href: string
    children: ReactNode
    className?: string
}

export default function ExternalALink({ href, children, className }: Props) {
    return (
        <a href={href} target="_blank" className={`hover:underline flex items-center ${className}`}>
            {children}
            <ExternalLink className="h-3 w-3 ml-2" />
        </a>
    )
}