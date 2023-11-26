import { useState } from "react";
import DensityMediumTwoToneIcon from "@mui/icons-material/DensityMediumTwoTone";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Heart from "../assets/images/heart.svg";
import Shop from "../assets/images/shop.svg";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navToggle = () => {
    setIsNavOpen(!isNavOpen);
    document.getElementById("headerUl").classList.toggle("_active");
    document.getElementById("headerBackdrop").classList.toggle("_active");
    document.getElementById("header-burger").classList.toggle("_active");
    document.body.classList.toggle("no-scroll");
  };

  return (
    <>
      <header className={`header ${isNavOpen ? "header--open" : ""}`}>
        <a href="#" className="header__logo">
          <img src={Logo} alt="Logo" className="header__img-logo" />
        </a>

        <nav className="header__nav">
          <div
            className={`header__backdrop ${isNavOpen ? "_active" : ""}`}
            onClick={navToggle}
          ></div>

          <ul className={`header__ul ${isNavOpen ? "_active" : ""}`}>
            <ClearTwoToneIcon id="header-close" onClick={navToggle} />

            <li className="header__li">
              <a href="#" className="header__a _active">
                home
              </a>
            </li>
            <li className="header__li">
              <a href="#" className="header__a">
                Shop
              </a>
            </li>
            <li className="header__li">
              <a href="#" className="header__a">
                blog
              </a>
            </li>
            <li className="header__li">
              <a href="#" className="header__a">
                Sale
              </a>
            </li>
            <li className="header__li">
              <a href="#" className="header__a">
                contact us
              </a>
            </li>

            <li className="header__li search-li">
              <div className="header__li-search">
                <img src={Search} alt="search" className="header__li-img" />
              </div>

              <a href="#" className="header__a">
                search
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__info">
          <DensityMediumTwoToneIcon id="header-burger" onClick={navToggle} />
          <div className="header__reg">
            <ul className="header__ul-reg">
              <li className="header__li">
                <a href="#" className="header__a a-reg">
                  SIGN IN
                </a>
              </li>

              <li className="header__li">
                <a href="#" className="header__a a-reg">
                  CREATE AN ACCOUNT
                </a>
              </li>
            </ul>
          </div>

          <div className="header__icons">
            <div className="header__like">
              <img src={Heart} alt="like" className="header__like-img" />
            </div>
            <div className="header__shop">
              <img src={Shop} alt="shop" className="header__shop-img" />
            </div>
          </div>

          <div className="header__total">
            <div className="header__info-title">Shopping Cart</div>
            <div className="header__price">0,00 EUR</div>
          </div>
        </div>
      </header>
    </>
  );
};
