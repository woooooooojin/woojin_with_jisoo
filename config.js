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
    name: "최우진",
    nameEn: "WOOJIN",
    father: "최운학",
    mother: "김정미",
    fatherDeceased: false,
    motherDeceased: false,
  },

  bride: {
    name: "윤지수",
    nameEn: "JISOO",
    father: "윤기환",
    mother: "임경민",
    fatherDeceased: false,
    motherDeceased: false,
  },

  wedding: {
    date: "2026-10-24",
    time: "15:00",
    venue: "국제빌딩 4층 K-Wedding Hall",
    hall: "",
    address: "부산광역시 연제구 중앙대로 1217",
    tel: "051-555-9779",
    mapLinks: {
      kakao: "https://kko.to/YeiGXjfYZK",
      naver: "https://naver.me/x67yKU1M",
    },
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message:
      "오랜 시간 서로의 마음을 다져온 저희 두 사람이\n이제 한 마음으로 새로운 길을 함께 걷고자 합니다.\n바쁘시더라도 귀한 걸음 하시어 저희의 출발을\n축복을 주시면 감사하겠습니다.",
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
        name: "최우진",
        bank: "우리",
        number: "1002-564-425590",
      },
      {
        role: "아버지",
        name: "최운학",
        bank: "국민",
        number: "768702-01-129938",
      },
      {
        role: "어머니",
        name: "김정미",
        bank: "부산",
        number: "325-12-006304-4",
      },
    ],
    bride: [
      {
        role: "신부",
        name: "윤지수",
        bank: "국민",
        number: "118201-04-218750",
      },
      {
        role: "아버지",
        name: "윤기환",
        bank: "부산",
        number: "055-12-057477-2",
      },
      {
        role: "어머니",
        name: "임경민",
        bank: "신한",
        number: "110-508-978609",
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
