// example/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "Bladjar";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #301193 20%, #030303 90%)",
        color: "white",
        border: "4px",
        borderColor: "#B5E41B",
      }}
    >
      <h2 style={{ fontSize: 100, fontWeight: "700" }}>Bladjar</h2>
      <p style={{ fontSize: 38 }}>Kangen Ngoding Biar Gak Boring</p>
    </div>,
    size,
  );
}
