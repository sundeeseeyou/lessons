// "use client";

// import { useState, useEffect } from "react";

// export default function SaveButton() {
//   // TODO: copy logika online dari OnlineBadge ke sini
//   const [online, setOnline] = useState(true);

//   useEffect(() => {
//     function handleOnline() {
//       setOnline(navigator.onLine);
//     }

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOnline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOnline);
//     };
//   }, []);

//   return (
//     <button
//       disabled={!online}
//       className="px-6 py-2 bg-black text-white disabled:bg-gray-600 disabled:cursor-not-allowed hover:cursor-pointer"
//     >
//       Save
//     </button>
//   );
// }

"use client";

import { useOnlineStatus } from "./use-online-status";

export default function SaveButton() {
  const status = useOnlineStatus();

  return (
    <button
      disabled={!status}
      className="px-6 py-2 bg-black text-white disabled:bg-gray-600 disabled:cursor-not-allowed hover:cursor-pointer"
    >
      Save
    </button>
  );
}
