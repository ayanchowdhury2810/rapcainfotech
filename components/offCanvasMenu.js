import Link from 'next/link';
import React from 'react';

export default function offCanvasMenu() {
  return (
    <div
      className="offcanvas offcanvas-end header-offcanvasmenu"
      tabindex="-1"
      id="offcanvasMenuRight"
    >
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <form action="#" className="side-nav-search-form">
          <div className="form-group">
            <input
              type="text"
              className="search-field"
              name="search-field"
              placeholder="Search..."
            />
            <button className="side-nav-search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <div className="row">
          <div className="col-lg-5 col-xl-6">
            <ul className="main-navigation list-unstyled">
              <li>
                <Link href="/index-1">Digital Agency</Link>
              </li>
              <li>
                <Link href="/index-2">Creative Agency</Link>
              </li>
              <li>
                <Link href="/index-3">Personal Portfolio</Link>
              </li>
              <li>
                <Link href="/index-4">Home Startup</Link>
              </li>
              <li>
                <Link href="/index-5">Corporate Agency</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="contact-info-wrap">
              <div className="contact-inner">
                <address className="address">
                  <span className="title">Contact Information</span>
                  <p>
                    Theodore Lowe, Ap #867-859 <br />
                    Sit Rd, Azusa New York
                  </p>
                </address>
                <address className="address">
                  <span className="title">We're Available 24/7. Call Now.</span>
                  <Link className="tel" href="tel:8884562790">
                    <i className="fas fa-phone"></i>(888) 456-2790
                  </Link>
                  <Link className="tel" href="tel:12125553333">
                    <i className="fas fa-fax"></i>(121) 255-53333
                  </Link>
                </address>
              </div>
              <div className="contact-inner">
                <h5 className="title">Find us here</h5>
                <div className="contact-social-share">
                  <ul className="social-share list-unstyled">
                    <li>
                      <Link href="https://facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.behance.net/">
                        <i className="fab fa-behance"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
