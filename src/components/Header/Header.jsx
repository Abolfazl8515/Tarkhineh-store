import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-around items-center h-28">
      <div className="w-2/3 flex justify-around items-center">
        <div>
          <img src="src/assets/logo.svg" alt="logo" />
        </div>
        <nav className="flex">
          <ul className="flex items-center">
            <li className="mx-2 text-gray-color font-estedad">
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
            <li className="flex font-estedad text-gray-color mx-3">
              <div className="w-10 flex justify-between items-center">
                <p>شعبه</p>
                <img src="src/assets/icons/arrowDown.svg" alt="menu logo" />
              </div>
            </li>
            <li className="flex font-estedad text-gray-color mx-3">
              <div className="w-10 flex justify-between items-center">
                <p>منو</p>
                <img src="src/assets/icons/arrowDown.svg" alt="menu logo" />
              </div>
            </li>
            <li className="flex font-estedad text-gray-color mx-2">
              <NavLink
                to="/namayandegi"
                className={(navData) =>
                  navData.isActive
                    ? "border-b border-solid border-b-green-primary text-green-primary text-xl font-bold"
                    : ""
                }
              >
                اعطای نمایندگی
              </NavLink>
            </li>
            <li className="flex font-estedad text-gray-color mx-2">
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
            <li className="flex font-estedad text-gray-color mx-2">
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
      <div className="flex justify-around items-center">
        <Link to="/">
          <img src="src/assets/icons/search.svg" alt="search icon" />
        </Link>
        <Link to="/" className="mx-4">
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
