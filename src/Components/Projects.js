import React from 'react'
import styles from '../Styles/Projects.module.css'

const Projects = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<h1>Projects</h1>
				</div>
				<div className={styles.rowOne}>
					<a
						href='https://musicflix.github.io/project-frontend/'
						className={styles.picOne}>
						Netflix Clone
					</a>
					<a
						href='https://chipper-pasca-37df1c.netlify.app'
						className={styles.picTwo}>
						Dice Game
					</a>
				</div>

				<div className={styles.rowTwo}>
					<a
						href='https://rsiesener.github.io/Tic-Tac-Toe-client/'
						className={styles.picThree}>
						Tic-Tac-Toe
					</a>
					<a
						href='https://stupendous-parfait-94b0b8.netlify.app'
						className={styles.picFour}>
						Drum Kit
					</a>
				</div>
			</div>
		</>
	)
}

export default Projects
