import { ReactNode } from 'react'


export const H2 = ({ children }: { children: ReactNode }) => (
    <h2 className="tracking-tighter max-sm:text-5xl text-6xl pr-2 font-bold">{children}</h2>
)

export const H4 = ({ children }: { children: ReactNode }) => (
    <h4 className="text-lg font-bold mb-2">{children}</h4>
)

export const Paragraph = ({ children }: { children: ReactNode }) => (
    <div className="mb-8">{children}</div>
)
