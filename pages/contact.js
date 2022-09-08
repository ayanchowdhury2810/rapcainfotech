import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Backtotop from '../components/backToTop';
import Themetoggle from '../components/themeToggle';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';

function contact() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Contact</title>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <!-- Favicon --> */}
      </Head>

      <div className="sticky-header">
        {/* <!--[if lte IE 9]>
      <p className="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and
        security.
      </p> */}
        {/* <![endif]--> */}
        <Backtotop></Backtotop>

        {/* <!-- Preloader Start Here --> */}
        <div id="preloader"></div>
        {/* <!-- Preloader End Here --> */}

        <Themetoggle></Themetoggle>

        <div id="main-wrapper" className="main-wrapper">
          {/* <!--=====================================-->
    <!--=        Header Area Start       	=-->
    <!--=====================================--> */}
          <Nav2></Nav2>
          {/* <!--=====================================-->
    <!--=       Breadcrumb Area Start       =-->
    <!--=====================================--> */}
          <div className="breadcrum-area">
            <div className="container">
              <div className="breadcrumb">
                <h1 className="title h2">Contact</h1>
              </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
              <li
                className="shape shape-1"
                dataSal="slide-right"
                dataSalDuration="500"
                dataSalDelay="100"
              >
                <img src="/assets/media/others/bubble-9.png" alt="Bubble" />
              </li>
              <li
                className="shape shape-2"
                dataSal="slide-left"
                dataSalDuration="500"
                dataSalDelay="200"
              >
                <img src="/assets/media/others/bubble-17.png" alt="Bubble" />
              </li>
              <li
                className="shape shape-3"
                dataSal="slide-up"
                dataSalDuration="500"
                dataSalDelay="300"
              >
                <img src="/assets/media/others/line-4.png" alt="Line" />
              </li>
            </ul>
          </div>
          {/* <!--=====================================-->
    <!--=       Contact  Area Start        =-->
    <!--=====================================--> */}
          <section className="section section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="contact-form-box shadow-box mb--30">
                    <h3 className="title">Get a free Keystroke quote now</h3>
                    <form
                      method="POST"
                      action="https://api.staticforms.xyz/submit"
                      className="axil-contact-form"
                      netlify
                    >
                      <input
                        type="hidden"
                        name="accessKey"
                        value="b5efc89c-70fe-4dfa-8edd-199a8c90dfb4"
                      />
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="example@mail.com"
                        />
                      </div>
                      <div className="form-group mb--40">
                        <label>Phone</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          placeholder="+123456789"
                        />
                      </div>
                      <div className="form-group mb--40">
                        <label>How can we help you?</label>
                        <textarea
                          name="message"
                          id="contact-message"
                          className="form-control textarea"
                          cols="30"
                          rows="4"
                        ></textarea>
                      </div>
                      <input type="hidden" name="replyTo" value="@" />
                      {/* <input type="hidden" name="redirectTo" value="http://www.rapca.co/contact.html"> */}
                      <input
                        type="text"
                        name="honeypot"
                        style={{ display: 'none' }}
                      />
                      <div className="form-group">
                        <button
                          type="submit"
                          className="axil-btn btn-borderd btn-fluid btn-primary"
                          name="submit-btn"
                        >
                          Get Pricing Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 offset-xl-1">
                  <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                    <h4 className="title">Phone</h4>
                    <p>
                      Our customer care is open from Mon-Fri, 10:00 am to 6:00
                      pm
                    </p>
                    <h4 className="phone-number">
                      <a href="tel:1234567890">(+91) 9779003936</a>
                    </h4>
                  </div>
                  <div className="contact-info mb--30">
                    <h4 className="title">Email</h4>
                    <p>
                      Our support team will get back to in 48-h during standard
                      business hours.
                    </p>
                    <h4 className="phone-number">
                      <a href="mailto:contact@priamjain.me">
                        contact@priamjain.me
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-unstyled shape-group-12">
              <li className="shape shape-1">
                <img src="/assets/media/others/bubble-2.png" alt="Bubble" />
              </li>
              <li className="shape shape-2">
                <img src="/assets/media/others/bubble-1.png" alt="Bubble" />
              </li>
              <li className="shape shape-3">
                <img src="/assets/media/others/circle-3.png" alt="Circle" />
              </li>
            </ul>
          </section>
          {/* <!--=====================================-->
    <!--=        Footer Area Start       	=-->
    <!--=====================================--> */}
          <Footer></Footer>
          {/* <!--=====================================--> */}
          {/* <!--=       Offcanvas Menu Area       	=--> */}
          {/* <!--=====================================--> */}
          {/* <!-- <offcanvasmenu-component></offcanvasmenu-component> --> */}
          {/* <!-- Site Scripts --> */}
          <Script src="assets/js/vendor/jquery-3.6.0.min.js" />
          <Script src="assets/js/vendor/bootstrap.min.js" />
          <Script src="assets/js/vendor/isotope.pkgd.min.js" />
          <Script src="assets/js/vendor/imagesloaded.pkgd.min.js" />
          <Script src="assets/js/vendor/waypoints.min.js" />
          <Script src="assets/js/vendor/counterup.js" />
          <Script src="assets/js/vendor/slick.min.js" />
          <Script src="assets/js/vendor/sal.js" />
          <Script src="assets/js/vendor/jquery.magnific-popup.min.js" />
          <Script src="assets/js/vendor/js.cookie.js" />
          <Script src="assets/js/vendor/jquery.style.switcher.js" />
          <Script src="assets/js/vendor/jquery.countdown.min.js" />
          <Script src="assets/js/vendor/tilt.js" />
          <Script src="assets/js/vendor/green-audio-player.min.js" />
          <Script src="assets/js/vendor/jquery.nav.js" />
          <Script src="public/assets/js/app.js" />
        </div>
      </div>
    </>
  );
}

export default contact;
