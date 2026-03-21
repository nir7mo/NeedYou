const NeedYou = {
  tokenKey: 'needyou_token',
  uiLangKey: 'needyou_ui_lang',
  currencyKey: 'needyou_currency',
  setToken(token){ if (token) localStorage.setItem(this.tokenKey, token); },
  getToken(){ return localStorage.getItem(this.tokenKey); },
  clearToken(){ localStorage.removeItem(this.tokenKey); },
  getUiLang(){ return localStorage.getItem(this.uiLangKey) || 'ar'; },
  setUiLang(lang){ localStorage.setItem(this.uiLangKey, lang); this.syncPreferences({ uiLanguage: lang }); },
  getCurrency(){ return localStorage.getItem(this.currencyKey) || 'DZD'; },
  setCurrency(cur){ localStorage.setItem(this.currencyKey, cur); },
  async api(path, options = {}){
    const headers = options.headers || {};
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    const token = this.getToken();
    if(token) headers['Authorization'] = `Bearer ${token}`;
    const res = await fetch(path, {...options, headers});
    const isJson = (res.headers.get('content-type') || '').includes('application/json');
    const data = isJson ? await res.json() : await res.text();
    if(!res.ok){
      const msg = data?.message || data || 'Request failed';
      throw new Error(msg);
    }
    return data;
  },
  async syncPreferences(payload){
    if(!this.getToken()) return;
    try { await this.api('/api/account/preferences', { method: 'PUT', body: JSON.stringify(payload) }); } catch(e){}
  }
};

const I18N = {
  ar: {
    nav_home: 'الرئيسية', nav_dashboard: 'لوحة التحكم', nav_job: 'تحليل الوظائف', nav_login: 'دخول', nav_start: 'ابدأ مجاناً',
    hero_title: 'ابنِ سيرة ذاتية مخصصة لكل فرصة عمل، وارفع احتمال قبولك بثقة.',
    hero_sub: 'NeedYou منصة SaaS ذكية تجمع إنشاء CV، تحليل التوافق، الرسالة التحفيزية، والملف المهني القابل للمشاركة في تجربة واحدة احترافية.',
    plans_title: 'الخطط والأسعار',
    plan_free: 'الخطة المجانية', plan_pro: 'الاحترافية الشخصية', plan_business: 'خطة الشركاء / الأعمال',
    plan_free_desc: 'للبداية وتجربة المنصة', plan_pro_desc: 'لاستخدام شخصي متقدم', plan_business_desc: 'للمكاتب ومقدمي الخدمة',
    note_textarea: 'تأكد من عدم وجود أي خطأ إملائي أو لغوي قبل الحفظ.',
    onboarding_title:'الملف المهني الذكي',
    job_title:'تحليل الوظيفة وإنشاء المخرجات',
    output_lang:'لغة المخرجات',
    ui_lang:'لغة الواجهة',
    currency:'العملة'
  },
  en: {
    nav_home: 'Home', nav_dashboard: 'Dashboard', nav_job: 'Job Analyzer', nav_login: 'Login', nav_start: 'Start Free',
    hero_title: 'Build a job-tailored CV for every opportunity and increase your acceptance odds.',
    hero_sub: 'NeedYou is a smart SaaS platform that unifies CV creation, job match analysis, cover letters, and a shareable professional profile in one modern workflow.',
    plans_title: 'Plans & Pricing',
    plan_free: 'Free Plan', plan_pro: 'Professional Personal', plan_business: 'Partner / Business Plan',
    plan_free_desc: 'For onboarding and basic usage', plan_pro_desc: 'For advanced personal usage', plan_business_desc: 'For agencies and service providers',
    note_textarea: 'Make sure your text is clear and free of spelling or grammar mistakes before saving.',
    onboarding_title:'Smart Professional Profile',
    job_title:'Analyze Job and Generate Outputs',
    output_lang:'Output language',
    ui_lang:'UI language',
    currency:'Currency'
  },
  fr: {
    nav_home: 'Accueil', nav_dashboard: 'Tableau de bord', nav_job: 'Analyse d\'offre', nav_login: 'Connexion', nav_start: 'Commencer',
    hero_title: 'Créez un CV adapte a chaque offre et augmentez vos chances de selection.',
    hero_sub: 'NeedYou est une plateforme SaaS intelligente qui regroupe creation de CV, analyse de correspondance, lettre de motivation et profil professionnel partageable.',
    plans_title: 'Offres et Tarifs',
    plan_free: 'Offre Gratuite', plan_pro: 'Offre Pro Personnelle', plan_business: 'Offre Partenaire / Business',
    plan_free_desc: 'Pour demarrer et tester', plan_pro_desc: 'Pour un usage personnel avance', plan_business_desc: 'Pour cabinets et prestataires',
    note_textarea: 'Verifiez que votre texte ne contient aucune faute avant de sauvegarder.',
    onboarding_title:'Profil Professionnel Intelligent',
    job_title:'Analyser l\'offre et generer les resultats',
    output_lang:'Langue de sortie',
    ui_lang:'Langue de l\'interface',
    currency:'Devise'
  }
};

function t(key){
  const lang = NeedYou.getUiLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.ar[key] || key;
}

function applyI18n(){
  document.documentElement.lang = NeedYou.getUiLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
}

function renderLanguageAndCurrency(containerId='lang-tools'){
  const host = document.getElementById(containerId);
  if(!host) return;
  host.innerHTML = `
    <label>${t('ui_lang')}:
      <select id="uiLangSel">
        <option value="ar">العربية</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </label>
    <label style="margin-inline-start:8px;">${t('currency')}:
      <select id="currencySel">
        <option value="DZD">DZD</option>
        <option value="USD">USD</option>
      </select>
    </label>
  `;
  document.getElementById('uiLangSel').value = NeedYou.getUiLang();
  document.getElementById('currencySel').value = NeedYou.getCurrency();
  document.getElementById('uiLangSel').onchange = (e)=>{ NeedYou.setUiLang(e.target.value); applyI18n(); renderLanguageAndCurrency(containerId); if(window.renderPricing) window.renderPricing(); };
  document.getElementById('currencySel').onchange = (e)=>{ NeedYou.setCurrency(e.target.value); if(window.renderPricing) window.renderPricing(); };
}

function money(plan){
  const currency = NeedYou.getCurrency();
  if(plan === 'PRO_PERSONAL') return currency === 'USD' ? '7.99 USD' : '1000 DZD';
  if(plan === 'BUSINESS') return currency === 'USD' ? '24.99 USD' : '3200 DZD';
  return currency === 'USD' ? '0 USD' : '0 DZD';
}

function initResponsiveNav(){
  const toggle = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');
  if(!toggle || !links) return;

  const closeMenu = () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if(window.innerWidth >= 768) closeMenu();
  });
}

window.NeedYou = NeedYou;
window.applyI18n = applyI18n;
window.renderLanguageAndCurrency = renderLanguageAndCurrency;
window.money = money;
window.initResponsiveNav = initResponsiveNav;
