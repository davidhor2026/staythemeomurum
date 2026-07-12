window.COURT_CUTOFF_TRENDS = {
  national: {
    key: 'national',
    label: '법원사무 전국 일반모집',
    note: '전국 단위 일반모집 · 최근 3년',
    values: [
      { year: '2024', score: 75 },
      { year: '2025', score: 78.5 },
      { year: '2026', score: 70 }
    ],
    summary: '2025년에 3.5점 상승한 뒤 2026년에 8.5점 하락했습니다.'
  },
  regions: [
    { key:'chuncheon', label:'춘천 권역', score2025:68, score2026:69.5, change:1.5, summary:'전년보다 1.5점 상승' },
    { key:'daejeon', label:'대전·청주 권역', score2025:72, score2026:71, change:-1, summary:'전년보다 1점 하락' },
    { key:'daegu', label:'대구 권역', score2025:68, score2026:60.5, change:-7.5, summary:'전년보다 7.5점 하락' },
    { key:'busan', label:'부산·울산·창원 권역', score2025:72.5, score2026:69, change:-3.5, summary:'전년보다 3.5점 하락' },
    { key:'gwangju', label:'광주·전주 권역', score2025:71.5, score2026:59, change:-12.5, summary:'전년보다 12.5점 하락' },
    { key:'jeju', label:'제주 권역', score2025:71, score2026:50.5, change:-20.5, summary:'전년보다 20.5점 하락' }
  ]
};
