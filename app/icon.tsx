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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 6,
                    background: "#0e0e11",
                    border: "1.5px solid #ff7a3d",
                }}
            >
                <span style={{ color: "#ff7a3d", fontSize: 14, fontWeight: 700, fontFamily: "monospace" }}>&gt;_</span>
            </div>
        ),
        { ...size }
    );
}
