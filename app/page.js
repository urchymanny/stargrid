import Image from "next/image";
import styles from "./page.module.css";
import StarGrid from "./ui/stargrid/stargrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <StarGrid />
    </main>
  );
}
