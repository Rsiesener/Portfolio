import React from 'react'
import styles from '../Styles/Home.module.css'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const Home = () => {

  return (
    <>
      <div className={styles.body}>
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default Home
