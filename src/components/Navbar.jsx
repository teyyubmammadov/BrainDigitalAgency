import React, {useRef} from 'react'
import { FiFacebook, FiPhoneCall, FiInstagram, FiYoutube, FiClock, FiChevronDown } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import {AiOutlineBars} from 'react-icons/ai'
import {ImCross} from "react-icons/im";

const Navbar = () => {

    const overlayDivi = useRef()
    const overlayiAc = ()=>{
        overlayDivi.current.classList.add('navbar-open')
    }
    const overlayiBagla = ()=>{
        overlayDivi.current.classList.remove('navbar-open')
    }

    return (
        <>
        <div className="ovarley" ref={overlayDivi}>
            <button onClick={overlayiBagla} className='cross-icon'> <ImCross/> </button>
                <div className="nav-links">
                    <a href="">Home</a>
                    <a href="">Səhifələr<FiChevronDown/></a>
                    <a href="">Haqqımızda</a>
                    <a href="">Xidmətlər<FiChevronDown/> </a>
                    <a href="">Əlaqə</a>
                </div>
        </div>

        <div classNameName='navbar-section'>

            <div className="navbar-top-section">
                <div className="navbar-top-left-side ">
                    <a href="tel:+994509905503"><FiPhoneCall/>  +994509905503</a>
                    <a className='ms-5' href="mailto:braindigitalagency.1@gmail.com"><SlEnvolope/> braindigitalagency.1@gmail.com</a>
                    <a className='ms-5'><FiClock/> Bazar ertəsi - Bazar 10:00 - 22:00</a>
                </div>

                <div className="navbar-top-right-side">
                    <a className='instagram' href="https://www.instagram.com/brain.digitalagency/" target='_blank'><FiInstagram/></a> 
                    <a className='ms-3 facebook' href="https://www.facebook.com/brain.digitalagency2022/" target='_blank' ><FiFacebook/></a>
                    <a className='ms-3 youtube' href="https://www.youtube.com" target='_blank'><FiYoutube/></a>   
                </div>

            </div>

            <div className="navbar-bottom-section">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                       <a href="#" className='navbar-brand'> 
                       <img className='navbar-logo' src="https://res.cloudinary.com/dlioaagoi/image/upload/v1690826134/fiw6vwxltoqzbirdxh1i-removebg-preview_xkt7pc.png"/> 
                       </a>
                        <button onClick={overlayiAc} className="navbar-toggler border border-white text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <AiOutlineBars />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ms-5">
                                <li className="nav-item">
                                    <a className="nav-link me-5 ms-5" aria-current="page" href="#">Şirkət</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Səhifələr<FiChevronDown/></a>
                                    {/* <ul className='nav-link'>
                                        <li><a href="">Sayt xidmetleri</a></li>
                                        <li><a href="">Reklam xidmetleri</a></li>
                                        <li><a href="">Sosial media idareetmesi</a></li>
                                        <li><a href="">Foto & Video chekilish</a></li>
                                    </ul> */}
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  ms-5" href="#">Haqqımızda</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  ms-5" href="#">Xidmətlər<FiChevronDown/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  ms-5" href="#">Əlaqə</a>
                                </li>
                            </ul>

                            <div className="sign">
                                <a href=""><button className='btn btn-primary border border-white signin' type='button'>Sign Up</button></a>
                                <a href=""><button className='btn btn-primary border border-white ms-2 signin' type='button'>Log in</button></a>
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