import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
         <div>Email : testuser@gmail.com</div>
         <div>Contact : +9199XXXX89.</div>
      </div>
      <div>©2023 authuser. All rights reserved.</div>
    </div>
  )
}

export default Footer;