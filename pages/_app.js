import '../styles/globals.css';
import '../public/assets/media/favicon.png';
import '../public/assets/css/vendor/bootstrap.min.css';
import '../public/assets/css/vendor/font-awesome.css';
import '../public/assets/css/vendor/slick.css';
import '../public/assets/css/vendor/slick-theme.css';
import '../public/assets/css/vendor/sal.css';
import '../public/assets/css/vendor/magnific-popup.css';
import '../public/assets/css/vendor/green-audio-player.min.css';
import '../public/assets/css/App.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="assets/js/vendor/jquery-3.6.0.min.js" />
      <Script src="assets/js/vendor/bootstrap.min.js" />
      <Script src="assets/js/vendor/isotope.pkgd.min.js" />
      <Script src="assets/js/vendor/imagesloaded.pkgd.min.js" />
      <Script src="assets/js/vendor/waypoints.min.js" />
      <Script src="assets/js/vendor/counterup.js" />
      <Script src="assets/js/vendor/slick.min.js" />
      <Script src="assets/js/vendor/sal.js" />
      <Script src="assets/js/vendor/jquery.magnific-popup.min.js" />
      <Script src="assets/js/vendor/js.cookie.js" />
      <Script src="assets/js/vendor/jquery.style.switcher.js" />
      <Script src="assets/js/vendor/jquery.countdown.min.js" />
      <Script src="assets/js/vendor/tilt.js" />
      <Script src="assets/js/vendor/green-audio-player.min.js" />
      <Script src="assets/js/vendor/jquery.nav.js" />
      <Script src="public/assets/js/app.js" />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
