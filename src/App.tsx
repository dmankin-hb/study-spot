import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Coffee,
  GraduationCap,
  Instagram,
  Library,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Plug,
  Search,
  SlidersHorizontal,
  Users,
  Volume2,
  VolumeX,
  Wifi,
  X,
} from "lucide-react";
import config from "./site-config.json";

const spots = [
  {
    name: "Norlin Library",
    detail: "Library · CU Boulder",
    occupancy: 32,
    noise: "Quiet",
    wifi: "Strong",
    outlets: "Available",
    icon: Library,
    type: "library",
    color: "green",
  },
  {
    name: "University Memorial Center",
    detail: "Student center · CU Boulder",
    occupancy: 68,
    noise: "Lively",
    wifi: "Strong",
    outlets: "Limited",
    icon: GraduationCap,
    type: "center",
    color: "amber",
  },
  {
    name: "Your neighborhood café",
    detail: "Coffee shop · Around campus",
    occupancy: 45,
    noise: "Moderate",
    wifi: "Good",
    outlets: "Available",
    icon: Coffee,
    type: "cafe",
    color: "blue",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Room to settle in.",
    text: "See how busy a space could be before you make the walk.",
    label: "OCCUPANCY",
  },
  {
    icon: Volume2,
    title: "Your kind of quiet.",
    text: "Find the right atmosphere for deep focus or a group project.",
    label: "NOISE LEVEL",
  },
  {
    icon: Wifi,
    title: "Stay connected.",
    text: "Know what to expect from the Wi-Fi before you open your laptop.",
    label: "WI-FI QUALITY",
  },
  {
    icon: Plug,
    title: "Power through.",
    text: "Look for available outlets so a low battery won’t cut your session short.",
    label: "OUTLET AVAILABILITY",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#top"
      aria-label="Study Spot home"
    >
      <img src="/favicon.svg" width="35" height="35" alt="" />
      <span>
        study<span className="brand-last">spot</span>
        <span className="brand-period">.</span>
      </span>
    </a>
  );
}

