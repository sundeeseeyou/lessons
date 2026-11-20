// "use client";

// import { useState, useEffect } from "react";

// export default function OnlineBadge() {
//   // TODO: state isOnline (nilai awalnya apa? baca hint Step 1)
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
//     <span>Saat ini Aplikasi sedang {online ? "Terkoneksi" : "Terputus"}</span>
//   );
// }

"use client";

import { useOnlineStatus } from "./use-online-status";

export default function OnlineBadge() {
  const status = useOnlineStatus();

  return (
    <span>Saat ini Aplikasi sedang {status ? "Aktif 🟢" : "Nonaktif 🔴"}</span>
  );
}
