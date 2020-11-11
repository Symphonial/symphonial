import React from 'react'
import styles from './About.module.css'
import Menu from 'components/Menu'

const About = () => {
    return (
        <div className={styles.container}>
            <Menu/>
            <h1 className={styles.classictitle}>A propos</h1>
        </div>
    )
}

export default About

