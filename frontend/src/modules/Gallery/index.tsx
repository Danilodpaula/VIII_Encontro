import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import { GalleryContainer, Title, CarouselWrapper, Caption } from "./styles";
import { galleryData } from "./gallery-data";

const Gallery: React.FC = () => {
  return (
    <GalleryContainer>
      <Title>Galeria de Fotos</Title>
      <CarouselWrapper>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={10}
          slidesPerView={1}
        >
          {galleryData.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
                {/* {item.caption && <Caption>{item.caption}</Caption>} */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
