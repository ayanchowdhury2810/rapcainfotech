import Link from 'next/link';
import React from 'react';

export default function footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-main">
          <div className="row">
            <div
              className="col-xl-6 col-lg-5"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title">Get in touch!</h2>
                  <Link href="/contact" className="axil-btn btn-fill-white">
                    Let's Talk
                  </Link>
                  {/* <!--=<form>
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Email address" />
                                    <button className="subscribe-btn" type="submit">Subscribe</button>
                                </div>=-->
                            </form> */}
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-7"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Services</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/service-reactjs">
                            React.js Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-nextjs">
                            Next.js Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-frontend">
                            Frontend Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Resourses</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="javascript:void(0);">Blog</Link>
                        </li>
                        <li>
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Support</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-bottom"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="100"
        >
          <div className="footer-copyright text-center">
            <span className="copyright-text">
              © 2022. All rights reserved by
              <Link href="/contact">Rapca InfoTech Pvt. Ltd.</Link>.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
