window.SITE_UPDATES = {
  displayDays: 7,

  /*
   * 업데이트된 실제 페이지의 날짜만 바꾸면 됩니다. NEW는 displayDays 기준으로 자동 표시됩니다.
   * 하위 페이지가 갱신되면 groups의 상위 메뉴에도 NEW가 자동 전파됩니다.
   */
  pages: {
    'index.html': { key: 'home', updated: '2026-08-01', expires: '2026-08-08' },
    'rooms.html': { key: 'rooms', updated: '' },
    'facilities.html': { key: 'facilities', updated: '' },
    'reviews.html': { key: 'reviews', updated: '' },
    'review-check.html': { key: 'reviewCheck', updated: '' },
    'faq.html': { key: 'faq', updated: '2026-07-18', expires: '2026-07-26' },
    'quiz.html': { key: 'quizHub', updated: '2026-07-15' },
    'psat-ncs-quiz.html': { key: 'psatNcsQuiz', updated: '2026-07-15' },
    'korean-history-advanced-quiz.html': { key: 'historyQuiz', updated: '2026-07-15' },
    'foreign-service-interview-quiz.html': { key: 'foreignInterviewQuiz', updated: '2026-07-15' },
    'exam-insight.html': { key: 'examInsight', updated: '2026-08-09' },
    'exam-schedule.html': { key: 'examSchedule', updated: '2026-08-09' },
    'games.html': { key: 'games', updated: '' },
    'fortune.html': { key: 'fortune', updated: '' },
    'knowledge.html': { key: 'knowledge', updated: '' },
    'current-issues.html': { key: 'currentIssues', updated: '2026-08-03', expires: '2026-08-10' },
    'word-roots.html': { key: 'wordRoots', updated: '' },
    'career-benefits.html': { key: 'careerBenefits', updated: '2026-07-23', expires: '2026-08-09' },
    'rent-support.html': { key: 'rentSupport', updated: '2026-08-11', expires: '2026-08-19' },
    'gift.html': { key: 'gift', updated: '' },
    'checkin-guide.html': { key: 'checkinGuide', updated: '' },
    'checkout-guide.html': { key: 'checkoutGuide', updated: '' }
  },

  groups: {
    'quiz.html': [
      'quiz.html',
      'psat-ncs-quiz.html',
      'korean-history-advanced-quiz.html',
      'foreign-service-interview-quiz.html'
    ],
    'exam-insight.html': ['exam-insight.html'],
    'exam-schedule.html': ['exam-schedule.html']
  },

  /*
   * 페이지 내부 바로가기의 NEW는 페이지 전체 NEW와 별도로 관리합니다.
   * 실제 해당 직렬/섹션에 새 소식이 있을 때만 날짜를 넣습니다.
   */
  sections: {
    'exam-schedule.html#teacher': { key: 'examScheduleTeacher', updated: '2026-08-09' },
    'exam-schedule.html#police': { key: 'examSchedulePolice', updated: '2026-08-10' },
    'exam-schedule.html#court': { key: 'examScheduleCourt', updated: '2026-08-07' }
  }
};

