import Hero from "@/components/Hero";
import ClinicGrid from "@/components/ClinicGrid";
import DoctorIntro from "@/components/DoctorIntro";
import ClinicTour from "@/components/ClinicTour";
import LocationHours from "@/components/LocationHours";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. 5대 특화 진료 과목 카드 */}
      <ClinicGrid />

      {/* 3. 대표원장 소개 */}
      <DoctorIntro />

      {/* 4. 원내 시설 사진 */}
      <ClinicTour />

      {/* 5. 진료시간 & 오시는 길 */}
      <LocationHours />

      {/* 6. 자주 묻는 질문 */}
      <FaqSection />
    </>
  );
}
