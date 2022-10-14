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
        </main>
    );
};

export default Home;
