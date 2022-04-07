import React from 'react'
import styles from '../Styles/Contact.module.css'
import resume from '../../src/RyanSiesenerResume.docx'

const Contact = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<h1>Contact</h1>
				</div>
				<div>
					<h3>Email: r.siesener@gmail.com</h3>
				</div>
				<div>
					<h3>Cell: (512)940-0227</h3>
				</div>
				<div>
					<p>Resume:<a href={resume} className={styles.resume}> Download PDF</a></p>
				</div>
			</div>
		</>
	)
}

export default Contact
