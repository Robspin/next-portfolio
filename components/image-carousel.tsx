import Slider from 'react-slick'
import Image from 'next/image'

type Props = {
    imageUrls: string[]
}

export default function ImageCarousel({ imageUrls }: Props) {
    return (
        <div className="mb-24 mt-16">
            <div className="relative w-full h-[400px]">
                <div className="absolute top-0 right-0 bottom-0 left-0">
                    <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
                        {imageUrls.map((img, index) => (
                            <div key={index} className="w-full h-[400px] relative">
                                <Image src={img} key={index} alt={`project image ${index}`} className="object-contain" fill />
                            </div>
                            )
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    )
}