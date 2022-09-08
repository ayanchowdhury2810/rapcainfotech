import React from 'react';
import Link from 'next/link';

export default function banner() {
  return (
    <div className="banner banner-style-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-7">
            <div className="banner-content">
              <h1
                className="title"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="200"
              >
                ⚛ React Web development agency
              </h1>
              <h4>
                We handle your technical duties for your organisation so that
                you can get your freedom back and focus on the core of the
                business.
              </h4>
              <div
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                <Link
                  href="/portfolio"
                  className="axil-btn btn-fill-white btn-large"
                >
                  View Showcase
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-xl-5"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="100"
          >
            <div className="banner-form">
              <div className="contact-form-box shadow-box">
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
      </div>
    </div>
  );
}
