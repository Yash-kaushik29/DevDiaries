import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div className={styles.main}>
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className={styles.blogItem}>
            <h3>{blog.title}</h3>
            <p>
              {blog.description.substr(0, 150)}...{" "}
              <Link href={`blogpost/${blog.slug}`}>
                <button className={styles.button}>Read More</button>
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs },
  };
}

export default Blog;
