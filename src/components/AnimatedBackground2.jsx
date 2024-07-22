import React from 'react'
import styles from "./AnimatedBackground2.module.css"
export default function AnimatedBackground2({ bg = undefined }) {
  return (
    <div className={styles.outer}>
        <div className={`${styles.hero} ${!bg ? styles.has_bg : ""}`} style={!!bg ? {backgroundColor: bg} : {}}> 
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        </div>
    </div>
  )
}
