
import { useEffect, useState } from 'react';

import {
  ArrowUpRight,
  Github,
  Linkedin,
  FileText,
  Mail,
  Phone,
  MessageCircle,
  Download,
  Menu,
  X,
  Cloud,
  Terminal,
  ShieldCheck,
  Boxes,
  Workflow,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  BookOpen,
  MapPin
} from 'lucide-react';

import {
  links,
  skills,
  education,
  experience,
  publications,
  achievements,
  copy
} from './config.js';


function TerminalHero() {
  const [line, setLine] = useState(0);
  const [typed, setTyped] = useState('');

  const commands = [
    { cmd: '$ whoami', value: 'Aya Abdallah' },
    { cmd: '$ cat role.txt', value: 'Cloud & DevOps Engineer' },
    {
      cmd: '$ echo $FOCUS',
      value: 'AWS · Infrastructure as Code · CI/CD · Kubernetes'
    }
  ];

  useEffect(() => {
    let index = 0;
    let timer;
    let cancelled = false;

    setTyped('');

    const typeNext = () => {
      if (cancelled) return;

      const fullText = commands[line].value;

      if (index < fullText.length) {
        index++;
        setTyped(fullText.slice(0, index));
        timer = setTimeout(typeNext, 55);
      } else {
        timer = setTimeout(() => {
          if (!cancelled) {
            setLine(prev => (prev + 1) % commands.length);
          }
        }, 1500);
      }
    };

    timer = setTimeout(typeNext, 350);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [line]);

  return (
    <div className="terminal">
      <div className="terminal-top">
        <span />
        <span />
        <span />
        <small>aya@cloud:~</small>
      </div>

      <div className="terminal-body">
        <div className="term-line" key={commands[line].cmd}>
          <div className="command">{commands[line].cmd}</div>

          <div className="term-value active">
            {typed}
            <span className="type-cursor">▌</span>
          </div>
        </div>
      </div>
    </div>
  );
}


function SectionTitle({ eyebrow, children }) {
  return (
    <div className="section-title">
      <span>// {eyebrow}</span>
      <h2>{children}</h2>
    </div>
  );
}


function Chips({ items }) {
  return (
    <div className="chips">
      {items.map(x => (
        <span key={x}>{x}</span>
      ))}
    </div>
  );
}

const playClickSound = () => {
  const audio = new AudioContext();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.value = 700;

  gain.gain.setValueAtTime(0.08, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audio.currentTime + 0.08
  );

  oscillator.connect(gain);
  gain.connect(audio.destination);

  oscillator.start();
  oscillator.stop(audio.currentTime + 0.08);

  oscillator.onended = () => audio.close();
};


export default function App() {
  const [menu, setMenu] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setTop(window.scrollY > 500);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const nav = [
    ['home', copy.navHome],
    ['about', copy.navAbout],
    ['skills', copy.navSkills],
    ['experience', copy.navExperience],
    ['education', copy.navEducation],
    ['contact', copy.navContact]
  ];


  return (
    <>

      {/* NAVIGATION */}

      <header className="nav">

        <a className="brand" href="#home">
          &lt;AYA /&gt;
        </a>

        <nav className={menu ? 'show' : ''}>
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={'#' + id}
              onClick={() => setMenu(false)}
            >
              {label}
            </a>
          ))}
        </nav>

       <div className="nav-cv-actions">
  {/* Open CV */}
  <a
    className="nav-cta nav-cv-open"
    href={links.cv}
    target="_blank"
    rel="noopener noreferrer"
    title="Open CV"
    aria-label="Open CV"
  >
    <FileText size={15} />
    <span>View CV</span>
  </a>

  {/* Download CV */}
  <a
    className="nav-cta nav-cv-download"
    href={links.cvDownload}
    target="_blank"
    rel="noopener noreferrer"
    title="Download CV"
    aria-label="Download CV"
  >
    <Download size={15} />
    <span>Download</span>
  </a>
