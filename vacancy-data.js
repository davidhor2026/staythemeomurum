/* =========================================================
   🟨🟨🟨 스테이The머무름 공실 직접 수정 영역 🟨🟨🟨

   ★ 앞으로 공실 정보는 이 파일(vacancy-data.js)만 수정하세요.
   ★ 이 한 곳을 수정하면:
      1) 메인페이지 공실현황
      2) 입실 가능 현황 페이지
      3) 객실별 공실 현황
      4) 공실 캘린더
      에 함께 반영됩니다.

   [수정 방법]
   now        : 현재 바로 입실 가능한 방 수
   dates      : 앞으로 입실 가능 예정 날짜
   reservable : 현재 만실이어도 예약 가능하면 true
   fullLabel  : 만실일 때 화면에 공통으로 표시할 문구 (예: "8월 만실")
   unknown    : 정확한 날짜가 미정이면 사용, 아니면 null
   ========================================================= */

const VACANCY_MANAGER = {
  standard: {
    name: "스탠다드룸",
    now: 0,
    dates: [
      "2026-09-10",
      "2026-09-21",
      "2026-09-29"
      /* 새 날짜 예: ,"2026-10-05" */
    ],
    reservable: true,
    fullLabel: "8월 만실",
    unknown: null
  },

  deluxe: {
    name: "디럭스룸",
    now: 0,
    dates: [],
    reservable: false,
    fullLabel: "현재 만실",
    unknown: {
      month: "2026-09",
      label: "9월 중",
      note: "공실 여부 문의"
    }
  },

  suite1: {
    name: "스위트룸 1",
    now: 0,
    dates: [],
    reservable: false,
    fullLabel: "현재 만실",
    unknown: {
      month: "2026-12",
      label: "12월 중",
      note: "날짜 미정"
    }
  },

  suite2: {
    name: "스위트룸 2",
    now: 0,
    dates: [],
    reservable: false,
    fullLabel: "현재 만실",
    unknown: {
      month: "2026-12",
      label: "12월 중",
      note: "날짜 미정"
    }
  }
};

/* 만실 문구도 이 파일에서만 관리합니다. */
function vacancyFullLabel(room){
  return (room && room.fullLabel) ? room.fullLabel : "현재 만실";
}

function vacancyStatusText(room){
  if(!room) return "";
  if(Number(room.now || 0) > 0){
    return room.name + " " + Number(room.now) + "실 입실 가능";
  }
  var text = room.name + " " + vacancyFullLabel(room);
  if(room.reservable === true) text += " · 예약 가능";
  return text;
}

/* 화면 공통 문구 — 필요할 때 따옴표 안만 수정 */
const DISPLAY_TEXT = {
  greenLegend: "녹색 = 즉시 입실 가능",
  orangeLegend: "오렌지색 = 현재는 만실이나 예약 가능",
  grayLegend: "회색 = 현재 만실",

  availableNow: "입실 가능",
  fullNow: "현재 만실",
  upcoming: "예약 가능",
  unknownDate: "날짜 미정",

  calendarButton: "공실 캘린더",
  detailButton: "자세히 보기 ›",
  roomSectionTitle: "🏢 객실별 공실 현황",

  scheduleNotice: "※ 상기 일정은 변경될 수 있으며, 자세한 사항은 문의해 주세요."
};
