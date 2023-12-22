import Slider from 'react-slick'
import Image from 'next/image'

type Props = {
    imageUrls: string[]
}

export default function ImageCarousel({ imageUrls }: Props) {
    return (
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
            {imageUrls.map((img, index) => (
                <div key={index} className="w-full h-[400px] relative">
                    <Image src={img} key={index} alt={`project image ${index}`} className="object-contain" layout="fill" />
                </div>
                )
            )}
        </Slider>
    )
}