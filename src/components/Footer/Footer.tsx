import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";
import styles from "./Header.module.scss";
import logoPlaceholder from "../../assets/images/tsume_logo_placeholder_salmon.png";
import FooterNavbar from "../FooterNavbar";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerLogoAndNavbar}>
        <Link to={HOME}>
          <img
            src={logoPlaceholder}
            alt="Tsume"
            className={styles.tsumeLogo}
            data-testid="logo-home-link"
          />
        </Link>
        <FooterNavbar />
      </div>
    </footer>
  );
};

export default Footer;
