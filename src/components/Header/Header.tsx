import { Link } from "react-router-dom";
import { HOME, LOGIN } from "../../constants/routes";
import styles from "./Header.module.scss";
import logoPlaceholder from "../../assets/images/tsume_logo_placeholder.png";
import padlock from "../../assets/images/padlock_white.png";
import HeaderNavbar from "../HeaderNavbar";
import LinkComponent, { LinkVariant } from "../Link";
import Button from "../Button";

const Header = (): JSX.Element => {
  return (
    <header className={styles.container}>
      <div className={styles.logoAndNavbar}>
        <Link to={HOME}>
          <img
            src={logoPlaceholder}
            alt="Tsume"
            className={styles.tsumeLogo}
            data-testid="logo-home-link"
          />
        </Link>
        <HeaderNavbar />
      </div>
      <div className={styles.buttons}>
        <LinkComponent to={LOGIN} variant={LinkVariant.Primary}>
          <img src={padlock} alt="padlock" className={styles.padlock} />
          Login
        </LinkComponent>
        <div className={styles.separator}>|</div>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
