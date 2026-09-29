// ===== JEZIK (BS / EN) =====
let currentLang = 'bs';

function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Aktivno dugme
    document.getElementById('btn-bs').classList.toggle('active', lang === 'bs');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Zamijeni tekstove
    document.querySelectorAll('[data-bs]').forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text) el.textContent = text;
    });

    // Sačuvaj izbor
    localStorage.setItem('lang', lang);
}

// Učitaj sačuvani jezik
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('lang');
    if (saved && saved !== 'bs') setLang(saved);
});
