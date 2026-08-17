import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Audrey Castets - Psychologue du Travail | Bilans & TCC";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#FDF8F6",
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(157, 107, 140, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(124, 77, 255, 0.12) 0%, transparent 40%)",
          padding: "70px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar: Badge & Branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "10px 22px",
              borderRadius: "50px",
              border: "1px solid rgba(157, 107, 140, 0.2)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#9D6B8C",
              }}
            />
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#2D2638",
                letterSpacing: "0.5px",
              }}
            >
              Audrey Castets
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            <span
              style={{
                backgroundColor: "rgba(157, 107, 140, 0.1)",
                color: "#9D6B8C",
                padding: "8px 18px",
                borderRadius: "30px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              ADELI : 409307198
            </span>
            <span
              style={{
                backgroundColor: "rgba(124, 77, 255, 0.1)",
                color: "#7C4DFF",
                padding: "8px 18px",
                borderRadius: "30px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Éligible CPF
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "950px",
          }}
        >
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 800,
              color: "#1F2937",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Psychologue du Travail & Psychothérapie TCC / EFT
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#6B7280",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Bilans de compétences certifiés, accompagnement du burn-out, gestion du stress &
            reconversion professionnelle.
          </p>
        </div>

        {/* Footer / Location bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(157, 107, 140, 0.15)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              color: "#4B5563",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            <span>📍 Anglet & Ondres (64 / 40)</span>
            <span>•</span>
            <span>💻 Téléconsultations France entière</span>
          </div>

          <span
            style={{
              color: "#9D6B8C",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            audrey-castets.fr
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
