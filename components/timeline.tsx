import { Chrono } from 'react-chrono'


const items = [
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:
            "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    },
    {
        title: "May 1942",
        cardTitle: "Dunkirk",
        cardSubtitle:
            "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    },
    {
        title: "May 1943",
        cardTitle: "Dunkirk",
        cardSubtitle:
            "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    },
    {
        title: "May 1944",
        cardTitle: "Dunkirk",
        cardSubtitle:
            "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    },
]

export default function Timeline() {

    return <div className="text-white lg:w-[1024px] overflow-hidden pb-24">
        <Chrono items={items} mode="VERTICAL" hideControls={true} cardHeight={100} cardWidth={300}
                theme={{
            primary: "white",
            secondary: "black",
            cardBgColor: "white",
            titleColor: "white",
            titleColorActive: "white",
        }} />
    </div>
}