import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Autoplay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card'

type Props = { imageUrls: string[] }

export default function ImageCarousel({ imageUrls }: Props) {
    return (
        <div className="w-full lg:px-12 mb-24 mt-16 h-[400px] relative">
            <Carousel className="left-0 right-0 bottom-0 top-0" opts={{ loop: true }} plugins={[Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]}>
                <CarouselContent>
                    {imageUrls.map((img, index) => (
                        <CarouselItem key={index} className="cursor-pointer">
                            <Card className="flex items-center justify-center">
                                <CardContent className="aspect-square h-[200px] lg:h-[400px] relative">
                                    <Image src={img} key={index} alt={`project image ${index}`} className="object-contain" fill />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        )
                    )}
                </CarouselContent>
                <CarouselPrevious className="text-white" />
                <CarouselNext className="text-white" />
            </Carousel>
        </div>
    )
}