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
                    border: "1.5px solid rgba(59, 130, 246, 0.6)",
                }}
            >
                <span
                    style={{
                        color: "#3b82f6",
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: -0.5,
                        fontFamily: "sans-serif",
                    }}
                >
                    HT
                </span>
            </div>
        ),
        { ...size }
    );
}
