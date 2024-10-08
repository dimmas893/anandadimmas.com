import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ANANDA DIMMAS BUDIARTO - FULL STACK WEB DEVELOPER, BACK END DEVELOPER AND DEVOPS</title>

        {/* <!-- Dublin Core Metadata --> */}
        <meta name="DC.title" content="ANANDA DIMMAS BUDIARTO - FULL STACK WEB DEVELOPER, BACK END DEVELOPER AND DEVOPS" />
        <meta name="DC.creator" content="ANANDA DIMMAS BUDIARTO" />
        <meta name="DC.subject" content="Fullstack Developer, DevOps, Pengembangan Web" />
        <meta name="DC.description" content="ANANDA DIMMAS BUDIARTO, a Fullstack Developer And Devops with high-level experience in both front-end and back-end web development, creating robust and scalable applications with quality work." />
        <meta name="DC.publisher" content="ANANDA DIMMAS BUDIARTO" />
        <meta name="DC.date" content="2024-07-15" />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://anandadimmas.com" />
        <meta name="DC.language" content="id" />
        <meta name="google-site-verification" content="36eu7KctsJZNMVI-kV0XTCr_IylaXs4E60VsHjWek1U" />
        {/* <!-- Additional Meta Tags for SEO --> */}
        <meta name="description" content="ANANDA DIMMAS BUDIARTO, a Fullstack Developer And Devops with high-level experience in both front-end and back-end web development, creating robust and scalable applications with quality work." />
        <meta name="keywords" content="Ketipung, ANANDA DIMMAS BUDIARTO, Fullstack Developer, ANANDA DIMMAS BUDIARTO, ANANDA DIMMAS BUDIARTO Fullstack Developer, ANANDA DIMMAS BUDIARTO Frontend Developer, ANANDA DIMMAS BUDIARTO Backend Developer, ANANDA DIMMAS BUDIARTO Pengembangan Web, ANANDA DIMMAS BUDIARTO SMAN 1 JEPON, Programmer Blora, Programmer Jiken, Programmer Cepu, Programmer Jawa Tengah, Programmer Semarang, Fullstack Developer Blora, Fullstack Developer Cepu, Fullstack Developer Semarang, Fullstack Developer Jawa Tengah, Fullstack Developer Jiken, Devops Blora, Devops Cepu, Devops Semarang, Devops Jawa Tengah, Devops Jiken, Web Developer, Web Developer Blora, Web Developer Cepu, Web Developer Semarang, Web Developer Jawa Tengah, Web Developer Jiken" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ANANDA DIMMAS BUDIARTO" />
        <link rel="canonical" href="https://anandadimmas.com" />

        {/* <!-- Open Graph Meta Tags for social sharing --> */}
        <meta property="og:title" content="ANANDA DIMMAS BUDIARTO - FULL STACK WEB DEVELOPER, BACK END DEVELOPER AND DEVOPS" />
        <meta property="og:description" content="ANANDA DIMMAS BUDIARTO, a Fullstack Developer And Devops with high-level experience in both front-end and back-end web development, creating robust and scalable applications with quality work." />
        <meta property="og:image" content="https://anandadimmas.com/packages/images/icon2.png" />
        <meta property="og:url" content="https://anandadimmas.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="ANANDA DIMMAS BUDIARTO" />

        {/* <!-- Twitter (X) Card Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ANANDA DIMMAS BUDIARTO - FULL STACK WEB DEVELOPER, BACK END DEVELOPER AND DEVOPS" />
        <meta name="twitter:description" content="ANANDA DIMMAS BUDIARTO, a Fullstack Developer And Devops with high-level experience in both front-end and back-end web development, creating robust and scalable applications with quality work." />
        <meta name="twitter:image" content="https://anandadimmas.com/packages/images/icon2.png" />
        <meta name="twitter:site" content="@AnandaDimmas" />
        <meta name="twitter:creator" content="@AnandaDimmas" />

        <link rel="icon" href="https://anandadimmas.com/packages/images/icon2.png" />

        {/*==================== UNICONS ====================*/}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        {/*==================== SWIPER CSS ====================*/}
        <link rel="stylesheet" href="/packages/css/swiper-bundle.min.css" />
        {/*==================== CSS ====================*/}
        <link rel="stylesheet" href="/packages/css/styles.css" />
      </Head>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            ANANDA DIMMAS BUDIARTO
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="uil uil-estate nav__icon" />
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon" />
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon" />
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon" />
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon" />
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon" />
                  Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" id="nav-close" />
          </div>
          <div className="nav__btns">
            {/* Theme change button */}
            <i className="uil uil-moon change-theme" id="theme-button" />
            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps" />
            </div>
          </div>
        </nav>
      </header>
      {/*==================== MAIN ====================*/}
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/ananda-dimmas-budiarto-75232b225/"
                  target="_blank"
                  className="home__social-icon"
                >
                  <i className="uil uil-linkedin-alt" />
                </a>
                {/* <a
                  href="https://twitter.com/prashanna01"
                  target="_blank"
                  className="home__social-icon"
                >
                  <i className="uil uil-twitter-alt" />
                </a> */}
                <a
                  href="https://github.com/dimmas893"
                  target="_blank"
                  className="home__social-icon"
                >
                  <i className="uil uil-github-alt" />
                </a>
              </div>
              <div className="home__img">
                <svg
                  className="home__blob"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    <image
                      className="home__blob-img"
                      x=""
                      y="-25"
                      width="250"
                      height="250"
                      xlinkHref="https://anandadimmas.com/packages/images/foto.png"
                    />
                  </g>
                </svg>
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi, I am ANANDA DIMMAS BUDIARTO</h1>
                <h3 className="home__subtitle">FULL STACK WEB DEVELOPER, BACK END DEVELOPER AND DEVOPS</h3>
                <p className="home__description">
                  High level experience in both front-end and back-end web development, creating robust and scalable applications with quality work.
                </p>
                <a href="#contact" className="button button--flex home__button">
                  Contact Me
                  <i className="uil uil-message button__icon" />
                </a>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse" />
                <span className="home__scroll-name">Scroll Down</span>
                <i className="uil uil-arrow-down home__scroll-arrow" />
              </a>
            </div>
          </div>
        </section>
        {/*==================== ABOUT ====================*/}
        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My Introduction</span>
          <div className="about__container container grid">
            <img src="/packages/images/aku2.jpg" alt="" className="about__img" />
            <div className="about__data">
              <p className="about__description">
              I am a Full Stack Web Developer, Back End Developer, and DevOps professional with a deep understanding of both front-end and back-end technologies. I specialize in building scalable, robust applications and have experience working in diverse, dynamic environments. My passion lies in creating efficient solutions and driving continuous improvement in software development and deployment processes.
              </p>
              <div className="about__info">
                <div>
                  <span className="about__info-title">03+</span>
                  <span className="about__info-name">
                    Years <br /> experience
                  </span>
                </div>
                <div>
                  <span className="about__info-title">05+</span>
                  <span className="about__info-name">
                    Completed <br /> certifications
                  </span>
                </div>
                <div>
                  <span className="about__info-title">05+</span>
                  <span className="about__info-name">
                    Companies <br /> worked
                  </span>
                </div>
              </div>
              <div className="about__buttons">
                <a download="" href="/packages/ananda-dimmas-budiarto.pdf" className="button button--flex">
                  Download CV
                  <i className="uil uil-download-alt button__icon" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*==================== SKILLS ====================*/}
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>
          <div className="skills__container container grid">
            <div>
              {/*==================== SKILL-1 ====================*/}
              <div className="skills__content skills__open">
                <div className="skills__header">
                  <i className="uil uil-analytics skills__icon" />
                  <div>
                    <h1 className="skills__title">Back End Developer</h1>
                    <span className="skills__subtitle">More than 2 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow" />
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">PHP</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__php" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Laravel</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__laravel" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">SQL</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__sql" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Node.js</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__nodejs" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Express.js</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__expressjs" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Python</h3>
                      <span className="skills__number">20%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__python" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Java</h3>
                      <span className="skills__number">50%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__java" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">RESTful API</h3>
                      <span className="skills__number">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__restapi" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Golang</h3>
                      <span className="skills__number">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__docker" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Gin</h3>
                      <span className="skills__number">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__docker" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Gorm</h3>
                      <span className="skills__number">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__docker" />
                    </div>
                  </div>
                </div>
              </div>

              {/*==================== SKILLS 3 ====================*/}
              <div className="skills__content skills__close">
                <div className="skills__header">
                  <i className="uil uil-brackets-curly skills__icon" />
                  <div>
                    <h1 className="skills__title">Front End Developer</h1>
                    <span className="skills__subtitle">More than 2 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow" />
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__html" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__css" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__number">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">React Js</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__react" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Next Js</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__react" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Vue.js</h3>
                      <span className="skills__number">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__vuejs" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Bootstrap</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__bootstrap" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Tailwind CSS</h3>
                      <span className="skills__number">30%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__tailwind" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">TypeScript</h3>
                      <span className="skills__number">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__typescript" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills__content skills__close">
                <div className="skills__header">
                  <i className="uil uil-money-bill skills__icon" />
                  <div>
                    <h1 className="skills__title">DevOps</h1>
                    <span className="skills__subtitle">More than 2 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow" />
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name"> Gitlab CE CI/CD</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__cicd" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Docker</h3>
                      <span className="skills__number">75%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__docker" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Github Actions</h3>
                      <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage sembilanpuluh" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Kubernetes</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__kubernetes" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Jenkins</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__jenkins" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="qualification__section">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>
          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div
                className="qualification__button button--flex qualification__active"
                data-target="#education"
              >
                <i className="uil uil-graduation-cap qualification__icon" />
                Education
              </div>
              <div
                className="qualification__button button--flex"
                data-target="#work"
              >
                <i className="uil uil-briefcase-alt qualification__icon" />
                Work
              </div>
            </div>
            <div className="qualification__sections">
              <div
                className="qualification__content qualification__active"
                data-content=""
                id="education"
              >
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">D3 Teknik Komputer</h3>
                    <span className="qualification__subtitle">
                      Politeknik Tugu Jakarta
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" /> 2019 - 2022
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                </div>
                <div className="qualification__data">
                  <div />
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                  <div>
                    <h3 className="qualification__title">S1 Teknik Informatika</h3>
                    <span className="qualification__subtitle">
                      Universitas Nusa Mandiri
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" /> 2023 - 2024
                    </div>
                  </div>
                </div>
              </div>
              {/*==================== QUALIFICATION CONTENT 2 ====================*/}
              <div className="qualification__content" data-content="" id="work">
                {/* Experience 1 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Full Stack Web Developer, Back End Developer and Devops</h3>
                    <span className="qualification__subtitle">PT. BILINDO INFO SISTEMA</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" /> May 2022 - March 2023
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                </div>
                {/* Experience 2 */}
                <div className="qualification__data">
                  <div />
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                  <div>
                    <h3 className="qualification__title">Full Stack Web Developer and Devops</h3>
                    <span className="qualification__subtitle">PT INFRASTRUKTUR TELEKOMUNIKASI INDONESIA</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" /> October 2023 - March 2023
                    </div>
                  </div>
                </div>
                {/* Experience 3 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Back End Developer and Devops</h3>
                    <span className="qualification__subtitle">PT DIBUILTADI TEKNOLOGI KREATIF</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" /> April 2024 - August 2024
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/*==================== SERVICES ====================*/}
        <section className="services section" id="services">
          <h2 className="section__title">Services</h2>
          <span className="section__subtitle">What I offer</span>
          <div className="services__container container grid">
            {/*==================== SERVICES 1 ====================*/}
            <div className="services__content">
              <div>
                <i className="uil uil-analytics skills__icon" />
                <h3 className="services__title">
                  Back End Developer
                  <br />
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View more
                <i className="uil uil-arrow-right button__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Back End Developer <br />
                  </h4>
                  <i className="uil uil-times services__modal-close" />
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Develop and maintain server-side logic.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Build and manage databases and servers.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>
                        Ensure high performance and responsiveness to requests from the front-end.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>
                        Collaborate with front-end developers to integrate user-facing elements.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*==================== SERVICES 2 ====================*/}
            <div className="services__content">
              <div>
                <i className="uil uil-money-bill skills__icon" />
                <h3 className="services__title">
                  Front End Developer
                  <br />{" "}
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View more
                <i className="uil uil-arrow-right button__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Front End Developer
                    <br />
                  </h4>
                  <i className="uil uil-times services__modal-close" />
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Design and implement user interfaces.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Develop responsive web pages.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>
                        Ensure cross-browser compatibility and performance.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>
                        Work with back-end developers to integrate APIs and services.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*==================== SERVICES 3 ====================*/}
            <div className="services__content">
              <div>
                <i className="uil uil-arrow services__icon" />
                <h3 className="services__title">
                  DevOps
                  <br />
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View more
                <i className="uil uil-arrow-right button__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    DevOps
                    <br />
                  </h4>
                  <i className="uil uil-times services__modal-close" />
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Implement CI/CD pipelines for automated testing and deployment.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Manage cloud infrastructure and services.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Monitor and ensure the reliability of systems and applications.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Automate processes to improve efficiency and reduce errors.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/*==================== PORTFOLIO ====================*/}
      <section className="portfolio section" id="portfolio">
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">Most recent works</span>
          <div className="portfolio__container container swiper-container">
            <div className="swiper-wrapper">

              {/*==================== PORTFOLIO 1 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">School Application</h3>
                  <p className="portfolio__description">
                    A Fullstack Monolith application designed to manage school operations, including student information systems, grading, and attendance tracking.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 2 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Event Management Application</h3>
                  <p className="portfolio__description">
                    A Fullstack Monolith application that facilitates the planning, organization, and management of events, including ticketing and attendee tracking.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 3 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">E-commerce Application</h3>
                  <p className="portfolio__description">
                    A Fullstack Monolith e-commerce platform that provides a comprehensive solution for online shopping, including inventory management, cart system, and payment integration.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 4 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Job Management Application</h3>
                  <p className="portfolio__description">
                    A Fullstack Monolith application designed to manage job postings, applications, and candidate tracking for recruitment processes.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 5 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">E-learning Web Application</h3>
                  <p className="portfolio__description">
                    A Fullstack Monolith platform that offers online courses, quizzes, and certification with user progress tracking and interactive content.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 6 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Queue Number Application</h3>
                  <p className="portfolio__description">
                    A Fullstack Monolith system that manages and distributes queue numbers for service centers, ensuring organized and efficient customer service.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 7 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Notary Application</h3>
                  <p className="portfolio__description">
                    A Fullstack Monolith application for notaries to manage their clients, documents, and appointments efficiently.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 8 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Business Partner Booking Application</h3>
                  <p className="portfolio__description">
                    A Fullstack Monolith application that enables businesses to book and manage appointments with partners and clients, streamlining business operations.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 9 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Backend E-commerce APIs</h3>
                  <p className="portfolio__description">
                    A Microservices-based backend for an e-commerce platform, providing RESTful APIs for product management, order processing, and payment integration.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 10 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">News Portal</h3>
                  <p className="portfolio__description">
                    A Fullstack Monolith application that serves as a news portal, delivering up-to-date news and articles with user management and content moderation features.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 11 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Point of Sale</h3>
                  <p className="portfolio__description">
                    A Microservices-based Point of Sale system that supports retail operations with inventory management, sales tracking, and customer management.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 12 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Asasta Payment Gateway</h3>
                  <p className="portfolio__description">
                    A Microservices-based payment gateway system that facilitates secure and reliable online transactions for various businesses.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 13 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">ARI IOTU - IoT Device Management Platform</h3>
                  <p className="portfolio__description">
                    A Microservices-based platform for managing IoT devices, providing real-time monitoring, device configuration, and data analytics.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

              {/*==================== PORTFOLIO 14 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/default.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">API WhatsApp Service</h3>
                  <p className="portfolio__description">
                    A Microservices-based API service that integrates with WhatsApp to provide automated messaging, notifications, and customer support features.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>

            </div>

            {/* Add arrows */}
            <div className="swiper-button-next">
              <i className="" />
            </div>
            <div className="swiper-button-prev">
              <i className="" />
            </div>
            {/* Add Pagination */}
            <div className="swiper-pagination" />
          </div>
        </section>
        {/*==================== PROJECT IN MIND ====================*/}
        <section className="project section">
          <div className="project__bg">
            <div className="project__container container grid">
              <div className="project__data">
                <h2 className="project__title">You have a new project?</h2>
                <p className="project__description">
                  Contact me now and get discounts on your Web development projects.
                </p>
                <a href="#contact" className="button button--flex button--white">
                  Contact me
                  <i className="uil uil-message project__icon button__icon" />
                </a>
              </div>
              {/* <img src="assets/img/project.png" alt="" class="project__img"> */}
            </div>
          </div>
        </section>
        {/* <section className="testimonial section">
          <h2 className="section__title">Testimonials</h2>
          <span className="section__subtitle">My client saying</span>
          <div className="testimonial__container container swiper-container">
            <div className="swiper-wrapper">
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src="/packages/images/arun.PNG"
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">Arun Prashanth</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                  </div>
                </div>
                <p className="testimonial__description">
                  I get a good impression, I carry out my project with all the
                  possible quality and attention and support 24 hours a day.
                </p>
              </div>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src="/packages/images/yuga.PNG"
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">Yugadarshan</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                  </div>
                </div>
                <p className="testimonial__description">
                  I get a good impression, I carry out my project with all the
                  possible quality and attention and support 24 hours a day.
                </p>
              </div>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src="/packages/images/shenan.PNG"
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">Shenan Sachinthan</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                  </div>
                </div>
                <p className="testimonial__description">
                  I get a good impression, I carry out my project with all the
                  possible quality and attention and support 24 hours a day.
                </p>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-testimonial" />
          </div>
        </section> */}
        {/*==================== CONTACT ME ====================*/}
        <section className="contact section" id="contact">
          <h2 className="section__title">Contact me</h2>
          <span className="section__subtitle">Get in touch</span>
          <div className="contact__container container grid">
            <div>
              <div className="contact__information">
                <i className="uil uil-phone-alt contact__icon" />
                <div>
                  <h3 className="contact__title">Call me</h3>
                  <span className="contatc__subtitle">(+62) 81392396892</span>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-envelope contact__icon" />
                <div>
                  <h3 className="contact__title">E-mail</h3>
                  <span className="contatc__subtitle">anandadimmas1204@gmail.com</span>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-map-marker contact__icon" />
                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contatc__subtitle">Blora, Jawa Tengah</span>
                </div>
              </div>
            </div>
            <form action="" className="contact__form grid">
              <div className="contact__inputs grid">
                <div className="contact__content">
                  <label htmlFor="" className="contact__label">
                    Name
                  </label>
                  <input type="text" className="contact__input" />
                </div>
                <div className="contact__content">
                  <label htmlFor="" className="contact__label">
                    E-mail
                  </label>
                  <input type="email" className="contact__input" />
                </div>
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Subject
                </label>
                <input type="text" className="contact__input" />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  cols={0}
                  rows={7}
                  className="contact__input"
                  defaultValue={""}
                />
              </div>
              <div>
                <a href="#" className="button button--flex">
                  Send message
                  <i className="uil uil-message button__icon" />
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
      {/*==================== FOOTER ====================*/}
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">ANANDA DIMMAS BUDIARTO</h1>
              <span className="footer__subtitle">FULL STACK WEB DEVELOPER, BACK END DEVELOPER AND DEVOPS</span>
            </div>
            <ul className="footer__links">
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="footer__socials">
              {/* <a
                href='https://www.facebook.com/prashanna.drashan"'
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-facebook" />
              </a> */}
              <a
                href="https://www.instagram.com/sebelumcahaaya/"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-instagram" />
              </a>
              {/* <a
                href="https://twitter.com/prashanna01"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-twitter-alt" />
              </a> */}
            </div>
          </div>
          <p className="footer__copy">© ANANDA DIMMAS BUDIARTO. All rights reserved.</p>
        </div>
      </footer>
      {/*==================== SCROLL TOP ====================*/}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon" />
      </a>
    </>
  );
}
