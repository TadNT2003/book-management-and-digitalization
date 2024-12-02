import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebarContainer}>
        <Sidebar/>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <Header/>
        </div>
      </div>
    </main>
  );
}
