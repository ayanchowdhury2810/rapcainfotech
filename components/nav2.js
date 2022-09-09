import Link from 'next/link';
import React from 'react';

export default function nav2() {
  return (
    <header className="header axil-header header-style-1">
      <div id="axil-sticky-placeholder"></div>
      <div className="axil-mainmenu">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <Link href="/">
                <img
                  className="light-version-logo rapca-logo"
                  src="assets/media/logo.svg"
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
            <div className="header-action">
              <ul className="list-unstyled">
                <li className="sidemenu-btn d-lg-block d-none">
                  <button
                    className="btn-wrap"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasMenuRight"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </li>
                <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                  <button
                    className="btn-wrap"
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
