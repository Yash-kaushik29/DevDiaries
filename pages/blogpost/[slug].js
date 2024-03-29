import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import { BASE_API_URL } from "@/utils/constant";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>{blog && blog.title}</h1>
        <div className={styles.separator}></div>
        <div className={styles.content}>
          {blog && blog.description}
          </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {

  const { slug } = context.query;

  let data = await fetch(`${BASE_API_URL}/api/getBlog?slug=${slug}`);
  let myBlog = await data.json();
  
  return {
    props: {myBlog},
  }
}

export default Slug;
