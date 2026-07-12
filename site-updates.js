window.SITE_UPDATES = {
  displayDays: 7,
  pages: [
    {
      key: 'examSchedule',
      href: 'exam-schedule.html',
      label: 'NEW',
      updated: '2026-07-12'
    },
    {
      key: 'examInsight',
      href: 'exam-insight.html',
      label: 'NEW',
      updated: '2026-07-12'
    }
  ]
};

(function () {
  var config = window.SITE_UPDATES;
  if (!config || !Array.isArray(config.pages)) return;

  function seoulDateOnly() {
    var parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date());
    var values = {};
    parts.forEach(function (part) { values[part.type] = part.value; });
    return new Date(values.year + '-' + values.month + '-' + values.day + 'T00:00:00+09:00');
  }

  var today = seoulDateOnly();
  var days = Number(config.displayDays || 7);

  config.pages.forEach(function (page) {
    var updated = new Date(page.updated + 'T00:00:00+09:00');
    var age = Math.floor((today - updated) / 86400000);
    if (isNaN(age) || age < 0 || age >= days) return;

    var links = document.querySelectorAll('a[href="' + page.href + '"]');
    links.forEach(function (link) {
      if (link.querySelector('.site-new-badge')) return;
      link.classList.add('site-update-link');

      var badge = document.createElement('span');
      badge.className = 'site-new-badge';
      badge.textContent = page.label || 'NEW';
      badge.setAttribute('aria-label', '최근 업데이트');

      try {
        if (localStorage.getItem('meomurum_update_seen_' + page.key) === page.updated) {
          badge.classList.add('site-new-badge--seen');
        }
      } catch (e) {}

      link.appendChild(badge);
      link.addEventListener('click', function () {
        try { localStorage.setItem('meomurum_update_seen_' + page.key, page.updated); } catch (e) {}
        badge.classList.add('site-new-badge--seen');
      });
    });
  });
})();
