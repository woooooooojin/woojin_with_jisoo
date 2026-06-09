/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true, // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "신랑",
    nameEn: "WOOJIN",
    father: "아버지",
    mother: "어머니",
    fatherDeceased: false,
    motherDeceased: false,
  },

  bride: {
    name: "신부",
    nameEn: "JISOO",
    father: "아버지",
    mother: "어머니",
    fatherDeceased: false,
    motherDeceased: false,
  },

  wedding: {
    date: "2026-12-27",
    time: "11:00",
    venue: "K-Wedding Hall",
    hall: "3층 그랜드홀",
    address: "부산광역시 연제구 중앙대로 1217 국제빌딩 4층",
    tel: "051-555-9779",
    mapLinks: {
      kakao: "",
      naver: "",
    },
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message:
      "한 해의 끝에서\n가장 따뜻한 시작을 준비했습니다.\n차가운 계절 속 저희의 출발을\n따스히 축복해 주세요.",
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content:
      "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다.",
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      {
        role: "신랑",
        name: "홍길동",
        bank: "OO은행",
        number: "000-000-000000",
      },
      {
        role: "아버지",
        name: "홍판서",
        bank: "OO은행",
        number: "000-000-000000",
      },
      {
        role: "어머니",
        name: "김순이",
        bank: "OO은행",
        number: "000-000-000000",
      },
    ],
    bride: [
      {
        role: "신부",
        name: "김영희",
        bank: "OO은행",
        number: "000-000-000000",
      },
      {
        role: "아버지",
        name: "김철수",
        bank: "OO은행",
        number: "000-000-000000",
      },
      {
        role: "어머니",
        name: "이미자",
        bank: "OO은행",
        number: "000-000-000000",
      },
    ],
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "결혼식에 초대합니다",
    description: "",
  },
};
