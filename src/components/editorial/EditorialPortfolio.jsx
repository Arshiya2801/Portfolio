import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import { ChevronDown, Download, Github, Linkedin, Mail, Menu, Moon, Sun, X, Code2, FileText, Globe, Plus } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { primaryProjects, secondaryProjects, skillCategories, certifications, achievements, leadership, education, experiences } from '../../data/portfolio';
import { ApolloScene, CircuitGrid, DeskScene, MindClashScene, MiniScene, SignalParticles, SkillBlocks } from './Scenes';
import EditorialContact from './EditorialContact';
import ThemeLens from './ThemeLens';
const resume = '/Arshiya-Singh-Resume.pdf';
const navigation = [['About', '#about'], ['Experience', '#experience'], ['Work', '#project'], ['Skills', '#skills'], ['Achievements', '#achievements'], ['Education', '#education'], ['Contact', '#contact']];
function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const {
    theme,
    toggleTheme
  } = useTheme();
  useEffect(() => {
    if (!open) return;
    const close = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  const dark = theme === 'dark';
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
        AS<span className="wordmark-star">✳</span><span className="wordmark-name">ARSHIYA SINGH</span>
      </a>
      <div className="header-controls">
        <button type="button" className="theme-button" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggleTheme}>
          {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
        <button type="button" ref={button} className="menu-toggle" aria-controls="editorial-navigation" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="editorial-navigation" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'}>
        {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-resume" href={resume} target="_blank" rel="noopener noreferrer">Résumé <Download size={13} /></a>
      </nav>
    </header>
  );
}
function Hero({ motionPaused }) {
  return <section id="home" className="editorial-hero grain"><div className="section-shell">
        <div className="hero-meta"><span>SOFTWARE DEVELOPMENT ENGINEER</span><span>BASED IN INDIA · OPEN TO HIRE</span></div>
        <div className="hero-grid"><div className="hero-copy"><div className="eyebrow"><span className="small-star">✳</span> FULL-STACK ENGINEER & ALGORITHMIC PROBLEM SOLVER</div><h1>ARSHIYA<br /><span>SINGH<span className="heading-dot">.</span></span></h1><p className="hero-intro">B.Tech in Information Technology at IIIT Una, graduating in 2027. Full-stack and GenAI developer with two internships shipping production LLM and web features.</p><div className="hero-actions"><a href="#project" className="button button-crimson">Explore my work <Code2 size={18} /></a><a href={resume} className="button button-outline" target="_blank" rel="noopener noreferrer">View résumé <Download size={17} /></a></div><a href="#achievements" className="hero-rank"><span>42</span><span>ICPC ALGO QUEEN 2026<br /><b>NATIONAL RANK / 1,658 PARTICIPANTS</b></span></a></div><DeskScene motionPaused={motionPaused} /></div>
        <div className="hero-bottom"><p>THOUGHTFUL INTERFACES.<br /><strong>SERIOUS ENGINEERING.</strong></p><div className="hero-stats"><div><b>5<span>+</span></b><span>MONTHS OF EXPERIENCE</span></div><div><b>10<span>+</span></b><span>PROJECTS COMPLETED</span></div><div><b>600<span>+</span></b><span>DSA QUESTIONS SOLVED</span></div></div><a className="scroll-link" href="#about">SCROLL TO EXPLORE <ChevronDown size={18} /></a></div>
    </div></section>;
}
function SectionHeading({
  label,
  title,
  accent,
  children
}) {
  return <div className="section-heading"><div><p className="eyebrow">{label}</p><h2>{title} <span>{accent}</span></h2></div>{children && <p className="section-note">{children}</p>}</div>;
}
function ProjectLinks({
  project
}) {
  return <div className="project-links">{project.deploymentLink && <a className="button button-crimson" href={project.deploymentLink} target="_blank" rel="noopener noreferrer">Live demo <Globe size={16} /></a>}<a className="button button-outline" href={project.link} target="_blank" rel="noopener noreferrer">Source code <Github size={16} /></a></div>;
}
function ProjectDetails({
  project
}) {
  return <details className="project-details"><summary>Inside the build <Plus size={18} /></summary><div className="project-detail-body">{project.features ? <ul>{project.features.map(feature => <li key={feature.title}><b>{feature.title}.</b> {feature.desc}</li>)}</ul> : <p>{project.description}</p>}{project.whyUnique && <div className="project-perspective"><h4>Why it’s unique</h4><p>{project.whyUnique}</p></div>}{project.thumbnail && <figure className="project-screenshot"><img src={project.thumbnail} alt={`${project.title} application screenshot`} loading="lazy" /><figcaption>THE APPLICATION / {project.title.toUpperCase()}</figcaption></figure>}</div></details>;
}
function ProjectTags({
  project
}) {
  return <ul className="technology-tags" aria-label={`${project.title} technologies`}>{project.tags.map(tag => <li key={tag.name}>{tag.name}</li>)}</ul>;
}
function Projects() {
  const [more, setMore] = useState(false);
  return <section id="project" className="work-section"><div className="section-shell"><SectionHeading label="IDEAS, BUILT INTO SOMETHING REAL" title="SELECTED" accent="WORK.">From an AI coding workspace to a live debate arena. A few things I’ve been building.</SectionHeading>
        {primaryProjects.slice(0, 2).map((project, index) => <article className={`featured-project project-${project.title.toLowerCase()}`} key={project.title}>
            <div className="featured-project-visual">{index === 0 ? <ApolloScene /> : <MindClashScene />}<div className="visual-footer"><span>{index === 0 ? 'AI CODING COACH & WORKSPACE' : 'REAL-TIME DEBATE PLATFORM'}</span><span>BUILT TO CONNECT.</span></div></div>
            <div className="featured-project-copy"><div className="project-category">{index === 0 ? 'FULL-STACK / GENERATIVE AI' : 'REAL-TIME / AI MODERATION'}<span>✳</span></div><h3>{project.title}<span>.</span></h3><p className="project-tagline">{project.tagline}</p><p className="project-overview">{index === 0 ? 'Context-aware coding assistance, collaborative video rooms, and secure multi-language execution in one workspace.' : 'Live debating, interactive scoring, speech evaluation, and post-match analytics, powered by Socket.io, Redis, and OpenAI.'}</p><ProjectTags project={project} /><ProjectLinks project={project} /><ProjectDetails project={project} /></div>
        </article>)}
        <div className="more-work-heading"><h3>MORE TO EXPLORE<span>✳</span></h3><span>SMALL TOOLS. REAL PROBLEMS.</span></div>
        <article className="wide-project"><MiniScene type="MediQueue" /><div><p className="eyebrow">FULL-STACK / HEALTHCARE</p><h3>MediQueue</h3><p>{primaryProjects[2].tagline}</p><ProjectTags project={primaryProjects[2]} /><ProjectLinks project={primaryProjects[2]} /><ProjectDetails project={primaryProjects[2]} /></div></article>
        <div id="more-projects" hidden={!more} className="small-project-grid">{secondaryProjects.map(project => <article className="small-project" key={project.title}><MiniScene type={project.title} /><div className="small-project-copy"><h3>{project.title}</h3><p>{project.tagline}</p><ProjectTags project={project} /><ProjectLinks project={project} /><ProjectDetails project={project} /></div></article>)}</div><div className="more-projects-action"><button className="button button-outline" aria-expanded={more} aria-controls="more-projects" onClick={() => setMore(!more)}>{more ? 'View less' : 'View more projects'}<ChevronDown size={17} className={more ? 'is-up' : ''} /></button></div>
    </div></section>;
}
function Experience() {
  return <section id="experience" className="experience-section"><div className="section-shell">
        <SectionHeading label="LEARNING BY SHIPPING" title="REAL WORLD." accent="REAL WORK." />
        <div className="experience-timeline">{experiences.map(experience => <article className="experience-entry" key={experience.company}><div className="experience-sidebar"><span className="date-marker">{experience.date}</span><span className="experience-location">{experience.location}</span><img src={experience.logo} alt={`${experience.company} logo`} loading="lazy" /><a className="text-link" href={experience.document} target="_blank" rel="noopener noreferrer"><FileText size={16} />{experience.documentLabel}</a></div><div className="experience-body"><p className="eyebrow">{experience.company}</p><h3>{experience.role}</h3>{experience.scope && <p className="experience-scope">{experience.scope}</p>}<ul>{experience.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div>
    </div></section>;
}
function About() {
  return <section id="about" className="about-section grain"><div className="section-shell about-grid"><div className="portrait-composition"><span className="portrait-edge" /><img src="/profile.jpg" alt="Arshiya Singh" loading="lazy" /><span className="portrait-sticker">CURIOUS<br />BY DEFAULT.</span><span className="portrait-caption">ARSHIYA SINGH / DEVELOPER & PROBLEM SOLVER</span></div><div className="about-copy"><p className="eyebrow">THE PERSON BEHIND THE COMMITS</p><h2>A LITTLE<br />ABOUT <span>ME.</span></h2><p className="large-copy">I build with React, Node.js, Python, MongoDB, and Redis—from a RAG customer assistant to a multi-tenant service platform.</p><p>Passionate about architecting scalable, real-time web applications. I combine a rigorous algorithmic mindset with deep MERN stack expertise to deliver high-performance, optimized architectures.</p><p>Whether integrating AI-driven features or streamlining backend processing, I bridge complex challenges and intuitive user experiences through clean code.</p><div className="availability-panel"><span>OPEN TO WHAT’S NEXT</span><dl><div><dt>Opportunities</dt><dd>Full-time / Internship</dd></div><div><dt>Location</dt><dd>India · Remote · Open to relocation</dd></div><div><dt>Response time</dt><dd>Less than 24 hours</dd></div></dl></div><div className="about-socials"><a href="https://github.com/Arshiya2801" target="_blank" rel="noopener noreferrer"><Github size={18} />GitHub</a><a href="https://linkedin.com/in/arshiya-singh" target="_blank" rel="noopener noreferrer"><Linkedin size={18} />LinkedIn</a><a href="mailto:singharshiya.work@gmail.com"><Mail size={18} />Email</a></div></div></div></section>;
}
function Skills({ motionPaused }) {
  return <section id="skills" className="skills-section"><div className="section-shell"><div className="skills-heading"><SectionHeading label="THE TOOLS BEHIND THE IDEAS" title="MY BUILDING" accent="BLOCKS." /><SkillBlocks motionPaused={motionPaused} /></div>
        <div className="skill-groups">{skillCategories.map(category => <div className="skill-group" key={category.title}><h3>{category.title}</h3><ul>{category.skills.map(({
              name,
              subtitle,
              icon: Icon
            }) => <li key={name}><Icon size={19} strokeWidth={1.6} /><span>{name}<small>{subtitle}</small></span></li>)}</ul></div>)}</div>
        <div className="certifications"><div className="subsection-heading"><h3>CERTIFICATIONS</h3><span>ALWAYS A STUDENT.</span></div><div className="certification-grid">{certifications.map(certificate => <article key={certificate.id}><div className="certificate-logo"><img src={certificate.logo} alt={`${certificate.issuer} logo`} loading="lazy" /></div><p className="eyebrow">{certificate.issuer}{certificate.date && ` / ${certificate.date}`}</p><h4>{certificate.title}</h4><p>{certificate.description}</p><a className="text-link" href={certificate.link} target="_blank" rel="noopener noreferrer">View certificate <FileText size={15} /></a></article>)}</div></div>
    </div></section>;
}
function Achievements() {
  return <section id="achievements" className="achievements-section"><div className="section-shell"><SectionHeading label="A FEW MOMENTS ALONG THE WAY" title="MILESTONES &" accent="MOMENTUM." /><div className="achievement-grid">{achievements.map(({
          title,
          highlight,
          desc,
          icon: Icon
        }, index) => <article key={title} className={index === 0 ? 'achievement-lead' : ''}><Icon size={26} strokeWidth={1.6} /><strong>{highlight}</strong><h3>{title}</h3><p>{desc}</p></article>)}</div><div className="subsection-heading"><h3>LEADERSHIP & INVOLVEMENT</h3><span>BEYOND THE CODE.</span></div><div className="leadership-grid">{leadership.map(({
          role,
          org,
          desc,
          icon: Icon
        }) => <article key={role}><Icon size={22} /><h4>{role}</h4><span>{org} — IIIT Una</span><p>{desc}</p></article>)}</div></div></section>;
}
function Education() {
  return <section id="education" className="education-section"><div className="section-shell"><SectionHeading label="WHERE THE FOUNDATION STARTED" title="STILL" accent="LEARNING." /><div className="education-list">{education.map(item => <article key={`${item.institution}-${item.date}`}><div className="education-mark"><img src={item.logo} alt={`${item.institution} logo`} loading="lazy" /></div><div><span className="eyebrow">{item.date}</span><h3>{item.institution}</h3><p className="education-degree">{item.degree}</p><b className="grade-chip">{item.grade}</b>{item.details.map(detail => <p key={detail.label}><b>{detail.label}:</b> {detail.value}</p>)}</div></article>)}</div></div></section>;
}
function Footer({
  motionPaused,
  toggleMotion,
  systemReduced
}) {
  return <footer className="site-footer"><a className="wordmark" href="#home">AS<span className="wordmark-star">✳</span></a><p>© 2026 Arshiya Singh. All rights reserved.</p><div><a href="https://github.com/Arshiya2801" target="_blank" rel="noopener noreferrer">GitHub</a><a href={resume} target="_blank" rel="noopener noreferrer">Résumé</a><button className="motion-toggle" type="button" aria-pressed={motionPaused} disabled={systemReduced} onClick={toggleMotion}>{systemReduced ? 'Reduced motion' : motionPaused ? 'Resume motion' : 'Pause motion'}</button><a href="#home">Back to top</a></div></footer>;
}
export default function EditorialPortfolio() {
  const { theme } = useTheme();
  const sourceRef = useRef(null);
  const systemReduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const motionPaused = Boolean(systemReduced || paused);
  useEffect(() => {
    if (motionPaused) return;

    const scroll = new Lenis({ autoRaf: true, lerp: 0.12, stopInertiaOnNavigate: true });
    return () => scroll.destroy();
  }, [motionPaused]);
  return <>
    <div ref={sourceRef} className="editorial" data-theme={theme} data-motion={motionPaused ? 'reduced' : 'full'}>
      <CircuitGrid /><SignalParticles /><a className="skip-link" href="#main-content">Skip to content</a><Navigation />
      <main id="main-content" tabIndex={-1}>
        <Hero motionPaused={motionPaused} />
        <div className="editorial-ticker" aria-hidden="true"><span>FULL-STACK DEVELOPMENT</span><b>✳</b><span>GEN AI & REAL-TIME SYSTEMS</span><b>✳</b><span>IDEAS INTO IMPACT</span><b>✳</b></div>
        <About /><Experience /><Projects /><Skills motionPaused={motionPaused} /><Achievements /><Education /><EditorialContact />
      </main>
      <Footer motionPaused={motionPaused} toggleMotion={() => setPaused(!paused)} systemReduced={Boolean(systemReduced)} />
    </div>
    <ThemeLens sourceRef={sourceRef} theme={theme} disabled={motionPaused} />
  </>;
}
