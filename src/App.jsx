import React from "react";
import DitherVeil from "./DitherVeil.jsx";

const interests = [
  {
    number: "01",
    title: "Coding",
    description: "Turning ideas into small, useful things with code.",
    mark: "</>",
  },
  {
    number: "02",
    title: "Cloud computing",
    description: "Exploring the systems that make online services possible.",
    mark: "☁",
  },
  {
    number: "03",
    title: "Web developing",
    description: "Learning to build thoughtful, welcoming websites.",
    mark: "↗",
  },
];

const htmlAnswers = [
  {
    question: "What is the purpose of <!DOCTYPE html>?",
    answer: "It tells the browser that the document uses modern HTML5, so the page is rendered according to current web standards.",
  },
  {
    question: "What information is placed inside the <head> element?",
    answer: "The head contains information about the page, such as its title, character encoding, viewport settings, and other metadata. It is not the main visible page content.",
  },
  {
    question: "What is the function of the <body> element?",
    answer: "The body contains the webpage content that visitors see and interact with, including headings, paragraphs, links, lists, and images.",
  },
  {
    question: "What content is usually placed inside the <header> element?",
    answer: "A header usually introduces a page or section. It can contain a title, logo, introductory text, or other introductory content.",
  },
  {
    question: "What is the purpose of the <nav> element?",
    answer: "The nav element groups important navigation links, helping visitors move to other pages or sections of the current page.",
  },
  {
    question: "Why is the <main> element used?",
    answer: "Main identifies the page’s primary content. A page should generally have one main element, separate from repeated navigation, headers, and footers.",
  },
  {
    question: "What is the difference between <section> and <footer>?",
    answer: "A section groups related content, usually around a shared topic and heading. A footer contains closing or supplementary information for its page or section, such as authorship or contact details.",
  },
  {
    question: "What happens when a user clicks the “About” link in the sample webpage?",
    answer: "The link’s href=\"#about\" takes the browser to the element with id=\"about\", scrolling the page to that section.",
  },
];

function App() {
  return (
    <div className="profile-site" id="home">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Jian Carlos Medina home">
          <span className="monogram" aria-hidden="true">JM</span>
          <span className="wordmark-text">Jian Carlos <i>Medina</i></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#interests">Interests</a>
          <a href="#html-guide">HTML Guide</a>
        </nav>
        <a className="header-note" href="#about">A personal introduction <span>↓</span></a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A STUDENT PROFILE</p>
            <h1 id="hero-title">Curious by<br />nature, <em>always</em><br /><em>learning.</em></h1>
            <p className="hero-description">
              A little introduction to who I am and the technology I love
              exploring.
            </p>
            <a className="round-link" href="#about">
              <span className="round-arrow" aria-hidden="true">↓</span>
              <span>Get to know me</span>
            </a>
            <div className="social-links" aria-label="Social profiles">
              <a
                className="social-link"
                href="https://github.com/DazedJ07"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Jian Carlos Medina on GitHub (opens in a new tab)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.55.23 2.7.11 2.98.72.78 1.15 1.78 1.15 3 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                className="social-link"
                href="https://www.facebook.com/jian.carlos.medina.2024/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Jian Carlos Medina on Facebook (opens in a new tab)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.4 21v-8.2h2.76l.41-3.2H13.4V7.55c0-.93.26-1.56 1.6-1.56h1.7V3.13c-.3-.04-1.35-.13-2.57-.13-2.55 0-4.3 1.55-4.3 4.4v2.2H7v3.2h2.84V21h3.56Z" />
                </svg>
                Facebook <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="hero-index">STUDENT PROFILE <span>—</span> 2026</p>
          </div>

          <div className="portrait-wrap">
            <span className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
            <span className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
            <DitherVeil
              src="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop"
              fit="contain"
              pattern="floyd"
              pixelSize={2}
              inkColor="#544638"
              paperColor="#e8dece"
              revealRadius={155}
              softness={0.6}
              linger={1}
              rimColor="#a57d56"
              palette="duotone"
              levels={2}
              contrast={1.15}
              brightness={0}
              rim={0.12}
              reverse={false}
              wander={false}
              clickBurst
              className="portrait-dither"
            />
            <div className="portrait-caption">
              <span className="caption-line" />
              <span>MOVE TO REVEAL · CLICK TO SEND A RIPPLE</span>
            </div>
            <span className="portrait-stamp" aria-hidden="true">J<br /><i>C</i><br />M</span>
          </div>
          <div className="hero-bottom" aria-hidden="true">
            <span>JIAN CARLOS R. MEDINA</span>
            <span>01 — A NOTE ABOUT ME</span>
          </div>
        </section>

        <section className="about-section content-wrap" id="about">
          <div className="section-kicker">
            <span>01</span>
            <span className="kicker-rule" />
            <span>THE INTRODUCTION</span>
          </div>
          <div className="about-layout">
            <h2>A little<br />about <em>me.</em></h2>
            <div className="about-copy">
              <p className="about-lead">
                Hello, I’m <strong>Jian Carlos R. Medina.</strong>
              </p>
              <p>
                I’m a student with a growing interest in technology and the
                ways it can bring ideas to life. I enjoy learning how websites
                are made, how code works, and what happens behind the scenes
                in the cloud.
              </p>
              <p>
                This page is a small snapshot of what I’m curious about now —
                and a reminder that there’s always something new to discover.
              </p>
              <div className="signature">Jian Carlos <span>✳</span></div>
            </div>
          </div>
        </section>

        <section className="interest-section" id="interests">
          <div className="content-wrap">
            <div className="section-kicker">
              <span>02</span>
              <span className="kicker-rule" />
              <span>THINGS I LIKE TO EXPLORE</span>
            </div>
            <div className="interest-heading">
              <h2>Curiosity, in<br /><em>three parts.</em></h2>
              <p>My favorite subjects to learn, experiment, and grow with.</p>
            </div>
            <div className="interest-grid">
              {interests.map((interest) => (
                <article className="interest-card" key={interest.number}>
                  <div className="interest-card-top">
                    <span>{interest.number} / 03</span>
                    <span className="interest-mark" aria-hidden="true">{interest.mark}</span>
                  </div>
                  <div>
                    <h3>{interest.title}</h3>
                    <p>{interest.description}</p>
                  </div>
                  <span className="card-bottom-rule" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="guide-section content-wrap" id="html-guide" aria-labelledby="guide-title">
          <div className="section-kicker">
            <span>03</span>
            <span className="kicker-rule" />
            <span>HTML LEARNING NOTES</span>
          </div>
          <div className="guide-heading">
            <h2 id="guide-title">A few things<br /><em>about HTML.</em></h2>
            <p>Answers to the guide questions from my HTML activity.</p>
          </div>
          <dl className="guide-list">
            {htmlAnswers.map((item, index) => (
              <div className="guide-item" key={item.question}>
                <dt><span>{String(index + 1).padStart(2, "0")}</span>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="closing-section">
          <p className="eyebrow">THANK YOU FOR STOPPING BY</p>
          <h2>Still learning.<br /><em>Just getting started.</em></h2>
          <a className="back-to-top" href="#home">Back to the top <span>↑</span></a>
          <span className="closing-flower" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">JCM<span>.</span></a>
        <p>Made with curiosity by Jian Carlos R. Medina</p>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

export default App;
