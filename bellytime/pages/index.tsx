import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import { Link } from "components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/memberPage">로그인 및 회원가입</Link>
      <Link href="/check">체크</Link>

    </div>
  );
};

export default Home;
