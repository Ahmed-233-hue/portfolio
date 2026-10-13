import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  BookOpen,
  Code2,
  Download,
  Globe2,
  Layers3,
  Mail,
  MessageCircle,
  Microscope,
  Sparkles,
  Store,
} from "lucide-react";
import "./App.css";

const profile = {
  name: "Eng. Ahmed Attia Tolbah",
  email: "aatia0527@gmail.com",
  github: "https://github.com/Ahmed-233-hue",
  linkedin: "", // حط رابط LinkedIn هنا لو عندك، وهيظهر لوحده
  whatsapp: "https://wa.me/201096359320",
  cv: "", // حط ملف الـ CV في فولدر public وكتب هنا مثلاً "/cv.pdf"، والزرار هيظهر لوحده
};

const techStack = ["React", "TypeScript", "JavaScript", "CSS", "Figma", "Git"];

const projects = [
  {
    number: "01",
    name: "BreastPath AI",
    className: "project-image--breastpath",
    icon: <Microscope size={64} strokeWidth={1.1} />,
    category: {
      ar: "مشروع أكاديمي · كشف مبكر لسرطان الثدي",
      en: "Academic project · Early breast cancer detection",
    },
    description: {
      ar: "واجهة ويب لرفع صور الأنسجة (Histopathology) وعرض النتيجة والتقارير، ضمن مشروع للكشف المبكر عن سرطان الثدي بالذكاء الاصطناعي.",
      en: "A web interface for uploading histopathology images and reviewing results and reports, part of an AI project for early breast cancer detection.",
    },
    status: { ar: "قيد التطوير", en: "In development" },
    tags: ["React", "Vite", "AI"],
    link: "", // رابط المشروع لما يجهز (GitHub أو رابط مباشر)
  },
  {
    number: "02",
    name: "SmartSystem",
    className: "project-image--smartsystem",
    icon: <Store size={64} strokeWidth={1.1} />,
    category: { ar: "نظام إدارة للمحلات", en: "Shop management system" },
    description: {
      ar: "نظام إدارة للمحلات بواجهة عربية (RTL) تدعم الوضع الفاتح والداكن والموبايل، مع لوحة تحكم واحدة تجمع أنواع المحلات المختلفة.",
      en: "A shop management system with an Arabic-first (RTL) interface, light and dark modes, mobile support, and one dashboard for different kinds of shops.",
    },
    status: { ar: "قيد التطوير", en: "In development" },
    tags: ["React", "RTL", "Dashboard"],
    link: "",
  },
  {
    number: "03",
    name: "Study Platform",
    className: "project-image--study",
    icon: <BookOpen size={64} strokeWidth={1.1} />,
    category: { ar: "منصة مذاكرة بالذكاء الاصطناعي", en: "AI study platform" },
    description: {
      ar: "موقع يحوّل الملاحظات وملفات PDF إلى بطاقات مراجعة (Flashcards) واختبارات قصيرة بالذكاء الاصطناعي.",
      en: "A website that turns notes and PDFs into flashcards and quizzes using AI.",
    },
    status: { ar: "قيد التطوير", en: "In development" },
    tags: ["React", "Vite", "AI"],
    link: "",
  },
];

