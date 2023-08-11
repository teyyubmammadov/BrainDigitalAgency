import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import slide1 from '../assets/images/intro-slides/slide1.svg'
import slide2 from '../assets/images/intro-slides/slide2.svg'


const Introduction = () => {

  return (
    <div className='sviperler'>

    <Swiper
        speed={3000}
        autoplay={{delay:1700}}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
            <div className="swiperslide1 row">
                <div className="slide1-left col-12 col-md-5"> 
                    <h1>Strategiya və planlaşdırma bizim fəlsəfəmizin əsaslarıdır</h1>
                    <h5>Biz bütün iqtisadi göstəriciləri hesablayırıq <br/> və reklam kampaniyasının mümkünlüyünü təqdim edirik</h5>
                    <button type="button" class="btn btn-warning border border-danger howit1">Necə işləyirik?</button>
                </div>
                <img className='slideimg1 p-0 col-12 col-md-7' src={slide1}/>
            
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiperslide2 row">
                    <div className="slide2-left col-12 col-md-5">
                        <h1>Biznesinizi inkişaf etdirmək üçün mükəmməl performans göstərin</h1>
                        <h5>Müştəri dəstəyiniz üçün mükəmməl mövzu proqramı hazırlayırıq</h5>
                        <button type="button" class="btn btn-warning border border-danger howit2">Müraciət et</button>
                    </div>
                    <img className='slideimg2 p-0 col-12 col-md-7' width={800} src={slide2}/>
                
                </div>
        </SwiperSlide>
        
      </Swiper>
     
    </div>
  )
}

export default Introduction