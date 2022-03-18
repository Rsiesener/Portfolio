import React from 'react'
import styles from '../Styles/Banner.module.css'

const Banner = () => {
	return (
		<>
			<div className={styles.container}>
        <div className={styles.banner}>

        </div>
        <div className={styles.nav}>
          <button className={styles.aboutMe}>About Me</button>
          <button className={styles.contactInfo}>Contact Info</button>
          <button className={styles.resume}>Resume</button>
          <button className={styles.projects}>Projects</button>

        </div>
      </div>
		</>
	)
}

export default Banner
