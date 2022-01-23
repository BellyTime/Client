import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card } from "@/components/Card";
import "tailwindcss/tailwind.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Card variant={"elevation"} >
      <footer className={styles.footer}>sd</footer>
      <img
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />{" "}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Card>
    </div>
  );
};

export default Home;
