import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Backtotop from '../components/backToTop';
import Themetoggle from '../components/themeToggle';
import Nav from '../components/nav';
import Banner from '../components/banner';
import Services from '../components/services';
import Projects from '../components/projects';
import Testimonials from '../components/testimonials';
import CallToAction from '../components/callToAction.js';
import Footer from '../components/footer';

export default function Home() {
  // var activeStyle = Cookies.get('styleCookieName');
  // if (!activeStyle) {
  //   Cookies.set('styleCookieName', 'dark', { expires: 7 });
  // }
  return (
    <>
      <Head>
        {/* Meta Data */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>
          Frontend development agency | Rapca Infotech Pvt. Ltd. | React
        </title>
        <meta
          name="description"
          content="Fast and reliable Frontend React.js / Next.js development agency. Use React technology to deliver fast, reliable, performant, and highly user-friendly web & mobile apps. Frontend React.js development agency that will take over your technical duties for your organisation so that you can get your freedom back and focus on the core of the business."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      <div className="sticky-header">
        <Backtotop></Backtotop>

        {/* <!-- Preloader Start Here --> */}
        <div id="preloader"></div>
        {/* <!-- Preloader End Here --> */}

        <Themetoggle></Themetoggle>

        <div id="main-wrapper" class="main-wrapper">
          {/* <!--=====================================--> */}
          {/* <!--=        Header Area Start       	=--> */}
          {/* <!--=====================================--> */}
          <Nav></Nav>
          {/* <!--=====================================--> */}
          {/* <!--=        Banner Area Start         =--> */}
          {/* <!--=====================================--> */}
          <Banner />
          {/* <!--=====================================--> */}
          {/* <!--=        Service Area Start         =--> */}
          {/* <!--=====================================--> */}
          <Services></Services>
          {/* <!--=====================================--> */}
          {/* <!--=        Project Area Start         =--> */}
          {/* <!--=====================================--> */}
          <Projects></Projects>
          {/* <!--=====================================--> */}
          {/* <!--=        Testimonial Area Start     =--> */}
          {/* <!--=====================================--> */}
          <Testimonials></Testimonials>
          {/* <!--=====================================--> */}
          {/* <!--=        Brand Area Start       	=--> */}
          {/* <!--=====================================--> */}
          <section className="section section-padding bg-color-dark">
            <div className="container">
              <div className="section-heading heading-light-left">
                <span className="subtitle">Top Clients</span>
                <h2 className="title">We’ve built solutions for...</h2>
                <p>
                  Design anything from simple icons to fully featured websites
                  and applications.
                </p>
              </div>
              <div className="row">
                <div
                  className="col-lg-3 col-6"
                  dataSal="slide-up"
                  dataSalDuration="500"
                >
                  <div className="brand-grid active">
                    <img src="/assets/media/brand/Finsight.png" alt="Brand" />
                  </div>
                </div>
                <div
                  className="col-lg-3 col-6"
                  dataSal="slide-up"
                  dataSalDuration="500"
                  dataSalDelay="100"
                >
                  <div className="brand-grid">
                    <img src="/assets/media/brand/WeExpand.webp" alt="Brand" />
                  </div>
                </div>
                <div
                  className="col-lg-3 col-6"
                  dataSal="slide-up"
                  dataSalDuration="500"
                  dataSalDelay="200"
                >
                  <div className="brand-grid">
                    <img src="/assets/media/brand/practworks.png" alt="Brand" />
                  </div>
                </div>
                <div
                  className="col-lg-3 col-6"
                  dataSal="slide-up"
                  dataSalDuration="500"
                  dataSalDelay="300"
                >
                  <div className="brand-grid">
                    <img src="/assets/media/brand/Careerado.png" alt="Brand" />
                  </div>
                </div>
                <div
                  className="col-lg-3 col-6"
                  dataSal="slide-up"
                  dataSalDuration="500"
                  dataSalDelay="400"
                >
                  <div className="brand-grid">
                    <img src="/assets/media/brand/clientell.png" alt="Brand" />
                  </div>
                </div>
                <div
                  className="col-lg-3 col-6"
                  dataSal="slide-up"
                  dataSalDuration="500"
                  dataSalDelay="500"
                >
                  <div className="brand-grid">
                    <img src="/assets/media/brand/hungerlink.svg" alt="Brand" />
                  </div>
                </div>
                <div
                  className="col-lg-3 col-6"
                  dataSal="slide-up"
                  dataSalDuration="500"
                  dataSalDelay="600"
                >
                  <div className="brand-grid">
                    <img
                      src="/assets/media/brand/zaio.png"
                      alt="Brand"
                      style={{ height: '150px' }}
                    />
                  </div>
                </div>
                <div
                  className="col-lg-3 col-6"
                  dataSal="slide-up"
                  dataSalDuration="500"
                  dataSalDelay="600"
                >
                  <div className="brand-grid">
                    <img
                      src="/assets/media/brand/pineapple-academy.png"
                      alt="Brand"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-3 col-6"
                  dataSal="slide-up"
                  dataSalDuration="500"
                  dataSalDelay="600"
                >
                  <div className="brand-grid">
                    <img
                      src="/assets/media/brand/liquidonate.webp"
                      alt="Brand"
                    />
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-unstyled shape-group-10">
              <li className="shape shape-1">
                <img src="/assets/media/others/line-9.png" alt="Circle" />
              </li>
            </ul>
          </section>
          {/* <!--=====================================--> */}
          {/* <!--=     Call To Action Area Start     =--> */}
          {/* <!--=====================================--> */}
          <CallToAction></CallToAction>
          {/* <!--=====================================--> */}
          {/* <!--=        Footer Area Start       	=--> */}
          {/* <!--=====================================--> */}
          <Footer></Footer>
          {/* <!--=====================================--> */}
          {/* <!--=       Offcanvas Menu Area       	=--> */}
          {/* <!--=====================================--> */}
          {/* <!-- <offcanvasmenu-component></offcanvasmenu-component> --> */}
          {/* <!-- <a href="newPage.html">New Page</a> --> */}
          <div id="root"></div>
        </div>
      </div>
    </>
  );
}