</div>

        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <X /> : <Menu />}
        </button>

      </header>


      {/* FLOATING SOCIAL LINKS */}

      <div className="floating-socials">

        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub"
        >
          <Github size={23} />
        </a>

        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <Linkedin size={23} />
        </a>

        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageCircle size={23} />
        </a>

        <a
          href={links.cv}
          target="_blank"
          rel="noopener noreferrer"
          title="My CV"
          aria-label="My CV"
        >
          <FileText size={22} />
        </a>

      </div>


      <main>

        {/* HERO SECTION */}

        <section id="home" className="hero">

          <div className="hero-grid" />

          <div className="wrap hero-content">

            <div className="hero-copy">

              {/* PROFILE */}

              <div className="hero-profile">

                <img
                  src="/assets/Aya Abdallah.jpeg"
                  alt="Aya Abdallah"
                  className="profile-photo"
                />

                <div className="profile-info">

                  <h2>Aya Abdallah</h2>

                  <span>Cloud & DevOps Engineer</span>

                  <small>
                    <MapPin size={13} />
                    Cairo, Egypt
                  </small>

                </div>

              </div>


              {/* TERMINAL */}

              <TerminalHero />


              {/* HERO TITLE */}

              <h1>
                Building reliable
                <br />
                <em>cloud infrastructure.</em>
              </h1>

              <p className="hero-desc">
                {copy.heroDescription}
              </p>


              {/* HERO CONTACT BUTTONS */}

              <div className="hero-actions">

                <a className="btn primary" href="#contact">
                  {copy.contactMe}
                  <ArrowUpRight size={17} />
                </a>

                <a
                  className="btn outline"
                  href={links.cvDownload}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={16} />
                  {copy.downloadCv}
                </a>

                <a
                  className="btn outline whatsapp-btn"
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>

                <a
                  className="phone-link"
                  href={`tel:${links.phone}`}
                >
                  <Phone size={16} />
                  {links.phone}
                </a>

              </div>


              {/* TECH TAGS */}

              <div className="hero-tags">
                <span>AWS</span>
                <span>Terraform</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>CI/CD</span>
                <span>MLOps</span>
              </div>

            </div>


            {/* CLOUD VISUAL */}

            <div className="hero-art" aria-hidden="true">

              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="cloud-core">
                <Cloud size={82} strokeWidth={1.15} />
                <b>
                  Cloud
                  <br />
                  & DevOps
                </b>
              </div>

              <div className="float-card card-aws">
                <span>01 / CLOUD</span>
                <b>AWS</b>
                <small>Infrastructure</small>
              </div>

              <div className="float-card card-k8s">
                <span>02 / ORCHESTRATION</span>
                <b>Kubernetes</b>
                <small>Container platforms</small>
              </div>

              <div className="float-card card-iac">
                <span>03 / AUTOMATION</span>
                <b>Terraform</b>
                <small>Infrastructure as Code</small>
              </div>

            </div>


            <a className="scroll-hint" href="#about">
              SCROLL TO EXPLORE
              <span>↓</span>
            </a>

          </div>
        </section>


        {/* ABOUT */}

        <section id="about" className="section">

          <div className="wrap">

            <SectionTitle eyebrow="ABOUT">
              A little about me
            </SectionTitle>

            <div className="about-grid">

              <div className="about-lead">

                <p>{copy.about}</p>

                <div className="about-location">
                  <MapPin size={16} />
                  Cairo, Egypt
                  <span>·</span>
                  Open to Cloud & DevOps opportunities
                </div>

              </div>

              <div className="about-facts">

                <div>
                  <span className="fact-icon">
                    <Cloud />
                  </span>
                  <b>Cloud & DevOps</b>
                  <small>
                    Infrastructure, automation and reliable deployments
                  </small>
                </div>

                <div>
                  <span className="fact-icon">
                    <Workflow />
                  </span>
                  <b>AI / MLOps</b>
                  <small>
                    Bringing ML workflows into production environments
                  </small>
                </div>

                <div>
                  <span className="fact-icon">
                    <Boxes />
                  </span>
                  <b>Engineering mindset</b>
                  <small>
                    Mechatronics foundation, systems thinking and automation
                  </small>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* SKILLS */}

        <section id="skills" className="section section-dark">

          <div className="wrap">

            <SectionTitle eyebrow="TECH STACK">
              Cloud & DevOps toolkit
            </SectionTitle>

            <p className="section-intro">
              {copy.skillsIntro}
            </p>

            <div className="skills-grid">

              {skills.map((s, i) => (
                <article className="skill-card" key={s.title}>

                  <div className="skill-head">
                    <span className="skill-number">
                      0{i + 1}
                    </span>
                    <h3>{s.title}</h3>
                  </div>

                  <p>{s.description}</p>

                  <Chips items={s.items} />

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* EXPERIENCE */}

        <section id="experience" className="section">

          <div className="wrap">

            <SectionTitle eyebrow="EXPERIENCE">
              Where I’ve gained experience
            </SectionTitle>

            <div className="timeline">

              {experience.map((item, i) => (
                <article className="timeline-item" key={item.title}>

                  <div className="timeline-marker">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className="timeline-content">

                    <div className="timeline-meta">
                      {item.date}
                    </div>

                    <h3>{item.title}</h3>

                    <div className="timeline-place">
                      {item.place}
                    </div>

                    <p>{item.description}</p>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* EDUCATION */}

        <section id="education" className="section section-dark">

          <div className="wrap">

            <SectionTitle eyebrow="EDUCATION & LEARNING">
              Education that shaped my path
            </SectionTitle>

            <div className="education-grid">

              {education.map(item => (
                <article className="education-card" key={item.degree}>

                  <GraduationCap size={25} />

                  <span className="timeline-meta">
                    {item.date}
                  </span>

                  <h3>{item.degree}</h3>

                  <b>{item.school}</b>

                  <p>{item.detail}</p>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* RESEARCH & ACHIEVEMENTS */}

        <section className="section">

          <div className="wrap">

            <SectionTitle eyebrow="RESEARCH & RECOGNITION">
              Research, publications & achievements
            </SectionTitle>

            <div className="recognition-grid">

              <div className="recognition-panel">

                <h3>
                  <BookOpen size={19} />
                  Publications
                </h3>

                {publications.map(p => (
                  <div className="recognition-item" key={p}>
                    {p}
                  </div>
                ))}

              </div>

              <div className="recognition-panel">

                <h3>
                  <Award size={19} />
                  Achievements
                </h3>

                {achievements.map(a => (
                  <div className="recognition-item" key={a}>
                    {a}
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>


        {/* CONTACT */}

        <section id="contact" className="contact-section">

          <div className="wrap contact-inner">

            <span className="section-kicker">
              // LET’S CONNECT
            </span>

            <h2>
              Let’s build something
              <br />
              <em>reliable together.</em>
            </h2>

            <p>{copy.contactDescription}</p>

            <a
              className="btn primary large"
              href={`mailto:${links.email}`}
            >
              <Mail size={18} />
              {links.email}
              <ArrowUpRight size={17} />
            </a>


            <div className="socials">

              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>

              <a href={`tel:${links.phone}`}>
                <Phone size={17} />
                {links.phone}
              </a>

            </div>

            <footer>
              © {new Date().getFullYear()} Aya Abdallah · Cloud & DevOps Engineer
            </footer>

          </div>
        </section>

      </main>


      {/* BACK TO TOP */}

      {top && (
        <button
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <ArrowUpRight />
        </button>
      )}

    </>
  );
}
