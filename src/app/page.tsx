import Hero from "@/components/Hero";
import SymptomCheck from "@/components/SymptomCheck";
import KeyStrengths from "@/components/KeyStrengths";
import ClinicTabs from "@/components/ClinicTabs";
import AboutSection from "@/components/AboutSection";
import DoctorIntro from "@/components/DoctorIntro";
import TreatmentProcess from "@/components/TreatmentProcess";
import ClinicTour from "@/components/ClinicTour";
import LocationHours from "@/components/LocationHours";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Symptom Checker ("어떤 문제로 오셨나요?") */}
      <SymptomCheck />

      {/* 3. Core Strengths ("왜 경희사랑채한의원인가?") */}
      <KeyStrengths />

      {/* 4. Specialized Clinics 5대 특화 클리닉 */}
      <ClinicTabs />

      {/* 5. About Clinic ("사랑채 철학과 약속") */}
      <AboutSection />

      {/* 6. Medical Director Intro ("원장 소개 & 약력") */}
      <DoctorIntro />

      {/* 7. 4-Step Treatment Process ("체계적인 4단계 진료") */}
      <TreatmentProcess />

      {/* 8. Clinic Facility Tour ("원내 시설 & 청정 탕전실") */}
      <ClinicTour />

      {/* 9. Location & Hours ("진료시간 & 오시는 길") */}
      <LocationHours />

      {/* 10. FAQ Section ("자주 묻는 질문") */}
      <FaqSection />
    </>
  );
}
