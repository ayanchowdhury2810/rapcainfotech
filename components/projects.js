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
