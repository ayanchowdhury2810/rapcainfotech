import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Themetoggle from '../components/themeToggle';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import CallToAction from '../components/callToAction';
import OffCanvasMenu from '../components/offCanvasMenu';
import Aboutus from '../components/aboutus.js';

export default function serviceWordpress() {
  return (
    <>
      <Head>
        {/* <!-- Meta Data --> */}
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Abstrak | Development</title>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      <div className="sticky-header">
        {/* <!--[if lte IE 9]>
      <p className="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve
        your experience and security.
      </p>
    <![endif]--> */}
        <a href="#main-wrapper" id="backto-top" className="back-to-top">
          <i className="far fa-angle-double-up"></i>
        </a>

        {/* <!-- Preloader Start Here --> */}
        <div id="preloader"></div>
        {/* <!-- Preloader End Here --> */}

        <Themetoggle />

        <div id="main-wrapper" className="main-wrapper">
          {/* <!--=====================================-->
      <!--=        Header Area Start       	=-->
      <!--=====================================--> */}
          <Nav2 />
          {/* <!--=====================================-->
      <!--=       Breadcrumb Area Start       =-->
      <!--=====================================--> */}
          <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
              <div
                className="section-heading heading-left"
                dataSal="slide-right"
                dataSalDuration="1000"
                dataSalDelay="300"
              >
                <h1 className="title h2">Wordpress</h1>
                <p>
                  Give your business a unique logo to stand out from the crowd.
                  We’ll create custom logo for your company.
                </p>
              </div>
              <div
                className="banner-thumbnail"
                dataSal="slide-up"
                dataSalDuration="1000"
                dataSalDelay="400"
              >
                <img
                  className="paralax-image"
                  src="/assets/media/banner/banner-thumb-4.png"
                  alt="Illustration"
                />
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
                <img src="/assets/media/others/bubble-21.png" alt="Bubble" />
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
      <!--=       Why Choose Area Start       =-->
      <!--=====================================--> */}
          <Aboutus />
          {/* <!--=====================================-->
      <!--=       Work Process Area Start     =-->
      <!--=====================================--> */}
          <section className="section section-padding bg-color-light pb--70">
            <div className="container">
              <div className="section-heading mb--90">
                <span className="subtitle">Process</span>
                <h2 className="title">Our logo design process</h2>
                <p>
                  Our comprehensive logo design strategy ensures a perfectly
                  crafted logo for your business.
                </p>
              </div>
              <div
                className="process-work"
                dataSal="slide-right"
                dataSalDuration="1000"
                dataSalDelay="100"
              >
                <div className="thumbnail paralax-image">
                  <img
                    src="/assets/media/others/process-1.png"
                    alt="Thumbnail"
                  />
                </div>
                <div className="content">
                  <span className="subtitle">Step One</span>
                  <h3 className="title">Discover</h3>
                  <p>
                    Donec metus lorem, vulputate at sapien sit amet, auctor
                    iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus
                    velit. Aliquam tristique libero at dui sodales, et placerat
                    orci lobortis. Maecenas ipsum neque, elementum id dignissim
                    et, imperdiet vitae mauris.
                  </p>
                </div>
              </div>
              <div
                className="process-work content-reverse"
                dataSal="slide-left"
                dataSalDuration="1000"
                dataSalDelay="100"
              >
                <div className="thumbnail paralax-image">
                  <img
                    src="/assets/media/others/process-2.png"
                    alt="Thumbnail"
                  />
                </div>
                <div className="content">
                  <span className="subtitle">Step Two</span>
                  <h3 className="title">Prototype</h3>
                  <p>
                    Donec metus lorem, vulputate at sapien sit amet, auctor
                    iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus
                    velit. Aliquam tristique libero at dui sodales, et placerat
                    orci lobortis. Maecenas ipsum neque, elementum id dignissim
                    et, imperdiet vitae mauris.
                  </p>
                </div>
              </div>
              <div
                className="process-work"
                dataSal="slide-right"
                dataSalDuration="1000"
                dataSalDelay="100"
              >
                <div className="thumbnail paralax-image">
                  <img
                    src="/assets/media/others/process-3.png"
                    alt="Thumbnail"
                  />
                </div>
                <div className="content">
                  <span className="subtitle">Step Three</span>
                  <h3 className="title">Test</h3>
                  <p>
                    Donec metus lorem, vulputate at sapien sit amet, auctor
                    iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus
                    velit. Aliquam tristique libero at dui sodales, et placerat
                    orci lobortis. Maecenas ipsum neque, elementum id dignissim
                    et, imperdiet vitae mauris.
                  </p>
                </div>
              </div>
              <div
                className="process-work content-reverse"
                dataSal="slide-left"
                dataSalDuration="1000"
                dataSalDelay="100"
              >
                <div className="thumbnail paralax-image">
                  <img
                    src="/assets/media/others/process-4.png"
                    alt="Thumbnail"
                  />
                </div>
                <div className="content">
                  <span className="subtitle">Step four</span>
                  <h3 className="title">Build</h3>
                  <p>
                    Donec metus lorem, vulputate at sapien sit amet, auctor
                    iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus
                    velit. Aliquam tristique libero at dui sodales, et placerat
                    orci lobortis. Maecenas ipsum neque, elementum id dignissim
                    et, imperdiet vitae mauris.
                  </p>
                </div>
              </div>
            </div>
            <ul className="shape-group-17 list-unstyled">
              <li className="shape shape-1">
                <img src="/assets/media/others/bubble-24.png" alt="Bubble" />
              </li>
              <li className="shape shape-2">
                <img src="/assets/media/others/bubble-23.png" alt="Bubble" />
              </li>
              <li className="shape shape-3">
                <img src="/assets/media/others/line-4.png" alt="Line" />
              </li>
              <li className="shape shape-4">
                <img src="/assets/media/others/line-5.png" alt="Line" />
              </li>
              <li className="shape shape-5">
                <img src="/assets/media/others/line-4.png" alt="Line" />
              </li>
              <li className="shape shape-6">
                <img src="/assets/media/others/line-5.png" alt="Line" />
              </li>
            </ul>
          </section>
          {/* <!--=====================================-->
      <!--=     Featured Project Area Start   =-->
      <!--=====================================--> */}
          {/* <!-- <section className="section section-padding">
            <div className="container">
                <div className="section-heading">
                    <span className="subtitle">Our Project</span>
                    <h2 className="title">Featured Designs</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="project-grid">
                            <div className="thumbnail">
                                <a href="single-portfolio.html">
                                    <img src="/assets/media/project/project-1.png" alt="project">
                                </a>
                            </div>
                            <div className="content">
                                <h4 className="title"><a href="single-portfolio.html">Creative Agency</a></h4>
                                <span className="subtitle">Full Branding, Website, App</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-grid">
                            <div className="thumbnail">
                                <a href="single-portfolio.html">
                                    <img src="/assets/media/project/project-2.png" alt="project">
                                </a>
                            </div>
                            <div className="content">
                                <h4 className="title"><a href="single-portfolio.html">Digital Marketing</a></h4>
                                <span className="subtitle">Logo, Website & Mobile App</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-16 list-unstyled">
                <li className="shape shape-1"><img src="/assets/media/others/circle-2.png" alt="circle"></li>
                <li className="shape shape-3"><img src="/assets/media/others/bubble-1.png" alt="Line"></li>
            </ul>
        </section> --> */}
          {/* <!--=====================================-->
      <!--=     Call To Action Area Start     =-->
      <!--=====================================--> */}
          <CallToAction />
          {/* <!--=====================================-->
      <!--=        Footer Area Start       	=-->
      <!--=====================================--> */}
          <Footer />
          {/* <!--=====================================-->
      <!--=       Offcanvas Menu Area       	=-->
      <!--=====================================--> */}
          <OffCanvasMenu />
        </div>

        {/* <!-- Jquery Js --> */}
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

        {/* <!-- Site Scripts --> */}
        <Script src="public/assets/js/app.js" />
      </div>
    </>
  );
}
