import { ReactNode } from 'react'


type Props = {
    children: ReactNode
    className?: string
}

export default function EndlessText({ children, className }: Props) {
    return (
        <div className={`w-full overflow-hidden ${className}`}>
            <div className="whitespace-nowrap overflow-hidden inline-block animate-endless-scroll">
                 <p className="inline-block mr-2">
                    {children}
                 </p>
                 <p className="inline-block">
                    {children}
                 </p>
            </div>
        </div>
    )
}