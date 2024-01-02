import { ReactNode } from "react"

type Props = {
    children: ReactNode
    className?: string
}

const PageContainer = ({ children, className = '' }: Props) => (
    <div className={`absolute flex h-screen w-screen justify-center ${className}`}>
        {children}
    </div>
)

export default PageContainer
