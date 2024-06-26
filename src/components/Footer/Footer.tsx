import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";
import styles from "./Footer.module.scss";
import logoPlaceholder from "../../assets/images/tsume_logo_placeholder_salmon.png";
import facebook from "../../assets/images/social_facebook_salmon.png";
import instagram from "../../assets/images/social_instagram_salmon.png";
import tiktok from "../../assets/images/social_tiktok_salmon.png";
import twitter from "../../assets/images/social_twitter_salmon.png";
import FooterNavbar from "../FooterNavbar";
import { FACEBOOK, INSTAGRAM, TIKTOK, TWITTER } from "../../constants/links";

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.container}>
            <div className={styles.footerLogoAndNavbar}>
                <Link to={HOME}>
                    <img src={logoPlaceholder} alt="Tsume" className={styles.tsumeLogo} data-testid="logo-home" />
                </Link>
                <FooterNavbar />
            </div>
            <div className={styles.social}>
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" data-testid="facebook-link">
                    <img src={facebook} alt="Social Tsume Facebook" />
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" data-testid="instagram-link">
                    <img src={instagram} alt="Social Tsume Instagram" />
                </a>
                <a href={TIKTOK} target="_blank" rel="noopener noreferrer" data-testid="tiktok-link">
                    <img src={tiktok} alt="Social Tsume TikTok" />
                </a>
                <a href={TWITTER} target="_blank" rel="noopener noreferrer" data-testid="twitter-link">
                    <img src={twitter} alt="Social Tsume Twitter" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
