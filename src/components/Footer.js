import React from 'react';
import Link from 'gatsby-link';

const Footer = ({ social }) => (
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="widget-area">
            <div className="widget widget_text">
              <p>
                <Link to="/" className="mini-logo">
                  <img
                    src="/img/zeiq-logo-offblack.png"
                    width="144"
                    height="43"
                    alt="zeiq"
                  />
                </Link>
              </p>
            </div>
            <div className="widget widget_nav_menu">
              <nav>
                <ul>
                  <li>
                    <a href={social.facebookId} target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href={social.twitterId} target="_blank">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href={social.linkedInId} target="_blank">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={social.instagramId} target="_blank">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href={social.mediumId} target="_blank">
                      Medium
                    </a>
                  </li>
                  <li>
                    <a href={social.githubId} target="_blank">
                      Github
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
