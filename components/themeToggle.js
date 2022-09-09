import React from 'react';

export default function themeToggle() {
  return (
    <div className="my_switcher d-none d-lg-block">
      <ul>
        <li title="Light Mode">
          <a
            href="javascript:void(0)"
            className="setColor light"
            data-theme="light"
          >
            <i className="fal fa-lightbulb-on"></i>
          </a>
        </li>
        <li title="Dark Mode">
          <a
            href="javascript:void(0)"
            className="setColor dark"
            data-theme="dark"
          >
            <i className="fas fa-moon"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
