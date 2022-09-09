import React from 'react';
import Head from 'next/head';
import Backtotop from '../components/backToTop';
import Themetoggle from '../components/themeToggle';
import Nav from '../components/nav';
import CallToAction from '../components/callToAction';
import Footer from '../components/footer';
import Script from 'next/script';
import Link from 'next/link';

function blogContextApi() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Abstrak | Blog Details</title>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <!-- Favicon --> */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="../public/assets/media/favicon.png"
        />
        <link
          rel="stylesheet"
          href="../public/assets/css/vendor/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="../public/assets/css/vendor/font-awesome.css"
        />
        <link rel="stylesheet" href="../public/assets/css/vendor/slick.css" />
        <link
          rel="stylesheet"
          href="../public/assets/css/vendor/slick-theme.css"
        />
        <link rel="stylesheet" href="../public/assets/css/vendor/sal.css" />
        <link
          rel="stylesheet"
          href="../public/assets/css/vendor/magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="../public/assets/css/vendor/green-audio-player.min.css"
        />

        {/* <!-- Site Stylesheet --> */}
        {/* <link rel="stylesheet" href="assets/css/app.css"> */}
      </Head>

      <body className="sticky-header">
        {/* <!--[if lte IE 9]>
        <p className="browserupgrade">
          You are using an <strong>outdated</strong> browser. Please{' '}
          <a href="https://browsehappy.com/">upgrade your browser</a> to improve
          your experience and security.
        </p>
        <![endif]--> */}
        <Backtotop></Backtotop>

        {/* <!-- Preloader Start Here --> */}
        <div id="preloader"></div>
        {/* <!-- Preloader End Here --> */}

        <Themetoggle></Themetoggle>

        {/* <!--=====================================-->
        <!--=        Header Area Start       	=-->
        <!--=====================================--> */}
        <Nav></Nav>

        {/* <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================--> */}
        <div className="breadcrum-area">
          <div className="container">
            <div className="breadcrumb">
              <ul className="list-unstyled">
                <li>
                  <Link href="/index-1">Home</Link>
                </li>
                <li className="active">Blog</li>
              </ul>
              <h1 className="title h2"> Context API Blog</h1>
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li
              className="shape shape-1"
              data-sal="slide-right"
              data-sal-duration="500"
              data-sal-delay="100"
            >
              <img src="/assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="/assets/media/others/bubble-11.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="/assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>
        {/* <!--=====================================-->
        <!--=        Blog Area Start       	    =-->
        <!--=====================================--> */}
        <section className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <div className="single-blog">
                  <div className="single-blog-content blog-grid">
                    <div className="post-thumbnail">
                      {/* <!-- <img src="/assets/media/blog/blog-3.png" alt="Blog"> --> */}
                    </div>
                    <div className="author">
                      <div className="author-thumb">
                        <img
                          src="/assets/media/blog/author-1.png"
                          alt="Blog Author"
                        />
                      </div>
                      <div className="info">
                        <h6 className="author-name">Shashank Singhal</h6>
                        <ul className="blog-meta list-unstyled">
                          <li>March 10, 2022</li>
                          <li>19 min to read</li>
                        </ul>
                      </div>
                    </div>
                    <h3 className="step mb-0">step 1. </h3>
                    <p>
                      Create react app.Use npx command “npx create-react-app
                      my-app” to create an app.
                      <img
                        className="mt-10 "
                        src="/assets/media/blog/context-api/1.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 2. </h3>
                    <p>
                      Start npm, Use npm command “npm start”.
                      <img
                        src="/assets/media/blog/context-api/2.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 3.</h3>
                    <p>
                      Create new folder Context by click Add sign on top and
                      name it “Context”
                      <img
                        src="/assets/media/blog/context-api/3.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 4.</h3>
                    <p>
                      Create new file TodoContext.js in folder Context by click
                      on add sign on top.
                      <img
                        src="/assets/media/blog/context-api/4.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 5.</h3>
                    <p>
                      First declare function Const TodoContext =
                      createContext(). Then create export function
                      {/* TodoContextProvider({children}).Then with the help of */}
                      useState and useEffect hook and fetch rest Api data with
                      async await method help of this link.
                      “https://jsonplaceholder.typicode.com/todos” .
                      {/* and import all value of {useState, useEffect and createContext} form “react”. */}
                      <img
                        src="/assets/media/blog/context-api/5.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 6.</h3>
                    <p>
                      Return and import
                      {/* <TodoContext.Provider /> */}
                      component and add value todos to
                      {/* {child} */}
                      component.
                      <img
                        src="/assets/media/blog/context-api/6.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 7.</h3>
                    <p>
                      Make a export function useTodo() to throw new
                      error(“context must be used within a provider”) If context
                      is undefined.and context = useContext(todoContext).
                      <img
                        src="/assets/media/blog/context-api/7.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 8.</h3>
                    <p>
                      Create new file Title.js outside of the Context folder.
                      <img
                        src="/assets/media/blog/context-api/8.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 9.</h3>
                    <p>
                      Create function Todos() and todos = useTodo(), import
                      useTodo from “Context/todoContext” then using map function
                      method render Api data on screen.
                      <img
                        src="/assets/media/blog/context-api/9.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 10.</h3>
                    <p>
                      Install bootstrap. Use command “npm install bootstrap”.
                      <img
                        src="/assets/media/blog/context-api/10.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 11.</h3>
                    <p>
                      Copy card component layout from bootstrap website. Link of
                      website
                      “https://getbootstrap.com/docs/5.1/components/card/”.
                      <img
                        src="/assets/media/blog/context-api/11.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 12.</h3>
                    <p>
                      {' '}
                      Paste card component and className.
                      <img
                        src="/assets/media/blog/context-api/12.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 13.</h3>
                    <p>
                      Import
                      {/* <TodoContext.Provider /> */}
                      component and in between
                      {/* <Todos /> */}
                      component in App.js FIle .
                      <img
                        src="/assets/media/blog/context-api/13.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 14.</h3>
                    <p>
                      Save All work with ctrl+s and show the output on browser
                      where your server will run. All Titles with id show on
                      your screen in cards.
                      <img
                        src="/assets/media/blog/context-api/14.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 15.</h3>
                    <p>
                      Make function addTodos to add Title in list with the use
                      of useState(“”), and setContextTodos(‘’) value null string
                      to reset input value after adding Title in Title.js file.
                      <img
                        src="/assets/media/blog/context-api/15.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 16.</h3>
                    <p>
                      Make a function deleteTodos() and set parameter as id and
                      setContextTodos value as prev and take a new var to store
                      a filter id which is not equal to delete id. to delete
                      Titles in TodoContext.js file and export in the value of
                      {/* <TodoContext.Provider /> */}
                      components.
                      <img
                        src="/assets/media/blog/context-api/16.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 17.</h3>
                    <p>
                      Add buttons to make function works of Add titles and
                      delete titles. Define onClick event with addTodos() value
                      and deleteTodos() functions and pass the values.
                      <img
                        src="/assets/media/blog/context-api/17.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 18.</h3>
                    <p>
                      {' '}
                      Install react icons package . Use command “npm install
                      react-icons”.
                      <img
                        src="/assets/media/blog/context-api/18.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 19.</h3>
                    <p>
                      Install uuid package to give a unique id to each title.
                      Use command “npm install uuid”.
                      <img
                        src="/assets/media/blog/context-api/19.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 20.</h3>
                    <p>
                      Import
                      {/* {v4 as uuidv4} */}
                      from uuid at top and use as id in addTodos function.
                      <img
                        src="/assets/media/blog/context-api/20.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 21.</h3>
                    <p>
                      Import VscTrash icon from react-icons/vsc package and used
                      in the behalf of delete button.
                      <img
                        src="/assets/media/blog/context-api/21.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 22.</h3>
                    <p>
                      Now add some css to show output beautiful and attractive.
                      Then change input field color and button background color
                      and card body background color.
                      <img
                        src="/assets/media/blog/context-api/22.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 23.</h3>
                    <p>
                      Add trash button background color to red and font size to
                      change on hover.
                      <img
                        src="/assets/media/blog/context-api/23.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 24.</h3>
                    <p>
                      The final output is here in which we can add and delete
                      titles in lists.
                      <img
                        src="/assets/media/blog/context-api/24.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 25.</h3>
                    <p>
                      To find errors we can use try and catch method to show
                      errors. We can put fetch api responses in try block and
                      catch errors in console.to show errors we can use alert(`&
                      {/* {error} */}
                      `).
                      <img
                        src="/assets/media/blog/context-api/25.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 26.</h3>
                    <p>
                      To show alerts on screen with colorful messages we can use
                      npm package react toastify. To use give command on
                      terminal “npm install react-toastify”.
                      <img
                        src="/assets/media/blog/context-api/26.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 27.</h3>
                    <p>
                      To use react toastify we can make a function alertToast()
                      and call on the alert place to use it and msg as
                      parameter. Use property position, theme, autoclose to
                      modify your alert massage.
                      <img
                        src="/assets/media/blog/context-api/27.png"
                        alt="Blog"
                      />
                    </p>

                    <h3 className="step mb-0">step 28.</h3>
                    <p>
                      We can also use react toastify in add or delete Titles
                      also. To use it we can make addToast and deleteToast
                      function with properties. And remember to import react
                      toastify and its css file on top of the code.
                      <img
                        src="/assets/media/blog/context-api/28.png"
                        alt="Blog"
                      />{' '}
                    </p>

                    <h3 className="step mb-0">step 29.</h3>
                    <p>
                      Call function in button in onClick event in both add and
                      delete title buttons.
                      <img
                        src="/assets/media/blog/context-api/29.png"
                        alt="Blog"
                      />{' '}
                    </p>

                    <h3 className="step mb-0">step 30.</h3>
                    <p>
                      {' '}
                      Output on click add title button.
                      <img
                        src="/assets/media/blog/context-api/30.png"
                        alt="Blog"
                      />{' '}
                    </p>

                    <h3 className="step mb-0">step 31.</h3>
                    <p>
                      {' '}
                      Output on click delete title button.
                      <img
                        src="/assets/media/blog/context-api/31.png"
                        alt="Blog"
                      />{' '}
                    </p>

                    <h3 className="step mb-0">step 32.</h3>
                    <p>
                      {' '}
                      Output of any error in response in data.
                      <img
                        src="/assets/media/blog/context-api/32.png"
                        alt="Blog"
                      />
                    </p>

                    {/* <!-- <h3 className="title mb--30">step 32.</h3>
                                <p>.</p>
                                <img src="/assets/media/blog/blog-3.png" alt="Blog"> --/> */}

                    {/* <!-- <p>Habitasse per feugiat aliquam luctus accumsan curae, suspendisse aliquam taciti eros
                                    neque, aenean sit iaculis risus commodo ut sociosqu rhoncus potenti tristique
                                    placerat sit tempus, duis erat feugiat cras sociosqu porta ut praesent, fermentum
                                    donec convallis tellus vulputate duis nibh rhoncus phasellus dui massa nisl.</p>
                                <p> Whether you’re kicking off a new campaign or looking to revamp your strategy, the
                                    lessons you’ll learn will be universal to all small business email marketing.</p>
                                <p className="mb--80">MailChimp is an email marketing service provider founded in 2001. It
                                    has 9 million users that collectively send over 15 billion emails through the
                                    service each month.</p>
                                <h3 className="title mb--30">Habitasse per feugiat aliquam luctus</h3>
                                <p>Email is a crucial channel in any marketing mix, and never has this been truer than
                                    for today’s entrepreneur. Curious what to say? How to say it? How often to hit
                                    “send”? Each bite-sized lesson delivers core concepts, guiding questions, and
                                    tactical how-to resources.</p>
                                <p>Whether you’re kicking off a new campaign or looking to revamp your strategy, the
                                    lessons you’ll learn will be universal to all small business email marketing.</p>
                                <div className="blog-grid blog-without-thumb mt--80">
                                    <blockquote>
                                        <h5 className="title"><a href="single-blog.html">“ Donec metus lorem, vulputate at
                                                sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum
                                                eget risus velit. ”</a></h5>
                                    </blockquote> --> */}

                    {/* <!-------------------------------------------->
 <!---------- scrollbar blog----------------->
 <!----------------------------------------> */}

                    <div className="author">
                      <div className="info">
                        <h6 className="author-name"> Shashank Singhal </h6>
                        <ul className="blog-meta list-unstyled">
                          <li>March 16, 2022</li>
                          <li>15 min to read</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h1 className="title h2"> Scrollbar Properties Blog </h1>

                  <h3 className="step mb-0">step 1. </h3>
                  <p>
                    Create a new HTML file name “blog.html”.
                    <img
                      className="mt-10 "
                      src="/assets/media/blog/scrollbar/1.png"
                      alt="Blog"
                    />
                  </p>

                  <h3 className="step mb-0">step 2. </h3>
                  <p>
                    Create a new CSS file named “style.css”.
                    <img src="/assets/media/blog/scrollbar/2.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 3.</h3>
                  <p>
                    Write HTML basic elements and Add link tag to link css file
                    in html file.
                    <img src="/assets/media/blog/scrollbar/3.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 4.</h3>
                  <p>
                    Write a paragraph as you wish to show how the scroll bar
                    works.
                    <img src="/assets/media/blog/scrollbar/4.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 5.</h3>
                  <p>
                    Add CSS to show content more readable.
                    <img src="/assets/media/blog/scrollbar/5.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 6.</h3>
                  <p>
                    {' '}
                    Add scroll property in div tag by using overflow property of
                    css .
                    <img src="/assets/media/blog/scrollbar/6.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 7.</h3>
                  <p>
                    Output of default scroll bar.
                    <img src="/assets/media/blog/scrollbar/7.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 8.</h3>
                  <p>
                    Some CSS overflow properties are . <br />
                    1. Overflow: auto;
                    <img src="/assets/media/blog/scrollbar/8.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 9.</h3>
                  <p>
                    {' '}
                    Output - In this property it will automatically make a
                    scroll bar where it will need either vertically or
                    horizontally .
                    <img src="/assets/media/blog/scrollbar/9.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 10.</h3>
                  <p>
                    Overflow: hidden;
                    <img src="/assets/media/blog/scrollbar/10.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 11.</h3>
                  <p>
                    Output- it will hide the scroll bar but content present in a
                    container.
                    <img src="/assets/media/blog/scrollbar/11.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 12.</h3>
                  <p>
                    {' '}
                    Overflow: visible;
                    <img src="/assets/media/blog/scrollbar/12.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 13.</h3>
                  <p>
                    Output - in this property content will overflow to the
                    container.
                    <img src="/assets/media/blog/scrollbar/13.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 14.</h3>
                  <p>
                    Overflow: scroll;
                    <img src="/assets/media/blog/scrollbar/14.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 15.</h3>
                  <p>
                    Output- in this property scroll bar will show and both
                    vertically and horizontally
                    <img src="/assets/media/blog/scrollbar/15.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 16.</h3>
                  <p>
                    Overflow-x : scroll; or overflow-y: hidden; property
                    <img src="/assets/media/blog/scrollbar/16.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 17.</h3>
                  <p>
                    Output- in this property each side either vertically or
                    horizontally defined with property . In this example
                    vertically hidden and horizontal show .
                    <img src="/assets/media/blog/scrollbar/17.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 18.</h3>
                  <p>
                    {' '}
                    Overflow-x : hidden; or overflow-y: scroll; property
                    <img src="/assets/media/blog/scrollbar/18.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 19.</h3>
                  <p>
                    Output- In this example vertically scroll and horizontally
                    hidden .
                    <img src="/assets/media/blog/scrollbar/19.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 20.</h3>
                  <p>
                    Now design our scroll bar with some advanced properties of
                    css. ::webkit-scrollbar with track or thumb to add size or
                    color of scroll bar .
                    <img src="/assets/media/blog/scrollbar/20.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 21.</h3>
                  <p>
                    Output - scrollbar shown on the right side of the content .
                    <img src="/assets/media/blog/scrollbar/21.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 22.</h3>
                  <p>
                    Now add buttons on the corner of the scrollbar to use upward
                    and down functions in the scroll bar with buttons.
                    <img src="/assets/media/blog/scrollbar/22.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 23.</h3>
                  <p>
                    Output- buttons are shown on both side but not proper
                    design.
                    <img src="/assets/media/blog/scrollbar/23.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 24.</h3>
                  <p>
                    Now the style up sides of the button with triangle shape and
                    hover effect .
                    <img src="/assets/media/blog/scrollbar/24.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 25.</h3>
                  <p>
                    Now the style down sides of the button with triangle shape
                    and hover effect .
                    <img src="/assets/media/blog/scrollbar/25.png" alt="Blog" />
                  </p>

                  <h3 className="step mb-0">step 26.</h3>
                  <p>
                    Output - the buttons are shown in upper and lower side of
                    scrollbar
                    <img src="/assets/media/blog/scrollbar/26.png" alt="Blog" />
                  </p>
                  {/* <!-- <h3 className="title mb--30">Habitasse per feugiat aliquam luctus accumsan curae</h3>
                            <p className="mb--40">Email is a crucial channel in any marketing mix, and never has this
                                been truer than for today’s entrepreneur. Curious what to say? How to say it? How
                                often to hit “send”? Each bite-sized lesson delivers core concepts, guiding
                                questions, and tactical how-to resources.</p>
                            <div className="row">
                                <div className="col-6">
                                    <div className="featured-img">
                                        <img src="/assets/media/blog/blog-8.png" alt="Blog"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="featured-img">
                                        <img src="/assets/media/blog/blog-9.png" alt="Blog"//>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}
                  <div className="blog-author">
                    <div className="author">
                      <div className="author-thumb">
                        <img
                          src="/assets/media/blog/author-3.png"
                          alt="Blog Author"
                        />
                      </div>
                      <div className="info">
                        <h5 className="title">
                          <Link href="/#">Theresa Underwood</Link>
                        </h5>
                        <p>
                          Email is a crucial channel in any marketing mix, and
                          never has this been truer than for today’s
                          entrepreneur. Curious what to say.
                        </p>
                        <ul className="social-share list-unstyled">
                          <li>
                            <Link href="/#">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="fab fa-pinterest-p"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="fab fa-vimeo-v"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="fab fa-dribbble"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="fab fa-behance"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="blog-comment">
                    <h3 className="section-title">Comments:</h3>
                    <div className="comment-list">
                      {/* <!-- Start Single Comment  --> */}
                      <div className="comment">
                        <div className="thumbnail">
                          <img
                            src="/assets/media/blog/author-1.png"
                            alt="Blog Comment"
                          />
                        </div>
                        <div className="content">
                          <div className="heading">
                            <h5 className="title">Sophie Asveld</h5>
                            <div className="comment-date">
                              <p>February 14, 2021</p>
                              <Link className="reply-btn" href="/#">
                                <i className="fas fa-reply"></i>
                              </Link>
                            </div>
                          </div>
                          <p>
                            Email is a crucial channel in any marketing mix, and
                            never has this been truer than for today’s
                            entrepreneur. Curious what to say.
                          </p>
                        </div>
                      </div>
                      {/* <!-- End Single Comment  -->
                                <!-- Start Single Comment  --> */}
                      <div className="comment comment-reply">
                        <div className="thumbnail">
                          <img
                            src="/assets/media/blog/author-2.png"
                            alt="Blog Comment"
                          />
                        </div>
                        <div className="content">
                          <div className="heading">
                            <h5 className="title">Ariana Gerad</h5>
                            <div className="comment-date">
                              <p>February 14, 2021</p>
                              <Link className="reply-btn" href="/#">
                                <i className="fas fa-reply"></i>
                              </Link>
                            </div>
                          </div>
                          <p>
                            Email is a crucial channel in any marketing mix, and
                            never has this been truer than for today’s
                            entrepreneur. Curious what to say.
                          </p>
                        </div>
                      </div>
                      {/* <!-- End Single Comment  -->
                                <!-- Start Single Comment  --> */}
                      <div className="comment">
                        <div className="thumbnail">
                          <img
                            src="/assets/media/blog/author-3.png"
                            alt="Blog Comment"
                          />
                        </div>
                        <div className="content">
                          <div className="heading">
                            <h5 className="title">Sophie Asveld</h5>
                            <div className="comment-date">
                              <p>February 14, 2021</p>
                              <Link className="reply-btn" href="/#">
                                <i className="fas fa-reply"></i>
                              </Link>
                            </div>
                          </div>
                          <p>
                            Email is a crucial channel in any marketing mix, and
                            never has this been truer than for today’s
                            entrepreneur. Curious what to say.
                          </p>
                        </div>
                      </div>
                      {/* <!-- End Single Comment  --> */}
                    </div>
                  </div>
                  <div className="blog-comment-form">
                    <h3 className="title">Leave a comment:</h3>
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="John Smith"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              name="name"
                              placeholder="example@mail.com"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Phone</label>
                            <input
                              type="tel"
                              className="form-control"
                              name="Phone"
                              placeholder="+123456789"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Website</label>
                            <input
                              type="text"
                              className="form-control"
                              name="website"
                              placeholder="www.example.com"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb--30">
                            <label>How can we help you?</label>
                            <textarea
                              name="message"
                              id="message"
                              className="form-control textarea"
                              cols="30"
                              rows="4"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="form-group">
                            <button
                              type="submit"
                              className="axil-btn btn-fill-primary btn-fluid"
                              name="submit-btn"
                            >
                              Submit Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="axil-sidebar">
                  <div className="widget widget-search">
                    <h4 className="widget-title">Search</h4>
                    <form action="#" className="blog-search">
                      <input type="text" placeholder="Search…" />
                      <button className="search-button">
                        <i className="fal fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="widget widget-categories">
                    <h4 className="widget-title">Categories</h4>
                    <ul className="category-list list-unstyled">
                      <li>
                        <Link href="/blog-category">Agency news</Link>
                      </li>
                      <li>
                        <Link href="/blog-category">Blog</Link>
                      </li>
                      <li>
                        <Link href="/blog-category">
                          Information technology
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-category">New ideas</Link>
                      </li>
                      <li>
                        <Link href="/blog-category">Uncategorized</Link>
                      </li>
                      <li>
                        <Link href="/blog-category">
                          Marketing &amp; branding
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widge-social-share">
                    <div className="blog-share">
                      <h5 className="title">Follow:</h5>
                      <ul className="social-list list-unstyled">
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
                          <Link href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.youtube.com/">
                            <i className="fab fa-youtube"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget widget-recent-post">
                    <h4 className="widget-title">Recent post</h4>
                    <div className="post-list-wrap">
                      <div className="single-post">
                        <div className="post-thumbnail">
                          <Link href="/single-blog">
                            <img
                              src="/assets/media/blog/blog-5.png/"
                              alt="Blog"
                            />
                          </Link>
                        </div>
                        <div className="post-content">
                          <h6 className="title">
                            <Link href="/single-blog">
                              Take ownership and question the status quo in.
                            </Link>
                          </h6>
                          <ul className="blog-meta list-unstyled">
                            <li>Sep 10, 2021</li>
                            <li>9 min to read</li>
                          </ul>
                        </div>
                      </div>
                      <div className="single-post">
                        <div className="post-thumbnail">
                          <Link href="/single-blog">
                            <img
                              src="/assets/media/blog/blog-6.png/"
                              alt="Blog"
                            />
                          </Link>
                        </div>
                        <div className="post-content">
                          <h6 className="title">
                            <Link href="/single-blog">
                              Take ownership and question the status quo in.
                            </Link>
                          </h6>
                          <ul className="blog-meta list-unstyled">
                            <li>Sep 15, 2021</li>
                            <li>15 min to read</li>
                          </ul>
                        </div>
                      </div>
                      <div className="single-post">
                        <div className="post-thumbnail">
                          <Link href="/single-blog">
                            <img
                              src="/assets/media/blog/blog-7.png/"
                              alt="Blog"
                            />
                          </Link>
                        </div>
                        <div className="post-content">
                          <h6 className="title">
                            <Link href="/single-blog">
                              Take ownership and question the status quo in.
                            </Link>
                          </h6>
                          <ul className="blog-meta list-unstyled">
                            <li>Sep 5, 2021</li>
                            <li>8 min to read</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget-banner-ad">
                    <Link href="/#">
                      <img
                        src="/assets/media/banner/widget-banner.png"
                        alt="banner"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--=====================================-->
    <!--=       Recent Post Area Start      =-->
    <!--=====================================--> */}
        <section className="section section-padding-equal pt-0 related-blog-area">
          <div className="container">
            <div className="section-heading heading-left">
              <h3 className="title">Related Post</h3>
            </div>
            <div
              className="slick-slider recent-post-slide"
              data-slick='{"infinite": true, "autoplay": true, "arrows": false, "dots": false, "slidesToShow": 2,
        "responsive": [
            {
                "breakpoint": 1199,
                "settings": {
                    "slidesToShow": 1
                }
            }
        ]
        }'
            >
              <div className="slick-slide">
                <div className="blog-list">
                  <div className="post-thumbnail">
                    <Link href="single-blog.html">
                      <img
                        src="/assets/media/blog/blog-1.png"
                        alt="Blog Post"
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <h5 className="title">
                      <Link href="/single-blog-2">
                        How To Use a Remarketing Strategy To Get More
                      </Link>
                    </h5>
                    <p>
                      Demand generation is a constant struggle for any business.
                      Each marketing strategy you employ has...
                    </p>
                    <Link href="/single-blog-2" className="more-btn">
                      Learn more<i className="far fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div className="blog-list">
                  <div className="post-thumbnail">
                    <Link href="/single-blog">
                      <img
                        src="/assets/media/blog/blog-2.png"
                        alt="Blog Post"
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <h5 className="title">
                      <Link href="/single-blog-3">
                        SEO Statistics You Should Know in 2021
                      </Link>
                    </h5>
                    <p>
                      Organic search has the potential to capture more than 40
                      percent of your gross revenue...
                    </p>
                    <Link href="/single-blog-3" className="more-btn">
                      Learn more<i className="far fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div className="blog-list">
                  <div className="post-thumbnail">
                    <Link href="/single-blog">
                      <img
                        src="/assets/media/blog/blog-1.png"
                        alt="Blog Post"
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <h5 className="title">
                      <Link href="/single-blog-2">
                        How To Use a Remarketing Strategy To Get More
                      </Link>
                    </h5>
                    <p>
                      Demand generation is a constant struggle for any business.
                      Each marketing strategy you employ has...
                    </p>
                    <Link href="/single-blog-2" className="more-btn">
                      Learn more<i className="far fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--=====================================-->
    <!--=     Call To Action Area Start     =-->
    <!--=====================================--> */}
        <CallToAction></CallToAction>
        {/* <!--=====================================-->
    <!--=        Footer Area Start       	=-->
    <!--=====================================--> */}
        <Footer></Footer>

        {/* <!--=====================================-->
    <!--=       Offcanvas Menu Area       	=-->
    <!--=====================================--> */}
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
            <div className="row ">
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
                        Theodore Lowe, Ap #867-859 <br /> Sit Rd, Azusa New York
                      </p>
                    </address>
                    <address className="address">
                      <span className="title">
                        We're Available 24/7. Call Now.
                      </span>
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
      </body>
    </>
  );
}

export default blogContextApi;
