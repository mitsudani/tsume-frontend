import { NavLink } from "react-router-dom";
import { CONTACT, FAQ, HOME, TERMS_OF_USE } from "../../constants/routes";
import styles from "./FooterNavbar.module.scss";

const FooterNavbar = (): JSX.Element => {
    return (
        <nav className={styles.container} data-testid="navbar">
            <ul>
                <li>
                    <NavLink
                        to={HOME}
                        className={({ isActive }) => (isActive ? "styles.activeLink" : "")}
                        data-testid="footer-navbar-home-link"
                    >
                        Home
                    </NavLink>
                </li>
                <li className={styles.separator}>|</li>
                <li>
                    <NavLink
                        to={FAQ}
                        className={({ isActive }) => (isActive ? "styles.activeLink" : "")}
                        data-testid="footer-navbar-faq-link"
                    >
                        FAQs
                    </NavLink>
                </li>
                <li className={styles.separator}>|</li>
                <li>
                    <NavLink
                        to={TERMS_OF_USE}
                        className={({ isActive }) => (isActive ? "styles.activeLink" : "")}
                        data-testid="footer-navbar-terms-link"
                    >
                        Terms of Use
                    </NavLink>
                </li>
                <li className={styles.separator}>|</li>
                <li>
                    <NavLink
                        to={CONTACT}
                        className={({ isActive }) => (isActive ? "styles.activeLink" : "")}
                        data-testid="footer-navbar-contact-link"
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default FooterNavbar;
