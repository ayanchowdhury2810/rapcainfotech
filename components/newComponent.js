// 'use strict';

// const e = React.createElement;

// class newComponent extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {};
//   // }

//   render() {
//     return e(
//       <>
//         <h1>Hello</h1>
//         <ul>
//           <li>My </li>
//           <li>name</li>
//         </ul>
//       </>
//       // 'h1', {}, 'hqllo'
//     );
//   }
// }

// // document.querySelectorAll('.heading').forEach((domContainer) => {
// //   // const commentID = parseInt(domContainer.dataset.commentID, 10);
// //   const root = ReactDOM.createRoot(domContainer);
// //   root.render(
// //     newComponent
// //     // , { commentID: commentID }
// //   );
// // });

// const domContainer = document.querySelector('#heading');
// const root = ReactDOM.createRoot(domContainer);
// root.render(newComponent);

import React from 'react';

export default function newComponent() {
  return (
    <>
      <h1>Hello</h1>
      <ul>
        <li>My </li>
        <li>name</li>
      </ul>
    </>
  );
}
