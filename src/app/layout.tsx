import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CLINIC_INFO, OPERATING_HOURS } from "@/data/clinicData";
import { ModalProvider } from "@/context/ModalContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";
import OnlineReservationModal from "@/components/OnlineReservationModal";
import NonCoveredModal from "@/components/NonCoveredModal";

export const metadata: Metadata = {
  title: `${CLINIC_INFO.fullName} | 부산 하단역 척추·추나·교통사고·맞춤한약·야간진료`,
  description: `${CLINIC_INFO.fullName} - 부산 하단역 1번 출구. 경희대학교 한의과대학 출신 대표원장 1:1 책임진료. 목·허리 디스크 비수술 추나요법(건강보험), 교통사고 후유증(본인부담금 0원), 식약처 GMP 인증 녹용한약, 한방 다이어트, 월·수·금 야간진료. 문의 ${CLINIC_INFO.formattedPhone}`,
  keywords: [
    "경희사랑채한의원",
    "경희사랑채한의원 부산점",
    "부산한의원",
    "부산 하단 한의원",
    "하단역 한의원",
    "사하구 한의원",
    "부산 추나요법",
    "부산 교통사고 한의원",
    "부산 야간진료 한의원",
    "부산 한방다이어트",
    "부산 공진단",
    "부산 경옥고",
    "부산 산후보약",
  ],
  authors: [{ name: CLINIC_INFO.fullName }],
  creator: CLINIC_INFO.fullName,
  publisher: CLINIC_INFO.fullName,
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://sarangchae.vercel.app",
    siteName: CLINIC_INFO.fullName,
    title: `${CLINIC_INFO.fullName} | 부산 하단역 척추·추나·교통사고·야간진료 한의원`,
    description:
      "몸과 마음이 편안하게 머무는 곳, 경희대학교 한의과대학 출신 1:1 책임진료. 척추관절 통증, 자동차보험 100%, 청정 규격 한약, 월·수·금 야간진료.",
  },
  twitter: {
    card: "summary_large_image",
    title: CLINIC_INFO.fullName,
    description: CLINIC_INFO.slogan,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#123e32",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org JSON-LD for Medical / Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_INFO.fullName,
    alternateName: CLINIC_INFO.name,
    description: CLINIC_INFO.subSlogan,
    url: "https://sarangchae.vercel.app",
    telephone: CLINIC_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_INFO.address,
      addressLocality: "부산광역시",
      addressRegion: "사하구",
      addressCountry: "KR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Friday"],
        opens: "09:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Thursday"],
        opens: "09:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:30",
        closes: "14:30",
      },
    ],
    priceRange: "₩₩",
    medicalSpecialty: [
      "TraditionalChineseMedicine",
      "Chiropractic",
      "Acupuncture",
      "Rehabilitation",
    ],
  };

  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf9f6] text-gray-900 antialiased selection:bg-[#123e32] selection:text-white">
        <ModalProvider>
          <Header />
          <main className="flex-1 pb-16 sm:pb-0">{children}</main>
          <Footer />
          <MobileQuickBar />
          <OnlineReservationModal />
          <NonCoveredModal />
        </ModalProvider>
      </body>
    </html>
  );
}
