import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";
import styles from "../styles/Contact.module.css";
import { BASE_API_URL } from "@/utils/constant";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${BASE_API_URL}/api/postcontact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        //Reset the form after submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
        });

        enqueueSnackbar("Success", {
          autoHideDuration: 3000,
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar("An error occured", {
          autoHideDuration: 3000,
          variant: "error",
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
        });
        console.error("Error:", error.message);
      });
  };

  return (
    <div>
      <h1 className={styles.head}>Contact us:</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.label}>
          Email:
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.label}>
          Phone:
          <input
            className={styles.input}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.label}>
          Description:
          <textarea
            className={styles.textarea}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
