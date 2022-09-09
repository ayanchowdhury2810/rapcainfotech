import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Backtotop from '../components/backToTop';
import Themetoggle from '../components/themeToggle';
import Nav2 from '../components/nav2';
import MainPortfolio from '../components/mainPortfolio';
import CallToAction from '../components/callToAction';
import Footer from '../components/footer';
import OffCanvasMenu from '../components/offCanvasMenu';

function portfolioHungerlink() {
  return (
    <>
      <Head>
        {/* <!-- Meta Data --> */}
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Rapca | HungerLink Details</title>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

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
      <Script src="publicassets/js/app.js" />
      <div className="sticky-header">
        <Backtotop />

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
          <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div
                    className="section-heading heading-left"
                    dataSal="slide-right"
                    dataSalDuration="1000"
                    dataSalDelay="300"
                  >
                    <h1 className="title h2">Creative Agency</h1>
                    <p>
                      A quick view of industry specific problems solved with
                      design by the awesome team at Keystroke.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="banner-thumbnail"
                    dataSal="slide-up"
                    dataSalDuration="1000"
                    dataSalDelay="400"
                  >
                    <img
                      className="paralax-image"
                      src="/assets/media/project/project-2.png"
                      alt="Illustration"
                    />
                  </div>
                </div>
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
                <img src="/assets/media/others/bubble-20.png" alt="Bubble" />
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
      <!--=     Single Portfolio Area Start   =-->
      <!--=====================================--> */}
          <MainPortfolio />
          {/* 
      <!--=====================================-->
      <!--=     Call To Action Area Start     =-->
      <!--=====================================--> */}
          <CallToAction />
          {/* <!--=====================================-->
      <!--=        Footer Area Start       	  =-->
      <!--=====================================--> */}
          <Footer />
          {/* <!--=====================================-->
      <!--=       Offcanvas Menu Area         =-->
      <!--=====================================--> */}
          <OffCanvasMenu />
        </div>
      </div>
    </>
  );
}

export default portfolioHungerlink;
