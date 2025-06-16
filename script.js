 document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = "Unlocked";
      btn.disabled = true;
      btn.style.background = "gray";
    });
  });


  const radios = document.querySelectorAll('input[name="style"]');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      localStorage.setItem('stylePreference', radio.value);
    });
  });

  // On page load
  const savedStyle = localStorage.getItem('stylePreference');
  if (savedStyle) {
    document.getElementById(savedStyle).checked = true;
  }




  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll('.footer a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });




  const languageSelect = document.getElementById('languageSelect');

  // Save selected language
  languageSelect.addEventListener('change', () => {
    const selectedLang = languageSelect.value;
    localStorage.setItem('appLanguage', selectedLang);
    alert('Language set to ' + selectedLang);
    // Reload to apply language across site (optional)
    // location.reload();
  });

  // Set dropdown to saved language
  const savedLang = localStorage.getItem('appLanguage');
  if (savedLang) {
    languageSelect.value = savedLang;
  }




  const lang = localStorage.getItem('appLanguage') || 'en';

  const translations = {
    en: {
      character: 'Character',
      upgrade: 'Upgrade'
    },
    hi: {
      character: 'चरित्र',
      upgrade: 'अपग्रेड करें'
    },
    jp: {
      character: 'キャラクター',
      upgrade: 'アップグレード'
    }
  };

  // Apply translated text
  document.querySelector('.title').textContent = translations[lang].character;
  document.querySelector('.upgrade').textContent = translations[lang].upgrade;










  