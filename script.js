document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem('appLanguage') || 'en';

  const translations = {
    en: {
      character: 'Character',
      upgrade: 'Upgrade',
      item: 'Item',
      setting: 'Setting',
      unlock: 'Unlock',
      yourPlan: 'Your plan',
      free: 'FREE',
    },
    hi: {
      character: 'चरित्र',
      upgrade: 'अपग्रेड करें',
      item: 'आइटम',
      setting: 'सेटिंग',
      unlock: 'अनलॉक करें',
      yourPlan: 'आपकी योजना',
      free: 'नि:शुल्क',
    },
    jp: {
      character: 'キャラクター',
      upgrade: 'アップグレード',
      item: 'アイテム',
      setting: '設定',
      unlock: 'アンロック',
      yourPlan: 'あなたのプラン',
      free: '無料',
    }
  };

  const textKeys = {
    '.title': 'character',
    '.upgrade': 'upgrade',
    '.highlight': 'free',
    '.setting-title': 'setting',
    '.item-title': 'item',
    '.plan-label': 'yourPlan',
    '.unlock-button': 'unlock',
    '.button-upgrade': 'upgrade',
  };

  for (let selector in textKeys) {
    const el = document.querySelector(selector);
    if (el && translations[lang][textKeys[selector]]) {
      el.textContent = translations[lang][textKeys[selector]];
    }
  }

  // Dropdown handling on setting.html
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.value = lang;
    languageSelect.addEventListener('change', () => {
      localStorage.setItem('appLanguage', languageSelect.value);
      location.reload();
    });
  }

  // Footer navigation active class
  const page = location.pathname.split("/").pop();
  document.querySelectorAll('.footer a.circle').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // Sidebar toggle
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    sidebar.classList.remove("hidden");
  });

  // Click outside sidebar to close
  window.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove("show");
    }
  });

  // Theme toggle
  const currentTheme = localStorage.getItem("theme") || "dark";
  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    themeIcon.classList.toggle("fa-moon", !isLight);
    themeIcon.classList.toggle("fa-sun", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});
