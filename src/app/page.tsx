import Image from "next/image";
import styles from "./page.module.css";
import SpiralGuy from "@/lib/guys/landing-page/components/spiral-guy/SpiralGuy";
import LandingPage from "@/lib/guys/landing-page/LandingPage";

export default function Home() {
  return (
    <div className={styles.page}>
      <LandingPage />
    </div>
  );
}
