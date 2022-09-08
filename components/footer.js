// const footerTemplate = document.createElement("template");

// class Footer extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     this.innerHTML = `
//     <footer class="footer-area">
//     <div class="container">
//         <div class="footer-main">
//             <div class="row">
//                 <div class="col-xl-6 col-lg-5" data-sal="slide-right" data-sal-duration="800"
//                     data-sal-delay="100">
//                     <div class="footer-widget border-end">
//                         <div class="footer-newsletter">
//                             <h2 class="title">Get in touch!</h2>
//                             <a href="contact.html" class="axil-btn btn-fill-white">Let's Talk</a>
//                             <!--=<form>
//                                 <div class="input-group">
//                                     <input type="email" class="form-control" placeholder="Email address" />
//                                     <button class="subscribe-btn" type="submit">Subscribe</button>
//                                 </div>=-->
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-xl-6 col-lg-7" data-sal="slide-left" data-sal-duration="800"
//                     data-sal-delay="100">
//                     <div class="row">
//                         <div class="col-sm-6">
//                             <div class="footer-widget">
//                                 <h6 class="widget-title">Services</h6>
//                                 <div class="footer-menu-link">
//                                     <ul class="list-unstyled">
//                                         <li><a href="service-reactjs.html">React.js Development</a></li>
//                                         <li><a href="service-nextjs.html">Next.js Development</a></li>
//                                         <li><a href="service-frontend.html">Frontend Development</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-sm-3">
//                             <div class="footer-widget">
//                                 <h6 class="widget-title">Resourses</h6>
//                                 <div class="footer-menu-link">
//                                     <ul class="list-unstyled">
//                                         <li><a href="javascript:void(0);">Blog</a></li>
//                                         <li><a href="portfolio.html">Portfolio</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-sm-3">
//                             <div class="footer-widget">
//                                 <h6 class="widget-title">Support</h6>
//                                 <div class="footer-menu-link">
//                                     <ul class="list-unstyled">
//                                         <li><a href="contact.html">Contact</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="footer-bottom" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
//             <div class="footer-copyright text-center">
//                 <span class="copyright-text">© 2022. All rights reserved by
//                     <a href="/contact.html">Rapca InfoTech Pvt. Ltd.</a>.
//                 </span>
//             </div>
//         </div>
//     </div>
// </footer>
//       `;
//   }
// }

// customElements.define("footer-component", Footer);

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
                  <a href="contact.html" className="axil-btn btn-fill-white">
                    Let's Talk
                  </a>
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
                          <a href="service-reactjs.html">
                            React.js Development
                          </a>
                        </li>
                        <li>
                          <a href="service-nextjs.html">Next.js Development</a>
                        </li>
                        <li>
                          <a href="service-frontend.html">
                            Frontend Development
                          </a>
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
                          <a href="javascript:void(0);">Blog</a>
                        </li>
                        <li>
                          <a href="portfolio.html">Portfolio</a>
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
                          <a href="contact.html">Contact</a>
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
              <a href="/contact.html">Rapca InfoTech Pvt. Ltd.</a>.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
