import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#3E4A33",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F4F0E8",
          fontFamily: "serif",
          fontSize: 18,
          fontStyle: "italic",
          fontWeight: 600,
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
