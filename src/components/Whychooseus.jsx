import React, {useEffect} from 'react'
import Aos from 'aos';

const Whychooseus = () => {

    useEffect(() => {
        Aos.init({
          duration : 1000
        });
      }, []);

    return (

        <div className='whychooseus-section'>
            <div className="whychooseus align-items-center row">
                <div className="whychooseus-top-side">
                    <h5 className='text-center m-0 pt-2 pb-3'>Niyə bizi seçin</h5>
                    <h2 className='text-center'>Biz nə təklif edirik <img width={50} src="https://res.cloudinary.com/dlioaagoi/image/upload/v1691437608/feed_9474387_i8abd6.png" alt="" /></h2>
                </div>
                <div className="why-left-side col-12 col-md-6" data-aos="fade-up-right">
                    <img className='pe-3 pb-5 why-left-img' src="https://res.cloudinary.com/dlioaagoi/image/upload/v1690926738/64-scaled_kv8aud.webp" alt="marketing-img" />
                </div>
                <div className="why-right-side col-12 col-md-6">
                    <div className="why-digital-section p-2 mb-2 " data-aos="zoom-in">
                        <img className='pe-2 digital-img' src="https://res.cloudinary.com/dlioaagoi/image/upload/c_scale,w_100/v1690978302/social-media_2518048_srudxm.png" />
                            <span className='digital-info-1'>Rəqəmsal Marketinq</span>
                            <p className='digital-info-2'>Azərbaycanda aparıcı marketinq agentliyi olaraq BRAIN Digital Agency-da biz yüksək keyfiyyətli rəqəmsal marketinq həlləri təklif edirik ki, brendləri inanılmaz gəlir artımı ilə gücləndiririk, buna görə də şirkətlərə nəticəyönümlü işlərin icrası və tətbiqi ilə sürətlə, davamlı və genişlənə bilən səviyyədə genişlənməsinə kömək edirik. təşəbbüslər. Çətin problemlərin hərtərəfli həlli bizim daim inkişaf edən problemləri qarşılamaq üçün açarımızdır.</p>
                    </div>
                    <div className="why-reputasiya-section p-2 mb-2" data-aos="zoom-in">
                        <img className='pe-2 reputasiya-img' src="https://res.cloudinary.com/dlioaagoi/image/upload/c_scale,w_100/v1690978054/best-employee_3782461_sjqlnd.png" />
                            <span className='reputasiya-info-1'>Reputasiya İdarəetmə</span>
                            <p className='reputasiya-info-2'>Biz daha geniş auditoriya arasında brendinizə inamı gücləndirir və brendinizin optimist imicini və onlayn reputasiyasını təbliğ edirik. Nəyə qarşı çıxmağınızdan asılı olmayaraq, onlayn reputasiyanın idarə edilməsinə fərqli yanaşmamız əlverişli, uzunmüddətli axtarış profili yaradır. Dərhal probleminizi həll etmək və axtarış nəticələrinizi potensial təhlükələrdən qorumaq üçün mütəxəssislərimiz bunun üçün fərdi yanaşma yaradır.</p>
                    </div>
                    <div className="why-kampaniya-section p-2" data-aos="zoom-in">
                        <img className='pe-2 kampaniya-img' src="https://res.cloudinary.com/dlioaagoi/image/upload/c_scale,h_100,w_100/v1690976597/ankara-web-tasarim-fiyat-listesi_q8timr.avif" />
                            <span className='kampaniya-info-1'>Kampaniya İdarəetmə</span>
                            <p className='kampaniya-info-2'>Biznes tələblərinizə uyğun olaraq kampaniyalar həyata keçiririk. Müəssisələr istehlakçı tələbinə cavab olaraq yeni məhsullar hazırladıqları üçün deyil, istehlakçıları öz məhsuluna ehtiyac duyduqlarına inandıra bildikləri üçün uğur qazana bilmirlər. Unikal məhsul yaratmaq vacibdir, lakin fərqli marketinq strategiyası yaratmaq bütün bunları üstələyir. Bu təşəbbüslər brendin reputasiyasına nail ola və ya sındıra bilər.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Whychooseus