function AppPreview() {
  const [filter, setFilter] = useState("All spots");
  const filtered = spots.filter(
    (spot) =>
      filter === "All spots" ||
      (filter === "Quiet"
        ? spot.noise === "Quiet"
        : spot.outlets === "Available"),
  );
  return (
    <div className="preview-scene" id="app-preview">
      <div className="preview-orbit orbit-one" />
      <div className="preview-orbit orbit-two" />
      <div className="app-window">
        <div className="app-toolbar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>YOUR NEXT STUDY SESSION, SORTED.</span>
          <BookOpen size={15} />
        </div>
        <div className="app-content">
          <div className="app-heading">
            <div>
              <span className="app-eyebrow">LET’S FIND YOUR FOCUS</span>
              <h3>A spot for you.</h3>
            </div>
            <span className="app-location">
              <MapPin size={12} /> Boulder, CO
            </span>
          </div>
          <div className="search-decoration">
            <Search size={16} />
            <span>Explore spaces around campus</span>
            <SlidersHorizontal size={16} />
          </div>
          <div className="app-filters" aria-label="Filter sample study spaces">
            {["All spots", "Quiet", "Outlets"].map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                className={filter === item ? "selected" : ""}
                onClick={() => setFilter(item)}
              >
                {item === "Quiet" ? (
                  <VolumeX size={12} />
                ) : item === "Outlets" ? (
                  <Plug size={12} />
                ) : (
                  <MapPin size={12} />
                )}
                {item}
              </button>
            ))}
          </div>
          <div className="app-results-label">
            <span aria-live="polite">{filtered.length} sample spaces</span>
            <span>APP PREVIEW</span>
          </div>
          <div className="spot-list">
            {filtered.map((spot) => (
              <article className="spot-card" key={spot.name}>
                <div className="spot-top">
                  <div className={`spot-icon ${spot.type}`}>
                    <spot.icon size={21} strokeWidth={1.6} />
                  </div>
                  <div className="spot-name">
                    <h4>{spot.name}</h4>
                    <p>{spot.detail}</p>
                  </div>
                  <span className={`occupancy ${spot.color}`}>
                    {spot.occupancy}%<small>occupied</small>
                  </span>
                </div>
                <div className="capacity-track">
                  <div
                    className={spot.color}
                    style={{ width: `${spot.occupancy}%` }}
                  />
                </div>
                <div className="spot-metrics">
                  <span>
                    <Volume2 size={12} />
                    {spot.noise}
                  </span>
                  <span>
                    <Wifi size={12} />
                    {spot.wifi}
                  </span>
                  <span>
                    <Plug size={12} />
                    {spot.outlets}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="sample-note">
            Sample data only. Not current campus conditions.
          </p>
        </div>
      </div>
      <div className="scene-caption">
        <span className="caption-line" /> A LITTLE PREVIEW OF WHAT’S NEXT
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const signupReady = Boolean(config.signupUrl && config.signupVerified);
  const signup = (
    className = "button button-primary",
    label = "Join the list",
  ) => (
    <a className={className} href="#join" onClick={() => setMenuOpen(false)}>
      {label}
      <ArrowRight size={18} />
    </a>
  );

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header id="top">
        <div className="nav-wrap">
          <Brand />
          <nav
            className={menuOpen ? "navigation open" : "navigation"}
            id="main-navigation"
            aria-label="Main navigation"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setMenuOpen(false);
                document.getElementById("menu-toggle")?.focus();
              }
            }}
          >
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <a href="#why-study-spot" onClick={() => setMenuOpen(false)}>
              Why Study Spot
            </a>
            <a href="#team" onClick={() => setMenuOpen(false)}>
              Our team
            </a>
          </nav>
          <div className="nav-actions">
            {signup("button button-small")}
            <button
              id="menu-toggle"
              aria-controls="main-navigation"
              className="menu-toggle"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow-pill">
              <span className="tiny-spark">✳</span> BUILT FOR YOUR NEXT STUDY
              SESSION
            </div>
            <h1 id="hero-title">
              Find your
              <br />
              study spot.
              <br />
              <span>Before you go.</span>
            </h1>
            <p className="hero-description">
              A full library. A loud café. A laptop on 3%.
              <br className="desktop-break" /> Let’s take the guesswork out of
              where to study.
            </p>
            <p className="hero-support">
              We’re building a better way to find spaces with the room, quiet,
              Wi-Fi, and outlets you need.
            </p>
            <div className="hero-actions">
              {signup()}
              <a className="text-link" href="#how-it-works">
                Meet Study Spot <ArrowDown size={16} />
              </a>
            </div>
            <div className="pilot-note">
              <MapPin size={15} />
              <span>
                Starting in <strong>Boulder.</strong> Building for campuses and
                communities nationwide.
              </span>
            </div>
          </div>
          <AppPreview />
        </section>
        <div className="benefit-strip">
          <div className="section-wrap">
            <span className="strip-intro">A GOOD SPOT CHECKS EVERY BOX.</span>
            <span>
              <Users />
              Room to focus
            </span>
            <span>
              <VolumeX />
              The right noise level
            </span>
            <span>
              <Wifi />
              Reliable Wi-Fi
            </span>
            <span>
              <Plug />A place to plug in
            </span>
          </div>
        </div>
        <section className="problem section-wrap" id="why-study-spot">
          <div>
            <p className="eyebrow">SOUND FAMILIAR?</p>
            <h2>
              You came to study.
              <br />
              Not to find a seat.
            </h2>
          </div>
          <div className="problem-copy">
            <p>
              You finally get to the library. Every table is taken. The café
              down the street? Too loud. By the time you settle in, you’ve lost
              more than a little motivation.
            </p>
            <p className="problem-emphasis">
              Your study time deserves a better start.
            </p>
          </div>
        </section>
        <section
          className="features section-wrap"
          aria-label="Study Spot benefits"
        >
          {benefits.map((benefit, index) => (
            <article className="feature" key={benefit.title}>
              <div className="feature-top">
                <span className="feature-icon">
                  <benefit.icon size={25} strokeWidth={1.6} />
                </span>
                <span className="feature-number">0{index + 1}</span>
              </div>
              <p className="feature-label">{benefit.label}</p>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </section>
        <section className="how-section" id="how-it-works">
          <div className="section-wrap how-layout">
            <div className="how-intro">
              <p className="eyebrow">LESS SEARCHING. MORE STUDYING.</p>
              <h2>
                A better spot.
                <br />
                In a few taps.
              </h2>
              <p>
                One simple idea: know what a space is like before you get there.
              </p>
              <a className="text-link" href="#app-preview">
                Try the app preview <ArrowRight size={17} />
              </a>
              <span className="concept-tag">
                <BookOpen size={14} /> In development · Help shape what’s next
              </span>
            </div>
            <ol className="steps">
              <li>
                <span className="step-number">01</span>
                <div>
                  <h3>Tell us your study mood.</h3>
                  <p>
                    Deep focus or group brainstorm? Choose what matters to you:
                    quiet, outlets, or space to spread out.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">02</span>
                <div>
                  <h3>Get a feel for the options.</h3>
                  <p>
                    Compare nearby spots using the conditions we plan to surface
                    through recent community reports and available data.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">03</span>
                <div>
                  <h3>Head out with a plan.</h3>
                  <p>
                    Pick the place that fits your session, so you can spend less
                    time searching and more time making progress.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="team-section section-wrap" id="team">
          <div className="team-heading">
            <div>
              <p className="eyebrow">THE PEOPLE BEHIND STUDY SPOT</p>
              <h2>We’ve been there, too.</h2>
            </div>
            <p>
              We know the frustration of a full library or a café that’s too
              loud. We’re building Study Spot to help you find a space that
              fits, wherever you study.
            </p>
          </div>
          <div className="team-grid">
            {config.team.map((person) => (
              <article className="team-card" key={person.name}>
                <img
                  className="team-photo"
                  src={person.photo}
                  alt={`Portrait of ${person.name}`}
                  width="600"
                  height="645"
                  loading="lazy"
                  decoding="async"
                />
                <div className="team-card-info">
                  <div>
                    <h3>{person.name}</h3>
                  </div>
                  {person.email && (
                    <a
                      className="team-email"
                      href={`mailto:${person.email}`}
                      aria-label={`Email ${person.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="join-section section-wrap"
          id="join"
          aria-labelledby="join-title"
        >
          <div className="join-card">
            <div className="join-copy">
              <p className="eyebrow">HELP SHAPE WHAT’S NEXT</p>
              <h2 id="join-title">
                Better study days
                <br />
                start with you.
              </h2>
              <p>
                Join the interest list for product updates and share what would
                make finding your next study spot easier.
              </p>
              <div className="launch-detail">
                <MapPin size={20} />
                <div>
                  <strong>Boulder first. A wider vision.</strong>
                  <p>
                    Our initial pilot is planned for Boulder. Our goal is to
                    bring Study Spot to campuses and communities across the
                    country.
                  </p>
                </div>
              </div>
              <img
                className="join-brand-mark"
                src="/favicon.svg"
                alt=""
                width="80"
                height="80"
              />
              <span className="join-note">
                In development. Your feedback helps guide what we build.
              </span>
            </div>
            <div className="signup-panel">
              <div className="signup-panel-heading">
                <span className="feature-icon">
                  <Mail size={22} />
                </span>
                <div>
                  <h3>Find your focus. Stay in the loop.</h3>
                  <p>Your email, plus optional feedback.</p>
                </div>
              </div>
              {signupReady ? (
                <>
                  <iframe
                    className="signup-embed"
                    src={`${config.signupUrl}?embedded=true`}
                    title="Study Spot interest list signup form"
                    loading="lazy"
                  />
                  <p className="form-fallback">
                    Prefer a separate tab?{" "}
                    <a
                      href={config.signupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open the signup form <ArrowUpRight size={14} />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </p>
                </>
              ) : (
                <p className="signup-unavailable">
                  The interest list is opening soon. Check back for updates.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="section-wrap">
        <div className="footer-top">
          <Brand />
          <p>Less searching. More studying.</p>
          <div className="social-links">
            {config.socials.instagram && (
              <a
                href={config.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Study Spot Instagram"
              >
                <Instagram size={20} />
              </a>
            )}
            {config.socials.linkedin && (
              <a
                href={config.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Study Spot LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            <a href="#top" className="back-top">
              Back to top <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Study Spot</p>
          <span>Built for wherever you find your focus.</span>
        </div>
      </footer>
    </>
  );
}
