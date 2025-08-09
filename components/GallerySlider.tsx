'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface GallerySliderProps {
    data: string[];
}

export default function GallerySlider({ data }: GallerySliderProps) {
    return (
        <ul className="h-[300px] w-full">
            <Swiper
                pagination={{ type: 'bullets', clickable: true }}
                autoplay={true}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
            >
                {data.map((item, ind) => (
                    <SwiperSlide key={ind + 1}>
                        <div
                            className="h-full w-full absolute left-0 top-0"
                            style={{
                                background: `url(${item}) center center / cover scroll no-repeat`,
                            }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ul>
    );
}
