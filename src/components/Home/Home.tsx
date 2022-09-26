import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = (): JSX.Element => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Tsume</h1>
        <div>
          <p>The complete tracker</p>
          <p>for nail artists</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
