import styles from "./page.module.css";
import CapstoneGenerator from "./views/CapstoneGenerator";

export default function Home() {
  return (
    <main className={styles.main}>
      <CapstoneGenerator/>
    </main>
  );
}
