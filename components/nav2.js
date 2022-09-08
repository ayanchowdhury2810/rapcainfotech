// const nav2Template = document.createElement("template");

// class nav2 extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     this.innerHTML = `
//     <header class="header axil-header header-style-1">
//     <div id="axil-sticky-placeholder"></div>
//     <div class="axil-mainmenu">
//         <div class="container">
//             <div class="header-navbar">
//                 <div class="header-logo">
//                     <a href="index.html"><img class="light-version-logo rapca-logo" src="assets/media/logo.svg" alt="logo"></a>
//                     <a href="index.html"><img class="dark-version-logo rapca-logo" src="assets/media/logo-3.svg" alt="logo"></a>
//                     <a href="index.html"><img class="sticky-logo rapca-logo" src="assets/media/logo-2.svg" alt="logo"></a>
//                 </div>
//                 <div class="header-main-nav">
//                     <!-- Start Mainmanu Nav -->
//                     <nav class="mainmenu-nav" id="mobilemenu-popup">
//                         <div class="d-block d-lg-none">
//                             <div class="mobile-nav-header">
//                                 <div class="mobile-nav-logo">
//                                     <a href="index.html">
//                                         <img class="light-mode" src="assets/media/logo-2.svg" alt="Site Logo">
//                                         <img class="dark-mode" src="assets/media/logo-3.svg" alt="Site Logo">
//                                     </a>
//                                 </div>
//                                 <button class="mobile-menu-close" data-bs-dismiss="offcanvas"><i class="fas fa-times"></i></button>
//                             </div>
//                         </div>
//                         <ul class="mainmenu">
//                             <li class="menu-item-has-children">
//                                 <a href="javascript:void(0);">Services</a>
//                                 <ul class="axil-submenu">
//                                   <li><a href="service-reactjs.html">React Development</a></li>
//                                   <li><a href="service-nextjs.html">Next.js Development</a></li>
//                                   <li><a href="service-frontend.html">Frontend Development</a></li>
//                                 </ul>
//                             </li>
//                             <li>
//                                 <a href="portfolio.html">Portfolio</a>
//                             </li>
//                             <li>
//                                 <a href="contact.html">Contact</a>
//                             </li>
//                         </ul>
//                     </nav>
//                     <!-- End Mainmanu Nav -->
//                 </div>
//                 <div class="header-action">
//                     <ul class="list-unstyled">
//                         <li class="sidemenu-btn d-lg-block d-none">
//                             <button class="btn-wrap" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenuRight">
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                             </button>
//                         </li>
//                         <li class="mobile-menu-btn sidemenu-btn d-lg-none d-block">
//                             <button class="btn-wrap" data-bs-toggle="offcanvas" data-bs-target="#mobilemenu-popup">
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                             </button>
//                         </li>
//                         <li class="my_switcher d-block d-lg-none">
//                             <ul>
//                                 <li title="Light Mode">
//                                     <a href="javascript:void(0)" class="setColor light" data-theme="light">
//                                         <i class="fal fa-lightbulb-on"></i>
//                                     </a>
//                                 </li>
//                                 <li title="Dark Mode">
//                                     <a href="javascript:void(0)" class="setColor dark" data-theme="dark">
//                                         <i class="fas fa-moon"></i>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
// </header>
//       `;
//   }
// }

// customElements.define("nav2-component", nav2);

import Link from 'next/link';
import React from 'react';

export default function nav2() {
  return (
    <header class="header axil-header header-style-1">
      <div id="axil-sticky-placeholder"></div>
      <div class="axil-mainmenu">
        <div class="container">
          <div class="header-navbar">
            <div class="header-logo">
              <Link href="/">
                <img
                  class="light-version-logo rapca-logo"
                  src="assets/media/logo.svg"
                  alt="logo"
                />
              </Link>
              <Link href="/">
                <img
                  class="dark-version-logo rapca-logo"
                  src="assets/media/logo-3.svg"
                  alt="logo"
                />
              </Link>
              <Link href="/">
                <img
                  class="sticky-logo rapca-logo"
                  src="assets/media/logo-2.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <div class="header-main-nav">
              {/* <!-- Start Mainmanu Nav --> */}
              <nav class="mainmenu-nav" id="mobilemenu-popup">
                <div class="d-block d-lg-none">
                  <div class="mobile-nav-header">
                    <div class="mobile-nav-logo">
                      <Link href="/">
                        <img
                          class="light-mode"
                          src="assets/media/logo-2.svg"
                          alt="Site Logo"
                        />
                      </Link>
                      <Link href="/">
                        <img
                          class="dark-mode"
                          src="assets/media/logo-3.svg"
                          alt="Site Logo"
                        />
                      </Link>
                    </div>
                    <button
                      class="mobile-menu-close"
                      data-bs-dismiss="offcanvas"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <ul class="mainmenu">
                  <li class="menu-item-has-children">
                    <Link href="javascript:void(0);">Services</Link>
                    <ul class="axil-submenu">
                      <li>
                        <Link href="/service-reactjs">React Development</Link>
                      </li>
                      <li>
                        <Link href="/service-nextjs">Next.js Development</Link>
                      </li>
                      <li>
                        <Link href="/service-frontend">
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
            <div class="header-action">
              <ul class="list-unstyled">
                <li class="sidemenu-btn d-lg-block d-none">
                  <button
                    class="btn-wrap"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasMenuRight"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </li>
                <li class="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                  <button
                    class="btn-wrap"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobilemenu-popup"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </li>
                <li class="my_switcher d-block d-lg-none">
                  <ul>
                    <li title="Light Mode">
                      <Link
                        href="javascript:void(0)"
                        class="setColor light"
                        data-theme="light"
                      >
                        <i class="fal fa-lightbulb-on"></i>
                      </Link>
                    </li>
                    <li title="Dark Mode">
                      <Link
                        href="javascript:void(0)"
                        class="setColor dark"
                        data-theme="dark"
                      >
                        <i class="fas fa-moon"></i>
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
