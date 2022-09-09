import React from 'react';

export default function aboutus() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us">
              <div className="section-heading heading-left">
                <span className="subtitle">About Us</span>
                <h3 className="title">Why branding matters?</h3>
                <p>
                  Ut condimentum enim nec diam convallis mollis. Sed felis quam,
                  semper dapibus purus sed, rhoncus ullamcorper lacus.
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
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-form-box shadow-box mb--30">
              <h3 className="title">Get a free Keystroke quote now</h3>
              <form>
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
                    name="name"
                    placeholder="example@mail.com"
                  />
                </div>
                <div className="form-group mb--40">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="Phone"
                    placeholder="+123456789"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="axil-btn btn-fill-primary btn-fluid"
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
  );
}
