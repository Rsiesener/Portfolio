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
					<a href='https://musicflix.github.io/project-frontend/' className={styles.picOne}>Netflix Clone</a>
					<div>Project two</div>
				</div>
				<div className={styles.rowTwo}>
					<div>Project three</div>
					<div>Project four</div>
				</div>
			</div>
		</>
	)
}

export default Projects
