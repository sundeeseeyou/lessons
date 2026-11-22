// example/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "Recipes";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#301193",
        color: "white",
        fontSize: 120,
        fontWeight: 700,
      }}
    >
      Recipes
      <p>Indonesia</p>
    </div>,
    size,
  );
}
