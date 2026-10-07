import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Gloria Catering. Event and corporate catering in Vaughan and Toronto.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [photo, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/media/hero.jpg")),
    readFile(join(process.cwd(), "public/brand/logo.jpg")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const logoSrc = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#241714",
          color: "#fbf7f2",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={720}
          height={630}
          style={{ objectFit: "cover", width: 720, height: 630 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 480,
            padding: "48px 44px",
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={92}
            height={92}
            style={{ borderRadius: 46, objectFit: "cover" }}
          />
          <div style={{ fontSize: 58, lineHeight: 1.02, marginTop: 28 }}>Gloria Catering</div>
          <div style={{ fontSize: 26, marginTop: 18, color: "#e7d3c4" }}>Vaughan and Toronto</div>
          <div style={{ fontSize: 22, marginTop: 22, color: "#e7d3c4" }}>
            Finger foods, charcuterie, fruit, and desserts
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
