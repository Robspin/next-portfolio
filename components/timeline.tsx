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
            {/*<a href="#"*/}
            {/*   className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">*/}
            {/*    <svg className="w-3.5 h-3.5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
            {/*         fill="currentColor" viewBox="0 0 20 20">*/}
            {/*        <path*/}
            {/*            d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>*/}
            {/*        <path*/}
            {/*            d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>*/}
            {/*    </svg>*/}
            {/*    Download ZIP</a>*/}
        </li>
    )
}



const timelineData: TimelineItemProps[] = [
    {
        title: "Technical Specialist at Rijnwoud, working on Skoda & Seat cars",
        timeframe: '2009 - 2018',
        description: 'From a rookie car mechanic to a certified Technical Specialist I learned how to find and fix mechanical and electronic issues',
        iconName: 'car'
    },
    {
        title: "Traveling and studying Japanese",
        timeframe: '2018 - March 2020',
        description: 'After quiting my previous job I decided to travel for a while. Eventually living in Japan for 14 months. And attending a language school for 9 months.',
        iconName: 'plane'
    },
    {
        title: "Learning front-end development & freelancing",
        timeframe: 'March 2020 - June 2021',
        description: 'Having attained conversational level Japanese, this gave me the confidence to pursue a new career path. I started learning front-end development from scratch. And after learning the basics moving to react. My goal was speedrun the path of becoming a developer. Looking back, I succeeded.',
        iconName: 'graduation-cap'
    },
    {
        title: "Front-end developer Tracefy",
        timeframe: 'June 2021 - December 2023',
        description: 'After building a decent portfolio containing past freelance projects. I got hired by Tracefy. Where I\'m still working today.',
        iconName: 'code'
    },
    {
        title: "Front-end developer as a Freelancer",
        timeframe: 'January 2024 - Now',
        description: 'I am currently working as a freelancer, interested in working together? Feel free to reach out.',
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