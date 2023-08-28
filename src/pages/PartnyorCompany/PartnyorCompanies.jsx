import React, {useEffect} from 'react'
import "./companies.css"
import Aos from 'aos';

const PartnyorCompanies = () => {
    useEffect(() => {
        Aos.init({
          duration: 1500
        });
      }, []);
  return (
    <>
    <h1 className='center-text text-white'>Əməkdaşlıq etdiyimiz şirkətlər🌐</h1>
    <div className="container">
        <div className="companiy row">
            <div className="sebra-sport-center m-4 p-2 card col-12 col-md-6 col-lg-5" data-aos="fade-up">
                <img className='ms-auto me-auto' width={200} src="https://res.cloudinary.com/dlioaagoi/image/upload/v1693078571/h3dfxmbhagmscn0pbfqj.png" alt="" />
                <h2>Sebra İdman Kompleksi</h2>
                <p>Bütün idman növləri, milli xarici olmaqla rəqs dərsləri, gimnastika ve müalicəvi-gimnastika, fitness və başqa idman sahələrini özündə birləşdirən İdman kompleksidir! Vətəndaşlarımızın hər zaman idman ruhunu yüksəltmək, mütəmadi idmanı davam etdirmək imkanı olmalıdır ki, cəmiyyətimiz inkişaf etsin, Sağlam yaşasın! </p>
                <a href="https://www.google.com/search?q=sebra+idman+m%C9%99rk%C9%99zi&sca_esv=560376192&sxsrf=AB5stBj9vYIR7_O8zhnAEZlJ1D-50ucvdw%3A1693082923176&ei=K2XqZNq2CoiOxc8P3LuZwAg&oq=Sebra&gs_lp=Egxnd3Mtd2l6LXNlcnAiBVNlYnJhKgIIADIEECMYJzIEECMYJzIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyChAAGIAEGAoYywFIiydQ_A1Y5BlwAngBkAEAmAGqAqABwgmqAQUwLjEuNLgBAcgBAPgBAcICBxAjGLADGCfCAgoQABhHGNYEGLADwgIQEC4YigUYyAMYsAMYQ9gBAcICDRAuGIoFGMcBGNEDGEPCAgUQABiABMICBxAuGIoFGEPCAgcQABiKBRhDwgIFEC4YgATiAwQYACBBiAYBkAYMugYECAEYCA&sclient=gws-wiz-serp" target='_blank' className='btn btn-primary'>Daha ətraflı</a>
            </div>
            <div className="edu-company p-2 m-4 card col-12 col-md-6 col-lg-5" data-aos="fade-up">
                <img className='ms-auto me-auto' width={200} src="https://res.cloudinary.com/dlioaagoi/image/upload/v1693078566/b13uzgmufelcx46jtmmg.png" alt="" />
                <h2>EDU Company Təhsil Şirkəti</h2>
                <p>Vətəndaşlarımızın hər zaman biliklərini təkmilləşdirmək, təhsillərini davam etdirmək imkanı olmalıdır ki, cəmiyyətimiz inkişaf etsin, çiçəklənsin. Qeyd etmək lazımdır ki, “EDU Company” Təhsil Şirkətinin əsas hədəfi vətəndaşlara yaşından asılı olmayaraq təhsil almağa, biliklərini genişləndirməyə imkan təhsil ocağı kimi kimi fəaliyyət göstərməkdir.</p>
                <a href="https://www.google.com/search?q=Edu+company&sca_esv=560376192&sxsrf=AB5stBjXqfo01ZEqMvNs5YQRHVrmaCLd4A%3A1693082930529&ei=MmXqZJj7H5bYxc8PuMmG8A4&ved=0ahUKEwiY3Ji1mfuAAxUWbPEDHbikAe4Q4dUDCA8&uact=5&oq=Edu+company&gs_lp=Egxnd3Mtd2l6LXNlcnAiC0VkdSBjb21wYW55MgQQIxgnMgUQABiABDIFEAAYgAQyDhAuGK8BGMcBGIAEGMsBMg4QLhivARjHARiABBjLATILEC4YrwEYxwEYgAQyBRAAGIAEMg4QLhiABBjHARivARjLATIFEAAYgAQyCxAuGIAEGMcBGK8BSP8qUIoPWMgocAR4AJABAJgB4QOgAcQbqgEJMC4yLjIuMi40uAEDyAEA-AEBwgIIEAAYogQYsAPCAgwQIxiKBRgTGIAEGCfCAgcQIxiKBRgnwgINEC4YigUYxwEYrwEYQ8ICCRAAGIoFGAoYQ8ICBxAAGIoFGEPCAgUQLhiABMICCBAAGIAEGMsB4gMEGAEgQYgGAZAGAg&sclient=gws-wiz-serp" target='_blank' src className='btn btn-primary'>Daha ətraflı</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default PartnyorCompanies