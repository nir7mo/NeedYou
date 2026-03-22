"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("profile");
  const [score, setScore] = useState(78);

  const handleSwitchPanel = (panel: string) => {
    setActivePanel(panel);
    const target = document.getElementById("dashboard");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleAnalyze = () => {
    const nextScore = 78 + Math.floor(Math.random() * 11);
    setScore(nextScore);
    alert(
      "تم تحديث نموذج التحليل التجريبي بنجاح. يمكنك الآن معاينة السيرة الذاتية المخصصة."
    );
  };

  const scoreBarStyle = useMemo(() => ({ width: `${score}%` }), [score]);

  return (
    <main>
      <header className="nav">
        <div className="container nav-inner">
          <div className="logo">need<span>you</span></div>
          <button
            className="menu-btn"
            id="menuBtn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="فتح القائمة"
          >
            ☰
          </button>
          <nav className={`nav-links ${menuOpen ? "show" : ""}`} id="navLinks">
            <a href="#services">الخدمات</a>
            <a href="#how">كيف يعمل</a>
            <a href="#product">المنصة</a>
            <a href="#pricing">الأسعار</a>
            <a href="#faq">الأسئلة الشائعة</a>
            <a href="#dashboard" className="btn btn-primary">ابدأ الآن</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">مساعدك الخبير في التوظيف</div>
            <h1>
              أنشئ <span className="highlight">سيرة ذاتية مخصصة</span>
              لكل وظيفة وطوّر فرص قبولك
            </h1>
            <p>
              needyou منصة SaaS احترافية تساعد الباحثين عن العمل على إنشاء السيرة الذاتية،
              تحليل توافقها مع الوظائف، كتابة الرسائل التحفيزية، تجهيز البورتفوليو،
              والتحضير للمقابلات من مكان واحد وباستخدام العربية والفرنسية والإنجليزية.
            </p>
            <div className="hero-actions">
              <a href="#dashboard" className="btn btn-primary">جرّب المنصة الآن</a>
              <a href="#how" className="btn btn-soft">اكتشف كيف تعمل</a>
            </div>
            <div className="langs">
              <span className="lang-pill">العربية</span>
              <span className="lang-pill">Français</span>
              <span className="lang-pill">English</span>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <strong>سير احترافية</strong>
                <span>مخصصة لكل وظيفة وبجودة قابلة للمراجعة</span>
              </div>
              <div className="stat">
                <strong>رضا المستخدمين</strong>
                <span>مبني على ملاحظات حقيقية وتحسينات مستمرة</span>
              </div>
              <div className="stat">
                <strong>دعم سريع</strong>
                <span>استجابة واضحة مع متابعة حتى اكتمال الطلب</span>
              </div>
              <div className="stat">
                <strong>قوالب حديثة</strong>
                <span>متوافقة مع ATS وفق أفضل الممارسات</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="لوحة عمل احترافية"
            />
            <div className="floating top">
              <h4>تقييم سريع للسيرة</h4>
              <p>احصل على تقييم مباشر مع اقتراحات دقيقة لتحسين نتائجك.</p>
            </div>
            <div className="floating bottom">
              <h4>واجهة عربية بالكامل</h4>
              <p>تجربة مريحة مع تصميم عصري متوافق مع العربية والفرنسية.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">الخدمات الرئيسية</div>
            <h2>أدوات تساعدك على الوصول إلى أفضل فرص العمل</h2>
            <p>
              كل خدمة مبنية لتوفير الوقت، رفع الجودة، وتقديم تجربة احترافية للمرشحين في سوق العمل.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <img
                className="feature-image"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                alt="إنشاء السيرة الذاتية"
              />
              <div className="icon-box">CV</div>
              <h3>إنشاء سيرة ذاتية احترافية</h3>
              <p>قوالب حديثة، محتوى ذكي، وتجربة تحرير سريعة حسب مجال التوظيف.</p>
              <ul className="list">
                <li>قوالب متجاوبة ومتوافقة مع ATS</li>
                <li>تخصيص سريع بحسب الوظيفة</li>
                <li>واجهة سهلة بالكامل</li>
              </ul>
            </div>

            <div className="card">
              <img
                className="feature-image"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="تحليل الوظيفة"
              />
              <div className="icon-box">AI</div>
              <h3>تحليل الوظائف والتوافق</h3>
              <p>تحليل ذكي لمتطلبات الوظائف وتحديد النقاط القوية والضعيفة في سيرتك.</p>
              <ul className="list">
                <li>تحديد الفجوات بسرعة</li>
                <li>اقتراح كلمات مفتاحية</li>
                <li>تحسين نقاط القوة</li>
              </ul>
            </div>

            <div className="card">
              <img
                className="feature-image"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
                alt="رسالة تحفيزية"
              />
              <div className="icon-box">CL</div>
              <h3>كتابة الرسالة التحفيزية</h3>
              <p>رسائل احترافية مخصصة لكل وظيفة مع صياغة قوية ومقنعة.</p>
              <ul className="list">
                <li>صياغة احترافية سهلة التعديل</li>
                <li>قوالب متعددة حسب القطاع</li>
                <li>دعم لغات متعددة</li>
              </ul>
            </div>

            <div className="card">
              <img
                className="feature-image"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="تعدد اللغات"
              />
              <div className="icon-box">🌍</div>
              <h3>تعدد اللغات</h3>
              <p>إعداد ملفاتك المهنية بالعربية والفرنسية والإنجليزية بسهولة.</p>
              <ul className="list">
                <li>دعم كامل للكتابة من اليمين لليسار</li>
                <li>تحويل سريع بين اللغات</li>
                <li>صياغة لغوية احترافية</li>
              </ul>
            </div>

            <div className="card">
              <img
                className="feature-image"
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                alt="بورتفوليو احترافي"
              />
              <div className="icon-box">⚡</div>
              <h3>بورتفوليو احترافي</h3>
              <p>أنشئ صفحة أعمالك في دقائق مع قوالب جذابة واحترافية.</p>
              <ul className="list">
                <li>تصميم عصري متجاوب</li>
                <li>قابل للمشاركة والتحميل</li>
                <li>استعراض مشاريعك بسرعة</li>
              </ul>
            </div>

            <div className="card">
              <img
                className="feature-image"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                alt="التحضير للمقابلة"
              />
              <div className="icon-box">🎯</div>
              <h3>التحضير للمقابلات</h3>
              <p>إرشادات وتجارب تدريبية لتحسين أداءك خلال المقابلات.</p>
              <ul className="list">
                <li>أسئلة شائعة ومخصصة</li>
                <li>إجابة نموذجية وتحسينات</li>
                <li>بناء الثقة والاحتراف</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">كيف يعمل</div>
            <h2>رحلة استخدام واضحة من أول دخول حتى ملف جاهز للتقديم</h2>
            <p>خطوات قصيرة تساعدك على بناء ملف مهني كامل، ثم تخصيصه لأي وظيفة بسهولة.</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>واجهة ترحيبية وتسجيل سريع</h3>
              <p>سجّل بإيميل احترافي لأنه سيكون عنوان مراسلاتك مع الشركات.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>تأكيد الإيميل والهاتف</h3>
              <p>نرسل كود تحقق مجاني للإيميل أو الهاتف لضمان صحة بيانات التواصل.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>ملف مهني شامل</h3>
              <p>أسئلة دقيقة عن التعليم، الخبرة، المهارات، المشاريع، واللغات.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <h3>رفع ملفات اختيارية</h3>
              <p>حمّل سيرتك القديمة أو شهاداتك لاستخلاص تفاصيل إضافية.</p>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <h3>بورتفوليو احترافي</h3>
              <p>أضف مشاريع وروابط أعمالك لإنشاء صفحة عرض جذابة.</p>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <h3>أدخل وصف الوظيفة</h3>
              <p>نحلّل الوصف الوظيفي ونخصّص السيرة تلقائياً لكل فرصة.</p>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <h3>نتائج جاهزة للتقديم</h3>
              <p>احصل على CV ورسالة تحفيزية مع ملاحظات لتحسين فرص القبول.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="dashboard-demo">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">المنصة</div>
            <h2>لوحة تحكم متكاملة لإدارة ملفك المهني</h2>
            <p>واجهة احترافية تساعدك على إدارة سيرتك، تحليل فرص العمل، وتخصيص ملفك بسهولة.</p>
          </div>

          <div className="demo-shell" id="dashboard">
            <div className="demo-top">
              <div>
                <h3>NeedYou Dashboard</h3>
                <p>إدارة الملف الشخصي والتحليلات والنتائج في مكان واحد.</p>
              </div>
              <button className="btn btn-primary">رفع ملف جديد</button>
            </div>

            <div className="demo-grid">
              <aside className="sidebar">
                <button
                  className={`side-btn ${activePanel === "profile" ? "active" : ""}`}
                  data-panel="profile"
                  onClick={() => handleSwitchPanel("profile")}
                >
                  الملف الشخصي
                </button>
                <button
                  className={`side-btn ${activePanel === "analysis" ? "active" : ""}`}
                  data-panel="analysis"
                  onClick={() => handleSwitchPanel("analysis")}
                >
                  تحليل الوظيفة
                </button>
                <button
                  className={`side-btn ${activePanel === "cv" ? "active" : ""}`}
                  data-panel="cv"
                  onClick={() => handleSwitchPanel("cv")}
                >
                  معاينة السيرة
                </button>

                <div className="sidebar-note">
                  <h4>نصيحة سريعة</h4>
                  <p>قم بتحديث مهاراتك باستمرار لرفع نسبة التوافق مع الوظائف.</p>
                </div>
              </aside>

              <main className="content">
                <section className={`panel ${activePanel === "profile" ? "active" : ""}`} id="panel-profile">
                  <div className="panel-head">
                    <div>
                      <h4>بناء الملف الشخصي</h4>
                      <p>املأ المعلومات الأساسية لتوليد ملف مهني قوي ومتناسق.</p>
                    </div>
                    <button className="btn btn-light">حفظ التغييرات</button>
                  </div>

                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="fullName">الاسم الكامل</label>
                      <input id="fullName" placeholder="محمد أمين" />
                    </div>
                    <div className="field">
                      <label htmlFor="title">المسمى الوظيفي</label>
                      <input id="title" placeholder="Frontend Developer" />
                    </div>
                    <div className="field">
                      <label htmlFor="location">المدينة</label>
                      <input id="location" placeholder="الجزائر" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">البريد الإلكتروني</label>
                      <input id="email" placeholder="m.amine@email.com" />
                    </div>
                    <div className="field full">
                      <label htmlFor="summary">نبذة مختصرة</label>
                      <textarea id="summary" placeholder="اكتب نبذة قصيرة عن خبراتك" />
                    </div>
                  </div>

                  <div className="panel-box">
                    <h5>المهارات الأساسية</h5>
                    <div className="chips">
                      <span className="chip">React</span>
                      <span className="chip">Next.js</span>
                      <span className="chip">TypeScript</span>
                      <span className="chip">UI/UX</span>
                    </div>
                  </div>
                </section>

                <section className={`panel ${activePanel === "analysis" ? "active" : ""}`} id="panel-analysis">
                  <div className="panel-head">
                    <div>
                      <h4>تحليل التوافق مع الوظيفة</h4>
                      <p>أدخل وصف الوظيفة للحصول على تحليل سريع وتوصيات مخصصة.</p>
                    </div>
                    <button className="btn btn-primary" id="analyzeBtn" onClick={handleAnalyze}>
                      تحليل الآن
                    </button>
                  </div>

                  <div className="panel-box">
                    <div className="file-drop">
                      <h5>اسحب ملف السيرة هنا</h5>
                      <p>أو اضغط لاختيار ملف من جهازك لتحليل سريع.</p>
                    </div>
                  </div>

                  <div className="panel-box score-wrap">
                    <div className="score-card">
                      <strong id="scoreValue">{score}%</strong>
                      <span>نسبة التوافق الحالية</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "19px", marginBottom: "10px" }}>نتيجة التحليل</h3>
                      <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "14px" }}>
                        لديك خبرة مناسبة في الأدوات الأساسية المطلوبة، لكن ينقصك إبراز بعض المهارات والكلمات المفتاحية داخل السيرة الذاتية.
                        يمكن تحسين فرصك بإعادة صياغة الملخص المهني وإضافة إنجازات قابلة للقياس.
                      </p>
                      <div className="progress">
                        <div id="scoreBar" style={scoreBarStyle}></div>
                      </div>

                      <div className="grid-2" style={{ marginTop: "18px" }}>
                        <div className="mini-card">
                          <h5>ما الذي لديك</h5>
                          <ul className="list">
                            <li>خبرة مرتبطة بالمجال</li>
                            <li>مهارات تقنية مناسبة</li>
                            <li>قابلية لتخصيص السيرة بسهولة</li>
                          </ul>
                        </div>
                        <div className="mini-card">
                          <h5>ما الذي ينقصك</h5>
                          <ul className="list">
                            <li>إضافة كلمات مفتاحية أوضح</li>
                            <li>إبراز النتائج بالأرقام</li>
                            <li>تحسين ترتيب الأقسام حسب الوظيفة</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className={`panel ${activePanel === "cv" ? "active" : ""}`} id="panel-cv">
                  <div className="panel-head">
                    <div>
                      <h4>معاينة السيرة الذاتية المخصصة</h4>
                      <p>هذه معاينة أولية للسيرة الذاتية بعد تخصيصها. يمكنك ربطها لاحقًا بخدمة تصدير PDF أو Word.</p>
                    </div>
                  </div>

                  <div className="cv-preview">
                    <div className="cv-head">
                      <div>
                        <h3>محمد أمين</h3>
                        <p>Frontend Developer<br />m.amine@email.com • +213 555 00 00 00 • الجزائر</p>
                      </div>
                      <div className="tag-list">
                        <span className="tag">React</span>
                        <span className="tag">Next.js</span>
                        <span className="tag">JavaScript</span>
                        <span className="tag">UI/UX</span>
                        <span className="tag">Responsive Design</span>
                      </div>
                    </div>

                    <div className="cv-columns">
                      <div>
                        <div className="cv-section">
                          <h5>الملخص المهني</h5>
                          <div className="cv-item">
                            <p>
                              مطور واجهات أمامية بخبرة في بناء واجهات استخدام حديثة وسريعة الاستجابة، مع اهتمام قوي بتحسين تجربة المستخدم وتحويل المتطلبات الوظيفية إلى منتجات واضحة وعملية.
                            </p>
                          </div>
                        </div>

                        <div className="cv-section">
                          <h5>الخبرات المهنية</h5>
                          <div className="cv-item">
                            <strong>Frontend Developer — شركة رقمية</strong>
                            <span>2023 — حتى الآن</span>
                            <p>تطوير واجهات تفاعلية، تحسين سرعة التحميل، والمساهمة في بناء صفحات تحويل عالية الأداء.</p>
                          </div>
                          <div className="cv-item">
                            <strong>UI Designer — وكالة تصميم</strong>
                            <span>2021 — 2023</span>
                            <p>تصميم صفحات هبوط، نماذج أولية، وتجارب استخدام واضحة للمواقع والمنصات الرقمية.</p>
                          </div>
                        </div>

                        <div className="cv-section">
                          <h5>المشاريع</h5>
                          <div className="cv-item">
                            <strong>لوحة تحكم SaaS للتوظيف</strong>
                            <p>تصميم وبناء واجهة أولية لمنصة تساعد المستخدمين على تخصيص سيرهم الذاتية لكل وظيفة.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="cv-section">
                          <h5>التعليم</h5>
                          <div className="cv-item">
                            <strong>ماستر في الإعلام الآلي</strong>
                            <span>جامعة ...</span>
                          </div>
                        </div>

                        <div className="cv-section">
                          <h5>المهارات</h5>
                          <div className="tag-list">
                            <span className="tag">React</span>
                            <span className="tag">Next.js</span>
                            <span className="tag">Tailwind</span>
                            <span className="tag">Figma</span>
                            <span className="tag">Git</span>
                            <span className="tag">Communication</span>
                          </div>
                        </div>

                        <div className="cv-section" style={{ marginTop: "18px" }}>
                          <h5>اللغات</h5>
                          <div className="cv-item">
                            <p>العربية — ممتاز</p>
                            <p>الفرنسية — جيد جدًا</p>
                            <p>الإنجليزية — جيد</p>
                          </div>
                        </div>

                        <div className="cv-section" style={{ marginTop: "18px" }}>
                          <h5>رسالة تحفيزية مختصرة</h5>
                          <div className="cv-item">
                            <p>
                              يسعدني التقدم لهذا المنصب لما يتوافق مع خبرتي ومهاراتي، وأتطلع للمساهمة في تطوير منتجاتكم الرقمية وتقديم قيمة عملية للفريق.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="actions">
                      <button className="btn btn-primary">تحميل PDF</button>
                      <button className="btn btn-light">تحميل Word</button>
                      <button className="btn btn-light">نسخ الرسالة التحفيزية</button>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">نموذج التسعير</div>
            <h2>Freemium مناسب للبداية والتوسع</h2>
            <p>
              يمكنك الانطلاق بخطة مجانية لاختبار المنصة، ثم فتح المزايا المتقدمة ضمن خطة مدفوعة
              تشمل التحليل والتخصيص غير المحدود والتصدير الاحترافي.
            </p>
          </div>

          <div className="pricing-cards">
            <div className="price-card">
              <h3>الخطة المجانية</h3>
              <div className="price">0</div>
              <div className="period">مناسبة لتجربة المنصة</div>
              <ul>
                <li>إنشاء الملف المهني</li>
                <li>سيرة ذاتية واحدة شهريًا</li>
                <li>قالب أساسي</li>
                <li>معاينة قبل التحميل</li>
              </ul>
              <button className="btn btn-light btn-block">ابدأ مجانًا</button>
            </div>

            <div className="price-card featured">
              <div className="popular">الأكثر اختيارًا</div>
              <h3>الخطة الاحترافية</h3>
              <div className="price">800</div>
              <div className="period">شهريًا</div>
              <ul>
                <li>سير ذاتية غير محدودة</li>
                <li>تحليل الوظائف والتوافق</li>
                <li>رسائل تحفيزية مخصصة</li>
                <li>ATS Check</li>
                <li>تعدد اللغات</li>
                <li>بورتفوليو احترافي</li>
              </ul>
              <button className="btn btn-light btn-block">جرّب الخطة الاحترافية</button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">الأسئلة الشائعة</div>
            <h2>أسئلة يبحث عنها المستخدمون فعليًا</h2>
            <p>
              هذه الأسئلة يمكن أن تستخدمها أيضًا داخل موقعك للـ SEO أو في صفحة مساعدة المنصة.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq">
              <h4>كيف أكتب سيرة ذاتية احترافية؟</h4>
              <p>ابدأ بمعلوماتك الأساسية، ثم التعليم، الخبرات، المهارات، والمشاريع. الأهم أن تكون الصياغة واضحة ومناسبة للوظيفة المستهدفة.</p>
            </div>
            <div className="faq">
              <h4>كيف أكتب CV بدون خبرة؟</h4>
              <p>يمكن التركيز على التعليم، المشاريع، الأعمال التطوعية، المهارات، والدورات، مع إبراز أي نتائج أو مسؤوليات ذات صلة.</p>
            </div>
            <div className="faq">
              <h4>هل الأفضل PDF أم Word؟</h4>
              <p>في الغالب PDF هو الأفضل للحفاظ على التنسيق، لكن بعض الجهات قد تطلب Word، لذلك من الأفضل توفير الصيغتين.</p>
            </div>
            <div className="faq">
              <h4>هل أضع صورة في السيرة الذاتية؟</h4>
              <p>هذا يعتمد على السوق والوظيفة. بعض الأسواق لا تفضّل الصورة، بينما أسواق أخرى تعتبرها عادية. الأفضل جعلها اختيارية.</p>
            </div>
            <div className="faq">
              <h4>كيف أجعل السيرة الذاتية متوافقة مع ATS؟</h4>
              <p>باستخدام كلمات مفتاحية مناسبة، ترتيب واضح، عناوين أقسام مفهومة، وصياغة قريبة من متطلبات الوظيفة.</p>
            </div>
            <div className="faq">
              <h4>هل يمكن إنشاء Cover Letter لكل وظيفة؟</h4>
              <p>نعم، وهذا من أهم عناصر التخصيص التي ترفع جودة التقديم عندما تكون مناسبة للشركة والمنصب.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>ابدأ بنسختك الأولى من needyou</h2>
          <p>
            هذا الملف يمثل نموذجًا أماميًا كاملًا يمكنك استخدامه كنقطة انطلاق للموقع: صفحة رئيسية قوية، تصور للوحة التحكم، وهيكل واضح للخدمات الأساسية.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a href="#dashboard" className="btn btn-primary">جرّب لوحة المنصة</a>
            <a href="#services" className="btn btn-soft">راجع الخدمات</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="logo">need<span>you</span></div>
          <p>© 2025 needyou — منصة التوظيف الاحترافية</p>
          <p>Frontend Prototype شامل: Landing Page + Product Demo + SaaS Structure</p>
        </div>
      </footer>
    </main>
  );
}
