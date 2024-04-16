import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import {
  faGithub,
  faDiscord,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Home = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/players">NBA Center</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to SportsTracker</h1>
            <p>Your ultimate destination for all things sports!</p>
          </div>
        </section>
        <section className="featured">
          <h2>Latest News</h2>
          <div className="featured-news">
            <div className="news-card">
              <img
                src="https://th.bing.com/th/id/OIF.5YtYwgyNUBWC1BCxzWKglQ?rs=1&pid=ImgDetMain"
                alt="Featured News 1"
              />
              <h3>Baseball</h3>
              <p>
                Shohei Ohtani interpreter scandal explained: Everything we know
                as prosecutors say Ippei Mizuhara stole $16M
              </p>
            </div>
            <div className="news-card">
              <img
                src="https://sportshub.cbsistatic.com/i/r/2024/04/15/e01764a3-bc46-4b1d-9eee-388f5006a511/thumbnail/770x433/363f02f244469dd45208c82eb29b3bca/untitled-design-19.png"
                alt="Featured News 2"
              />
              <h3>Olympic Basketball</h3>
              <p>
                Team USA finalizes roster: LeBron James, Stephen Curry
                reportedly lead Olympic team, but one spot remains open
              </p>
            </div>
            <div className="news-card">
              <img
                src="https://sportshub.cbsistatic.com/i/r/2024/04/15/2df024ad-18be-4103-afa0-67e03ddaace4/thumbnail/770x433/edaceba674e8d1f8c17ca2c07c34e843/max-holloway-bmf-celebrate.jpg"
                alt="Featured News 3"
              />
              <h3>UFC</h3>
              <p>
                Last-second finishes in UFC history: Where Max Holloway's
                stunning KO ranks among the five latest stoppages
              </p>
            </div>
            <div className="news-card">
              <img
                src="https://sportshub.cbsistatic.com/i/r/2024/04/15/acb5ebfd-b1d5-46c0-a92d-99cd134432b1/thumbnail/770x433/fb850d07561f43fb3546a77f35543074/mccarthy-harbaugh-g.jpg"
                alt="Featured News 4"
              />
              <h3>NFL Draft</h3>
              <p>
                2024 NFL Draft: JJ McCarthy a top-five pick, Falcons trade down
                and more reading of betting market tea leaves
              </p>
            </div>
            <div className="news-card">
              <img
                src="https://sportshub.cbsistatic.com/i/r/2024/04/05/47c84e3e-a3f2-4ab9-b405-c51bd2d69d25/thumbnail/770x433/9e20f8bf81c16761cd5d5e35529fa169/gettyimages-2131315751-1-1.jpg"
                alt="Featured News 5"
              />
              <h3>WNBA Draft</h3>
              <p>
                2024 WNBA Draft: First-round grades, full results as Caitlin
                Clark goes No. 1 to Indiana Fever
              </p>
            </div>
            <div className="news-card">
              <img
                src="https://sportshub.cbsistatic.com/i/r/2023/07/10/d37513ab-4851-493d-be4a-d968d12d066d/thumbnail/770x433/7c5ecacd7865ebff6191ad077ba34be2/xander.jpg"
                alt="Featured News 6"
              />
              <h3>PGA</h3>
              <p>
                2024 RBC Heritage odds, field: Surprising PGA picks, predictions
                from proven model that's nailed 11 majors
              </p>
            </div>
          </div>
        </section>
        <section className="calendar">
          <h2 class="calendar-events-header">Upcoming Events</h2>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: "Basketball Game", date: "2024-04-20" },
              { title: "Soccer Match", date: "2024-04-22" },
              { title: "Tennis Tournament", date: "2024-04-25" },
              // Add more events as needed
            ]}
          />
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-item">
              <h3>About Me</h3>
              <p>
                My name is Bailey I am a computer science major at ETSU, Ive
                been interested in coding for about two years now and look
                forward to see where it takes me in my life.
              </p>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-item">
              <h3>Contact Us</h3>
              <p>Email: wilsonbailey88@gmail.com</p>
              <p>Phone: (423) 440-7430</p>
              <div className="copyright">
                <p>&copy; 2024 SportsHub. All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-item">
              <div className="follow-section">
                <h3>Follow Me</h3>
                <div className="social-icons">
                  <a
                    href="https://github.com/Wilson-Bailey"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
                  <a
                    href="https://discord.com/invite/your-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faDiscord} className="icon" />
                  </a>
                  <a
                    href="https://twitter.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                  </a>
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
