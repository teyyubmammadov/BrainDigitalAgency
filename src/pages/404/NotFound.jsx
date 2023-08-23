import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
   
    <main className="main container">
        
        <section className="home ">
            <div className="home__container container">
                <div className="home__data">
                    <span className="home__subtitle">Error 404</span>
                    <h1 className="home__title">Ooops!</h1>
                    <p className="home__description">
                    Axtardığınız səhifəni tapa bilmirik .
                    </p>
                    <Link to="/" className="home__button">
                        Geri qayıt
                    </Link>
                </div>

                <div className="home__img">
                    <img src="https://res.cloudinary.com/dlioaagoi/image/upload/v1692748966/ghost-img_ksljol.png" alt=""/>
                    <div className="home__shadow"></div>
                </div>
            </div>

            <footer className="home__footer">
                <span>(+994)50-990-55-03</span>
                <span>|</span>
                <span>braindigitalagency1@gmail.com</span>
            </footer>
        </section>
    </main>
  )
}

export default NotFound