(function () {
  'use strict';
  var config = window.SITE_UPDATES;
  if (!config || !config.pages) return;

  function normalizeHref(value) {
    if (!value) return '';
    try {
      var url = new URL(value, window.location.href);
      var path = url.pathname.split('/').pop() || 'index.html';
      return path.toLowerCase();
    } catch (e) {
      return String(value).split('#')[0].split('?')[0].split('/').pop().toLowerCase();
    }
  }

  function seoulDateOnly() {
    var parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date());
    var values = {};
    parts.forEach(function (part) { values[part.type] = part.value; });
    return new Date(values.year + '-' + values.month + '-' + values.day + 'T00:00:00+09:00');
  }

  var today = seoulDateOnly();
  var displayDays = Number(config.displayDays || 7);

  function activeItem(item, key) {
    if (!item || !item.updated) return null;
    var updated = new Date(item.updated + 'T00:00:00+09:00');
    var age = Math.floor((today - updated) / 86400000);
    if (isNaN(age) || age < 0) return null;
    if (item.expires) {
      var expires = new Date(item.expires + 'T00:00:00+09:00');
      if (isNaN(expires.getTime()) || today >= expires) return null;
    } else if (age >= displayDays) {
      return null;
    }
    return { key: item.key || key, updated: item.updated, age: age };
  }

  function activeSection(sectionKey) {
    var item = config.sections && config.sections[sectionKey];
    var active = activeItem(item, sectionKey);
    if (!active) return null;
    active.href = sectionKey;
    return active;
  }

  function activeUpdate(href) {
    var item = config.pages[href];
    var active = activeItem(item, href);
    if (!active) return null;
    active.href = href;
    return active;
  }

  function newestForLink(href) {
    var members = (config.groups && config.groups[href]) || [href];
    var newest = null;
    members.forEach(function (member) {
      var candidate = activeUpdate(member);
      if (!candidate) return;
      if (!newest || candidate.updated > newest.updated) newest = candidate;
    });
    return newest;
  }

  function addBadge(link, update) {
    if (!link || !update || link.querySelector('.site-new-badge')) return;
    link.classList.add('site-update-link');

    var badge = document.createElement('span');
    badge.className = 'site-new-badge';
    badge.textContent = 'NEW';
    badge.setAttribute('aria-label', '최근 업데이트');

    var seenKey = 'meomurum_update_seen_' + normalizeHref(link.getAttribute('href'));
    try {
      if (localStorage.getItem(seenKey) === update.updated) {
        badge.classList.add('site-new-badge--seen');
      }
    } catch (e) {}

    link.appendChild(badge);
    link.addEventListener('click', function () {
      try { localStorage.setItem(seenKey, update.updated); } catch (e) {}
      badge.classList.add('site-new-badge--seen');
    });
  }

  function applyBadges(scope) {
    var links = (scope || document).querySelectorAll('a[href]');
    links.forEach(function (link) {
      var rawHref = String(link.getAttribute('href') || '').trim();

      /*
       * 페이지 내부 바로가기(#court, #teacher, #exam-card-court9 등)는
       * 해당 페이지 전체의 업데이트 상태를 상속하지 않습니다.
       * 직렬별 NEW는 각 페이지의 개별 직렬/섹션 업데이트 날짜가 판단합니다.
       */
      if (!rawHref) return;

      if (rawHref.charAt(0) === '#') {
        var currentPage = normalizeHref(window.location.href);
        var sectionKey = currentPage + rawHref.toLowerCase();
        addBadge(link, activeSection(sectionKey));
        return;
      }

      var href = normalizeHref(rawHref);
      if (!href) return;

      // 같은 페이지를 가리키면서 해시만 붙은 절대/상대 링크도 페이지 NEW 전파 대상에서 제외
      try {
        var url = new URL(rawHref, window.location.href);
        if (url.hash && url.pathname === window.location.pathname) {
          var samePageKey = href + url.hash.toLowerCase();
          addBadge(link, activeSection(samePageKey));
          return;
        }
      } catch (e) {}

      addBadge(link, newestForLink(href));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { applyBadges(document); });
  } else {
    applyBadges(document);
  }

  /* 동적으로 생성되는 링크에도 NEW를 적용합니다. */
  var scheduled = false;
  var observer = new MutationObserver(function () {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      applyBadges(document);
    });
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

// local7-registration-20260720

// police-superintendent-76-exam-venue-20260721

// seoul-education-9-pass-interview-20260722

// student-support-and-seoul-rent-status-20260723

// current-issues-news-briefing-redesign-20260724

// national7-psat-review-and-local7-registration-closed-20260725

// seoul-rent-result-delay-20260801

// current-issues-20260803