const translations = {
  ar: {
    role: "مطور واجهات أمامية",
    availability: "متاح لمشاريع جديدة",
    navWork: "أعمالي",
    navAbout: "عنّي",
    navContact: "تواصل معي",
    intro: "من الفكرة",
    introAccent: "للتجربة.",
    subtitle:
      "أبني واجهات ويب سريعة، واضحة، ومصممة بعناية. أحوّل الأفكار المعقدة إلى تجارب رقمية بسيطة وممتعة باستخدام React.",
    seeWork: "شاهد أعمالي",
    contact: "ابدأ مشروعًا",
    cv: "حمّل السيرة الذاتية",
    viewProject: "زيارة المشروع",
    copyEmail: "نسخ الإيميل",
    copied: "تم النسخ ✓",
    whatsappLabel: "تواصل عبر واتساب",
    heroNote: "واجهة مدروسة. تجربة أسرع.",
    scroll: "اكتشف المزيد",
    workEyebrow: "مختارات من أعمالي",
    workTitle: "أفكار، صارت",
    workAccent: "تجارب.",
    aboutEyebrow: "أهلًا، أنا مطور واجهات",
    aboutTitle: "الكود الجيد يُشعرك أن كل شيء في مكانه.",
    aboutText:
      "أهتم بالتفاصيل التي تصنع الفرق: بنية سهلة التطوير، تفاعلات طبيعية، وأداء يظل سريعًا على كل جهاز. أعمل من التصميم الأولي حتى آخر لمسة قبل الإطلاق.",
    capabilities: "ما أقدّمه",
    focusItems: [
      ["تطوير الواجهات", "تجارب React مرنة ومهيأة للنمو"],
      ["الأنظمة والتصميم", "مكونات متناسقة يسهل إعادة استخدامها"],
      ["الأداء والإتاحة", "السرعة وسهولة الوصول من البداية"],
    ],
    techLabel: "أدواتي اليومية",
    contactEyebrow: "لديك فكرة؟",
    contactTitle: "لنجعلها حقيقية.",
    contactText: "أخبرني عمّا تعمل عليه، ولنبدأ من هناك.",
    footerNote: "مصمم ومطوّر بعناية.",
    backToTop: "العودة للأعلى",
    projectLink: "التقنيات المستخدمة",
  },
  en: {
    role: "FRONTEND DEVELOPER",
    availability: "Available for new projects",
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    intro: "From idea",
    introAccent: "to experience.",
    subtitle:
      "I build fast, thoughtful web interfaces. Turning complex ideas into clear, delightful digital experiences with React.",
    seeWork: "Explore my work",
    contact: "Start a project",
    cv: "Download CV",
    viewProject: "View project",
    copyEmail: "Copy email",
    copied: "Copied ✓",
    whatsappLabel: "Chat on WhatsApp",
    heroNote: "Thoughtful UI. Faster experiences.",
    scroll: "Scroll to explore",
    workEyebrow: "A selection of work",
    workTitle: "Ideas made",
    workAccent: "tangible.",
    aboutEyebrow: "A little about me",
    aboutTitle: "Good code feels like everything is in its place.",
    aboutText:
      "I care about the details that make a difference: maintainable foundations, intuitive interactions, and performance that stays fast on every device. From the first design pass to the final detail before launch.",
    capabilities: "What I bring",
    focusItems: [
      ["Frontend development", "Flexible React experiences built to grow"],
      ["Systems & design", "Consistent components made to be reused"],
      ["Performance & access", "Speed and accessibility from day one"],
    ],
    techLabel: "Tools of the trade",
    contactEyebrow: "Have an idea?",
    contactTitle: "Let’s make it real.",
    contactText: "Tell me what you’re working on. We can start there.",
    footerNote: "Designed and built with care.",
    backToTop: "Back to top",
    projectLink: "Built with",
  },
};

