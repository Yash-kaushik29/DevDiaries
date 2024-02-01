import React from "react";
import Link from 'next/link';
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h2>About Us</h2>
      <p>
        Welcome to our blog! We are passionate about sharing valuable content
        and insights with our readers. Whether you're a seasoned reader or a new
        visitor, we aim to provide engaging and informative articles on a
        variety of topics.
      </p>
      <p>
        Our team of writers is dedicated to delivering high-quality and
        up-to-date content that caters to a diverse audience. From technology
        and science to lifestyle and travel, we cover a wide range of subjects
        to keep you informed and entertained.
      </p>
      <p>
        Feel free to explore our blog and discover interesting stories, helpful
        tips, and thought-provoking discussions. Thank you for being a part of
        our community!
      </p>
      <div className={styles.sep}></div>
      <h2>Services Offered</h2>
      <p>We offer the following services</p>
      <ul>
        <li>
          Regularly publishing high-quality and informative blog posts on
          various topics of interest.
        </li>
        <li>
          Offering educational resources such as tutorials, guides, and ebooks
          related to the blog's niche.
        </li>
        <li>
          Reviewing products or services related to the blog's niche and
          providing valuable insights to the audience.
        </li>
        <li>
          Partnering with relevant companies and promoting their products or
          services through affiliate marketing.
        </li>
      </ul>

      <div className={styles.sep}></div>
      <h2>Contact us</h2>
      <p>You can always share your queries with us : </p>

      <Link href='/contact'><button className={styles.button} type="submit">
        Contact us
      </button></Link>
    </div>
  );
};

export default About;
