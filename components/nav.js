// const headerTemplate = document.createElement("template");

// class header extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     this.innerHTML = `
//       <header class="header axil-header header-style-4">
//       <div id="axil-sticky-placeholder"></div>
//       <div class="axil-mainmenu">
//           <div class="container">
//               <div class="header-navbar">
//                   <div class="header-logo">
//                     <a href="index.html"><img class="light-version-logo rapca-logo" src="assets/media/logo-3.svg" alt="logo"></a>
//                     <a href="index.html"><img class="dark-version-logo rapca-logo" src="assets/media/logo-3.svg" alt="logo"></a>
//                     <a href="index.html"><img class="sticky-logo rapca-logo" src="assets/media/logo-2.svg" alt="logo"></a>
//                   </div>
//                   <div class="header-main-nav">
//                       <!-- Start Mainmanu Nav -->
//                       <nav class="mainmenu-nav" id="mobilemenu-popup">
//                           <div class="d-block d-lg-none">
//                               <div class="mobile-nav-header">
//                                   <div class="mobile-nav-logo">
//                                       <a href="index.html">
//                                           <img class="light-mode" src="assets/media/logo-2.svg" alt="Site Logo">
//                                           <img class="dark-mode" src="assets/media/logo-3.svg" alt="Site Logo">
//                                       </a>
//                                   </div>
//                                   <button class="mobile-menu-close" data-bs-dismiss="offcanvas"><i class="fas fa-times"></i></button>
//                               </div>
//                           </div>
//                           <ul class="mainmenu">
//                               <li class="menu-item-has-children">
//                                   <a href="javascript:void(0);">Services</a>
//                                   <ul class="axil-submenu">
//                                     <li><a href="service-reactjs.html">React.js Development</a></li>
//                                     <li><a href="service-nextjs.html">Next.js Development</a></li>
//                                     <li><a href="service-frontent.html">Frontend Development</a></li>
//                                   </ul>
//                               </li>
//                               <li>
//                                   <a href="portfolio.html">Portfolio</a>
//                               </li>
//                               <li>
//                                 <a href="contact.html">Contact</a>
//                               </li>
//                           </ul>
//                       </nav>
//                       <!-- End Mainmanu Nav -->
//                   </div>
//                   <div class="header-action">
//                       <ul class="list-unstyled">
//                           <li class="header-btn">
//                               <a href="contact.html" class="axil-btn btn-fill-white">Let's Talk</a>
//                           </li>
//                           <li class="mobile-menu-btn sidemenu-btn d-lg-none d-block">
//                               <button class="btn-wrap btn-dark" data-bs-toggle="offcanvas" data-bs-target="#mobilemenu-popup">
//                                   <span></span>
//                                   <span></span>
//                                   <span></span>
//                               </button>
//                           </li>
//                           <li class="my_switcher d-block d-lg-none">
//                               <ul>
//                                   <li title="Light Mode">
//                                       <a href="javascript:void(0)" class="setColor light" data-theme="light">
//                                           <i class="fal fa-lightbulb-on"></i>
//                                       </a>
//                                   </li>
//                                   <li title="Dark Mode">
//                                       <a href="javascript:void(0)" class="setColor dark" data-theme="dark">
//                                           <i class="fas fa-moon"></i>
//                                       </a>
//                                   </li>
//                               </ul>
//                           </li>
//                       </ul>
//                   </div>
//               </div>
//           </div>
//       </div>
//       </header>
//       `;
//   }
// }

// customElements.define("nav-component", header);

import React from 'react';
import Link from 'next/link';

export default function nav() {
  return (
    <header className="header axil-header header-style-4">
      <div id="axil-sticky-placeholder"></div>
      <div className="axil-mainmenu">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <Link href="/">
                <img
                  className="light-version-logo rapca-logo"
                  src="assets/media/logo-3.svg"
                  alt="logo"
                />
              </Link>
              <Link href="/">
                <img
                  className="dark-version-logo rapca-logo"
                  src="assets/media/logo-3.svg"
                  alt="logo"
                />
              </Link>
              <Link href="/">
                <img
                  className="sticky-logo rapca-logo"
                  src="assets/media/logo-2.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="header-main-nav">
              {/* <!-- Start Mainmanu Nav --> */}
              <nav className="mainmenu-nav" id="mobilemenu-popup">
                <div className="d-block d-lg-none">
                  <div className="mobile-nav-header">
                    <div className="mobile-nav-logo">
                      <Link href="/">
                        <img
                          className="light-mode"
                          src="assets/media/logo-2.svg"
                          alt="Site Logo"
                        />
                      </Link>
                      <Link href="/">
                        <img
                          className="dark-mode"
                          src="assets/media/logo-3.svg"
                          alt="Site Logo"
                        />
                      </Link>
                    </div>
                    <button
                      className="mobile-menu-close"
                      data-bs-dismiss="offcanvas"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <ul className="mainmenu">
                  <li className="menu-item-has-children">
                    <Link href="javascript:void(0);">Services</Link>
                    <ul className="axil-submenu">
                      <li>
                        <Link href="/service-reactjs">
                          React.js Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-nextjs">Next.js Development</Link>
                      </li>
                      <li>
                        <Link href="/service-frontent">
                          Frontend Development
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              {/* <!-- End Mainmanu Nav --> */}
            </div>
            <div className="header-action">
              <ul className="list-unstyled">
                <li className="header-btn">
                  <Link href="/contact">
                    <div className="axil-btn btn-fill-white">Let's Talk</div>
                  </Link>
                </li>
                <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                  <button
                    className="btn-wrap btn-dark"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobilemenu-popup"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </li>
                <li className="my_switcher d-block d-lg-none">
                  <ul>
                    <li title="Light Mode">
                      <Link
                        href="javascript:void(0)"
                        className="setColor light"
                        data-theme="light"
                      >
                        <i className="fal fa-lightbulb-on"></i>
                      </Link>
                    </li>
                    <li title="Dark Mode">
                      <Link
                        href="javascript:void(0)"
                        className="setColor dark"
                        data-theme="dark"
                      >
                        <i className="fas fa-moon"></i>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
