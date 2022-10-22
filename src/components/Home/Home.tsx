import styles from "./Home.module.scss";
import LinkComponent, { LinkVariant } from "../Link";
import { LOGIN } from "../../constants/routes";

const Home = (): JSX.Element => {
    return (
        <main className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>Tsume</h1>
                <h2>
                    The complete <span>tracker</span> <br />
                    for <span>nail artists</span>
                </h2>
            </div>
            <div className={styles.line}></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
            <LinkComponent to={LOGIN} variant={LinkVariant.ButtonPrimary} data-testid="get-started-link">
                Get Started
            </LinkComponent>
            <div className={styles.backgroundLeft}>
                <span className={styles.circleLilacLeft1}></span>
                <span className={styles.circleLilacLeft2}></span>
                <span className={styles.circleLilacLeft3}></span>
                <span className={styles.circleLilacLeft4}></span>
                <span className={styles.circleLilacLeft5}></span>
                <span className={styles.circleWhiteLeft1}></span>
                <span className={styles.circleWhiteLeft2}></span>
                <span className={styles.circleWhiteLeft3}></span>
                <span className={styles.circleWhiteLeft4}></span>
                <span className={styles.circleWhiteLeft5}></span>
                <span className={styles.circleWhiteLeft6}></span>
                <span className={styles.circleWhiteLeft7}></span>
            </div>
            <div className={styles.backgroundRight}>
                <span className={styles.circleLilacRight1}></span>
                <span className={styles.circleLilac2}></span>
                <span className={styles.circleLilac3}></span>
                <span className={styles.circleWhite1}></span>
                <span className={styles.circleWhite2}></span>
                <span className={styles.circleWhite3}></span>
                <span className={styles.circleWhite4}></span>
                <span className={styles.circleWhite5}></span>
            </div>
        </main>
    );
};

export default Home;
