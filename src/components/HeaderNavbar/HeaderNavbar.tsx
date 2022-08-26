import { NavLink } from "react-router-dom";
import { HOME, HOW_IT_WORKS } from "../../constants/routes";
import styles from "./HeaderNavbar.module.scss";

const HeaderNavbar = (): JSX.Element => {
  return (
    <nav className={styles.container} data-testid="navbar">
      <ul>
        <li>
          <NavLink
            to={HOME}
            className={({ isActive }) => (isActive ? "styles.activeLink" : "")}
            data-testid="header-navbar-home-link"
          >
            HOME
          </NavLink>
        </li>
        <li className={styles.separator}>|</li>
        <li>
          <NavLink
            to={HOW_IT_WORKS}
            className={({ isActive }) => (isActive ? "styles.activeLink" : "")}
            data-testid="header-navbar-howItWorks-link"
          >
            HOW IT WORKS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
