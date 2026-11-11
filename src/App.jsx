import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>Focus Photography.</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#photography">Photography</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">

  <div className="hero-content">

    <p className="subtitle">
      PHOTOGRAPHER • FRONTEND DEVELOPER • IT UNDERGRADUATE
    </p>

    <h1>
      Samidu Sri <br />
      <span>Sandakelum.</span>
    </h1>

    <h3 className="hero-tagline">
      Through My Lens. Beyond the Code.
    </h3>

    <p className="description">
      I'm a passionate mobile photographer and frontend developer,
      currently pursuing a Bachelor of Arts (Hons) in Information
      Technology at the University of Ruhuna.

      I capture unforgettable moments through Focus Photography
      while creating modern digital experiences through code.
    </p>

    <div className="hero-buttons">

      <a href="#photography" className="hero-button">
        Explore Photography →
      </a>

      <a href="#about" className="secondary-button">
        About Me ↗
      </a>

    </div>

  </div>

  <div className="hero-image-container">

    <div className="hero-image-frame">

      <img
        src="/images/hero.png"
        alt="Samidu Sri Sandakelum holding a camera"
        className="hero-image"
      />

    </div>

    <div className="image-caption">
      <span>FOCUS PHOTOGRAPHY</span>
      <span>EST. WITH PASSION</span>
    </div>

  </div>

</section>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          I'm Samidu Sri Sandakelum, a mobile photographer,
          frontend developer, and third-year Information
          Technology undergraduate at the University of Ruhuna.
        </p>
      </section>

      <section className="section" id="photography">
        <h2>Focus Photography</h2>
        <p>
          Specializing in portraits, couple photography,
          graduation photography, and memorable moments.
        </p>
      </section>

      <section className="section" id="education">
        <h2>Education</h2>
        <p>University of Ruhuna</p>
        <p>Bachelor of Arts (Hons) in Information Technology</p>
        <p>Third-Year Undergraduate</p>
      </section>

      <section className="section" id="contact">
        <h2>Let's Connect</h2>
        <a
          href="https://github.com/samindusandakelum2-tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </section>

      <footer>
        © {new Date().getFullYear()} Samidu Sri Sandakelum.
      </footer>
    </div>
  )
}

export default App