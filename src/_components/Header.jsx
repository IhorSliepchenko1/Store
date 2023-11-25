import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Heart from "../assets/images/heart.svg";
import Shop from "../assets/images/shop.svg";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={Logo} alt="Logo" className="header__img-logo" />
        </div>

        <nav className="header__nav">
          <ul className="header__ul">
            <a href="#" className="header__a _active">
              home
            </a>
          </ul>
          <ul className="header__ul">
            <a href="#" className="header__a">
              Shop
            </a>
          </ul>
          <ul className="header__ul">
            <a href="#" className="header__a">
              blog
            </a>
          </ul>
          <ul className="header__ul">
            <a href="#" className="header__a">
              Sale
            </a>
          </ul>
          <ul className="header__ul">
            <a href="#" className="header__a">
              contact us
            </a>
          </ul>
          <ul className="header__ul">
            <div className="header__ul-search">
              <img src={Search} alt="search" className="header__ul-img" />
            </div>
            <a href="#" className="header__a">
              search
            </a>
          </ul>
        </nav>

        <div className="header__info">
          <div className="header__reg">
            <ul className="header__ul-reg">
              <li className="header__li">
                <a href="#" className="header__a">
                  SIGN IN
                </a>
              </li>

              <li className="header__li">
                <a href="#" className="header__a">
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
