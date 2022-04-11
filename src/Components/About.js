import React from 'react'
import styles from '../Styles/About.module.css'

const About = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.picContainer}>
					<div className={styles.picture}></div>
				</div>
				<div className={styles.about}>
					<h1 className={styles.title}>
						Full-stack <br></br> Software <br></br> Developer
					</h1>
					<p>
						changed
					</p>
				</div>
			</div>
		</>
	)
}

export default About
