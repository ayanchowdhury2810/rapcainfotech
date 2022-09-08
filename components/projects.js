// const projectsTemplate = document.createElement("template");

// class projects extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     this.innerHTML = `
//     <section class="section section-padding-2 bg-color-light">
//             <div class="container">
//                 <div class="section-heading heading-left">
//                     <span class="subtitle">Our Project</span>
//                     <h2 class="title">
//                         Some of our <br />
//                         finest work.
//                     </h2>
//                 </div>
//                 <div class="axil-isotope-wrapper">
//                         <div class="row isotope-list">
//                             <div class="col-xl-4 col-md-6 project mobile">
//                             <div class="project-grid">
//                                 <div class="thumbnail">
//                                     <a href="https://www.getclientell.com/" target="__blank">
//                                         <img src="assets/images/clientell.png" alt="project">
//                                     </a>
//                                 </div>
//                                 <div class="content">
//                                     <h4 class="title"><a href="https://www.getclientell.com/" target="__blank">Clientell</a></h4>
//                                     <span class="subtitle">React.js, Typescript, D3.js, Material UI</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-xl-4 col-md-6 project branding">
//                                 <div class="project-grid">
//                                     <div class="thumbnail">
//                                         <a href="https://www.zaio.io" target="__blank">
//                                             <img src="assets/images/zaio.png" alt="Zaio.io">
//                                         </a>
//                                     </div>
//                                     <div class="content">
//                                         <h4 class="title"><a href="https://www.zaio.io" target="__blank">ZAIO</a></h4>
//                                         <span class="subtitle">Reactjs, Nodejs, Cloudinary, CodeSandBox, React-Bootstrap, Agora Web RTC</span>
//                                     </div>
//                                 </div>
//                         </div>
//                         <div class="col-xl-4 col-md-6 project branding">
//                             <div class="project-grid">
//                                 <div class="thumbnail">
//                                     <a href="https://finsight.ai" target="__blank">
//                                         <img src="assets/images/weexpand.png" alt="project">
//                                     </a>
//                                 </div>
//                                 <div class="content">
//                                     <h4 class="title"><a href="https://www.weexpand.co" target="__blank">Weexpand</a></h4>
//                                     <span class="subtitle">Typescript, Reactjs, Redux, Yum, formik, Material-UI, Styled-components</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-xl-4 col-md-6 project mobile">
//                             <div class="project-grid">
//                                 <div class="thumbnail">
//                                     <a href="https://finsight.ai" target="__blank">
//                                         <img src="assets/images/finsight.png" alt="project">
//                                     </a>
//                                 </div>
//                                 <div class="content">
//                                     <h4 class="title"><a href="https://finsight.ai" target="__blank">Finsight</a></h4>
//                                     <span class="subtitle">Reactjs, redux, firebase, Material-UI, Ant Design</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-xl-4 col-md-6 project mobile">
//                             <div class="project-grid">
//                                 <div class="thumbnail">
//                                     <a href="https://practworks.com/" target="__blank">
//                                         <img src="assets/images/practworks.png" alt="project">
//                                     </a>
//                                 </div>
//                                 <div class="content">
//                                     <h4 class="title"><a href="https://practworks.com/" target="__blank">Practworks</a></h4>
//                                     <span class="subtitle">React.js, Javascript, Pdf.js, Material UI</span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="col-xl-4 col-md-6 project mobile">
//                             <div class="project-grid">
//                                 <div class="thumbnail">
//                                     <a href="https://www.liquidonate.com/" target="__blank">
//                                         <img src="assets/images/liquidonate.png" alt="project">
//                                     </a>
//                                 </div>
//                                 <div class="content">
//                                     <h4 class="title"><a href="https://www.liquidonate.com/" target="__blank">LiquiDonate</a></h4>
//                                     <span class="subtitle">React.js, Typescript, D3.js, Material UI</span>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <!--=<div class="more-project-btn">
//                         <a href="#" class="axil-btn btn-fill-primary">Discover More Projects</a>
//                     </div>=-->
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

// customElements.define("projects-component", projects);

