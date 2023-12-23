import Slider from 'react-slick'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

type Props = {
    imageUrls: string[]
}

export default function ImageCarousel({ imageUrls }: Props) {
    return (
        <div className="mb-24 mt-16">
            <div className="relative w-full h-[400px]">
                <div className="absolute top-0 right-6 bottom-0 left-6">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="cursor-pointer">
                                <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
                                    {imageUrls.map((img, index) => (
                                        <div key={index} className="w-full h-[400px] relative">
                                            <Image src={img} key={index} alt={`project image ${index}`} className="object-contain" fill />
                                        </div>
                                        )
                                    )}
                                </Slider>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <div className="relative w-full h-[85vh]">
                                <div className="absolute top-0 right-6 lg:right-16 bottom-0 left-6 lg:left-16 slider-styles-white">
                                    <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} dotsClass="slick-dots custom-dots">
                                        {imageUrls.map((img, index) => (
                                                <div key={index} className="w-full h-[85vh] relative">
                                                    <Image src={img} key={index} alt={`project image ${index}`}
                                                           className="object-contain" fill/>
                                                </div>
                                            )
                                        )}
                                    </Slider>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
)
}