import { useEffect } from "react";

import Logo from "../assets/images/logo.svg";
import Facebook from "../assets/images/facebook.svg";
import Twitter from "../assets/images/twitter.svg";
import Instagram from "../assets/images/instagram.svg";

export const Footer = () => {
  useEffect(() => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-main">
          <a href="#" className="footer__logo">
            <img src={Logo} alt="Logo" className="footer__img-logo" />
          </a>

          <div className="footer__features">
            <h2 className="footer__title">features</h2>
            <ul className="footer__ul">
              <li className="footer__li">
                <a href="#" className="footer__a">
                  men
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  Women
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  boys
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  girls
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  new arrivals
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  shoes
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  cothes
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  accessories
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__menu">
            <h2 className="footer__title">Menu</h2>
            <ul className="footer__ul">
              <li className="footer__li">
                <a href="#" className="footer__a">
                  About us
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  contact us
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  my account
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  orders history
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  MY WISHLIST
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  BLOG
                </a>
              </li>
              <li className="footer__li">
                <a href="#" className="footer__a">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h2 className="footer__title">contact us</h2>

            <div className="footer__data">
              <div className="footer__data-slot">
                <p className="footer__data-title">Address:</p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps"
                  className="footer__data-a"
                >
                  123 STREET NAME, CITY, ENGLAND
                </a>
              </div>
              <div className="footer__data-slot">
                <p className="footer__data-title">Phone:</p>
                <a className="footer__data-a" href="tel:1234567890">
                  (123) 456-7890
                </a>
              </div>

              <div className="footer__data-slot">
                <p className="footer__data-title">email:</p>
                <a
                  className="footer__data-a"
                  href="mailto:MAIL@EXAMPLE.COM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MAIL@EXAMPLE.COM
                </a>
              </div>

              <div className="footer__data-slot">
                <p className="footer__data-title">working days/hours</p>
                <p className="footer__work-days">MON - SUN / 9:00AM - 8:00PM</p>
              </div>
            </div>
          </div>

          <div className="footer__follow">
            <h2 className="footer__title">follow us</h2>
            <div className="footer__socials">
              <div className="footer__socials-slot">
                <a
                  className="footer__image"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/"
                >
                  <img src={Facebook} alt="Facebook" />
                </a>

                <a
                  className="footer__socials-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/"
                >
                  Facebook
                </a>
              </div>

              <div className="footer__socials-slot">
                <a
                  className="footer__image"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/?lang=ru"
                >
                  <img src={Twitter} alt="Twitter" />
                </a>

                <a
                  className="footer__socials-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/?lang=ru"
                >
                  Twitter
                </a>
              </div>

              <div className="footer__socials-slot">
                <a
                  className="footer__image"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/"
                >
                  <img src={Instagram} alt="Twitter" />
                </a>

                <a
                  className="footer__socials-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="footer__join">
            <h2 className="footer__title">join us</h2>
            <p className="footer__desc">Subscribe to our newsletters</p>
            <div className="footer__sibscribe">
              <input
                className="footer__input"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />

              <button className="footer__btn">Subscribe!</button>
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          © <span id="year"></span>. Crisp theme Developed by Belvg
        </div>
      </footer>
    </>
  );
};
