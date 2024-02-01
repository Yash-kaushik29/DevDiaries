import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <div>
      <style jsx>
        {`
          .list li{
            font-weight: 600;
            font-family: sans-serif;
          }
        `}
      </style>
      <nav className={styles.navbar}>
      <ul className="list">
        <Link href="/" scroll={false}>
          <li>Home</li>
        </Link>
        <Link href="/about" scroll={false}>
          <li>About</li>
        </Link>
        <Link href="/contact" scroll={false}>
          <li>Contact</li>
        </Link>
        <Link href="/blog" scroll={false}>
          <li>Blogs</li>
        </Link>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
