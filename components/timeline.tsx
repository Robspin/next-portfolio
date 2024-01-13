import LucideIcon, { IconProps } from '@/components/svgs/lucide-icon'

type TimelineItemProps = {
    title: string
    timeframe: string
    description: string
    iconName: IconProps['name']
}



const TimelineItem = ({ title, timeframe, description, iconName }: TimelineItemProps) => {

    return (
        <li className="mb-10 ml-6">
            <span
                className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-400">
                <LucideIcon name={iconName} size={16} color="black" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{timeframe}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
        </li>
    )
}



const timelineData: TimelineItemProps[] = [
    {
        title: "Technical Specialist at Rijnwoud, working on Skoda & Seat cars",
        timeframe: '2009 - 2018',
        description: 'From a rookie car mechanic to a certified Technical Specialist I learned how to find and fix mechanical and electronic issues.',
        iconName: 'car'
    },
    {
        title: "Traveling and studying Japanese",
        timeframe: '2018 - March 2020',
        description: 'After quiting my previous job I decided to travel for a while. Eventually living in Japan for 14 months. And attending a language school for 9 months.',
        iconName: 'plane'
    },
    {
        title: "Learning front-end development and freelancing",
        timeframe: 'March 2020 - June 2021',
        description: 'Having attained conversational level Japanese, this gave me the confidence to pursue a new career path. I started learning front-end development from scratch. And after learning the basics moving to react. My goal was speedrun the path of becoming a developer. After building several small projects I started freelancing and building a portfolio.',
        iconName: 'graduation-cap'
    },
    {
        title: "Front-end developer at Tracefy",
        timeframe: 'June 2021 - December 2023',
        description: 'Despite having no formal development degree, Tracefy liked me and my portfolio enough to hire me. This is where I attained the bulk of my developer experience. And I still do freelancing work for them to this day.',
        iconName: 'code'
    },
    {
        title: "Front-end developer at R Steeman Software Development",
        timeframe: 'January 2024 - Now',
        description: 'I started my own company! interested in working together? Feel free to reach out.',
        iconName: 'code'
    },
]


export default function Timeline() {
    return (
        <div className="text-white lg:w-[1024px] overflow-hidden animate-appear pb-24 pl-8 pt-2">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {timelineData.map(({ title, timeframe, description, iconName }, index) => <TimelineItem key={title} title={title} timeframe={timeframe} description={description} iconName={iconName} />)}
            </ol>
        </div>
    )
}