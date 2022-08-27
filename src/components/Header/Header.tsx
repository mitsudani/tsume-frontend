import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";
import styles from "./Header.module.scss";
import logoPlaceholder from "../../assets/images/tsume_logo_placeholder.png";
import HeaderNavbar from "../HeaderNavbar";
import LinkComponent from "../Link";
import Button from "../Button";

const Header = (): JSX.Element => {
  return (
    <header>
      <Link to={HOME}>
        <img src={logoPlaceholder} alt="Tsume" data-testid="logo-home-link" />
      </Link>
      <HeaderNavbar />;
    </header>
  );
};

export default Header;
