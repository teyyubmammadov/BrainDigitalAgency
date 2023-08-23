import React from 'react'
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
      {/* 3D kvadrat animasiya */}
      <div className="areas" >
        <ul className="circless">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      {/* son */}


      <ScrollToTop smooth color="#2A53FE" />

      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="">

        <footer className="text-white text-center text-lg-start bg-dark">
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row mt-4">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <img width={250} src="https://res.cloudinary.com/dlioaagoi/image/upload/v1690826134/fiw6vwxltoqzbirdxh1i-removebg-preview_xkt7pc.png" alt="" />
                {/* <h5 className="text-uppercase mb-4">Brain Digital Agency</h5> */}

                <p>
                  Texnologiya və rəqəmsal
                  tendensiyalardan xəbərdar
                  olmaq üçün yaradılmış agentlikdir.

                </p>

                <p>
                  Rəqəmsal dünyada
                  mövcud olmaq istəyən
                  Bizneslərin rəqəmsal marketinq,
                  reklam ve kommunikasiya
                  ehtiyaclarını ödəmək üçün xüsusi
                  agentlikdir.
                </p>

                <div className="mt-4 d-flex  justify-content-evenly">
                  <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-facebook-f"></i></a>
                  <a type="button" className="btn btn-floating btn-light btn-lg"><i class="fa-brands fa-youtube"></i></a>
                  <a type="button" className="btn btn-floating btn-light btn-lg"><i class="fa-brands fa-instagram"></i></a>
                  <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-google-plus-g"></i></a>
                </div>
              </div>
              {/*Grid column*/}

              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Bir şey axtarın</h5>

                <div className="form-outline form-white mb-4">
                  <input type="text" id="formControlLg" className="form-control form-control-lg" />
                  <label className="form-label" for="formControlLg">Axtar</label>
                </div>

                <ul className="fa-ul">
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Azerbaijan, Baku</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">braindigitalagency.1@gmail.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+994 50 990 55 03</span>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}

              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">İşləmə saatları</h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Bazar ertəsi - Çr.a:</td>
                      <td>10:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Cümə - Şənbə:</td>
                      <td>səhər 8-1</td>
                    </tr>
                    <tr>
                      <td>Bazargünü:</td>
                      <td>21:00 - 23:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}

          {/* Copyright */}
          <div className="text-center p-3">
            © 2023 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/"> Mr Teyyub Mammadov</a>
          </div>
          {/* Copyright */}
        </footer>

      </div>
      {/* End of .container */}
    </>
  )
}

export default Footer