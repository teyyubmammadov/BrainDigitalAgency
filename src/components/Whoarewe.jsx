import React, {useState} from 'react'
import { TbWorldQuestion } from "react-icons/tb";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'


const Whoarewe = () => {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <div className="whoarewe-section text-white">
      <div className="whoarewe  row">
        <div className="whoarewe-left-side col-12 col-md-6">
          <div className="whoarewe-info">
            <h1 className='mb-5 bizkimik text-center' >Biz kimik<TbWorldQuestion/></h1>
            <h3>Brain Digital Agency <img width={30} src="https://res.cloudinary.com/dlioaagoi/image/upload/v1691142404/Varl%C4%B1k_1-1080x1080w_evcukz.png" alt="" /> </h3>
            <p>Brain Rəqəmsal Agentliyi müştərilərə rəqəmsal marketinq, SEO və rəqəmsal reklam kampaniyaları yaratmaqda, məzmun istehsalı, sosial medianın idare edilməsi, vebsaytların dizaynı və inkişafı kimi rəqəmsal sahələrdə xidmətlər göstərən agentlikdir. Agentlik olaraq bizneslərin onlayn mövcudluğunu inkişaf etdirmək, onların rəqəmsal platformalarda görünməsini təmin etmək, müştəri cəlbini artırmaq və rəqəmsal marketinq strategiyaları yaratmaq üçün çalışır.</p>
          </div>
            <img width={200} height={10} className='' src="https://res.cloudinary.com/dlioaagoi/image/upload/v1691092442/minus_545760-removebg-preview_ga4u7o.png" alt="line" />
          <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div className="rating mt-4 row d-flex">
              <div className="ugurlu-layiheler col-md-6">
                <h5>Uğurlu layihələr</h5>
                {counterOn && <h1><CountUp start={0} end={113} duration={2} delay={0}/>+</h1>}
              </div>
              <div className="memnun-musteriler col-md-6">
                <h5>Məmnun müştərilər</h5>
                {counterOn && <h1><CountUp start={0} end={167} duration={2} delay={0}/>+</h1>}
              </div>
            </div>
          </ScrollTrigger>
        </div>
        <div className="whoarewe-right-side col-12 col-md-6">
          <img src="https://res.cloudinary.com/dlioaagoi/image/upload/v1690926738/home2_img_05_cvxuwf.webp" alt="who are we" />
        </div>
      </div>
    </div>
  )
}

export default Whoarewe