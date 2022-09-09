import Link from 'next/link';
import React from 'react';

export default function mainPortfolio() {
  return (
    <section className="section-padding single-portfolio-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-heading heading-left mb-0">
              <span className="subtitle">Branding, Creative</span>
              <h3 className="title">Creative agency</h3>
            </div>
            <p>
              From the designers and engineers who are creating the next
              generation of web and mobile experiences, to anyone putting a
              website together for the first time. We provide elegant solutions
              that set new standards for online publishing.
            </p>
            <p>
              Digital technology has made our world more transparent and
              interconnected, posing new challenges and opportunities for every
              business. A holistic, user-centric perspective is what truly sets
              one apart.
            </p>
            <Link href="/contact" className="axil-btn btn-fill-primary">
              Get it Now
            </Link>
          </div>
          <div className="col-lg-6 offset-xl-1">
            <div className="why-choose-us">
              <div className="section-heading heading-left">
                <h3 className="title">We delivered</h3>
                <p>
                  Digital technology has made our world more transparent and
                  interconnected, posing new challenges and opportunities for
                  every business.
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
                      <i className="far fa-compress"></i> Strategy
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#choose-accordion"
                  >
                    <div className="accordion-body">
                      Aenean hendrerit laoreet vehicula. Nullam convallis augue
                      at enim gravida pellentesque.
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
                      <i className="far fa-code"></i>Design
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#choose-accordion"
                  >
                    <div className="accordion-body">
                      Aenean hendrerit laoreet vehicula. Nullam convallis augue
                      at enim gravida pellentesque.
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
                      <i className="fal fa-globe"></i>Development
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#choose-accordion"
                  >
                    <div className="accordion-body">
                      Aenean hendrerit laoreet vehicula. Nullam convallis augue
                      at enim gravida pellentesque.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
