// 입실자 이벤트 중앙 응모 API 설정
// 1) 함께 제공된 Code.gs를 Google Apps Script에 붙여넣고 웹 앱으로 배포합니다.
// 2) 배포된 /exec 주소를 아래 따옴표 안에 넣습니다.
window.STAY_EVENT_API_URL = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

window.StayEventApi = (function () {
  function configured() {
    return /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec(?:\?.*)?$/.test(String(window.STAY_EVENT_API_URL || ''));
  }

  function call(params) {
    if (!configured()) {
      return Promise.reject(new Error('이벤트 서버 주소가 아직 설정되지 않았습니다.'));
    }
    var url = new URL(window.STAY_EVENT_API_URL);
    Object.keys(params || {}).forEach(function (key) {
      if (params[key] !== undefined && params[key] !== null) url.searchParams.set(key, String(params[key]));
    });
    url.searchParams.set('_t', Date.now());
    return fetch(url.toString(), { method: 'GET', cache: 'no-store', redirect: 'follow' })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (!data || data.ok !== true) throw new Error((data && data.message) || '이벤트 서버 요청에 실패했습니다.');
        return data;
      });
  }

  return {
    configured: configured,
    apply: function (eventId, room, residentPassword) {
      return call({ action: 'apply', eventId: eventId, room: room, residentPassword: residentPassword });
    },
    list: function (eventId, adminPassword) {
      return call({ action: 'list', eventId: eventId, adminPassword: adminPassword });
    },
    reset: function (eventId, adminPassword) {
      return call({ action: 'reset', eventId: eventId, adminPassword: adminPassword });
    },
    ping: function () { return call({ action: 'ping' }); }
  };
})();
