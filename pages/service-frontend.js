import React from 'react';
import Head from 'next/head';
import Themetoggle from '../components/themeToggle';
import Nav2 from '../components/nav2';
import Footer from '../components/footer';
import CallToAction from '../components/callToAction';
import Script from 'next/script';
import Link from 'next/link';

function serviceFrontend() {
  return (
    <>
      <Head>
        {/* <!-- Meta Data --> */}
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Frontend Development - Rapca Infotech PVT. LTD.</title>
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
        <Link href="/#main-wrapper" id="backto-top" className="back-to-top">
          <i className="far fa-angle-double-up"></i>
        </Link>

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
                <h1 className="title h2">Frontend Development</h1>
                <p>
                  Interactive custom web applications to deliver pixel-perfect,
                  stunning user experience that is responsive, mobile-first,
                  efficient, SEO friendly User Interfaces connecting them with
                  back-end effectively.
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
                  src="/assets/media/banner/Frontend.png"
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
                      <h3 className="title">
                        Human-Centered Experiences With Visual Polish
                      </h3>
                      <p>
                        Does seamless user interfaces and smooth navigations
                        lure you for your next website project?
                        <br />
                        <br />
                        Look no further! From state-of-the-art infrastructure to
                        a passionate team - have everything you are looking out
                        for in a front-end web development company.
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
                            <i className="fad fa-phone-laptop"></i> Static sites
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#choose-accordion"
                        >
                          <div className="accordion-body">
                            We create awesome and user friendly landing pages
                            for your startup, business, shop, restaurant, etc
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
                            <i className="fad fa-browser"></i>SEO Optimized with
                            technology of your choice
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#choose-accordion"
                        >
                          <div className="accordion-body">
                            Our frontend development process involves an
                            extensive platform optimization stage where a team
                            of experts ensures that the designed frontend and
                            the target platform are compatible to extract every
                            bit of performance.
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
                            <i className="fad fa-globe"></i>Development strategy
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#choose-accordion"
                        >
                          <div className="accordion-body">
                            A tactfully devised development strategy is employed
                            to wring out every ounce of performance. We keep the
                            performance high and the development costs down by
                            improving our output and smoothening our development
                            process.
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
                    src="/assets/media/banner/laptop.png"
                    width="410px"
                    alt="Thumbnail"
                  />
                </div>
                <div className="content">
                  {/* <!-- <span className="subtitle">Dedicated to React</span> --> */}
                  <h3 className="title">Dedicated to Frontend</h3>
                  <p>
                    We love working on frontend. We listen, we discuss and make
                    exactly what you are looking for.
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
                                    <img src="/assets/media/project/project-1.png" alt="project"/>
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
                                    <img src="/assets/media/project/project-2.png" alt="project"/>
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
                <li className="shape shape-3"><img src="assets/media/others/bubble-1.png" alt="Line"></li>
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
      </div>
    </>
  );
}

export default serviceFrontend;
