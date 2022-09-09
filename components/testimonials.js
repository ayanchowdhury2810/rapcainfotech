import React from 'react';

export default function testimonials() {
  return (
    <section className="section section-padding">
      <div className="container">
        <div className="section-heading heading-left">
          <h2 className="title">Testimonials</h2>
        </div>
        <div className="row">
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="100"
          >
            <div className="testimonial-grid active">
              <span className="social-media">
                <img
                  src="assets/images/weExpand logo.png"
                  alt="WeExpand testimonial"
                  style={{ height: '40px' }}
                />
              </span>
              <p>
                “Fast work with good quality. And very resourceful. Well done.”
              </p>
              <div className="author-info">
                <div className="content">
                  <span className="name">Steve Ng</span>
                  <span className="designation">
                    Co-Founder and CTO at WeExpand
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="100"
          >
            <div className="testimonial-grid active">
              <span className="social-media">
                <img
                  src="assets/media/brand/liquidonate.webp"
                  alt="LiquiDonate testimonial"
                  style={{ height: '40px' }}
                />
              </span>
              <p>
                “It was a pleasure working with Priam. He developed a complex
                widget for our website. He also ensured that the page was mobile
                friendly. Thanks for working with me! Will definitely work with
                you again.”
              </p>
              <div className="author-info">
                <div className="content">
                  <span className="name">Chai Nadig</span>
                  <span className="designation">LiquiDonate</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="100"
          >
            <div className="testimonial-grid active">
              <span className="social-media">
                <img
                  src="assets/media/brand/hungerlink.svg"
                  alt="Hunger Link testimonial"
                  style={{ height: '40px' }}
                />
              </span>
              <p>
                “Priam is adept at react front-end development. He was able able
                to finish all the requirements.”
              </p>
              <div className="author-info">
                <div className="content">
                  <span className="name">Sid J.</span>
                  <span className="designation">Hunger Link</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-4 list-unstyled">
        <li className="shape-1">
          <img src="assets/media/others/bubble-1.png" alt="Bubble" />
        </li>
      </ul>
    </section>
  );
}
