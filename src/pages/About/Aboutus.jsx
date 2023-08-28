import "./Aboutus.css"
import aboutimg from "./about.jpg"
import React, { useState, useEffect } from 'react'
import { TbWorldQuestion } from "react-icons/tb";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import Aos from 'aos';
import PartnyorCompanies from "../PartnyorCompany/PartnyorCompanies";
import Footer from "../../components/Footer";
import Workers from "../../components/Workers";

const Aboutus = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, []);
   
  const [counterOn, setCounterOn] = useState(false)

  return (
    <>
      <h1 className='about-text center-text text-white'>Haqqımızda <img width={70} src="https://res.cloudinary.com/dlioaagoi/image/upload/v1693048525/About-Us-PNG-Photos_vtexu3.png" alt="" data-aos="fade-down" /></h1>
      <div className="container">
        <div className="aboutus">
          <img className='aboutimg' src={aboutimg} alt="" data-aos="fade-right"/>
          <img className='sirketlogo' src="https://res.cloudinary.com/dlioaagoi/image/upload/v1690826134/fiw6vwxltoqzbirdxh1i-removebg-preview_xkt7pc.png" alt="" data-aos="fade-right"/>
        </div>
      </div>

      {/* biz kimik whoarewe */}
      <div className="whoarewe-section text-white">
      <div className="whoarewe  row">
        <div className="whoarewe-left-side col-12 col-md-6">
          <div className="whoarewe-info">
            <h1 className='mb-5 bizkimik center-text' >Biz kimik<TbWorldQuestion /></h1>
            <h3>Brain Digital Agency <img width={30} src="https://res.cloudinary.com/dlioaagoi/image/upload/v1691142404/Varl%C4%B1k_1-1080x1080w_evcukz.png" alt="" /> </h3>
            <p>Brain Rəqəmsal Agentliyi müştərilərə rəqəmsal marketinq, SEO və rəqəmsal reklam kampaniyaları yaratmaqda, məzmun istehsalı, sosial medianın idare edilməsi, vebsaytların dizaynı və inkişafı kimi rəqəmsal sahələrdə xidmətlər göstərən agentlikdir. Agentlik olaraq bizneslərin onlayn mövcudluğunu inkişaf etdirmək, onların rəqəmsal platformalarda görünməsini təmin etmək, müştəri cəlbini artırmaq və rəqəmsal marketinq strategiyaları yaratmaq üçün çalışır.</p>
          </div>
          {/* <img width={200} height={10} className='' src="https://res.cloudinary.com/dlioaagoi/image/upload/v1691092442/minus_545760-removebg-preview_ga4u7o.png" alt="line" /> */}
          <div data-aos="fade-down-right" className="ratingm d-flex">
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="Mükəmməl" for="star5"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="Qənaətbəxş" for="star4"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="Orta" for="star3"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="Kafi" for="star2"></label>
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="Çox pis" for="star1"></label>
          </div>
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="rating mt-4 row d-flex">
              <div className="ugurlu-layiheler col-md-6" data-aos="zoom-in">
                <h5>Uğurlu layihələr</h5>
                {counterOn && <h1><CountUp start={0} end={1257} duration={3} delay={0} />+</h1>}
              </div>
              <div className="memnun-musteriler col-md-6" data-aos="zoom-in">
                <h5>Məmnun müştərilər</h5>
                {counterOn && <h1><CountUp start={0} end={7543} duration={5} delay={0} />+</h1>}
              </div>
            </div>
          </ScrollTrigger>
        </div>
        <div className="whoarewe-right-side col-12 col-md-6">
          <img src="https://res.cloudinary.com/dlioaagoi/image/upload/v1690926738/home2_img_05_cvxuwf.webp" alt="who are we" />
        </div>
      </div>
    </div>
          {/* emekdasliq etdiyimiz saheler */}
          <PartnyorCompanies/>
          {/* <Workers/> */}
          <Footer/>
    </>
    
    
  )
}

export default Aboutus