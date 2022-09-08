// const servicesTemplate = document.createElement("template");

// class services extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     this.innerHTML = `
//     <section class="section section-padding">
//             <div class="container">
//                 <div class="section-heading heading-left mb--20 mb_md--70">
//                     <span class="subtitle">What We Can Do For You</span>
//                     <h2 class="title">
//                         Services we can <br />
//                         help you with
//                     </h2>
//                 </div>
//                 <div class="row">
//                     <div class="col-lg-4 mt--200 mt_md--0" data-sal="slide-up" data-sal-duration="800"
//                         data-sal-delay="100">
//                         <div class="services-grid service-style-2">
//                             <div class="thumbnail">
//                                 <img src="assets/logos/React.svg" alt="icon" width="85px" height="80px"/>
//                             </div>
//                             <div class="content">
//                                 <h5 class="title"><a href="service-reactjs.html">React.js Development</a></h5>
//                                 <p>
//                                 User interface built with React that is Truly Outstanding, Responsive, Interactive, SEO friendly and Intuitive.
//                                 </p>
//                                 <a href="service-reactjs.html" class="more-btn">Find out more</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-4 mt--100 mt_md--0" data-sal="slide-up" data-sal-duration="800"
//                         data-sal-delay="200">
//                         <div class="services-grid service-style-2 active">
//                             <div class="thumbnail">
//                                 <img src="assets/logos/Nextjs.svg" alt="icon" width="85px" height="80px"/>
//                             </div>
//                             <div class="content">
//                                 <h5 class="title"><a href="service-development.html">Next.js Development</a></h5>
//                                 <p>
//                                 Next JS is a React JS framework, which is popular to create enterprise PWAs, Server rendered apps, Light-weight apps, SEO friendly websites. Next JS takes an important part in React SSR websites.</p>
//                                 <a href="service-nextjs.html" class="more-btn">Find out more</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-4" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
//                         <div class="services-grid service-style-2">
//                             <div class="thumbnail">
//                                 <img src="assets/media/icon/icon-35.png" alt="icon" />
//                             </div>
//                             <div class="content">
//                                 <h5 class="title">
//                                     <a href="service-frontend.html">Frontend Development</a>
//                                 </h5>
//                                 <p>
//                                 Interactive custom web applications to deliver pixel-perfect, stunning user experience that is responsive, mobile-first, efficient, SEO friendly User Interfaces connecting them with back-end effectively.
//                                 </p>
//                                 <a href="service-frontend.html" class="more-btn">Find out more</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <ul class="shape-group-7 list-unstyled">
//                 <li class="shape shape-1"><img src="assets/media/others/circle-2.png" alt="circle" /></li>
//                 <li class="shape shape-2"><img src="assets/media/others/bubble-2.png" alt="Line" /></li>
//                 <li class="shape shape-3"><img src="assets/media/others/bubble-1.png" alt="Line" /></li>
//             </ul>
//         </section>
//     `;
//   }
// }

// customElements.define("services-component", services);

import Link from 'next/link';
import React from 'react';

export default function services() {
  return (
    <section className="section section-padding">
      <div className="container">
        <div className="section-heading heading-left mb--20 mb_md--70">
          <span className="subtitle">What We Can Do For You</span>
          <h2 className="title">
            Services we can <br />
            help you with
          </h2>
        </div>
        <div className="row">
          <div
            className="col-lg-4 mt--200 mt_md--0"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="100"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <img
                  src="assets/logos/React.svg"
                  alt="icon"
                  width="85px"
                  height="80px"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service-reactjs">React.js Development</Link>
                </h5>
                <p>
                  User interface built with React that is Truly Outstanding,
                  Responsive, Interactive, SEO friendly and Intuitive.
                </p>
                <Link href="/service-reactjs" className="more-btn">
                  Find out more
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 mt--100 mt_md--0"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <div className="services-grid service-style-2 active">
              <div className="thumbnail">
                <img
                  src="assets/logos/Nextjs.svg"
                  alt="icon"
                  width="85px"
                  height="80px"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service-development">Next.js Development</Link>
                </h5>
                <p>
                  Next JS is a React JS framework, which is popular to create
                  enterprise PWAs, Server rendered apps, Light-weight apps, SEO
                  friendly websites. Next JS takes an important part in React
                  SSR websites.
                </p>
                <Link href="/service-nextjs" className="more-btn">
                  Find out more
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="300"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <img src="assets/media/icon/icon-35.png" alt="icon" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service-frontend">Frontend Development</Link>
                </h5>
                <p>
                  Interactive custom web applications to deliver pixel-perfect,
                  stunning user experience that is responsive, mobile-first,
                  efficient, SEO friendly User Interfaces connecting them with
                  back-end effectively.
                </p>
                <Link href="/service-frontend" className="more-btn">
                  Find out more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-7 list-unstyled">
        <li className="shape shape-1">
          <img src="assets/media/others/circle-2.png" alt="circle" />
        </li>
        <li className="shape shape-2">
          <img src="assets/media/others/bubble-2.png" alt="Line" />
        </li>
        <li className="shape shape-3">
          <img src="assets/media/others/bubble-1.png" alt="Line" />
        </li>
      </ul>
    </section>
  );
}
