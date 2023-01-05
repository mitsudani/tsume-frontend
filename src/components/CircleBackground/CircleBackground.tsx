import styles from "./CircleBackground.module.scss";

const CircleBackground = (): JSX.Element => {
    return (
        <>
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
                <span className={styles.circleLilacRight2}></span>
                <span className={styles.circleLilacRight3}></span>
                <span className={styles.circleWhiteRight1}></span>
                <span className={styles.circleWhiteRight2}></span>
                <span className={styles.circleWhiteRight3}></span>
                <span className={styles.circleWhiteRight4}></span>
                <span className={styles.circleWhiteRight5}></span>
            </div>
        </>
    );
};

export default CircleBackground;
