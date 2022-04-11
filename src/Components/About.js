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
						Hi, my name is Ryan and I am just putting some words in here so that
						I can see what all of this looks like on my page.
					</p>
				</div>
			</div>
		</>
	)
}

export default About
