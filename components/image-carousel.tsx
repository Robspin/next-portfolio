import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card'
import { ImageDialog } from '@/components/image-dialog'
import { useEffect, useState } from 'react'

type Props = { imageUrls: string[] }

export default function ImageCarousel({ imageUrls }: Props) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="w-full lg:px-12 mb-24 mt-16 xl:h-[400px] relative">
            <div className="left-0 right-0 bottom-0 top-0 max-lg:mx-8">
                <Carousel setApi={setApi} opts={{loop: true}}
                          plugins={[Autoplay({delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true})]}>
                    <CarouselContent>
                        {imageUrls.map((img, index) => (
                                <CarouselItem key={index}>
                                    <Card>
                                        <ImageDialog src={img} alt={`Project image ${index}`}>
                                            <CardContent className="h-[264px] md:h-[400px] relative">
                                                <Image src={img} key={index} alt={`project image ${index}`}
                                                       className="object-contain" fill/>
                                            </CardContent>
                                        </ImageDialog>
                                    </Card>
                                </CarouselItem>
                            )
                        )}
                    </CarouselContent>
                    <CarouselPrevious className="text-white"/>
                    <CarouselNext className="text-white"/>
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground">
                    Image {current} of {count}
                </div>
            </div>
        </div>
    )
}