function App() {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem("language");
      return saved === "en" || saved === "ar" ? saved : "ar";
    } catch {
      return "ar";
    }
  });
  const isArabic = language === "ar";
  const copy = translations[language];
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    try {
      localStorage.setItem("language", language);
    } catch {
      // التخزين غير متاح، مفيش مشكلة
    }
  }, [isArabic, language]);

  const [activeSection, setActiveSection] = useState("");
  const [copied, setCopied] = useState(false);
  const progressRef = useRef(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
      if (window.scrollY < 200) setActiveSection("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = ["work", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = document.querySelectorAll(
      ".section-heading, .project, .about-visual, .about-copy, .contact-content",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => {
      item.classList.add("reveal");
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="header-bar">
        <header className="site-header" id="top">
          <a className="wordmark" href="#top" aria-label={profile.name}>
            <span className="wordmark-icon" aria-hidden="true">
              &lt;/&gt;
            </span>
            <span className="wordmark-name">{profile.name}</span>
          </a>
          <nav
            className="main-nav"
            aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}
          >
            <a
              href="#work"
              className={activeSection === "work" ? "is-active" : undefined}
            >
              {copy.navWork}
            </a>
            <a
              href="#about"
              className={activeSection === "about" ? "is-active" : undefined}
            >
              {copy.navAbout}
            </a>
            <a
              href="#contact"
              className={activeSection === "contact" ? "is-active" : undefined}
            >
              {copy.navContact}
            </a>
          </nav>
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
            aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
          >
            <Globe2 size={16} strokeWidth={1.8} />
            <span>{isArabic ? "EN" : "عربي"}</span>
          </button>
        </header>
        <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      </div>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            {copy.availability}
          </div>
          <p className="hero-role">{copy.role}</p>
          <h1 id="hero-title">
            {copy.intro}
            <br />
            <span>{copy.introAccent}</span>
          </h1>
          <p className="hero-description">{copy.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {copy.seeWork}
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
            <a className="button button-text" href="#contact">
              {copy.contact}
              <Arrow size={17} strokeWidth={1.8} />
            </a>
            {profile.cv && (
              <a className="button button-text" href={profile.cv} download>
                {copy.cv}
                <Download size={17} strokeWidth={1.8} />
              </a>
            )}
          </div>
          <a className="scroll-cue" href="#work">
            <span className="scroll-icon">
              <ArrowDown size={14} />
            </span>
            {copy.scroll}
          </a>
        </div>
        <div className="hero-visual" aria-label={copy.heroNote}>
          <img
            className="hero-photo"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90"
            alt={
              isArabic
                ? "مساحة عمل لمطور واجهات على مكتبه"
                : "A frontend developer’s workspace"
            }
          />
          <div className="hero-photo-shade" />
          <div className="hero-code" aria-hidden="true">
            <span className="code-dots">
              <i />
              <i />
              <i />
            </span>
            <span>
              <b>const</b> craft = <em>&quot;with care&quot;</em>
            </span>
            <span>
              <b>build</b>(ideas)
              <Asterisk size={15} />
            </span>
          </div>
          <div className="hero-index">
            <span>01</span>
            <span>/</span>
            <span>03</span>
          </div>
          <div className="hero-caption">
            <Sparkles size={15} />
            {copy.heroNote}
          </div>
        </div>
      </section>

      <section
        className="work-section section-shell"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">
              <span>01</span>
              {copy.workEyebrow}
            </p>
            <h2 id="work-title">
              {copy.workTitle} <span>{copy.workAccent}</span>
            </h2>
          </div>
          <span className="heading-spark" aria-hidden="true">
            <Asterisk size={31} strokeWidth={1.25} />
          </span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-image ${project.className}`}>
                <div className="project-art" aria-hidden="true">
                  {project.icon}
                </div>
                <span className="concept-tag">
                  <span />
                  {project.status[language]}
                </span>
                <span className="project-number">{project.number}</span>
                {project.link && (
                  <a
                    className="project-open"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${copy.viewProject}: ${project.name}`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                )}
              </div>
              <div className="project-heading">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.category[language]}</p>
                </div>
                <Code2
                  className="project-code-icon"
                  size={19}
                  strokeWidth={1.5}
                />
              </div>
              <p className="project-description">
                {project.description[language]}
              </p>
              <div className="project-tags" aria-label={copy.projectLink}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="about-inner section-shell">
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=85"
              alt={
                isArabic
                  ? "تفاصيل مساحة عمل عصرية"
                  : "A detail from a contemporary workspace"
              }
              loading="lazy"
            />
            <div className="about-stamp">
              <Layers3 size={19} strokeWidth={1.5} />
              <span>
                CRAFT
                <br />
                MEETS CODE
              </span>
            </div>
          </div>
          <div className="about-copy">
            <p className="section-eyebrow">
              <span>02</span>
              {copy.aboutEyebrow}
            </p>
            <h2 id="about-title">{copy.aboutTitle}</h2>
            <p className="about-description">{copy.aboutText}</p>
            <div className="capabilities">
              <h3>{copy.capabilities}</h3>
              {copy.focusItems.map(([title, detail], index) => (
                <div className="capability" key={title}>
                  <span className="capability-index">0{index + 1}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{detail}</p>
                  </div>
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </div>
              ))}
            </div>
            <div className="tech-stack">
              <span className="tech-label">{copy.techLabel}</span>
              <div className="tech-list">
                {techStack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="contact-section section-shell"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-topline">
          <p className="section-eyebrow">
            <span>03</span>
            {copy.contactEyebrow}
          </p>
          <Mail size={21} strokeWidth={1.5} />
        </div>
        <div className="contact-content">
          <h2 id="contact-title">{copy.contactTitle}</h2>
          <p>{copy.contactText}</p>
          <a className="contact-link" href={`mailto:${profile.email}`}>
            <span>{profile.email}</span>
            <span className="contact-link-icon">
              <ArrowUpRight size={21} />
            </span>
          </a>
          <div className="social-links">
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            <button type="button" onClick={copyEmail}>
              {copied ? copy.copied : copy.copyEmail}
            </button>
          </div>
        </div>
        <div className="contact-decoration" aria-hidden="true">
          <Asterisk size={164} strokeWidth={0.75} />
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-icon" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="wordmark-name">{profile.name}</span>
        </a>
        <p>
          {copy.footerNote} <span>© {new Date().getFullYear()}</span>
        </p>
        <a className="back-to-top" href="#top">
          <span>{copy.backToTop}</span>
          <ArrowUpRight size={14} />
        </a>
      </footer>
      <a
        className="whatsapp-float"
        href={profile.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.whatsappLabel}
      >
        <MessageCircle size={24} strokeWidth={1.8} />
      </a>
    </main>
  );
}

export default App;
