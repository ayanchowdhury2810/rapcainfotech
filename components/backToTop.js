import React from 'react';
import Link from 'next/link';

export default function backToTop() {
  return (
    <>
      <a href="#main-wrapper" id="backto-top" className="back-to-top">
        <i className="far fa-angle-double-up"></i>
      </a>
    </>
  );
}
