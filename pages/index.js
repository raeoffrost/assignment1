import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Btn from "@/components/Btn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>  
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        <main className={styles.main}>
          <Btn
          text = "test"
          btntype = "default"
          />
          <Btn
          text = "test"
          btntype = "delete"
          />
          <Btn
          text = "test"
          btntype = "nav"
          />
        </main>
        <footer className={styles.footer}>
        </footer>
      </div>
    </>
  );
}
