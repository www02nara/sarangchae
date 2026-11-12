export interface ClinicItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
  iconName: string;
  symptoms: string[];
  treatmentMethods: string[];
  features: string[];
}

export interface DoctorProfile {
  name: string;
  role: string;
  greeting: string;
  philosophy: string[];
  careers: string[];
  academicActivities: string[];
}

export interface OperatingHours {
  weekdayExtended: string; // 화·목 야간
  weekdayStandard: string; // 월·수·금
  saturday: string;
  lunchTime: string;
  closed: string;
  notice: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const CLINIC_INFO = {
  name: "경희사랑채한의원",
  branchName: "부산 하단점",
  fullName: "경희사랑채한의원",
  englishName: "Kyunghee Sarangchae Korean Medicine Clinic",
  slogan: "사랑채처럼 따뜻하게 머물고, 경희의 정통 의술로 바르게 치유합니다",
  subSlogan: "언제나 곁에서 든든하게, 나만의 주치 한의사가 되어 드리겠습니다",
  phone: "051-207-1075",
  formattedPhone: "051. 207. 1075",
  address: "부산광역시 사하구 하신중앙로 341, 1층",
  addressDetail: "부산 사하구 하단동 589-18 (1층 경희사랑채한의원)",
  parkingInfo: "한의원 바로 옆 ‘부산스테이’ 건물 기계식 주차장 이용 가능 (대형 SUV 주차 불가)",
  naverPlaceUrl: "https://naver.me/x9Bkj6Al",
  naverMapUrl: "https://naver.me/x9Bkj6Al",
  kakaoMapUrl: "https://map.kakao.com/?q=부산 사하구 하신중앙로 341 경희사랑채한의원",
  representative: "정병준",
  registrationNumber: "603-91-71224",
  medicalInstitutionNumber: "38104921",
};

export const OPERATING_HOURS_TABLE = [
  { day: "월요일", hours: "09:30 ~ 18:00", breakTime: "12:30 ~ 14:00 (14시 진료 재개)", isNight: false, isClosed: false },
  { day: "화요일", hours: "09:30 ~ 20:00", breakTime: "12:30 ~ 14:00 (14시 진료 재개)", isNight: true, isClosed: false },
  { day: "수요일", hours: "09:30 ~ 18:00", breakTime: "12:30 ~ 14:00 (14시 진료 재개)", isNight: false, isClosed: false },
  { day: "목요일", hours: "09:30 ~ 20:00", breakTime: "12:30 ~ 14:00 (14시 진료 재개)", isNight: true, isClosed: false },
  { day: "금요일", hours: "09:30 ~ 18:00", breakTime: "12:30 ~ 14:00 (14시 진료 재개)", isNight: false, isClosed: false },
  { day: "토요일", hours: "09:30 ~ 14:30", breakTime: "점심시간 없이 연속 진료", isNight: false, isClosed: false },
  { day: "일요일", hours: "정기휴무", breakTime: "-", isNight: false, isClosed: true },
];

export const OPERATING_HOURS: OperatingHours = {
  weekdayExtended: "화 · 목 : 오전 09:30 ~ 오후 20:00 (야간진료)",
  weekdayStandard: "월 · 수 · 금 : 오전 09:30 ~ 오후 18:00",
  saturday: "토 요 일 : 오전 09:30 ~ 오후 14:30 (점심시간 없이 진료)",
  lunchTime: "휴게시간(점심) : 오후 12:30 ~ 오후 14:00 (14시 진료 시작)",
  closed: "일요일 정기휴무 및 공휴일 휴진",
  notice: "환자분의 대기 시간을 줄여드리기 위해 내원 전 전화(051-207-1075) 문의를 권장합니다.",
};

export const CLINIC_SERVICES: ClinicItem[] = [
  {
    id: "pain-joint",
    title: "척추·관절 통증클리닉",
    tag: "정밀 침구·약침 집중치료",
    shortDesc: "목·허리 디스크, 관절염, 오십견 통증을 정밀 침구 치료와 소염진통 약침으로 빠르게 완화합니다.",
    fullDesc:
      "척추와 관절 주위 근육과 인대의 긴장을 해소하고 원활한 기혈 순환을 돕는 맞춤 침구 치료, 소염진통 약침, 한방 물리치료를 병행하여 편안한 일상으로 복귀를 돕습니다.",
    iconName: "Activity",
    symptoms: ["목·허리 디스크", "퇴행성 무릎관절염", "오십견·어깨결림", "만성 근육통·염좌"],
    treatmentMethods: ["소염진통 약침 / 봉약침", "정밀 침구치료", "한방 온열 물리치료", "부항 요법"],
    features: ["1인 전용 프라이빗 치료실", "건강보험 적용 물리치료", "개인별 맞춤 생활 처방"],
  },
  {
    id: "pediatrics",
    title: "한방소아과 클리닉",
    tag: "우리아이 성장·면역",
    shortDesc: "밥 안 먹는 아이, 잦은 감기·비염, 배앓이부터 키 성장까지 아이의 바른 성장을 돕습니다.",
    fullDesc:
      "아직 장부의 기능이 미숙한 아이들을 위해 쓴맛을 줄이고 흡수가 부드러운 소아 맞춤 한약과 안전한 무통 침 치료로 면역력을 높이고 성장의 균형을 잡아줍니다.",
    iconName: "Smile",
    symptoms: ["소아 비염·잦은 감기", "식욕부진·소화불량", "잦은 복통 및 배앓이", "키 성장 부진·야경증"],
    treatmentMethods: ["복용이 편한 맞춤 소아시럽 한약", "무통 소아 자석침 & 온열뜸", "비강 점막 재생 한방 연고", "성장기 체질 맞춤 보약"],
    features: ["아이 눈높이 따뜻한 진료", "식약처 규격 안전 한약재", "성장 단계별 정밀 상담"],
  },
  {
    id: "traffic-accident",
    title: "교통사고 후유증 클리닉",
    tag: "자동차보험 100% 적용",
    shortDesc: "사고 접수번호만으로 본인부담금 0원! 사고 충격으로 발생한 어혈과 통증, 내과적 후유증을 치료합니다.",
    fullDesc:
      "교통사고 충격은 며칠 뒤 심한 통증, 두통, 어지럼증, 결림 등 다양한 후유증을 유발합니다. 어혈을 신속히 제거하는 맞춤 한약과 약침, 물리치료를 자동차보험 혜택으로 제공합니다.",
    iconName: "Car",
    symptoms: ["목·허리·어깨 뻐근함", "사고 후 두통·어지럼증", "가슴 두근거림·불면", "손발 저림 및 근육통"],
    treatmentMethods: ["어혈 배출 1:1 맞춤 한약 (전액 보험)", "염증 완화 정밀 약침", "간섭파 물리치료 & 부항"],
    features: ["본인부담금 0원 (원스톱 접수)", "화·목 야간진료로 결근 없이 진료", "합의 시점까지 연속 케어"],
  },
  {
    id: "herbal-medicine",
    title: "맞춤한약 & 보약클리닉",
    tag: "식약처 GMP 인증 약재",
    shortDesc: "체질과 오장육부의 균형을 면밀히 분석하여 원내에서 정성껏 조제하는 1:1 명품 맞춤 보약입니다.",
    fullDesc:
      "중금속과 잔류농약 검사를 엄격히 통과한 식약처 GMP 인증 한약재만을 사용합니다. 사상체질 맥진을 토대로 기혈을 보하고 면역력을 강화하는 보약을 정병준 원장이 직접 조제합니다.",
    iconName: "Feather",
    symptoms: ["만성 피로·기력 저하", "면역력 약화·체력 저하", "수험생 집중력·체력 증진", "부모님 원기 회복"],
    treatmentMethods: ["정품 원방 공진단", "전통 옹기 탕전 경옥고", "체질 맞춤 청정 녹용한약", "수험생 총명보약"],
    features: ["원내 안심 탕전 시스템", "러시아 최상급 원용 녹용", "복용이 간편한 환/스틱 제형"],
  },
  {
    id: "diet-women",
    title: "다이어트 & 여성클리닉",
    tag: "건강한 감량 & 여성케어",
    shortDesc: "굶지 않는 체질 개선 감비환과 출산 후 산후보약, 갱년기 호르몬 불균형을 부드럽게 다스립니다.",
    fullDesc:
      "자연스러운 포만감과 노폐물(습담) 배출을 돕는 맞춤 감비환 다이어트와 여성 생애주기별 생리통, 산후조리(국민행복카드 사용), 갱년기 건강을 토탈 케어합니다.",
    iconName: "HeartPulse",
    symptoms: ["식욕 조절·체지방 감량", "산후풍 예방·산후조리", "갱년기 상열감·불면", "심한 생리통·냉증"],
    treatmentMethods: ["1:1 맞춤 사랑채 감비환", "산후 기혈 보충 맞춤 한약", "하복부 온열 쑥뜸 요법", "국민행복카드 바우처 전액 사용"],
    features: ["무리 없는 건강 감량", "여성의 몸을 깊이 이해하는 상담", "1인실 편안한 힐링"],
  },
];

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "정병준",
  role: "경희사랑채한의원 대표원장",
  greeting:
    "“문턱은 낮추고 정성은 높여, 오시는 모든 분들의 몸과 마음이 쉬어갈 수 있는 따뜻한 사랑채가 되겠습니다.”",
  philosophy: [
    "증상만을 쫓지 않고, 통증과 질환이 시작된 근본적인 원인을 꼼꼼하게 진단하고 바로잡습니다.",
    "정통 경희대학교 한의학의 원칙을 바탕으로 안전하고 검증된 정직한 치료만을 시행합니다.",
    "내 가족을 치료한다는 마음으로 과잉 진료 없이 꼭 필요한 정직한 치료를 약속드립니다.",
  ],
  careers: [
    "경희대학교 한의과대학 출신",
    "대한한의학회 정회원",
    "대한한방내과학회 정회원",
    "대한사상체질의학회 정회원",
    "대한한방소아과학회 회원",
    "대한한방부인과학회 정회원",
    "현 경희사랑채한의원 대표원장",
  ],
  academicActivities: [
    "소아·청소년 체질별 성장 및 면역 한약 연구",
    "근골격계 만성 통증에 대한 침구·약침 복합 치료",
    "체질별 맞춤 한약 처방 및 만성피로 개선 연구",
  ],
};

