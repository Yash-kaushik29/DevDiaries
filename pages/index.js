import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dev-diaries-rho.vercel.app/api/blogs");
        let data = await response.json();
        data = data.slice(0, 5);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>DevDiaries</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/favicon.ico"></link>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.sign}>
          <h1>DevDiaries</h1>
        </div>

        <div className={styles.image}>
          <Image src="/homeimg.png" width={250} height={180} />
        </div>

        <div className={styles.container}>
          <p className={styles.typed}>
            A blog for coders by a hunting coder...
          </p>
        </div>

        <div className={styles.blogs}>
          <h2>Popular blogs</h2>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.blogItem}>
              <h3>{blog.title}</h3>
              <p>
                {blog.description.substr(0, 150)}...
                <Link href={`blogpost/${blog.slug}`}>
                  <button className={styles.button}>Read More</button>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
