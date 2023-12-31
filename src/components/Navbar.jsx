import React, { useRef } from 'react'
import { FiFacebook, FiPhoneCall, FiInstagram, FiYoutube, FiClock, FiChevronDown } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import { AiOutlineBars } from 'react-icons/ai'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const overlayDivi = useRef()
    const overlayiAc = () => {
        overlayDivi.current.classList.add('navbar-open')
    }
    const overlayiBagla = () => {
        overlayDivi.current.classList.remove('navbar-open')
    }

    return (
        <>
            <div className="ovarley" ref={overlayDivi}>
                <button onClick={overlayiBagla} className='cross-icon'> <ImCross /> </button>
                <ul className="nav-links">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/">Şirkət</Link>
                                    </li>
                                    <li className="nav-item ovarley-sehifeler">
                                        <a className="nav-link" href="#">Səhifələr<FiChevronDown /></a>
                                        {/* <div className="ovarley-dropdown-sehifeler">
                                            <a href="#">Sayt xidmetleri</a>
                                            <a href="#">Reklam xidmetleri</a>
                                            <a href="#">Sosial media idareetmesi</a>
                                            <a href="#">Foto & Video chekilish</a>
                                        </div> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="aboutus">Haqqımızda</Link>
                                    </li>
                                    <li className="nav-item ovarley-xidmetler">
                                        <a className="nav-link" href="#">Xidmətlər<FiChevronDown /></a>
                                        {/* <div className="ovarley-dropdown-xidmetler">
                                            <a href="#">Sayt xidmetleri</a>
                                            <a href="#">Reklam xidmetleri</a>
                                            <a href="#">Sosial media idareetmesi</a>
                                            <a href="#">Foto & Video chekilish</a>
                                        </div> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link  ms-5" to="contact">Əlaqə</Link>
                                    </li>

                            <div className="contact-navbar d-flex my-3">
                                <a href="tel:+994509905503" className='sign me-auto ms-auto btn signin'><FiPhoneCall /> </a>
                                <a className='  ms-auto me-auto  signin btn' href="mailto:braindigitalagency.1@gmail.com"><SlEnvolope /></a>
                                <a className=' me-auto ms-auto btn signin sign ' href="https://www.instagram.com/brain.digitalagency/" target='_blank'><FiInstagram /></a>
                                <a className='  me-auto ms-auto btn  signin sign ' href="https://www.facebook.com/brain.digitalagency2022/" target='_blank' ><FiFacebook /></a>
                            </div>
                                </ul>
                                
            </div>

            <div classNameName='navbar-section'>

                <div className="navbar-top-section">
                    <div className="navbar-top-left-side ">
                        <a href="tel:+994509905503"><FiPhoneCall />  +994509905503</a>
                        <a className='ms-5' href="mailto:braindigitalagency.1@gmail.com"><SlEnvolope /> braindigitalagency.1@gmail.com</a>
                        <a className='ms-5'><FiClock /> Bazar ertəsi - Bazar 10:00 - 22:00</a>
                    </div>

                    <div className="navbar-top-right-side">
                        <a className='instagram signin' href="https://www.instagram.com/brain.digitalagency/" target='_blank'><FiInstagram /></a>
                        <a className='ms-3 facebook signin' href="https://www.facebook.com/brain.digitalagency2022/" target='_blank' ><FiFacebook /></a>
                        <a className='ms-3 youtube signin' href="https://www.youtube.com" target='_blank'><FiYoutube /></a>
                    </div>

                </div>


                <div className="navbar-bottom-section">
                    <nav className="navbar expensive-navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link to="/" className='navbar-brand'>
                                <img className='navbar-logo' src="https://res.cloudinary.com/dlioaagoi/image/upload/v1690826134/fiw6vwxltoqzbirdxh1i-removebg-preview_xkt7pc.png" />
                            </Link>
                            <Link to="signup"><button className='sign sign-tel ms-3 me-1 signin' type='button'>Daxil ol</button></Link>
                            <button onClick={overlayiAc} className="navbar-toggler border border-white text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <AiOutlineBars />
                            </button>
                           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ms-5">
                                    <li className="nav-item">
                                        <Link className="nav-link me-5 ms-5" aria-current="page" to="/">Şirkət</Link>
                                    </li>
                                    <li className="nav-item sehifelerimiz">
                                        <a className="nav-link" href="#">Səhifələr<FiChevronDown /></a>
                                        <div className="dropdown-sehifeler">
                                            <a href="#">Sayt xidmetleri</a>
                                            <a href="#">Reklam xidmetleri</a>
                                            <a href="#">Sosial media idareetmesi</a>
                                            <a href="#">Foto & Video chekilish</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link  ms-5" to="aboutus">Haqqımızda</Link>
                                    </li>
                                    <li className="nav-item xidmetlerimiz">
                                        <a className="nav-link  ms-5" href="#">Xidmətlər<FiChevronDown /></a>
                                        <div className="dropdown-xidmetler">
                                            <a href="#">Sayt xidmetleri</a>
                                            <a href="#">Reklam xidmetleri</a>
                                            <a href="#">Sosial media idareetmesi</a>
                                            <a href="#">Foto & Video chekilish</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link  ms-5" to="contact">Əlaqə</Link>
                                    </li>
                                </ul>

                                <div className="sign">
                                    {/* <Link to="signup"><button className=' signin' type='button'>Sign Up</button></Link> */}
                                    <Link to="signup"><button className=' ms-3 me-1 signin' type='button'>Daxil ol</button></Link>
                                </div>

                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-disabled="true">Disabled</a>
                                </li> */}

                                {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Axtar" aria-label="Search" />
                                <button className="btn btn-outline-success text-white" type="submit">Axtar</button>
                            </form> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar