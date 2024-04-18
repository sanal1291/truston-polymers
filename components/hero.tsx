import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import VideoThumb1 from '@/public/images/VID-1-thumb.png'
import VideoThumb2 from '@/public/images/VID-2-thumb.png'
import Hero1 from '@/public/images/hero-1.png'
import Hero2 from '@/public/images/hero-2.jpg'
import Hero3 from '@/public/images/hero-3.png'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Slider from "react-slick";
import Image from 'next/image'

const images = [
  {
    original: Hero1,
    thumbnail: Hero1.src,
    thumbnailHeight: 100,
    originalHeight: 300,
  },
  {
    original: Hero2,
    thumbnail: Hero2.src,
    thumbnailHeight: 100,
    originalHeight: 300,
  },
  {
    original: Hero3,
    thumbnail: Hero3.src,
    thumbnailHeight: 100,
    originalHeight: 300,
  },
];

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
};
export default function Hero() {
  return (
    <section id="home" className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-6 md:pt-40 md:pb-10">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Welcome to Truston Polymers & Engineering Components
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span> */}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-2" data-aos="zoom-y-out" data-aos-delay="150">Truston Polymers is engaged in manufacturing, Processing and Design   Polymer rods, Sheets, high-performance Components & profiles. We also stocks wide range of Engineering Plastic Products to meet the requirements of our customers. </p>
              {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div> */}
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper h-[60vh]"
          >{images.map(image =>
            <SwiperSlide key={image.thumbnail} className="relative">
              <Image src={image.original} fill
                style={{ objectFit: "contain" }} alt='asdasd'>
              </Image>
            </SwiperSlide>)}
          </Swiper>

          {/* Hero image */}

          {/* <div className='flex flex-wrap justify-center'>
            <div className='p-2' data-aos="zoom-y-out">
              <ModalVideo
                thumb={VideoThumb1}
                thumbWidth={240}
                thumbHeight={416}
                thumbAlt="Modal video thumbnail"
                video="/videos/VID-1.mp4"
                videoWidth={480}
                videoHeight={832} />
            </div>
            <div className='p-2' data-aos="zoom-y-out">
              <ModalVideo
                thumb={VideoThumb2}
                thumbWidth={240}
                thumbHeight={416}
                thumbAlt="Modal video thumbnail"
                video="/videos/VID-2.mp4"
                videoWidth={480}
                videoHeight={832} />
            </div>
          </div> */}
          {/* <div className="slider-container">
            <Slider {...settings} className="flex align-bottom">
              {images.map(image =>
                <Image key={image.thumbnail} width={300} src={image.original} className="p-5  " alt='asdasd'>
                </Image>)}
            </Slider>
          </div> */}
          {/* <div className=''>

            <div className='p-5' data-aos="fade-up" data-aos-delay="200">
              <Image src={Hero2} height={300} alt='hero1'></Image>
            </div>
            <div className='p-5' data-aos="fade-up" data-aos-delay="200">
              <Image src={Hero1} height={300} alt='hero1'></Image>
            </div>
            <div className='p-5' data-aos="fade-up" data-aos-delay="200">
              <Image src={Hero3} height={300} alt='hero1'></Image>
            </div>
          </div> */}

        </div>

      </div>
    </section >
  )
}