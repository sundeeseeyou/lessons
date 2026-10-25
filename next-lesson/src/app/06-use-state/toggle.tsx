// "use client";

// // import { useState } from "react";

// export default function ToggleBtn() {
//   let show = false;

//   function showHandle() {
//     show = !show;
//     console.log(show);
//   }

//   return (
//     <>
//       <button
//         onClick={showHandle}
//         className="mt-4 py-2 px-6 bg-black text-white hover:cursor-pointer"
//       >
//         Hide
//       </button>
//       {show && <p>This is a text</p>}
//     </>
//   );
// }

"use client";

import { useState } from "react";

export default function ToggleBtn() {
  const [show, setShow] = useState(false);

  function showHandle() {
    console.log(show);
    setShow(!show);
  }

  return (
    <>
      {show && <p>This is a text</p>}
      <button
        onClick={showHandle}
        className="mt-4 py-2 px-6 bg-black text-white hover:cursor-pointer"
      >
        Hide
      </button>
    </>
  );
}
