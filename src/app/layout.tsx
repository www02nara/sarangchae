import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CLINIC_INFO, OPERATING_HOURS, FAQ_LIST } from "@/data/clinicData";
import { ModalProvider } from "@/context/ModalContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";
import OnlineReservationModal from "@/components/OnlineReservationModal";

export const metadata: Metadata = {
  metadataBase: new URL("https://www02nara.github.io/sarangchae/"),
  title: "하단 한의원 | 경희사랑채한의원 (부산 사하구 하단역 8번출구 야간진료)",
  description:
    "부산 사하구 하단 한의원 경희사랑채한의원입니다. 하단역 8번 출구 도보 1분 1층 위치. 경희대 출신 정병준 대표원장 1:1 책임진료. 통증·관절·경락 침구치료, 소아성장·비염, 교통사고 후유증(본인부담금 0원), 식약처 GMP 인증 맞춤한약. 화·목 저녁 8시 야간진료. 문의 051-207-1075",
  keywords: [
    "하단 한의원",
    "하단역 한의원",
    "부산 하단 한의원",
    "사하구 한의원",
    "하단동 한의원",
    "하단 야간진료 한의원",
    "하단 교통사고 한의원",
    "하단 소아 한의원",
    "하단 통증 한의원",
    "하단 경락 한의원",
    "경희사랑채한의원",
    "정병준 한의사",
    "부산 사하구 한의원",
    "하신중앙로 한의원",
    "하단 한약",
    "하단 침 잘놓는 한의원",
  ],
  authors: [{ name: `${CLINIC_INFO.name} 정병준 대표원장` }],
  creator: CLINIC_INFO.name,
  publisher: CLINIC_INFO.name,
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "https://www02nara.github.io/sarangchae/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www02nara.github.io/sarangchae/",
    siteName: "하단 한의원 경희사랑채한의원",
    title: "하단 한의원 | 경희사랑채한의원 (부산 사하구 하단역 야간진료)",
    description:
      "하단역 8번 출구 1층. 경희대 출신 정병준 대표원장 1:1 진료. 통증·관절·경락, 한방소아과, 교통사고 후유증(본인부담 0원), 식약처 GMP 인증 한약, 화·목 저녁 8시 야간진료.",
    images: [
      {
        url: "https://www02nara.github.io/sarangchae/images/hero-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "하단 한의원 경희사랑채한의원 원내 전경",
      },
      {
        url: "https://www02nara.github.io/sarangchae/images/logo-full.png",
        width: 800,
        height: 400,
        alt: "하단 한의원 경희사랑채한의원 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "하단 한의원 | 경희사랑채한의원",
    description:
      "부산 사하구 하단역 8번 출구 1층. 경희대 출신 정병준 대표원장 1:1 책임진료. 화·목 저녁 8시 야간진료.",
    images: ["https://www02nara.github.io/sarangchae/images/hero-clinic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/sarangchae/favicon.ico", sizes: "any" },
      { url: "/sarangchae/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/sarangchae/images/logo-symbol.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/sarangchae/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "naver-site-verification": "",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "Physician", "LocalBusiness"],
        "@id": "https://www02nara.github.io/sarangchae/#clinic",
        name: CLINIC_INFO.name,
        alternateName: [
          "하단 한의원",
          "부산 하단 한의원",
          "하단역 한의원",
          "사하구 하단 한의원",
          "하단 경희사랑채한의원",
        ],
        description:
          "부산 사하구 하단역 8번 출구 1층에 위치한 하단 한의원 경희사랑채한의원입니다. 경희대학교 한의과대학 출신 정병준 대표원장이 1:1 정밀 맞춤 책임 진료를 제공합니다. 통증·관절·경락 치료, 한방소아과, 교통사고 후유증, 식약처 GMP 인증 한약, 화·목 저녁 8시 야간진료.",
        url: "https://www02nara.github.io/sarangchae/",
        logo: "https://www02nara.github.io/sarangchae/images/logo-full.png",
        image: [
          "https://www02nara.github.io/sarangchae/images/hero-clinic.jpg",
          "https://www02nara.github.io/sarangchae/images/facility-treatment-room.jpg",
          "https://www02nara.github.io/sarangchae/images/facility-lounge.jpg",
        ],
        telephone: CLINIC_INFO.phone,
        hasMap: CLINIC_INFO.naverPlaceUrl,
        sameAs: [
          "https://naver.me/x9Bkj6Al",
          "https://map.kakao.com/?q=부산 사하구 하신중앙로 341 경희사랑채한의원",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC_INFO.address,
          addressLocality: "부산광역시",
          addressRegion: "사하구",
          postalCode: "49313",
          addressCountry: "KR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 35.1065,
          longitude: 128.9667,
        },
        areaServed: [
          "부산광역시 사하구",
          "하단동",
          "당리동",
          "신평동",
          "괴정동",
          "명지동",
          "엄궁동",
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Thursday"],
            opens: "09:30",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Wednesday", "Friday"],
            opens: "09:30",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:30",
            closes: "14:30",
          },
        ],
        priceRange: "₩₩",
        currenciesAccepted: "KRW",
        paymentAccepted: "Cash, Credit Card, 동백전(부산지역화폐), 제로페이",
        medicalSpecialty: [
          "TraditionalChineseMedicine",
          "Pediatrics",
          "Acupuncture",
          "Rehabilitation",
          "Musculoskeletal",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www02nara.github.io/sarangchae/#faq",
        mainEntity: FAQ_LIST.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
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
      <body className="min-h-screen flex flex-col bg-white text-[#2b2022] antialiased selection:bg-[#fcebef] selection:text-[#7d3543]">
        <ModalProvider>
          <Header />
          <main className="flex-1 pb-16 sm:pb-0">{children}</main>
          <Footer />
          <MobileQuickBar />
          <OnlineReservationModal />
        </ModalProvider>
      </body>
    </html>
  );
}
