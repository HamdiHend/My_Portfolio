import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";



export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hend</h1>
        <p className={styles.description}>
         I am currently pursuing a Master’s in Open <br/>Source Software Engineering ,  frontend developer and UI/UX desginer.<br/><br/>Reach out if you'd like to learn more!
        </p>
       
     
       <a href="/Mon_Cv.pdf" className={styles.contactBtn} download="Mon_Cv.pdf">
    Download My Cv
</a>
       
        
      </div>
      <img
        src={getImageUrl("hero/hend.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
