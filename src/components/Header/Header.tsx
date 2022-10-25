import { Link } from "react-router-dom";
import { HOME, LOGIN } from "../../constants/routes";
import styles from "./Header.module.scss";
import logoPlaceholder from "../../assets/images/tsume_logo_placeholder.png";
import HeaderNavbar from "../HeaderNavbar";
import LinkComponent, { LinkVariant } from "../Link";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";

const Header = (): JSX.Element => {
    return (
        <header className={styles.container}>
            <div className={styles.logoAndNavbar}>
                <Link to={HOME} data-testid="header-home-link">
                    <img src={logoPlaceholder} alt="Tsume" className={styles.tsumeLogo} data-testid="logo-home-link" />
                </Link>
                <HeaderNavbar />
            </div>
            <div className={styles.buttons}>
                <LinkComponent to={LOGIN} variant={LinkVariant.Primary} data-testid="header-login-link">
                    <FontAwesomeIcon icon={faUserLock as IconProp} aria-hidden="true" /> Login
                </LinkComponent>
                <div className={styles.separator}>|</div>
                <Button data-testid="header-signup-btn">Sign Up</Button>
            </div>
        </header>
    );
};

export default Header;
