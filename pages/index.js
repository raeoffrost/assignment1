import React from "react";
import styles from "@/styles/Home.module.css";
import Howto from "@/components/Howto";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";

// Default template fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//
const Home = () => {
  return (
    <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
      <h1>
        Individual Assignment 1: <br />
        To-Do List
      </h1>
      <Nav />
      <Howto />
    </div>
  );
};

export default Home;
