import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-full flex justify-between items-center h-28 sticky top-0 z-50 bg-white">
      <div className="sm:w-2/3 md:w-4/5 w-full flex lg:flex-row justify-around flex-row-reverse items-center">
        <div className="flex justify-center items-center">
          <img
            src="src/assets/logo.svg"
            className="w-2/3 h-2/3 md:w-auto md:h-auto"
            alt="logo"
          />
        </div>
        <div className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
          <img
            src="src/assets/icons/hamburgerMenu.svg"
            alt="hamburgerMenu icon"
          />
        </div>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } bg-background-black w-full h-screen z-10 absolute top-0 left-0 lg:hidden`}
          onClick={() => setShowMenu(false)}
        ></div>
        <nav
          className={`lg:flex ${
            showMenu ? "flex" : "hidden"
          } lg:w-auto lg:h-auto w-2/3 animate-menu h-screen justify-center absolute right-0 top-0 lg:static bg-white z-20`}
        >
          <ul className="flex lg:flex-row flex-col items-center">
            <li className="lg:mx-2 my-4 lg:my-0 text-gray-color font-estedad">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive
                    ? "border-b border-solid border-b-green-primary text-green-primary text-xl font-bold"
                    : ""
                }
              >
                صفحه اصلی
              </NavLink>
            </li>
            <li className="flex font-estedad text-gray-color mx-3 my-4 lg:my-0">
              <div className="w-10 flex justify-between items-center">
                <p>شعبه</p>
                <img src="src/assets/icons/arrowDown.svg" alt="menu logo" />
              </div>
            </li>
            <li className="flex font-estedad text-gray-color mx-3 my-4 lg:my-0">
              <div className="w-10 flex justify-between items-center">
                <p>منو</p>
                <img src="src/assets/icons/arrowDown.svg" alt="menu logo" />
              </div>
            </li>
            <li className="flex font-estedad text-gray-color mx-2 my-4 lg:my-0">
              <NavLink
                to="/namayandegi"
                className={(navData) =>
                  navData.isActive
                    ? "border-b border-solid my-4 lg:my-0 border-b-green-primary text-green-primary text-xl font-bold"
                    : ""
                }
              >
                اعطای نمایندگی
              </NavLink>
            </li>
            <li className="flex font-estedad text-gray-color mx-2 my-4 lg:my-0">
              <NavLink
                to="/about-us"
                className={(navData) =>
                  navData.isActive
                    ? "border-b border-solid border-b-green-primary text-green-primary text-xl font-bold"
                    : ""
                }
              >
                درباره ما
              </NavLink>
            </li>
            <li className="flex font-estedad text-gray-color mx-2 my-4 lg:my-0">
              <NavLink
                to="/contact-us"
                className={(navData) =>
                  navData.isActive
                    ? "border-b border-solid border-b-green-primary text-green-primary text-xl font-bold"
                    : ""
                }
              >
                تماس با ما
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center w-1/3 justify-center">
        <Link to="/" className="hidden lg:block">
          <img src="src/assets/icons/search.svg" alt="search icon" />
        </Link>
        <Link to="/" className="md:mx-4">
          <img src="src/assets/icons/cart.svg" alt="cart icon" />
        </Link>
        <Link to="/">
          <img src="src/assets/icons/user.svg" alt="user icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
