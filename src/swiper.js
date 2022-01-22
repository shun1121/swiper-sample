// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import picA from './aaa.jpg'
import picB from './bbb.jpg'
import picC from './ccc.jpg'
import picD from './ddd.jpg'
// Import Swiper styles
import 'swiper/css';
import './swiper-component.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// SwiperCore.use([Autoplay, Pagination]);


const SwiperComponent = () => {
  return (
    <Swiper
    // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{disableOnInteraction: false}}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={picA} /></SwiperSlide>
      <SwiperSlide><img src={picB} /></SwiperSlide>
      <SwiperSlide><img src={picC} /></SwiperSlide>
      <SwiperSlide><img src={picD} /></SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent