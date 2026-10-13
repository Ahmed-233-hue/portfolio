import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react";
import "./App.css";

const profile = {
  name: "Eng. Ahmed Attia Tolbah",
  email: "aatia0527@gmail.com",
  github: "https://github.com/Ahmed-233-hue",
  linkedin: "", // حط رابط LinkedIn هنا لو عندك، وهيظهر لوحده
  whatsapp: "https://wa.me/201096359320",
};

const techStack = ["React", "TypeScript", "JavaScript", "CSS", "Figma", "Git"];

const projects = [
  {
    number: "01",
    name: "Morrow",
    className: "project-image--morrow",
    category: { ar: "متجر أثاث وديكور", en: "Furniture & living" },
    description: {
      ar: "تجربة تجارة إلكترونية هادئة، تضع المنتجات في الواجهة وتسهّل قرار الشراء.",
      en: "A calm e-commerce experience that puts the products first and makes buying feel effortless.",
    },
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    alt: {
      ar: "مساحة معيشة عصرية بألوان هادئة",
      en: "A modern, softly styled living room",
    },
    tags: ["React", "TypeScript", "Commerce"],
  },
  {
    number: "02",
    name: "Elsewhere",
    className: "project-image--elsewhere",
    category: { ar: "دليل سفر وتجارب", en: "Travel & experiences" },
    description: {
      ar: "منصة سفر تحريرية تحوّل البحث عن وجهتك القادمة إلى جزء من الرحلة.",
      en: "An editorial travel platform that makes finding your next destination part of the journey.",
    },
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85",
    alt: {
      ar: "بحيرة جبلية بين قمم خضراء",
      en: "A mountain lake framed by green peaks",
    },
    tags: ["React", "Maps", "Motion"],
  },
  {
    number: "03",
    name: "Forma",
    className: "project-image--forma",
    category: { ar: "استوديو تصميم رقمي", en: "Digital design studio" },
    description: {
      ar: "موقع لاستوديو إبداعي، بإيقاع بصري واضح ومساحة كافية لكل تفصيلة.",
      en: "A studio site with a considered visual rhythm and room for every detail to breathe.",
    },
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    alt: {
      ar: "استوديو عمل مشرق بتصميم بسيط",
      en: "A bright, minimal creative studio",
    },
    tags: ["React", "Design systems", "A11y"],
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
    heroNote: "واجهة مدروسة. تجربة أسرع.",
    scroll: "اكتشف المزيد",
    workEyebrow: "مختارات من أعمالي",
    workTitle: "أفكار، صارت",
    workAccent: "تجارب.",
    concepts: "مشروع مفاهيمي",
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
    heroNote: "Thoughtful UI. Faster experiences.",
    scroll: "Scroll to explore",
    workEyebrow: "A selection of work",
    workTitle: "Ideas made",
    workAccent: "tangible.",
    concepts: "Concept project",
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
  const [language, setLanguage] = useState("ar");
  const isArabic = language === "ar";
  const copy = translations[language];
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, language]);

  return (
    <main>
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
          <a href="#work">{copy.navWork}</a>
          <a href="#about">{copy.navAbout}</a>
          <a href="#contact">{copy.navContact}</a>
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
                <img
                  src={project.image}
                  alt={project.alt[language]}
                  loading="lazy"
                />
                <span className="concept-tag">
                  <span />
                  {copy.concepts}
                </span>
                <span className="project-number">{project.number}</span>
                <span className="project-open" aria-hidden="true">
                  <ArrowUpRight size={19} />
                </span>
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
    </main>
  );
}

export default App;