import React from 'react';
import Head from 'next/head';
import Themetoggle from '../components/themeToggle';
import Nav2 from '../components/nav2';
import AboutUs from '../components/aboutus.js';
import Footer from '../components/footer';
import CallToAction from '../components/callToAction';
import OffCanvasMenu from '../components/offCanvasMenu';
import Backtotop from '../components/backToTop';
import Script from 'next/script';

export default function serviceNextjs() {
  return (
    <>
      <Head>
        {/* <!-- Meta Data --> */}
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Next.js Development - Rapca Infotech PVT. LTD.</title>
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
                <h1 className="title h2">Next.js Development</h1>
                <p>
                  Next JS is a React JS framework, which is popular to create
                  enterprise PWAs, Server rendered apps, Light-weight apps, SEO
                  friendly websites. Next JS takes an important part in React
                  SSR websites.
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
                  src="/assets/media/banner/Nextjs.png"
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
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="why-choose-us">
                    <div className="section-heading heading-left">
                      <span className="subtitle">Rapca Infotech PVT. LTD.</span>
                      <h3 className="title">Why Next.js?</h3>
                      <p>
                        The benefits of this framework are numerous, both for
                        our clients??? applications as well as for our development
                        team.
                        <br />
                        <br />
                        Technology decisions play a large part in being able to
                        deliver highly performant, scalable, successful
                        applications and as such, you should be using Next.js
                        for a number of reasons, for the most part related to
                        speed and performance.
                      </p>
                    </div>
                    <div className="accordion" id="choose-accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <i className="fad fa-phone-laptop"></i> Server Side
                            Rendering (SSR)
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#choose-accordion"
                        >
                          <div className="accordion-body">
                            Search Engine Optimisation friendly and page loading
                            times appear much faster to the user.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="fad fa-browser"></i>Automatic code
                            splitting
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#choose-accordion"
                        >
                          <div className="accordion-body">
                            Next.js is clever enough to only load the Javascript
                            and CSS that are needed for any given page. This
                            increases performance as there is less for the
                            user???s browser to download and the user benefits
                            from seeing the page content quicker.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <i className="fad fa-globe"></i>Part of the React
                            ecosystem
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#choose-accordion"
                        >
                          <div className="accordion-body">
                            Next.js, being basically an umbrella term for a
                            couple tools that you can use to start a React app
                            with, is an integral part of the React ecosystem. It
                            was developed specifically to address the SSR
                            challenge for React applications.
                            <br />
                            <br />
                            It means that it is easily accessible and there are
                            good chances that React is already a part of your
                            technology stack.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 offset-xl-1">
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
                      <input
                        type="hidden"
                        name="redirectTo"
                        value="http://www.rapca.co/contact.html"
                      />
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
              </div>
            </div>
          </section>
          {/* <!--=====================================-->
      <!--=       Work Process Area Start     =-->
      <!--=====================================--> */}
          <section className="section section-padding bg-color-light pb--70">
            <div className="container">
              <div className="section-heading mb--90">
                {/* <!-- <span className="subtitle">Process</span> --> */}
                <h2 className="title">Why hire us?</h2>
                <p>
                  Our experience and website development strategies ensures a
                  perfectly crafted website for your business.
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
                    src="/assets/logos/Nextjs.svg"
                    width="410px"
                    alt="Thumbnail"
                  />
                </div>
                <div className="content">
                  {/* <!-- <span className="subtitle">Dedicated to React</span> --> */}
                  <h3 className="title">Dedicated to React / Next.js</h3>
                  <p>
                    Next.js is based on React and if you choose React as the
                    core of your technology stack, we love it.
                    <br />
                    <br />
                    Use our experience from many interesting and challenging
                    work. It made us truly agile and flexible.
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
                    src="/assets/media/others/WorkTogether.svg"
                    width="410px"
                    alt="Thumbnail"
                  />
                </div>
                <div className="content">
                  {/* <!-- <span className="subtitle">Step Two</span> --> */}
                  <h3 className="title">Instant onboarding</h3>
                  <p>
                    Need to start things quick? We are ready!
                    <br />
                    <br />
                    Contact us and we will be ready to start working instantly.
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
                    src="/assets/media/others/Detailing.svg"
                    width="410px"
                    alt="Thumbnail"
                  />
                </div>
                <div className="content">
                  {/* <!-- <span className="subtitle">Step Three</span> --> */}
                  <h3 className="title">We focus on detailing</h3>
                  <p>
                    There are many famous practices in software development, but
                    you still need people who are good at keeping the details in
                    order.
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
                    src="/assets/media/others/SharedGoals.svg"
                    width="410px"
                    alt="Thumbnail"
                  />
                </div>
                <div className="content">
                  {/* <!-- <span className="subtitle">Step four</span> --> */}
                  <h3 className="title">Perfect for your website.</h3>
                  <p>
                    We believe in making relationships.
                    <br />
                    <br />
                    Your goals are our goals <br />
                    <br />
                    There is a high chance you will like working with us. Why
                    not give it a try?
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
          {/* <!-- <offcanvasmenu-component></offcanvasmenu-component> --> */}
        </div>

        {/* <!-- Component Rendering Scripts --> */}
      </div>
    </>
  );
}
