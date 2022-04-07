import React from 'react'
import styles from '../Styles/Banner.module.css'

const Banner = () => {

  const scrollToBottom = () => window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  })

	return (
		<>
			<div className={styles.container}>
				<div className={styles.navContainer}>
					<div className={styles.nav}>
						<button className={styles.hireMe} onClick={scrollToBottom}>Hire Me</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Banner
