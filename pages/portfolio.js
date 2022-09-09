import Head from 'next/head';
import React from 'react';
import Script from 'next/script';
import Backtotop from '../components/backToTop';
import Themetoggle from '../components/themeToggle';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import CallToAction from '../components/callToAction';
import Projects from '../components/projects.js';

function portfolio() {
  return (
    <>
      <Head>
        {/* <!-- Meta Data --> */}
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Portfolio</title>
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
          <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
              <div
                className="section-heading heading-left"
                dataSal="slide-right"
                dataSalDuration="1000"
                dataSalDelay="300"
              >
                <h1 className="title h2">Our projects</h1>
                <p>
                  A quick view of industry specific problems solved with design
                  by the awesome team at Abstrak.
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
                  src="/assets/media/banner/banner-shape-1.png"
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
    <!--=       Projects  Area Start        =-->
    <!--=====================================--> */}
          <Projects />
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
          {/* <!-- <offcanvasmenu-component></offcanvasmenu-component> --> */}
        </div>
      </div>
    </>
  );
}

export default portfolio;
