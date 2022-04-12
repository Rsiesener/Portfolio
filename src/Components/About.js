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
						Hi, my name is Ryan and I am a junior full stack software engineer.
						I started out my professional career as a paramedic but discovered
						my passion for web and application development when I found myself
						frustrated at the software applications we used to manage critical
						lifesaving functions.
					</p>
				</div>
			</div>
		</>
	)
}

export default About