export const FAQ_LIST: FaqItem[] = [
  {
    question: "진료 예약이 가능한가요? 예약 없이 방문해도 되나요?",
    answer:
      "저희 경희사랑채한의원은 별도의 예약제를 운영하지 않으며, 오시는 순서대로 당일 접수하여 진료를 진행하고 있습니다. 예약 없이 편하신 시간에 내원해 주시면 되며, 대기 현황이나 진료 관련 문의사항은 전화(051-207-1075)로 연락해 주시면 친절히 안내해 드립니다.",
    category: "진료 안내",
  },
  {
    question: "교통사고 후유증 치료 시 본인부담금이 없나요?",
    answer:
      "네, 자동차보험 진료 시 환자분의 본인부담금은 0원입니다. 내원하셔서 '대인사고 접수번호'와 '보험사 담당자 연락처'만 알려주시면, 저희 한의원에서 보험사와 지불보증 절차를 원스톱으로 처리해 드립니다.",
    category: "교통사고",
  },
  {
    question: "야간진료는 언제 하며 몇 시까지 가야 하나요?",
    answer:
      "경희사랑채한의원은 매주 화요일과 목요일에 야간진료를 시행하고 있습니다. 저녁 8시까지 접수를 받아 오후 8시 30분까지 진료를 진행하므로, 야간진료를 받으시려면 저녁 8시까지 내원해 주시면 됩니다.",
    category: "진료 안내",
  },
  {
    question: "아이들도 한방 치료를 받을 수 있나요?",
    answer:
      "네, 한방소아과 진료를 통해 잦은 감기나 비염, 밥을 잘 먹지 않는 아이, 잦은 복통, 키 성장에 도움을 주는 순한 맞춤 한약과 아프지 않은 자석침/스티커침 치료를 편안하게 받으실 수 있습니다.",
    category: "소아 진료",
  },
];