// {
//   /* <div class="col-xl-4 col-md-6 project branding">
//                             <div class="project-grid">
//                                 <div class="thumbnail">
//                                     <a href="https://hunger.link/">
//                                         <img src="assets/images/hunger link.jpg" alt="project">
//                                     </a>
//                                 </div>
//                                 <div class="content">
//                                     <h4 class="title"><a href="https://hunger.link/">Hunger.link</a></h4>
//                                     <span class="subtitle">React-Admin, Typescript</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-xl-4 col-md-6 project mobile">
//                             <div class="project-grid">
//                                 <div class="thumbnail">
//                                     <a href="https://www.careerado.com" target="__blank">
//                                         <img src="assets/images/careerado.png" alt="project">
//                                     </a>
//                                 </div>
//                                 <div class="content">
//                                     <h4 class="title"><a href="https://www.careerado.com" target="__blank">Careerado</a></h4>
//                                     <span class="subtitle">Next.js, Typescript, Firebase, Strapi</span>
//                                 </div>
//                             </div>
//                         </div>
//                     <div class="col-xl-4 col-md-6 project mobile">
//                             <div class="project-grid">
//                                 <div class="thumbnail">
//                                     <a href="https://pineappleacademy.com" target="__blank">
//                                         <img src="assets/images/pineapple-academy.png" alt="project">
//                                     </a>
//                                 </div>
//                                 <div class="content">
//                                     <h4 class="title"><a href="https://pineappleacademy.com" target="__blank">Pineapple Academy</a></h4>
//                                     <span class="subtitle">Next.js, Typescript, Material UI</span>
//                                 </div>
//                             </div>
//                         </div>
//                     */
// }

import Link from 'next/link';
import React from 'react';

export default function projects() {
  return (
    <section className="section section-padding-2 bg-color-light">
      <div className="container">
        <div className="section-heading heading-left">
          <span className="subtitle">Our Project</span>
          <h2 className="title">
            Some of our <br />
            finest work.
          </h2>
        </div>
        <div className="axil-isotope-wrapper">
          <div className="row isotope-list">
            <div className="col-xl-4 col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="https://www.getclientell.com/" target="__blank">
                    <img src="assets/images/clientell.png" alt="project" />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="https://www.getclientell.com/" target="__blank">
                      Clientell
                    </Link>
                  </h4>
                  <span className="subtitle">
                    React.js, Typescript, D3.js, Material UI
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="https://www.zaio.io" target="__blank">
                    <img src="assets/images/zaio.png" alt="Zaio.io" />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="https://www.zaio.io" target="__blank">
                      ZAIO
                    </Link>
                  </h4>
                  <span className="subtitle">
                    Reactjs, Nodejs, Cloudinary, CodeSandBox, React-Bootstrap,
                    Agora Web RTC
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project branding">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="https://finsight.ai" target="__blank">
                    <img src="assets/images/weexpand.png" alt="project" />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="https://www.weexpand.co" target="__blank">
                      Weexpand
                    </Link>
                  </h4>
                  <span className="subtitle">
                    Typescript, Reactjs, Redux, Yum, formik, Material-UI,
                    Styled-components
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="https://finsight.ai" target="__blank">
                    <img src="assets/images/finsight.png" alt="project" />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="https://finsight.ai" target="__blank">
                      Finsight
                    </Link>
                  </h4>
                  <span className="subtitle">
                    Reactjs, redux, firebase, Material-UI, Ant Design
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="https://practworks.com/" target="__blank">
                    <img src="assets/images/practworks.png" alt="project" />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="https://practworks.com/" target="__blank">
                      Practworks
                    </Link>
                  </h4>
                  <span className="subtitle">
                    React.js, Javascript, Pdf.js, Material UI
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 project mobile">
              <div className="project-grid">
                <div className="thumbnail">
                  <Link href="https://www.liquidonate.com/" target="__blank">
                    <img src="assets/images/liquidonate.png" alt="project" />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="https://www.liquidonate.com/" target="__blank">
                      LiquiDonate
                    </Link>
                  </h4>
                  <span className="subtitle">
                    React.js, Typescript, D3.js, Material UI
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!--=<div className="more-project-btn">
                        <a href="#" className="axil-btn btn-fill-primary">Discover More Projects</a>
                    </div>=--> */}
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
